import requests
from bs4 import BeautifulSoup
import json

# Yahoo!プロ野球の選手年度別成績ページのURL
url = "https://baseball.yahoo.co.jp/npb/player/1900032/year"

# ページを取得
response = requests.get(url)
response.encoding = response.apparent_encoding  # エンコーディングを設定
soup = BeautifulSoup(response.text, "html.parser")

# テーブルを取得
table = soup.find("table", {"id": "year_b"})
if not table:
    raise ValueError("指定されたテーブルが見つかりませんでした。")

# ヘッダー行を特定
header_row = table.find("thead").find("tr")  # <thead> 内の最初の <tr>
headers = [th.text.strip() for th in header_row.find_all("th")]

# ヘッダーに「チーム名」を強制的に挿入（2番目の列）
if "チーム名" not in headers:
    headers.insert(1, "チーム名")  # 「年度」の次に「チーム名」を挿入

# 通算成績を取得
tfoot = table.find("tfoot")
if not tfoot:
    raise ValueError("通算成績が見つかりませんでした。")

cumulative_row = tfoot.find("tr")
columns = cumulative_row.find_all("th")

# 通算成績を辞書形式に変換
cumulative_stats = {}
column_index = 0

for header in headers:
    # 「チーム名」を強制的に空に設定
    if header == "チーム名":
        cumulative_stats[header] = " "
    else:
        # データが存在する場合は値を取得、なければ空白を設定
        value = columns[column_index].text.strip() if column_index < len(columns) else " "
        cumulative_stats[header] = value
        column_index += 1

# JSON形式で保存
output_file = "通算成績(野手).json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(cumulative_stats, f, ensure_ascii=False, indent=2)

print(f"通算成績が保存されました: {output_file}")
