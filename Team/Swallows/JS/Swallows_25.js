const yamadaStats = [
    {
      "年度": "2021",
      "チーム名": "ヤクルト",
      "打率": ".290",
      "試合": "116",
      "打席": "418",
      "打数": "372",
      "安打": "108",
      "二塁打": "23",
      "三塁打": "1",
      "本塁打": "19",
      "塁打": "190",
      "打点": "62",
      "得点": "39",
      "三振": "103",
      "四球": "42",
      "死球": "3",
      "犠打": "0",
      "犠飛": "1",
      "盗塁": "2",
      "盗塁死": "0",
      "併殺打": "12",
      "出塁率": ".366",
      "長打率": ".511",
      "ＯＰＳ": ".877",
      "得点圏": ".315",
      "失策": "2"
    },
    {
      "年度": "2022",
      "チーム名": "ヤクルト",
      "打率": ".275",
      "試合": "60",
      "打席": "215",
      "打数": "189",
      "安打": "52",
      "二塁打": "7",
      "三塁打": "0",
      "本塁打": "15",
      "塁打": "104",
      "打点": "35",
      "得点": "26",
      "三振": "73",
      "四球": "23",
      "死球": "1",
      "犠打": "0",
      "犠飛": "2",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "6",
      "出塁率": ".353",
      "長打率": ".550",
      "ＯＰＳ": ".904",
      "得点圏": ".200",
      "失策": "2"
    },
    {
      "年度": "2023",
      "チーム名": "ヤクルト",
      "打率": ".300",
      "試合": "136",
      "打席": "516",
      "打数": "467",
      "安打": "140",
      "二塁打": "32",
      "三塁打": "0",
      "本塁打": "18",
      "塁打": "226",
      "打点": "66",
      "得点": "52",
      "三振": "114",
      "四球": "44",
      "死球": "2",
      "犠打": "0",
      "犠飛": "3",
      "盗塁": "2",
      "盗塁死": "0",
      "併殺打": "17",
      "出塁率": ".360",
      "長打率": ".484",
      "ＯＰＳ": ".844",
      "得点圏": ".273",
      "失策": "2"
    },
    {
      "年度": "2024",
      "チーム名": "ヤクルト",
      "打率": ".315",
      "試合": "122",
      "打席": "484",
      "打数": "419",
      "安打": "132",
      "二塁打": "29",
      "三塁打": "0",
      "本塁打": "17",
      "塁打": "212",
      "打点": "70",
      "得点": "57",
      "三振": "101",
      "四球": "57",
      "死球": "4",
      "犠打": "0",
      "犠飛": "4",
      "盗塁": "2",
      "盗塁死": "1",
      "併殺打": "8",
      "出塁率": ".399",
      "長打率": ".506",
      "ＯＰＳ": ".905",
      "得点圏": ".324",
      "失策": "4"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".299",
        "試合": "434",
        "打席": "1633",
        "打数": "1447",
        "安打": "432",
        "二塁打": "91",
        "三塁打": "1",
        "本塁打": "69",
        "塁打": "732",
        "打点": "233",
        "得点": "174",
        "三振": "391",
        "四球": "166",
        "死球": "10",
        "犠打": "0",
        "犠飛": "10",
        "盗塁": "6",
        "盗塁死": "1",
        "併殺打": "43",
        "出塁率": ".372",
        "長打率": ".506",
        "ＯＰＳ": ".878",
        "得点圏": ".285",
        "失策": "10"
      }
  ];
  
  window.yamadaStatsData = {
    '2021': {bbper:10.0,kper:24.6,bb_k:0.41,iso:.220,spd:2.1,babip:.355,ubr:-5.7,wsb:0.3,wrc:65.7,wraa:23.0,woba:.387,wrcplus:140},
    '2022': {bbper:10.7,kper:34.0,bb_k:0.32,iso:.275,spd:0.6,babip:.359,ubr:-0.2,wsb:"-",wrc:35.8,wraa:14.8,woba:.400,wrcplus:153},
    '2023': {bbper:8.5,kper:22.1,bb_k:0.39,iso:.184,spd:1.9,babip:.361,ubr:-5.2,wsb:0.3,wrc:77.5,wraa:28.9,woba:.382,wrcplus:143},
    '2024': {bbper:11.8,kper:20.9,bb_k:0.56,iso:.191,spd:1.8,babip:.377,ubr:-4.3,wsb:0.0,wrc:80.4,wraa:38.5,woba:.410,wrcplus:171},
  };
  
  
  const yamadateamStatsByYear = {
      2021:[
        {team:'巨人',games:25,average:.286,HR:3,RBIs:13,sb:4},
        {team:'阪神',games:22,average:.286,HR:1,RBIs:9,sb:0},
        {team:'DeNA',games:25,average:.272,HR:3,RBIs:16,sb:5},
        {team:'広島',games:25,average:.238,HR:2,RBIs:9,sb:4},
        {team:'中日',games:25,average:.288,HR:1,RBIs:5,sb:3},
        {team:'ソフトバンク',games:3,average:.077,HR:0,RBIs:0,sb:0},
        {team:'日本ハム',games:3,average:.677, HR:2,RBIs:2,sb:1},
        {team:'ロッテ',games:3,average:.167, HR:1,RBIs:1,sb:1},
        {team:'西武',games:3,average:.308, HR:0,RBIs:1,sb:1},
        {team:'オリックス',games:3,average:.357,HR:0,RBIs:2,sb:1},
        {team:'楽天',games:3,average:.273,HR:1,RBIs:1,sb:1},
        {team:'通算',games:140,average:.278,HR:14,RBIs:59,sb:21}
      ],

      2022:[
        {team:'巨人',games:21,average:.302,HR:4,RBIs:7,sb:2},
        {team:'阪神',games:22,average:.210,HR:1,RBIs:6,sb:3},
        {team:'DeNA',games:23,average:.259,HR:3,RBIs:11,sb:3},
        {team:'広島',games:23,average:.344,HR:3,RBIs:16,sb:8},
        {team:'中日',games:23,average:.231,HR:0,RBIs:3,sb:2},
        {team:'ソフトバンク',games:3,average:.333,HR:1,RBIs:2,sb:0},
        {team:'日本ハム',games:3,average:.188, HR:0,RBIs:2,sb:0},
        {team:'ロッテ',games:3,average:.333, HR:0,RBIs:0,sb:3},
        {team:'西武',games:3,average:.300, HR:0,RBIs:0,sb:1},
        {team:'オリックス',games:3,average:.385,HR:1,RBIs:1,sb:1},
        {team:'楽天',games:3,average:.333,HR:3,RBIs:5,sb:1},
        {team:'通算',games:130,average:.276,HR:16,RBIs:54,sb:24}
          
      ],
      2023: [
        {team:'巨人',games:10,average:.263,HR:3,RBIs:7,sb:0},
        {team:'阪神',games:12,average:.213,HR:2,RBIs:6,sb:0},
        {team:'DeNA',games:14,average:.327,HR:2,RBIs:4,sb:1},
        {team:'広島',games:8,average:.393,HR:0,RBIs:7,sb:0},
        {team:'中日',games:7,average:.375,HR:1,RBIs:7,sb:0},
        {team:'通算',games:51,average:.301,HR:8,RBIs:31,sb:1}            
      ],
      2024: [
        {team:'巨人',games:5,average:.357,HR:0,RBIs:0,sb:0},
        {team:'阪神',games:5,average:.250,HR:1,RBIs:1,sb:1},
        {team:'DeNA',games:8,average:.214,HR:0,RBIs:3,sb:0},
        {team:'広島',games:4,average:.250,HR:0,RBIs:1,sb:1},
        {team:'中日',games:9,average:.290,HR:2,RBIs:3,sb:1},
        {team:'通算',games:31,average:.267,HR:3,RBIs:8,sb:3}
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
  
  