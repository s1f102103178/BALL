const yamadabatStats=[
    {
      "年度": "2023",
      "チーム名": "オリックス",
      "打率": ".000",
      "試合": "10",
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
      "得点圏": ".000",
      "失策": "1"
    },
    {
      "年度": "2024",
      "チーム名": "オリックス",
      "打率": "-",
      "試合": "20",
      "打席": "0",
      "打数": "0",
      "安打": "0",
      "二塁打": "0",
      "三塁打": "0",
      "本塁打": "0",
      "塁打": "0",
      "打点": "0",
      "得点": "0",
      "三振": "0",
      "四球": "0",
      "死球": "0",
      "犠打": "0",
      "犠飛": "0",
      "盗塁": "0",
      "盗塁死": "0",
      "併殺打": "0",
      "出塁率": "-",
      "長打率": "-",
      "ＯＰＳ": "-",
      "得点圏": "-",
      "失策": "2"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "打率": ".000",
        "試合": "30",
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
        "得点圏": ".000",
        "失策": "3"
      }
  ];

const yamadapitStats = [
    {
      "年度": "2023",
      "チーム名": "オリックス",
      "防御率": "3.86",
      "登板": "10",
      "先発": "7",
      "完投": "0",
      "完封": "0",
      "無四球": "0",
      "交代完了": "1",
      "勝利": "1",
      "敗戦": "2",
      "ホールド": "0",
      "ＨＰ": "0",
      "セーブ": "0",
      "勝率": ".333",
      "投球回": "32.2",
      "打者": "138",
      "被安打": "33",
      "被本塁打": "0",
      "奪三振": "27",
      "奪三振率": "7.44",
      "与四球": "15",
      "与死球": "1",
      "暴投": "2",
      "ボーク": "0",
      "失点": "16",
      "自責点": "14",
      "被打率": ".280",
      "Ｋ／ＢＢ": "1.80",
      "ＷＨＩＰ": "1.47"
    },
    {
      "年度": "2024",
      "チーム名": "オリックス",
      "防御率": "2.34",
      "登板": "20",
      "先発": "20",
      "完投": "0",
      "完封": "0",
      "無四球": "0",
      "交代完了": "0",
      "勝利": "7",
      "敗戦": "11",
      "ホールド": "0",
      "ＨＰ": "0",
      "セーブ": "0",
      "勝率": ".389",
      "投球回": "119",
      "打者": "490",
      "被安打": "112",
      "被本塁打": "4",
      "奪三振": "117",
      "奪三振率": "8.85",
      "与四球": "27",
      "与死球": "1",
      "暴投": "1",
      "ボーク": "0",
      "失点": "37",
      "自責点": "31",
      "被打率": ".251",
      "Ｋ／ＢＢ": "4.33",
      "ＷＨＩＰ": "1.17"
    },
    {
        "年度": "通算成績",
        "チーム名": " ",
        "防御率": "2.67",
        "登板": "30",
        "先発": "27",
        "完投": "0",
        "完封": "0",
        "無四球": "0",
        "交代完了": "1",
        "勝利": "8",
        "敗戦": "13",
        "ホールド": "0",
        "ＨＰ": "0",
        "セーブ": "0",
        "勝率": ".381",
        "投球回": "151.2",
        "打者": "628",
        "被安打": "145",
        "被本塁打": "4",
        "奪三振": "144",
        "奪三振率": "8.55",
        "与四球": "42",
        "与死球": "2",
        "暴投": "3",
        "ボーク": "0",
        "失点": "53",
        "自責点": "45",
        "被打率": ".257",
        "Ｋ／ＢＢ": "3.43",
        "ＷＨＩＰ": "1.23"
      }
  ];
  
  window.yamadaStatsData = {
    '2024': {kper:20.6,bbper:7.4,kbb:13.2,hrper:1.1,ave:.321,der:.609,lob:73.6,ramin:135,fipmin:79,xfipmin:88,ra:4.35,fip:2.56,r_f:1.80,xfip:2.84,tra:2.76},
  };
  
  
  const yamadateamStatsByYear = {
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
  
  function renderPitchingStats(stats) {
    const pitchingStatsBody = document.getElementById('pitching-stats-body');
    if (!pitchingStatsBody) {
        console.error('pitching-stats-body not found.');
        return; // 処理を中断
    }
  
    // テーブルをクリア
    pitchingStatsBody.innerHTML = '';
  
    // データを挿入
    stats.forEach(stat => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stat.年度}</td>
            <td>${stat.チーム名}</td>
            <td>${stat.防御率}</td>
            <td>${stat.登板}</td>
            <td>${stat.先発}</td>
            <td>${stat.完投}</td>
            <td>${stat.完封}</td>
            <td>${stat.無四球}</td>
            <td>${stat.交代完了}</td>
            <td>${stat.勝利}</td>
            <td>${stat.敗戦}</td>
            <td>${stat.ホールド}</td>
            <td>${stat.セーブ}</td>
            <td>${stat.勝率}</td>
            <td>${stat.投球回}</td>
            <td>${stat.打者}</td>
            <td>${stat.被安打}</td>
            <td>${stat.被本塁打}</td>
            <td>${stat.奪三振}</td>
            <td>${stat.奪三振率}</td>
            <td>${stat.与四球}</td>
            <td>${stat.暴投}</td>
            <td>${stat.ボーク}</td>
            <td>${stat.失点}</td>
            <td>${stat.自責点}</td>
            <td>${stat.被打率}</td>
            <td>${stat["Ｋ／ＢＢ"] || "N/A"}</td>
            <td>${stat.ＷＨＩＰ}</td>
        `;
        pitchingStatsBody.appendChild(row);
    });
    console.log('Pitching stats rendered successfully.');
  }
  
  
  
  
  
  
  
  
  function renderAdvancedStats(statsData) {
    yamada01advancedStatsBody.innerHTML = ''; // テーブルクリア
  
    for (const [year, stats] of Object.entries(statsData)) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${year}</td>
            <td class="clickable" data-stat="kper">${stats.kper}</td>
            <td class="clickable" data-stat="bbper">${stats.bbper}</td>
            <td class="clickable" data-stat="kbb">${stats.kbb}</td>
            <td class="clickable" data-stat="hrper">${stats.hrper}</td>
            <td class="clickable" data-stat="ave">${stats.ave}</td>
            <td class="clickable" data-stat="der">${stats.der}</td>
            <td class="clickable" data-stat="lob">${stats.lob}</td>
            <td class="clickable" data-stat="ramin">${stats.ramin}</td>
            <td class="clickable" data-stat="fipmin">${stats.fipmin}</td>
            <td class="clickable" data-stat="xfipmin">${stats.xfipmin}</td>
            <td class="clickable" data-stat="ra">${stats.ra}</td>
            <td class="clickable" data-stat="fip">${stats.fip}</td>
            <td class="clickable" data-stat="r_f">${stats.r_f}</td>
            <td class="clickable" data-stat="xfip">${stats.xfip}</td>
            <td class="clickable" data-stat="tra">${stats.tra}</td>
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
  
    console.log('DOMContentLoaded event fired.');
      // 「投手成績」をデフォルトで表示
      document.getElementById('pitchingStats').style.display = 'block';
      document.getElementById('battingStats').style.display = 'none';
  
      
  // 投手成績データをレンダリング
  renderPitchingStats(yamadapitStats);
      const tooltipPopup = document.getElementById('tooltip-popup');
      const popupTitle = document.getElementById('popup-title');
      const popupContent = document.getElementById('popup-content');
      const popupClose = document.getElementById('popup-close');
  
  
      const pitchingStatsBody = document.getElementById('pitching-stats-body');
  
      if (!pitchingStatsBody) {
          console.error('pitching-stats-body not found.');
          return;
      }
  
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
      
      renderStats(yamadabatStats);
      renderAdvancedStats(yamadaStatsData);
      createYearButtons(yamadaStatsData);
      renderChartForYear('2012', yamadaStatsData);
  
    
  });
  
  function switchSubTab(evt, subTabName) {
    // すべてのサブタブを非表示
    const subTabContents = document.getElementsByClassName('sub-tab-content');
    for (let i = 0; i < subTabContents.length; i++) {
        subTabContents[i].style.display = 'none';
    }
  
    // すべてのタブリンクから "active" クラスを削除
    const subTabLinks = document.getElementsByClassName('sub-tab-link');
    for (let i = 0; i < subTabLinks.length; i++) {
        subTabLinks[i].classList.remove('active');
    }
  
    // 選択されたタブを表示
    document.getElementById(subTabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  
    // 必要なレンダリング処理
    if (subTabName === 'pitchingStats') {
        renderPitchingStats(yamadapitStats);
    } else if (subTabName === 'battingStats') {
        renderStats(yamadabatStats);
    }
  }
  
  
  
  
  
  
  
  
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
  
  