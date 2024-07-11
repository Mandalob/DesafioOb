function calculadoraDeParcelasSimples() {
    const valorTotal = parseFloat(prompt("Digite o valor total do empréstimo:"));
    const numDeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));

    /*if (isNaN(valorTotal) || isNaN(numDeParcelas) || numInstallments <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }*/

    const valorParcela = valorTotal / numDeParcelas;

    for (let i = 1; i <= numDeParcelas; i++) {
        alert(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
    }
}
   

function calculadoraDeParcelasDecrescentes() {
    const valorTotal = parseFloat(prompt("Digite o valor total do empréstimo:"));
    const numDeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));


    let restante = valorTotal;
            for (let i = 1; i <= numDeParcelas; i++) {
                const juros = restante * 0.01; // Simulação de js de 1% ao mês sobre o saldo 
                const inicial = valorTotal / numDeParcelas;
                const parcelas = inicial + juros;
                restante -= inicial;

                alert(`Parcela ${i}: R$ ${parcelas.toFixed(2)}`); 

            }
}
            
    
function valoresoutros() {
                let userInput = prompt("Digite um valor ou 'sair' para finalizar:");
                let valor = [];
                
                while (userInput.toLowerCase() !== "sair") {
                    let value = parseFloat(userInput);
    
                    if (!isNaN(value)) {
                        valor.push(value);
                        let sum = valor.reduce((acc, curr) => acc + curr, 0);
                        let average = sum / valor.length;
    
                        alert(`Valor Inserido: ${value}\nSoma: ${sum.toFixed(2)}\nMédia: ${average.toFixed(2)}`);
                    } else {
                        alert("Por favor, insira um valor válido.");
                    }
    
                    userInput = prompt("Digite um valor ou 'sair' para finalizar:");
                }
}
    
                calculadoraDeParcelasSimples();
                calculadoraDeParcelasDecrescentes()
                valoresoutros();
    
        