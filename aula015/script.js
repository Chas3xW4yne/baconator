function onSumClick() {
    const numero1 = Number(window.document.getElementById("numero1").value);
    const numero2 = Number (window.document.getElementById("numero2").value);
    const result = somar(numero1, numero2)
    showResult(numero1, numero2, result)
}

function somar(numero1, numero2) {
    return numero1 + numero2;
}

function showResult(numero1, numero2, result) {
    const pResult = window.document.getElementById("result");
    pResult.innerText = `O resultado de ${numero1} + ${numero2} é: ${result}`;
    
}