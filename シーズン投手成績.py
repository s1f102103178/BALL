import requests
from bs4 import BeautifulSoup
import json

# URL
url = "https://baseball.yahoo.co.jp/npb/player/1900032/year"

# ページを取得
response = requests.get(url)
response.encoding = response.apparent_encoding  # 文字エンコーディングを設定
soup = BeautifulSoup(response.text, "html.parser")

# 投手成績のテーブルを取得
table = soup.find("table", {"id": "year_p"})  # 投手成績のテーブル
if not table:
    raise ValueError("投手成績のテーブルが見つかりませんでした。")

# ヘッダー行を取得
header_row = table.find("thead").find("tr")
headers = [th.text.strip() for th in header_row.find_all("th")]

# データ行を取得
data_rows = table.find("tbody").find_all("tr")
pitcher_stats = []

for row in data_rows:
    cols = row.find_all("td")
    if len(cols) != len(headers):  # 列数が一致しない場合スキップ
        continue
    stats = {headers[i]: cols[i].text.strip() for i in range(len(headers))}
    pitcher_stats.append(stats)

# JSON形式で保存
output_file = "シーズン投手成績.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(pitcher_stats, f, ensure_ascii=False, indent=2)

print(f"データが保存されました: {output_file}")
