let homens = 0;
let mulheres = 0;

function atualizarContadores() {
    document.getElementById('homensContador').textContent = homens;
    document.getElementById('mulheresContador').textContent = mulheres;
    document.getElementById('totalContador').textContent = homens + mulheres;
}

function aumentar(genero) {
    if (genero === 'homens') {
        homens++;
    } else if (genero === 'mulheres') {
        mulheres++;
    }
    atualizarContadores();
}

function diminuir(genero) {
    if (genero === 'homens' && homens > 0) {
        homens--;
    } else if (genero === 'mulheres' && mulheres > 0) {
        mulheres--;
    }
    atualizarContadores();
}

function resetContadores() {
    var confirmacao = confirm("Tem certeza que deseja resetar os contadores? Isso irá zerar os contadores de homens e mulheres.");

    if (confirmacao) {
        homens = 0;
        mulheres = 0;
        atualizarContadores();
    } else {
        console.log("Operação cancelada");
    }
}
