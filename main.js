function sum(a, b) {
    return a + b;
}

function showSum() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }
    document.getElementById('result').textContent = 'Result: ' + sum(a, b);
}