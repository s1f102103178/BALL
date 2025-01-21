import requests
from bs4 import BeautifulSoup
import json

url = "https://baseball.yahoo.co.jp/npb/player/1900032/year"

#ページ取得
response = requests.get(url)
response.encoding = response.apparent_encoding  # 文字エンコーディング設定
soup = BeautifulSoup(response.text, "html.parser")

# テーブル取得
table = soup.find("table", {"id": "year_b"})
if not table:
    raise ValueError("指定されたidのテーブルが見つかりませんでした。")

# ヘッダー行特定
header_row = table.find("thead").find("tr")  # <thead> 内の最初の <tr>
headers = [th.text.strip() for th in header_row.find_all("th")]

# データ行を取得（<tbody> 内のすべての <tr>）
data_rows = table.find("tbody").find_all("tr")

# 成績データを格納するリスト
player_stats = []

# データ行を解析
for row in data_rows:
    cols = row.find_all("td")
    if len(cols) != len(headers):
        continue  # 列数が一致しない行はスキップ

    # 各列のデータを辞書に格納
    stats = {headers[i]: cols[i].text.strip() for i in range(len(headers))}
    player_stats.append(stats)

# JSON形式で保存
output_file = "シーズン成績(野手).json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(player_stats, f, ensure_ascii=False, indent=2)

print(f"データが保存されました: {output_file}")
