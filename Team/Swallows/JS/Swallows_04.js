const yamadaStats =
[
    {
      "年度": "2022",
      "チーム名": "ヤクルト",
      "打率": ".233",
      "試合": "71",
      "打席": "97",
      "打数": "90",
      "安打": "21",
      "二塁打": "4",
      "三塁打": "0",
      "本塁打": "1",
      "塁打": "28",
      "打点": "9",
      "得点": "14",
      "三振": "25",
      "四球": "1",
      "死球": "2",
      "犠打": "4",
      "犠飛": "0",
      "盗塁": "2",
      "盗塁死": "3",
      "併殺打": "2",
      "出塁率": ".258",
      "長打率": ".311",
      "ＯＰＳ": ".569",
      "得点圏": ".286",
      "失策": "0"
    },
    {
      "年度": "2023",
      "チーム名": "ヤクルト",
      "打率": ".206",
      "試合": "67",
      "打席": "106",
      "打数": "97",
      "安打": "20",
      "二塁打": "5",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "25",
      "打点": "7",
      "得点": "13",
      "三振": "27",
      "四球": "6",
      "死球": "0",
      "犠打": "3",
      "犠飛": "0",
      "盗塁": "7",
      "盗塁死": "3",
      "併殺打": "1",
      "出塁率": ".252",
      "長打率": ".258",
      "ＯＰＳ": ".510",
      "得点圏": ".200",
      "失策": "1"
    },
    {
      "年度": "2024",
      "チーム名": "ヤクルト",
      "打率": ".241",
      "試合": "96",
      "打席": "296",
      "打数": "253",
      "安打": "61",
      "二塁打": "7",
      "三塁打": "1",
      "本塁打": "0",
      "塁打": "70",
      "打点": "12",
      "得点": "30",
      "三振": "49",
      "四球": "24",
      "死球": "2",
      "犠打": "17",
      "犠飛": "0",
      "盗塁": "4",
      "盗塁死": "2",
      "併殺打": "2",
      "出塁率": ".312",
      "長打率": ".277",
      "ＯＰＳ": ".589",
      "得点圏": ".264",
      "失策": "3"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".232",
        "試合": "234",
        "打席": "499",
        "打数": "440",
        "安打": "102",
        "二塁打": "16",
        "三塁打": "1",
        "本塁打": "1",
        "塁打": "123",
        "打点": "28",
        "得点": "57",
        "三振": "101",
        "四球": "31",
        "死球": "4",
        "犠打": "24",
        "犠飛": "0",
        "盗塁": "13",
        "盗塁死": "8",
        "併殺打": "5",
        "出塁率": ".288",
        "長打率": ".280",
        "ＯＰＳ": ".568",
        "得点圏": ".250",
        "失策": "4"
      }
  ];
  
  window.yamadaStatsData = {
    '2022': {kper:25.8, iso:.078, babip:.313, wsb:-0.7, wraa:-3.5, wrcplus: 53, bbper:1.0, bb_k:0.04, spd:4.4, ubr:0.9, wrc:5.9, woba:.264},
    '2023': {kper:25.5, iso:.052, babip:.286, wsb:0.2, wraa:-5.2, wrcplus: 39, bbper:5.7, bb_k: 0.22, spd: 5.9, ubr:-1.2, wrc:4.8, woba:.240},
    '2024': {kper:16.6, iso:.036, babip:.299, wsb:0.0, wraa:-2.9, wrcplus: 74, bbper: 8.1, bb_k: 0.49, spd: 3.8, ubr:2.3, wrc:22.7, woba:.285}
  };
  
  
  const yamadateamStatsByYear = {
      2022:[
          {team:'巨人',games:10, average:.500, HR:0, RBIs:3, sb:0},
          {team:'阪神',games:12, average:.111, HR:0, RBIs:1, sb:1},
          {team:'DeNA',games:15, average:.190, HR:1, RBIs:2, sb:0},
          {team:'広島',games:14, average:.208, HR:0, RBIs:3, sb:0},
          {team:'中日',games:11, average:.333, HR:0, RBIs:0, sb:1},
          {team:'ソフトバンク',games:3, average:1.000, HR:0, RBIs:0, sb:0},
          {team:'ロッテ',games:1, average:.000, HR:0, RBIs:0, sb:0},
          {team:'オリックス',games:3, average:.250, HR:0, RBIs:0, sb:0},
          {team:'西武',games:2, average:.200, HR:0, RBIs:0, sb:0},
          {team:'通算',games:71, average:.233, HR:1, RBIs:9, sb:2},
          
      ],
      2023: [
      {team:'巨人',games:14, average:.053, HR:0, RBIs:0, sb:1},
      {team:'阪神',games:12, average:.240, HR:0, RBIs:2, sb:1},
      {team:'DeNA',games:10, average:.000, HR:0, RBIs:0, sb:1},
      {team:'広島',games:15, average:.389, HR:0, RBIs:3, sb:0},
      {team:'中日',games:16, average:.188, HR:0, RBIs:2, sb:4},
      {team:'通算',games:67, average:.206, HR:0, RBIs:7, sb:7},
      ],
      2024: [
          {team:'巨人',games:13, average:.341, HR:0, RBIs:0, sb:1},
          {team:'阪神',games:17, average:.267, HR:0, RBIs:2, sb:1},
          {team:'DeNA',games:18, average:.263, HR:0, RBIs:3, sb:1},
          {team:'広島',games:18, average:.135, HR:0, RBIs:2, sb:0},
          {team:'中日',games:15, average:.258, HR:0, RBIs:2, sb:0},
          {team:'ソフトバンク',games:3, average:.333, HR:0, RBIs:1, sb:0},
          {team:'日本ハム',games:3, average:.222, HR:0, RBIs:0, sb:0},
          {team:'ロッテ',games:1, average:.000, HR:0, RBIs:0, sb:0},
          {team:'オリックス',games:2, average:.167, HR:0, RBIs:1, sb:0},
          {team:'楽天',games:3, average:.125, HR:0, RBIs:0, sb:0},
          {team:'通算',games:96, average:.241, HR:0, RBIs:12, sb:4},
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
  
  