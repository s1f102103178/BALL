// 山田哲人のデータ
const yamadaStatsData = {
    '2012': {kper:22.4, iso:.114, babip:.313, wsb:0.0, wraa:0.8, wrcplus:110, bbper: 10.2, bb_k:0.45, spd:1.2, ubr:0.0, wrc:5.0, woba:.308},
    '2013': {kper:9.3, iso:.074, babip:.307, wsb:0.7, wraa:2.2, wrcplus:98, bbper:9.8, bb_k:1.05, spd:4.8, ubr:0.0, wrc:43.2, woba:.316},
    // 他の年度データ
};

// ファイルパスのマッピング
const playerFileMap = {
    'yamada': '../../../YS/JS/YS_01.js',   // 山田哲人のデータファイル
    'kondo': '../../../Hawks/JS/Hawks_03.js' // 近藤健介のデータファイル
};

// 選手のデータを動的に読み込む関数
function loadPlayerData(player) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = playerFileMap[player]; // 選手に対応するファイルパスを指定
        script.onload = () => {
            try {
                const data = eval(`${player}StatsData`); // 選手のデータを eval で取得
                resolve(data);
            } catch (error) {
                reject(new Error(`データの読み込みに失敗しました: ${player}`));
            }
        };
        script.onerror = () => reject(new Error(`選手データの読み込みに失敗しました: ${player}`));
        document.head.appendChild(script);
    });
}

// グラフを描画する関数
function renderLineChartForStat(statType, statsData, comparisonData = null) {
    const ctx = document.getElementById('statsChart').getContext('2d');
    const labels = Object.keys(statsData);
    const data = labels.map(year => statsData[year][statType]);

    let comparisonDataset = null;
    if (comparisonData) {
        const comparisonDataPoints = labels.map(year => comparisonData[year] ? comparisonData[year][statType] : null);
        comparisonDataset = {
            label: '比較選手',
            data: comparisonDataPoints,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.1
        };
    }

    if (statsChart) {
        statsChart.destroy(); // 既存のグラフを破棄
    }

    const datasets = [{
        label: `${statType.toUpperCase()} の変遷`,
        data: data,
        fill: false,
        borderColor: 'rgba(144, 238, 144, 1)',
        backgroundColor: 'rgba(144, 238, 144, 0.2)',
        tension: 0.1
    }];

    if (comparisonDataset) {
        datasets.push(comparisonDataset);
    }

    statsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: `${statType.toUpperCase()} の変遷`
            }
        }
    });
}

// 選手選択イベントの処理
document.getElementById('playerSelect').addEventListener('change', async (event) => {
    const selectedPlayer = event.target.value;

    if (selectedPlayer === 'yamada') {
        renderLineChartForStat(currentStat, yamadaStatsData);
    } else {
        try {
            const comparisonData = await loadPlayerData(selectedPlayer); // 別の選手のデータを読み込む
            renderLineChartForStat(currentStat, yamadaStatsData, comparisonData); // 比較データを使ってグラフを描画
        } catch (error) {
            console.error(error.message);
        }
    }
});

// 現在の選手の指標を保存しておく
let currentStat = 'kper'; // 初期状態では "kper" などの指標

// 指標をクリックした時に、グラフを更新するロジック
document.querySelectorAll('.clickable').forEach(cell => {
    cell.addEventListener('click', (event) => {
        const statType = event.target.getAttribute('data-stat');
        currentStat = statType; // 選択された指標を保存
        renderLineChartForStat(statType, yamadaStatsData);
    });
});
