// Accuracy Analyzer - Sorting Algorithm Performance Calculator
// This script analyzes user-provided numbers and finds the best sorting method

let currentData = [];
let analysisResults = {};
let resultChart = null;

// Sorting Algorithms with Operation Tracking
class SortingAnalyzer {
    constructor(arr) {
        this.originalArray = [...arr];
        this.comparisons = 0;
        this.swaps = 0;
    }

    quickSort(arr = this.originalArray) {
        this.comparisons = 0;
        this.swaps = 0;
        return this._quickSortHelper([...arr]);
    }

    _quickSortHelper(arr) {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const middle = [];
        const right = [];
        
        for (let item of arr) {
            this.comparisons++;
            if (item < pivot) left.push(item);
            else if (item === pivot) middle.push(item);
            else right.push(item);
        }
        
        return [...this._quickSortHelper(left), ...middle, ...this._quickSortHelper(right)];
    }

    mergeSort(arr = this.originalArray) {
        this.comparisons = 0;
        this.swaps = 0;
        return this._mergeSortHelper([...arr]);
    }

    _mergeSortHelper(arr) {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = this._mergeSortHelper(arr.slice(0, mid));
        const right = this._mergeSortHelper(arr.slice(mid));
        
        return this._merge(left, right);
    }

    _merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            this.comparisons++;
            if (left[i] < right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        
        return [...result, ...left.slice(i), ...right.slice(j)];
    }

    selectionSort(arr = this.originalArray) {
        this.comparisons = 0;
        this.swaps = 0;
        const sorted = [...arr];
        const n = sorted.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                this.comparisons++;
                if (sorted[j] < sorted[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
                this.swaps++;
            }
        }
        
        return sorted;
    }

    bubbleSort(arr = this.originalArray) {
        this.comparisons = 0;
        this.swaps = 0;
        const sorted = [...arr];
        const n = sorted.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                this.comparisons++;
                if (sorted[j] > sorted[j + 1]) {
                    [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
                    this.swaps++;
                }
            }
        }
        
        return sorted;
    }

    radixSort(arr = this.originalArray) {
        this.comparisons = 0;
        this.swaps = 0;
        
        const sorted = [...arr];
        const max = Math.max(...sorted);
        const maxDigits = max.toString().length;
        
        for (let k = 0; k < maxDigits; k++) {
            const buckets = Array.from({ length: 10 }, () => []);
            
            for (let num of sorted) {
                this.comparisons++;
                const digit = Math.floor(num / Math.pow(10, k)) % 10;
                buckets[digit].push(num);
            }
            
            sorted.length = 0;
            for (let bucket of buckets) {
                sorted.push(...bucket);
            }
        }
        
        return sorted;
    }
}

// UI Navigation
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

function toggleInputMethod(method) {
    document.querySelectorAll('.input-group').forEach(g => g.classList.remove('active-input'));
    
    if (method === 'manual') {
        document.getElementById('manualInput').classList.add('active-input');
    } else if (method === 'random') {
        document.getElementById('randomInput').classList.add('active-input');
    } else if (method === 'predefined') {
        document.getElementById('predefinedInput').classList.add('active-input');
    }
}

function generateRandomNumbers() {
    const count = parseInt(document.getElementById('randomCount').value) || 100;
    const max = parseInt(document.getElementById('randomMax').value) || 1000;
    
    const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * max) + 1);
    document.getElementById('numberInput').value = numbers.join(', ');
    
    showMessage('inputStatus', `✓ Generated ${count} random numbers (1-${max})`, 'success');
}

function loadPredefinedDataset(datasetType) {
    let numbers = [];
    
    switch(datasetType) {
        case 'small':
            numbers = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
            break;
        case 'medium':
            numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
            break;
        case 'large':
            numbers = Array.from({ length: 200 }, () => Math.floor(Math.random() * 100000) + 1);
            break;
        case 'nearly-sorted':
            numbers = Array.from({ length: 200 }, (_, i) => i);
            for (let i = 0; i < 20; i++) {
                const idx = Math.floor(Math.random() * 200);
                numbers[idx] = Math.floor(Math.random() * 200);
            }
            break;
        case 'reverse':
            numbers = Array.from({ length: 200 }, (_, i) => 200 - i);
            break;
        case 'duplicates':
            const unique = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50) + 1);
            numbers = Array.from({ length: 200 }, () => unique[Math.floor(Math.random() * unique.length)]);
            break;
    }
    
    document.getElementById('numberInput').value = numbers.join(', ');
    showMessage('inputStatus', `✓ Loaded ${datasetType.replace('-', ' ')} dataset (${numbers.length} items)`, 'success');
}

function clearInput() {
    document.getElementById('numberInput').value = '';
    showMessage('inputStatus', '', '');
    document.getElementById('inputInfo').innerHTML = '';
}

function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.className = type ? `status ${type}` : '';
}

// Main Analysis Function
function analyzeNumbers() {
    const input = document.getElementById('numberInput').value.trim();
    
    if (!input) {
        showMessage('inputStatus', '❌ Please enter numbers first!', 'error');
        return;
    }
    
    // Parse input
    const numbers = input.split(/[,\s]+/)
        .map(n => n.trim())
        .filter(n => n !== '')
        .map(n => parseFloat(n))
        .filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        showMessage('inputStatus', '❌ No valid numbers found! Please check your input.', 'error');
        return;
    }
    
    if (numbers.length > 10000) {
        showMessage('inputStatus', '❌ Too many numbers! Maximum 10,000 allowed.', 'error');
        return;
    }
    
    currentData = numbers;
    
    // Show info
    const info = `✓ Loaded ${numbers.length} numbers | Range: ${Math.min(...numbers)} to ${Math.max(...numbers)}`;
    showMessage('inputStatus', info, 'success');
    
    // Perform analysis
    performAnalysis();
}

function performAnalysis() {
    const analyzer = new SortingAnalyzer(currentData);
    const algorithms = {
        'Quick Sort': () => analyzer.quickSort(),
        'Merge Sort': () => analyzer.mergeSort(),
        'Selection Sort': () => analyzer.selectionSort(),
        'Bubble Sort': () => analyzer.bubbleSort(),
        'Radix Sort': () => analyzer.radixSort()
    };
    
    analysisResults = {};
    
    for (let algoName in algorithms) {
        const start = performance.now();
        const sorted = algorithms[algoName]();
        const end = performance.now();
        
        analysisResults[algoName] = {
            time: end - start,
            comparisons: analyzer.comparisons,
            swaps: analyzer.swaps,
            efficiency: calculateEfficiency(end - start, analyzer.comparisons, analyzer.swaps)
        };
    }
    
    updateResultsTab();
    updateRecommendationsTab();
    switchTab('results');
}

function calculateEfficiency(time, comparisons, swaps) {
    // Higher score is better
    // Based on time and operations
    const score = 100 / (1 + (time / 10) + (comparisons / 100) + (swaps / 100));
    return Math.max(0, Math.min(100, score));
}

function updateResultsTab() {
    // Update table
    const tbody = document.getElementById('resultsTableBody');
    tbody.innerHTML = '';
    
    for (let algo in analysisResults) {
        const result = analysisResults[algo];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${algo}</strong></td>
            <td>${result.time.toFixed(3)} ms</td>
            <td>${result.comparisons.toLocaleString()}</td>
            <td>${result.swaps.toLocaleString()}</td>
            <td>
                <div class="efficiency-bar">
                    <div class="efficiency-fill" style="width: ${result.efficiency}%; background: ${result.efficiency > 66 ? '#28a745' : result.efficiency > 33 ? '#ffc107' : '#dc3545'};"></div>
                </div>
                <span>${result.efficiency.toFixed(1)}%</span>
            </td>
        `;
        tbody.appendChild(row);
    }
    
    // Update statistics
    document.getElementById('statSize').textContent = currentData.length;
    document.getElementById('statMin').textContent = Math.min(...currentData);
    document.getElementById('statMax').textContent = Math.max(...currentData);
    document.getElementById('statAvg').textContent = (currentData.reduce((a, b) => a + b, 0) / currentData.length).toFixed(2);
    
    // Update chart
    updateResultChart();
}

function updateResultChart() {
    const chartType = document.getElementById('resultChartType').value;
    const ctx = document.getElementById('resultChart').getContext('2d');
    
    if (resultChart) {
        resultChart.destroy();
    }
    
    const colors = {
        'Quick Sort': 'rgba(255, 99, 132, 0.8)',
        'Merge Sort': 'rgba(54, 162, 235, 0.8)',
        'Selection Sort': 'rgba(255, 206, 86, 0.8)',
        'Bubble Sort': 'rgba(75, 192, 192, 0.8)',
        'Radix Sort': 'rgba(153, 102, 255, 0.8)'
    };
    
    const metrics = ['time', 'comparisons', 'swaps'];
    const datasets = metrics.map((metric, idx) => {
        const data = Object.keys(analysisResults).map(algo => {
            let value = analysisResults[algo][metric];
            // Normalize swaps and comparisons for better visualization
            if (metric === 'comparisons') value = value / 100;
            if (metric === 'swaps') value = value / 100;
            return value;
        });
        
        return {
            label: metric.charAt(0).toUpperCase() + metric.slice(1),
            data: data,
            backgroundColor: `rgba(${idx * 80}, ${100 + idx * 40}, ${200 - idx * 40}, 0.6)`,
            borderColor: `rgba(${idx * 80}, ${100 + idx * 40}, ${200 - idx * 40}, 1)`,
            borderWidth: 2
        };
    });
    
    const config = {
        type: chartType,
        data: {
            labels: Object.keys(analysisResults),
            datasets: chartType === 'radar' ? [{
                label: 'Overall Performance',
                data: Object.keys(analysisResults).map(algo => {
                    const r = analysisResults[algo];
                    return (100 / (1 + r.time/10)).toFixed(1);
                }),
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)'
            }] : datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Sorting Algorithm Performance on Your Data',
                    font: { size: 16 }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: chartType === 'radar' ? {} : {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Performance Metrics' }
                }
            }
        }
    };
    
    resultChart = new Chart(ctx, config);
}

function updateRecommendationsTab() {
    const sorted = Object.entries(analysisResults)
        .sort((a, b) => a[1].time - b[1].time);
    
    const best = sorted[0];
    
    // Update best method box
    const reason = `Fastest execution time: ${best[1].time.toFixed(3)} ms | 
                    Comparisons: ${best[1].comparisons.toLocaleString()} | 
                    Efficiency Score: ${best[1].efficiency.toFixed(1)}%`;
    
    document.getElementById('bestMethodName').textContent = `🥇 ${best[0]}`;
    document.getElementById('bestMethodReason').textContent = reason;
    
    // Update comparison bars
    const comparisonContainer = document.getElementById('comparisonContainer');
    comparisonContainer.innerHTML = '';
    
    const maxTime = Math.max(...sorted.map(s => s[1].time));
    
    sorted.forEach(([algo, data], idx) => {
        const percentage = (data.time / maxTime) * 100;
        const bar = document.createElement('div');
        bar.className = 'comparison-bar';
        bar.innerHTML = `
            <div class="bar-label">${algo}</div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${percentage}%; background: ${idx === 0 ? '#28a745' : '#667eea'};"></div>
            </div>
            <div class="bar-value">${data.time.toFixed(3)} ms</div>
        `;
        comparisonContainer.appendChild(bar);
    });
    
    // Update rankings
    const rankingContainer = document.getElementById('rankingContainer');
    rankingContainer.innerHTML = '';
    
    sorted.forEach(([algo, data], idx) => {
        const medal = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'][idx];
        const rankDiv = document.createElement('div');
        rankDiv.className = 'ranking-item';
        rankDiv.innerHTML = `
            <div class="rank-medal">${medal}</div>
            <div class="rank-info">
                <h4>${algo}</h4>
                <p>Time: ${data.time.toFixed(3)} ms | Comparisons: ${data.comparisons.toLocaleString()}</p>
            </div>
        `;
        rankingContainer.appendChild(rankDiv);
    });
    
    // Detailed recommendation
    const detailedRec = document.getElementById('detailedRecommendation');
    detailedRec.innerHTML = `
        <div class="recommendation-box">
            <h3>💡 Why ${best[0]} is Best?</h3>
            <ul>
                <li><strong>Fastest Time:</strong> ${best[1].time.toFixed(3)} ms - Performs exceptionally well on your dataset</li>
                <li><strong>Efficiency Score:</strong> ${best[1].efficiency.toFixed(1)}% - High efficiency for this data size and characteristics</li>
                <li><strong>Operations:</strong> ${best[1].comparisons.toLocaleString()} comparisons and ${best[1].swaps.toLocaleString()} swaps</li>
            </ul>
        </div>
    `;
}

function exportAnalysisReport() {
    if (Object.keys(analysisResults).length === 0) {
        alert('No analysis results to export!');
        return;
    }
    
    let csv = 'Sorting Algorithm Analysis Report\n';
    csv += `Date: ${new Date().toLocaleString()}\n`;
    csv += `Dataset Size: ${currentData.length}\n`;
    csv += `Min Value: ${Math.min(...currentData)}\n`;
    csv += `Max Value: ${Math.max(...currentData)}\n`;
    csv += '\n\nAlgorithm,Time (ms),Comparisons,Swaps,Efficiency Score\n';
    
    Object.entries(analysisResults)
        .sort((a, b) => a[1].time - b[1].time)
        .forEach(([algo, data]) => {
            csv += `${algo},${data.time.toFixed(3)},${data.comparisons},${data.swaps},${data.efficiency.toFixed(2)}\n`;
        });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sorting_analysis_${Date.now()}.csv`;
    a.click();
}

function goBackToAnalyzer() {
    switchTab('analyzer');
}
