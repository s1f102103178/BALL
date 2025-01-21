const yamadaStats =[
    {
      "年度": "2021",
      "チーム名": "ヤクルト",
      "打率": ".250",
      "試合": "27",
      "打席": "6",
      "打数": "4",
      "安打": "1",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "2",
      "打点": "2",
      "得点": "4",
      "三振": "1",
      "四球": "0",
      "死球": "1",
      "犠打": "1",
      "犠飛": "0",
      "盗塁": "4",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".400",
      "長打率": ".500",
      "ＯＰＳ": ".900",
      "得点圏": "1.000",
      "失策": "0"
    },
    {
      "年度": "2022",
      "チーム名": "ヤクルト",
      "打率": ".182",
      "試合": "14",
      "打席": "23",
      "打数": "22",
      "安打": "4",
      "二塁打": "0",
      "三塁打": "2",
      "本塁打": "0",
      "塁打": "8",
      "打点": "0",
      "得点": "3",
      "三振": "3",
      "四球": "0",
      "死球": "0",
      "犠打": "1",
      "犠飛": "0",
      "盗塁": "2",
      "盗塁死": "0",
      "併殺打": "1",
      "出塁率": ".182",
      "長打率": ".364",
      "ＯＰＳ": ".545",
      "得点圏": ".000",
      "失策": "0"
    },
    {
      "年度": "2023",
      "チーム名": "ヤクルト",
      "打率": ".242",
      "試合": "82",
      "打席": "174",
      "打数": "161",
      "安打": "39",
      "二塁打": "3",
      "三塁打": "1",
      "本塁打": "1",
      "塁打": "47",
      "打点": "7",
      "得点": "37",
      "三振": "33",
      "四球": "8",
      "死球": "1",
      "犠打": "4",
      "犠飛": "0",
      "盗塁": "15",
      "盗塁死": "2",
      "併殺打": "2",
      "出塁率": ".282",
      "長打率": ".292",
      "ＯＰＳ": ".574",
      "得点圏": ".179",
      "失策": "2"
    },
    {
      "年度": "2024",
      "チーム名": "ヤクルト",
      "打率": ".233",
      "試合": "33",
      "打席": "49",
      "打数": "43",
      "安打": "10",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "1",
      "塁打": "14",
      "打点": "5",
      "得点": "15",
      "三振": "7",
      "四球": "1",
      "死球": "0",
      "犠打": "5",
      "犠飛": "0",
      "盗塁": "10",
      "盗塁死": "0",
      "併殺打": "4",
      "出塁率": ".250",
      "長打率": ".326",
      "ＯＰＳ": ".576",
      "得点圏": ".273",
      "失策": "1"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".235",
        "試合": "156",
        "打席": "252",
        "打数": "230",
        "安打": "54",
        "二塁打": "5",
        "三塁打": "3",
        "本塁打": "2",
        "塁打": "71",
        "打点": "14",
        "得点": "59",
        "三振": "44",
        "四球": "9",
        "死球": "2",
        "犠打": "11",
        "犠飛": "0",
        "盗塁": "31",
        "盗塁死": "2",
        "併殺打": "7",
        "出塁率": ".270",
        "長打率": ".309",
        "ＯＰＳ": ".578",
        "得点圏": ".214",
        "失策": "3"
      }
  ];
  
  window.yamadaStatsData = {
    '2021': {kper:16.7, iso:.250, babip:.333, wsb:0.7, wraa:-1.5, wrcplus:151, bbper:0.0, bb_k:0.00, spd:6.2, ubr: 0.6, wrc:1.0, woba:.401},
    '2022': {kper:13.0, iso:.182, babip:.211, wsb:0.3, wraa:-1.5, wrcplus:37, bbper:0.0, bb_k:0.00, spd:8.3, ubr: -0.2, wrc:0.9, woba:.236},
    '2023': {kper:19.0, iso:.050, babip:.299, wsb:1.9, wraa:-0.6, wrcplus:59, bbper:4.6, bb_k: 0.24, spd:7.5, ubr:4.0, wrc:11.6, woba:.268},
    '2024': {kper:14.3, iso:.093, babip:.257, wsb:1.7, wraa:0.0, wrcplus: 85, bbper:2.0, bb_k: 0.14, spd:6.8, ubr: 1.9, wrc:4.3, woba:.300}
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
  
  