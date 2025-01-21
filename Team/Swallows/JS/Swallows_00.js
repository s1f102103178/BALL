const yamadaStats = [
    {
      "年度": "2022",
      "チーム名": "ヤクルト",
      "打率": ".100",
      "試合": "10",
      "打席": "12",
      "打数": "10",
      "安打": "1",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "1",
      "打点": "0",
      "得点": "1",
      "三振": "5",
      "四球": "0",
      "死球": "1",
      "犠打": "1",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".182",
      "長打率": ".100",
      "ＯＰＳ": ".282",
      "得点圏": ".000",
      "失策": "0"
    },
    {
      "年度": "2023",
      "チーム名": "ヤクルト",
      "打率": ".174",
      "試合": "29",
      "打席": "27",
      "打数": "23",
      "安打": "4",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "1",
      "塁打": "7",
      "打点": "3",
      "得点": "5",
      "三振": "12",
      "四球": "1",
      "死球": "1",
      "犠打": "1",
      "犠飛": "1",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".231",
      "長打率": ".304",
      "ＯＰＳ": ".535",
      "得点圏": ".167",
      "失策": "0"
    },
    {
      "年度": "2024",
      "チーム名": "ヤクルト",
      "打率": ".241",
      "試合": "36",
      "打席": "65",
      "打数": "58",
      "安打": "14",
      "二塁打": "2",
      "三塁打": "0",
      "本塁打": "2",
      "塁打": "22",
      "打点": "6",
      "得点": "4",
      "三振": "16",
      "四球": "1",
      "死球": "1",
      "犠打": "4",
      "犠飛": "1",
      "盗塁": "4",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": ".262",
      "長打率": ".379",
      "ＯＰＳ": ".642",
      "得点圏": ".188",
      "失策": "0"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".209",
        "試合": "75",
        "打席": "104",
        "打数": "91",
        "安打": "19",
        "二塁打": "2",
        "三塁打": "0",
        "本塁打": "3",
        "塁打": "30",
        "打点": "9",
        "得点": "10",
        "三振": "33",
        "四球": "2",
        "死球": "3",
        "犠打": "6",
        "犠飛": "2",
        "盗塁": "4",
        "盗塁死": "0",
        "併殺打": "0",
        "出塁率": ".245",
        "長打率": ".330",
        "ＯＰＳ": ".575",
        "得点圏": ".174",
        "失策": "0"
      }
  ];

window.yamadaStatsData = {
  '2022': {kper:41.7, iso:.000, babip:.200, wsb:"--", wraa:-1.5, wrcplus: -37, bbper:0.0, bb_k:0.00, spd:2.6, ubr: 0.0, wrc:-0.4, woba:.145},
  '2023': {kper:44.4, iso:.130, babip:.273, wsb:"--", wraa:-0.6, wrcplus: 66, bbper:3.7, bb_k: 0.08, spd: 2.6, ubr:-0.1, wrc:1.9, woba:.276},
  '2024': {kper:24.6, iso:.138, babip:.293, wsb:0.7, wraa:0.0, wrcplus: 84, bbper: 1.5, bb_k: 0.06, spd: 3.5, ubr: 1.1, wrc:5.7, woba:.300}
};


const yamadateamStatsByYear = {
    2022:[
        {team:'巨人',games:2, average:.000, HR:0, RBIs:0, sb:0},
        {team:'阪神',games:3, average:.167, HR:0, RBIs:0, sb:0},
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

