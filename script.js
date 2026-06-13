let display = document.getElementById('display');
let historyDiv = document.getElementById('history');
let historyArray = [];
let isDark = false;

// Dark Mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        this.textContent = '🌙';
    }
});

function addToDisplay(value) {
    if (value === 'π') {
        display.value += Math.PI.toFixed(8);
    } else if (value === '^') {
        display.value += '**';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function clearHistory() {
    historyArray = [];
    updateHistory();
}

function updateHistory() {
    historyDiv.innerHTML = historyArray.slice(-5).reverse().join('<br>');
}

function calculate() {
    try {
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/sin\(/g, 'Math.sin(Math.PI/180*')
            .replace(/cos\(/g, 'Math.cos(Math.PI/180*')
            .replace(/tan\(/g, 'Math.tan(Math.PI/180*')
            .replace(/√\(/g, 'Math.sqrt(')
            .replace(/%/g, '/100');

        let result = eval(expression);
        
        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
            return;
        }

        // نزيدو العملية للـ History
        historyArray.push(`${display.value} = ${result}`);
        updateHistory();
        
        display.value = Number.isInteger(result) ?
