const yamadaStats =[
    {
      "年度": "2020",
      "チーム名": "DeNA",
      "打率": ".143",
      "試合": "17",
      "打席": "24",
      "打数": "21",
      "安打": "3",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "1",
      "塁打": "7",
      "打点": "1",
      "得点": "3",
      "三振": "8",
      "四球": "2",
      "死球": "1",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "1",
      "出塁率": ".250",
      "長打率": ".333",
      "ＯＰＳ": ".583",
      "得点圏": ".000",
      "失策": "0"
    },
    {
      "年度": "2021",
      "チーム名": "DeNA",
      "打率": ".167",
      "試合": "31",
      "打席": "21",
      "打数": "18",
      "安打": "3",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "3",
      "打点": "1",
      "得点": "1",
      "三振": "7",
      "四球": "3",
      "死球": "0",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "2",
      "出塁率": ".286",
      "長打率": ".167",
      "ＯＰＳ": ".452",
      "得点圏": ".333",
      "失策": "0"
    },
    {
      "年度": "2022",
      "チーム名": "DeNA",
      "打率": ".247",
      "試合": "61",
      "打席": "181",
      "打数": "158",
      "安打": "39",
      "二塁打": "4",
      "三塁打": "0",
      "本塁打": "3",
      "塁打": "52",
      "打点": "8",
      "得点": "21",
      "三振": "43",
      "四球": "10",
      "死球": "6",
      "犠打": "7",
      "犠飛": "0",
      "盗塁": "6",
      "盗塁死": "5",
      "併殺打": "3",
      "出塁率": ".316",
      "長打率": ".329",
      "ＯＰＳ": ".645",
      "得点圏": ".188",
      "失策": "0"
    },
    {
      "年度": "2023",
      "チーム名": "DeNA",
      "打率": ".140",
      "試合": "42",
      "打席": "51",
      "打数": "43",
      "安打": "6",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "7",
      "打点": "0",
      "得点": "6",
      "三振": "12",
      "四球": "1",
      "死球": "4",
      "犠打": "3",
      "犠飛": "0",
      "盗塁": "1",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".229",
      "長打率": ".163",
      "ＯＰＳ": ".392",
      "得点圏": ".000",
      "失策": "1"
    },
    {
      "年度": "2024",
      "チーム名": "DeNA",
      "打率": ".256",
      "試合": "76",
      "打席": "253",
      "打数": "223",
      "安打": "57",
      "二塁打": "13",
      "三塁打": "0",
      "本塁打": "3",
      "塁打": "79",
      "打点": "17",
      "得点": "28",
      "三振": "51",
      "四球": "17",
      "死球": "6",
      "犠打": "6",
      "犠飛": "1",
      "盗塁": "3",
      "盗塁死": "7",
      "併殺打": "1",
      "出塁率": ".324",
      "長打率": ".354",
      "ＯＰＳ": ".678",
      "得点圏": ".191",
      "失策": "0"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".233",
        "試合": "227",
        "打席": "530",
        "打数": "463",
        "安打": "108",
        "二塁打": "19",
        "三塁打": "0",
        "本塁打": "7",
        "塁打": "148",
        "打点": "27",
        "得点": "59",
        "三振": "121",
        "四球": "33",
        "死球": "17",
        "犠打": "16",
        "犠飛": "1",
        "盗塁": "10",
        "盗塁死": "12",
        "併殺打": "7",
        "出塁率": ".307",
        "長打率": ".320",
        "ＯＰＳ": ".627",
        "得点圏": ".170",
        "失策": "1"
      }
  ];
  
  window.yamadaStatsData ={
    '2020': {bbper: 8.3, kper: 33.3, bb_k: 0.25, iso: 0.190, spd: 2.0, babip: 0.167, ubr: 0.5, wsb: "-", wrc: 1.5, wraa: -1.2, woba: 0.264, wrcplus: 48},
    '2021': {bbper: 14.3, kper: 33.3, bb_k: 0.43, iso: 0.000, spd: 0.6, babip: 0.273, ubr: 0.9, wsb: "-", wrc: 0.6, wraa: -1.5, woba: 0.225, wrcplus: 24},
    '2022': {bbper: 5.5, kper: 23.8, bb_k: 0.23, iso: 0.082, spd: 3.7, babip: 0.321, ubr: 4.0, wsb: -0.7, wrc: 15.2, wraa: -2.5, woba: 0.293, wrcplus: 78},
    '2023': {bbper: 2.0, kper: 23.5, bb_k: 0.08, iso: 0.023, spd: 4.1, babip: 0.194, ubr: 1.2, wsb: 0.2, wrc: 1.3, wraa: -3.5, woba: 0.211, wrcplus: 23},
    '2024': {bbper: 6.7, kper: 20.2, bb_k: 0.33, iso: 0.099, spd: 2.8, babip: 0.318, ubr: 2.3, wsb: -1.7, wrc: 25.1, wraa: 3.2, woba: 0.316, wrcplus: 106}
}
;

  
  
  const yamadateamStatsByYear = {
      2022:[
          {team:'巨人',games:3, average:.500, HR:0, RBIs:0, sb:0},
          {team:'DeNA',games:2, average:.000, HR:0, RBIs:0, sb:0},
          {team:'広島',games:2, average:.000, HR:0, RBIs:0, sb:0},
          {team:'中日',games:1, average:.000, HR:0, RBIs:0, sb:0},
          {team:'通算',games:10, average:.100, HR:0, RBIs:0, sb:0},
      ],
      2023: [
      {team:'巨人',games:9, average:.250, HR:0, RBIs:0, sb:0},
      {team:'阪神',games:4, average:.500, HR:1, RBIs:1, sb:0},
      {team:'DeNA',games:7, average:.143, HR:0, RBIs:1, sb:0},
      {team:'広島',games:4, average:.000, HR:0, RBIs:0, sb:0},
      {team:'中日',games:5, average:.000, HR:0, RBIs:1, sb:0},
      {team:'通算',games:29, average:.174, HR:1, RBIs:3, sb:0},
      ],
      2024: [
          {team:'巨人',games:2, average:.000, HR:0, RBIs:0, sb:0},
          {team:'阪神',games:3, average:.000, HR:0, RBIs:0, sb:0},
          {team:'DeNA',games:9, average:.200, HR:1, RBIs:3, sb:2},
          {team:'広島',games:6, average:.625, HR:1, RBIs:3, sb:0},
          {team:'中日',games:7, average:.500, HR:0, RBIs:0, sb:1},
          {team:'ソフトバンク',games:2, average:.000, HR:0, RBIs:0, sb:0},
          {team:'日本ハム',games:1, average:.333, HR:0, RBIs:0, sb:0},
          {team:'ロッテ',games:2, average:.000, HR:0, RBIs:0, sb:0},
          {team:'オリックス',games:3, average:.500, HR:0, RBIs:0, sb:1},
          {team:'楽天',games:1, average:.000, HR:0, RBIs:0, sb:0},
          {team:'通算',games:36, average:.241, HR:2, RBIs:6, sb:4},
      ]
  };
  
  
  const yamada01statsBody = document.getElementById('yamada01-stats-body');
  const yamada01advancedStatsBody = document.getElementById('yamada01-advanced-stats-body');
  let yamada01statsChart;  // グラフのインスタンスを保存する変数
  
  
  function renderStats(stats) {
      yamada01statsBody.innerHTML = ''; // テーブルをクリア
  
    stats.forEach(stat => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
                <td>${stat.年度}</td>
                <td>${stat.チーム名}</td>
                <td>${stat.打率}</td>
                <td>${stat.試合}</td>
                <td>${stat.打席}</td>
                <td>${stat.打数}</td>
                <td>${stat.安打}</td>
                <td>${stat.二塁打}</td>
                <td>${stat.三塁打}</td>
                <td>${stat.本塁打}</td>
                <td>${stat.塁打}</td>
                <td>${stat.打点}</td>
                <td>${stat.得点}</td>
                <td>${stat.三振}</td>
                <td>${stat.四球}</td>
                <td>${stat.死球}</td>
                <td>${stat.犠打}</td>
                <td>${stat.犠飛}</td>
                <td>${stat.盗塁}</td>
                <td>${stat.盗塁死}</td>
                <td>${stat.併殺打}</td>
                <td>${stat.出塁率}</td>
                <td>${stat.長打率}</td>
                <td>${stat.ＯＰＳ}</td>
                <td>${stat.得点圏}</td>
                <td>${stat.失策}</td>
            `;
  
        yamada01statsBody.appendChild(row);
    });
  }
  
  function renderAdvancedStats(statsData) {
    yamada01advancedStatsBody.innerHTML = ''; // テーブルクリア
  
    for (const [year, stats] of Object.entries(statsData)) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${year}</td>
            <td class="clickable" data-stat="kper">${stats.kper}</td>
            <td class="clickable" data-stat="iso">${stats.iso}</td>
            <td class="clickable" data-stat="babip">${stats.babip}</td>
            <td class="clickable" data-stat="wsb">${stats.wsb}</td>
            <td class="clickable" data-stat="wraa">${stats.wraa}</td>
            <td class="clickable" data-stat="wrcplus">${stats.wrcplus}</td>
            <td class="clickable" data-stat="bbper">${stats.bbper}</td>
            <td class="clickable" data-stat="bb_k">${stats.bb_k}</td>
            <td class="clickable" data-stat="spd">${stats.spd}</td>
            <td class="clickable" data-stat="ubr">${stats.ubr}</td>
            <td class="clickable" data-stat="wrc">${stats.wrc}</td>
            <td class="clickable" data-stat="woba">${stats.woba}</td>
        `;
  
        yamada01advancedStatsBody.appendChild(row);
    }
  
    document.querySelectorAll('.clickable').forEach(cell => {
        cell.addEventListener('click', (event) => {
            const statType = event.target.getAttribute('data-stat');
            renderLineChartForStat(statType, yamadaStatsData);
        });
    });
  }
  
  function renderTeamStats(year) {
      const teamStatsBody = document.getElementById('team-stats-body');
      teamStatsBody.innerHTML = ''; // テーブルクリア
  
      // 年度ごとのチーム別成績データを取得
      const teamStats = yamadateamStatsByYear[year] || []; // データが存在しない場合空配列
  
      teamStats.forEach(stat => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${stat.team}</td>
              <td>${stat.games}</td>
              <td>${stat.average.toFixed(3).substring(1)}</td>
              <td>${stat.HR}</td>
              <td>${stat.RBIs}</td>
              <td>${stat.sb}</td>
          `;
          teamStatsBody.appendChild(row);
      });
  
      const buttons = document.querySelectorAll('#team-stats-buttons-container button');
      buttons.forEach(button => {
          if (button.innerText === year) {
              button.classList.add('active');
          } else {
              button.classList.remove('active');
          }
      });
  }
  
  
  
  function createYearButtonsForTeamStats() {
      const buttonsContainer = document.getElementById('team-stats-buttons-container');
      buttonsContainer.innerHTML = '';
  
      Object.keys(yamadateamStatsByYear).forEach(year => {
          const button = document.createElement('button');
          button.innerText = year;
          button.classList.add('team-stats-button');
          button.addEventListener('click', () => renderTeamStats(year));
          buttonsContainer.appendChild(button);
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      createYearButtonsForTeamStats(); // ページロード時にボタンを生成
      renderTeamStats('2022');  // デフォルトで2022年のデータを表示
  });
  
  function renderLineChartForStat(statType, statsData, comparisonData = null) {
      const labels = Object.keys(statsData); // 年度ラベル
      const data = labels.map(year => statsData[year][statType]);
  
      let comparisonTrace = null;
      if (comparisonData) {
          const comparisonDataPoints = labels.map(year => comparisonData[year] ? comparisonData[year][statType] : null);
          comparisonTrace = {
              x: labels,
              y: comparisonDataPoints,
              mode: 'lines+markers',
              name: '比較選手', // 比較選手のラベル
              line: { color: 'rgba(255, 99, 132, 1)' }, // 赤色
              marker: { color: 'rgba(255, 99, 132, 0.7)' }
          };
      }
  
      const playerTrace = {
          x: labels,
          y: data,
          mode: 'lines+markers',
          name: `${statType.toUpperCase()} 山田 哲人`,
          line: { color: 'rgba(144, 238, 144, 1)' }, // 緑色
          marker: { color: 'rgba(144, 238, 144, 0.7)' }
      };
  
      const layout = {
          title: `${statType.toUpperCase()} の変遷`,
          xaxis: { title: '年度' },
          yaxis: { title: `${statType.toUpperCase()}` },
          margin: { t: 50, r: 30, b: 50, l: 50 },
      };
  
      const traces = comparisonTrace ? [playerTrace, comparisonTrace] : [playerTrace];
  
      Plotly.newPlot('yamada01statsChart', traces, layout); // グラフ描画
  }
  
  
  
  
  
  
  function createYearButtons(statsData) {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = ''; // ボタンクリア
    Object.keys(statsData).forEach(year => {
        const button = document.createElement('button');
        button.innerText = year;
        button.addEventListener('click', () => renderChartForYear(year, statsData));
        buttonsContainer.appendChild(button);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      const tooltipPopup = document.getElementById('tooltip-popup');
      const popupTitle = document.getElementById('popup-title');
      const popupContent = document.getElementById('popup-content');
      const popupClose = document.getElementById('popup-close');
  
      //th要素にクリックイベント
      document.querySelectorAll('[data-tooltip]').forEach(th => {
          th.addEventListener('click', () => {
              popupTitle.textContent = th.textContent;
              popupContent.textContent = th.getAttribute('data-tooltip');
              tooltipPopup.style.display = 'block';
          });
      });
  
      // ポップアップ閉じる
      popupClose.addEventListener('click', () => {
          tooltipPopup.style.display = 'none';
      });
  
      // 領域外クリックしたら閉じる
      window.addEventListener('click', (event) => {
          if (event.target === tooltipPopup) {
              tooltipPopup.style.display = 'none';
          }
      });
  
      renderStats(yamadaStats);
      renderAdvancedStats(yamadaStatsData);
      createYearButtons(yamadaStatsData);
      renderChartForYear('2012', yamadaStatsData);
  });
  
  
  
  function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
  
      // すべてのタブコンテンツを非表示に
      tabcontent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
  
      // タブリンクの "active" クラスを削除
      tablinks = document.getElementsByClassName("tab-link");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      // 指定タブを表示、ボタンを "active" クラスに設定
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
  }
  
  // デフォルトで最初のタブを表示
  document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.tab-link').click();
  });
  
  
  // 現在の選手の指標を保存
  let currentStat = 'kper'; // 初期状態では "kper" などの指標
  
  // 指標をクリックした時に、グラフを更新するロジック
  document.querySelectorAll('.clickable').forEach(cell => {
      cell.addEventListener('click', (event) => {
          const statType = event.target.getAttribute('data-stat');
          currentStat = statType; // 選択された指標を保存
          renderLineChartForStat(statType, yamadaStatsData);
      });
  });
  
  