document.getElementById('calculate').addEventListener('click', function() {
    const operation = document.getElementById('operation').value;
    const percentage = parseFloat(document.getElementById('percentage').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || isNaN(percentage)) {
        document.getElementById('result').innerText = 'Veuillez entrer un montant et un pourcentage valides';
        return;
    }

    const percentageValue = amount * (percentage / 100);
    let result;
    if (operation === 'plus') {
        result = amount + percentageValue;
    } else if (operation === 'minus') {
        result = amount - percentageValue;
    }

    document.getElementById('result').innerText = `Résultat : ${result.toFixed(2)} DT`;
});