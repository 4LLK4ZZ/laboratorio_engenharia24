let telaValor = '0';
        let operador = null;
        let valorAnterior = null;

        const display = document.getElementById('display');

        function AttTela() {
            if (operador !== null && valorAnterior !== null) {
                display.innerText = valorAnterior + ' ' + operador + ' ' + telaValor;
            } else {
                display.innerText = telaValor;
            }
        }
        

        function AddDigito(digito) {
            if (telaValor === '0') {
                telaValor = '';
            }
            telaValor += digito;
            AttTela();
        }

        function AddDecimal() {
            if (!telaValor.includes('.')) {
                telaValor += '.';
                AttTela();
            }
        }

        function LimparTela() {
            telaValor = '0';
            valorAnterior = null;
            AttTela();
        }

        function AlterarSinal() {
            telaValor = telaValor.charAt(0) === '-' ? telaValor.slice(1) : '-' + telaValor;
            AttTela();
        }

        function CalcPorcentagem() {
            telaValor = parseFloat(telaValor) / 100;
            AttTela();
        }

        function AddOperador(op) {
            if (operador !== null) {
                CalcResultado();
            }
            valorAnterior = telaValor;
            operador = op;
            telaValor = '0';
        }

        function CalcResultado() {
            let resultado;
            const valorAtual = parseFloat(telaValor);

            if (isNaN(valorAtual) || isNaN(valorAnterior)) {
                return;
            }

            switch (operador) {
                case '+':
                    resultado = parseFloat(valorAnterior) + valorAtual;
                    break;
                case '-':
                    resultado = parseFloat(valorAnterior) - valorAtual;
                    break;
                case '*':
                    resultado = parseFloat(valorAnterior) * valorAtual;
                    break;
                case '/':
                    if(valorAtual == 0)
                    {
                        alert("Erro: Divisão por zero!")
                        LimparTela();
                        return;
                    }
                    resultado = parseFloat(valorAnterior) / valorAtual;
                    break;
                default:
                    return;
            }

            telaValor = resultado.toString();
            operador = null;
            valorAnterior = null;
            AttTela();
        }