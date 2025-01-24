const yamadaStats = [
    {
      "年度": "2024",
      "チーム名": "オリックス",
      "打率": ".100",
      "試合": "7",
      "打席": "21",
      "打数": "20",
      "安打": "2",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "3",
      "打点": "0",
      "得点": "0",
      "三振": "9",
      "四球": "0",
      "死球": "1",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".143",
      "長打率": ".150",
      "ＯＰＳ": ".293",
      "得点圏": ".000",
      "失策": "0"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".100",
        "試合": "7",
        "打席": "21",
        "打数": "20",
        "安打": "2",
        "二塁打": "1",
        "三塁打": "0",
        "本塁打": "0",
        "塁打": "3",
        "打点": "0",
        "得点": "0",
        "三振": "9",
        "四球": "0",
        "死球": "1",
        "犠打": "0",
        "犠飛": "0",
        "盗塁": "0",
        "盗塁死": "0",
        "併殺打": "0",
        "出塁率": ".143",
        "長打率": ".150",
        "ＯＰＳ": ".293",
        "得点圏": ".000",
        "失策": "0"
      }
  ];
  
  window.yamadaStatsData = {
    '2023': {bbper:0.0,kper:21.7,bb_k:0.00,iso:.143,spd:2.6,babip:.176,ubr:0.4,wsb:"-",wrc:1.9,wraa:-0.2,woba:.292,wrcplus:75},
  };
  
  
  const yamadateamStatsByYear = {
     2018:[
        {team:'阪神',games:6, average:.125, HR:0, RBIs:0, sb:0},
        {team:'広島',games:4, average:.000, HR:0, RBIs:0, sb:0},
        {team:'DeNA',games:6, average:.000, HR:0, RBIs:0, sb:0},
        {team:'通算',games:16, average:.040, HR:0, RBIs:0, sb:0},
     ],
     2019:[
        {team:'巨人',games:11, average:.286,HR:0, RBIs:0, sb:0},
        {team:'阪神',games:9, average:.316, HR:1, RBIs:6, sb:1},
        {team:'DeNA',games:5, average:.286,HR:0, RBIs:1, sb:0},
        {team:'広島',games:9, average:.000,HR:0, RBIs:0, sb:1},
        {team:'中日',games:4, average:.154,HR:0, RBIs:0, sb:2},
        {team:'日本ハム',games:3, average:.000, HR:0, RBIs:0, sb:0},
        {team:'オリックス',games:1, average:.000, HR:0, RBIs:0, sb:0},
        {team:'楽天',games:1, average:.000, HR:0, RBIs:0, sb:0},
        {team:'西武',games:2, average:.000, HR:0, RBIs:0, sb:0},
        {team:'通算',games:45,average:.182,HR:1,RBIs:7,sb:4}
     ],
     2020:[
        {team:'巨人',games:9,average:.258,HR:1,RBIs:2,sb:3},
{team:'阪神',games:10,average:.206,HR:2,RBIs:6,sb:0},
{team:'DeNA',games:3,average:.400,HR:1,RBIs:2,sb:0},
{team:'広島',games:10,average:.314,HR:0,RBIs:2,sb:9},
{team:'中日',games:11,average:.295,HR:4,RBIs:9,sb:1},
{team:'通算',games:43,average:.279,HR:8,RBIs:21,sb:13},
     ],
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
  
  