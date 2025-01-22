const yamadaStats =[
    {
      "年度": "2018",
      "チーム名": "楽天",
      "打率": ".247",
      "試合": "25",
      "打席": "82",
      "打数": "77",
      "安打": "19",
      "二塁打": "3",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "22",
      "打点": "3",
      "得点": "4",
      "三振": "18",
      "四球": "3",
      "死球": "0",
      "犠打": "2",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "1",
      "出塁率": ".275",
      "長打率": ".286",
      "ＯＰＳ": ".561",
      "得点圏": ".154",
      "失策": "4"
    },
    {
      "年度": "2019",
      "チーム名": "楽天",
      "打率": ".000",
      "試合": "2",
      "打席": "1",
      "打数": "1",
      "安打": "0",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "0",
      "打点": "0",
      "得点": "0",
      "三振": "1",
      "四球": "0",
      "死球": "0",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".000",
      "長打率": ".000",
      "ＯＰＳ": ".000",
      "得点圏": "-",
      "失策": "0"
    },
    {
      "年度": "2020",
      "チーム名": "ロッテ",
      "打率": ".250",
      "試合": "11",
      "打席": "19",
      "打数": "16",
      "安打": "4",
      "二塁打": "1",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "5",
      "打点": "0",
      "得点": "2",
      "三振": "6",
      "四球": "2",
      "死球": "0",
      "犠打": "1",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "1",
      "併殺打": "0",
      "出塁率": ".333",
      "長打率": ".313",
      "ＯＰＳ": ".646",
      "得点圏": ".000",
      "失策": "2"
    },
    {
      "年度": "2022",
      "チーム名": "ロッテ",
      "打率": "-",
      "試合": "2",
      "打席": "1",
      "打数": "0",
      "安打": "0",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "0",
      "打点": "0",
      "得点": "0",
      "三振": "0",
      "四球": "1",
      "死球": "0",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": "1.000",
      "長打率": "-",
      "ＯＰＳ": "-",
      "得点圏": "-",
      "失策": "0"
    },
    {
      "年度": "2023",
      "チーム名": "DeNA",
      "打率": ".000",
      "試合": "7",
      "打席": "4",
      "打数": "3",
      "安打": "0",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "0",
      "打点": "0",
      "得点": "1",
      "三振": "2",
      "四球": "0",
      "死球": "0",
      "犠打": "1",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".000",
      "長打率": ".000",
      "ＯＰＳ": ".000",
      "得点圏": "-",
      "失策": "0"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".237",
        "試合": "47",
        "打席": "107",
        "打数": "97",
        "安打": "23",
        "二塁打": "4",
        "三塁打": "0",
        "本塁打": "0",
        "塁打": "27",
        "打点": "3",
        "得点": "7",
        "三振": "27",
        "四球": "6",
        "死球": "0",
        "犠打": "4",
        "犠飛": "0",
        "盗塁": "0",
        "盗塁死": "1",
        "併殺打": "1",
        "出塁率": ".282",
        "長打率": ".278",
        "ＯＰＳ": ".560",
        "得点圏": ".133",
        "失策": "6"
      }
  ];
  
  window.yamadaStatsData = {
    '2018': {bbper: 3.7, kper: 22.0, bb_k: 0.17, iso: 0.039, spd: 0.7, babip: 0.322, ubr: 0.3, wsb: "-", wrc: 4.1, wraa: -5.0, woba: 0.250, wrcplus: 43},
    '2019': {bbper: 0.0, kper: 100.0, bb_k: 0.00, iso: 0.000, spd: 0.1, babip: 0.000, ubr: "-", wsb: "-", wrc: -0.1, wraa: -0.3, woba: 0.000, wrcplus: -130},
    '2020': {bbper: 10.5, kper: 31.6, bb_k: 0.33, iso: 0.063, spd: 3.1, babip: 0.400, ubr: 1.2, wsb: -0.4, wrc: 1.7, wraa: -0.4, woba: 0.294, wrcplus: 82},
    '2022': {bbper: 100.0, kper: 0.0, bb_k: "-", iso: 0.000, spd: 0.1, babip: "-", ubr: 0.0, wsb: "-", wrc: 0.4, wraa: 0.3, woba: 0.685, wrcplus: 406},
    '2023': {bbper: 0.0, kper: 50.0, bb_k: 0.00, iso: 0.000, spd: 2.6, babip: 0.000, ubr: 0.4, wsb: "-", wrc: -0.5, wraa: -0.9, woba: 0.000, wrcplus: -132}
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
  
  