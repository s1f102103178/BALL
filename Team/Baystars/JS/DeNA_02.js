const yamadaStats =[
    {
      "年度": "2021",
      "チーム名": "DeNA",
      "打率": ".314",
      "試合": "137",
      "打席": "523",
      "打数": "487",
      "安打": "153",
      "二塁打": "35",
      "三塁打": "3",
      "本塁打": "22",
      "塁打": "260",
      "打点": "71",
      "得点": "73",
      "三振": "85",
      "四球": "27",
      "死球": "6",
      "犠打": "1",
      "犠飛": "2",
      "盗塁": "2",
      "盗塁死": "1",
      "併殺打": "16",
      "出塁率": ".356",
      "長打率": ".534",
      "ＯＰＳ": ".890",
      "得点圏": ".304",
      "失策": "8"
    },
    {
      "年度": "2022",
      "チーム名": "DeNA",
      "打率": ".291",
      "試合": "135",
      "打席": "568",
      "打数": "509",
      "安打": "148",
      "二塁打": "36",
      "三塁打": "1",
      "本塁打": "24",
      "塁打": "258",
      "打点": "87",
      "得点": "63",
      "三振": "82",
      "四球": "43",
      "死球": "10",
      "犠打": "0",
      "犠飛": "6",
      "盗塁": "3",
      "盗塁死": "3",
      "併殺打": "14",
      "出塁率": ".354",
      "長打率": ".507",
      "ＯＰＳ": ".861",
      "得点圏": ".331",
      "失策": "13"
    },
    {
      "年度": "2023",
      "チーム名": "DeNA",
      "打率": ".293",
      "試合": "143",
      "打席": "605",
      "打数": "559",
      "安打": "164",
      "二塁打": "39",
      "三塁打": "3",
      "本塁打": "29",
      "塁打": "296",
      "打点": "103",
      "得点": "78",
      "三振": "85",
      "四球": "33",
      "死球": "7",
      "犠打": "0",
      "犠飛": "6",
      "盗塁": "2",
      "盗塁死": "2",
      "併殺打": "17",
      "出塁率": ".337",
      "長打率": ".530",
      "ＯＰＳ": ".867",
      "得点圏": ".354",
      "失策": "9"
    },
    {
      "年度": "2024",
      "チーム名": "DeNA",
      "打率": ".294",
      "試合": "133",
      "打席": "561",
      "打数": "517",
      "安打": "152",
      "二塁打": "33",
      "三塁打": "0",
      "本塁打": "23",
      "塁打": "254",
      "打点": "74",
      "得点": "76",
      "三振": "59",
      "四球": "37",
      "死球": "5",
      "犠打": "0",
      "犠飛": "2",
      "盗塁": "11",
      "盗塁死": "0",
      "併殺打": "13",
      "出塁率": ".346",
      "長打率": ".491",
      "ＯＰＳ": ".837",
      "得点圏": ".248",
      "失策": "18"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".298",
        "試合": "548",
        "打席": "2257",
        "打数": "2072",
        "安打": "617",
        "二塁打": "143",
        "三塁打": "7",
        "本塁打": "98",
        "塁打": "1068",
        "打点": "335",
        "得点": "290",
        "三振": "311",
        "四球": "140",
        "死球": "28",
        "犠打": "1",
        "犠飛": "16",
        "盗塁": "18",
        "盗塁死": "6",
        "併殺打": "60",
        "出塁率": ".348",
        "長打率": ".515",
        "ＯＰＳ": ".863",
        "得点圏": ".309",
        "失策": "48"
      }
  ];
  
  window.yamadaStatsData = {
    '2021': {bbper:5.2,kper:16.3,bb_k:0.32,iso:.220,spd:3.4,babip:.343,ubr:2.0,wsb:0.0,wrc:85.7,wraa:32.2,woba:.395,wrcplus:147},
    '2022': {bbper:7.6,kper:14.4,bb_k:0.52,iso:.216,spd:2.1,babip:.303,ubr:0.1,wsb:-0.5,wrc:86.3,wraa:31.1,woba:.382,wrcplus:144},
    '2023': {bbper:5.5,kper:14.0,bb_k:0.39,iso:.236,spd:2.9,babip:.299,ubr:2.3,wsb:-0.3,wrc:91.6,wraa:34.6,woba:.384,wrcplus:150},
    '2024': {bbper:6.6,kper:10.5,bb_k:0.63,iso:.197,spd:4.2,babip:.295,ubr:-1.2,wsb:1.9,wrc:82.3,wraa:33.7,woba:.383,wrcplus:158},
  };

  
  
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
  
  