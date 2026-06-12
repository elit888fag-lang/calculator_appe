function hisab(operation) {
    let r1 = parseFloat(document.getElementById('r1').value);
    let r2 = parseFloat(document.getElementById('r2').value);
    let result;
    
    if (operation === '+') result = r1 + r2;
    if (operation === '-') result = r1 - r2;
    if (operation === '*') result = r1 * r2;
    if (operation === '/') result = r1 / r2;
    
    document.getElementById('natija').innerText = result;
}
