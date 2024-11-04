let display = document.getElementById('display');
let numeroAtual = '';
let operador = '';
let numeroAnterior = '';

// Função para adicionar número
function adicionarNumero(numero) {
    numeroAtual += numero;
    display.value = numeroAtual;
    setTimeout(() => {
        display.classList.remove('piscar');
    }, 500);
}

// Função para adicionar operador
function adicionarOperador(op) {
    if (numeroAtual !== '') {
        operador = op;
        numeroAnterior = numeroAtual;
        numeroAtual = '';
        display.classList.add('piscar');
        setTimeout(() => {
            display.classList.remove('piscar');
        }, 500);
    }
}

// Função para calcular
function calcular() {
    if (numeroAtual !== '' && operador !== '') {
        let resultado;
        switch (operador) {
            case '+':
                resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
                break;
            case '-':
                resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
                break;
            case '*':
                resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
                break;
            case '/':
                resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
                break;
        }
        display.value = resultado;
        numeroAtual = resultado.toString();
        operador = '';
        numeroAnterior = '';
        display.classList.add('piscar');
        setTimeout(() => {
            display.classList.remove('piscar');
        }, 500);
    }
}

// Função para limpar
function limpar() {
    display.value = '';
    numeroAtual = '';
    operador = '';
    numeroAnterior = '';
    display.classList.add('piscar');
    setTimeout(() => {
        display.classList.remove('piscar');
    }, 500);
}

// Adicionar evento de teclado
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            adicionarNumero(e.key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            adicionarOperador(e.key);
            break;
        case '=':
        case 'Enter':
            calcular();
            break;
        case 'Backspace':
            limpar();
            break;
    }
});


