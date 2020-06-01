import GeraCPF from './modules/GeraCPF';

(function(){
    const gera = new GeraCPF;
    const cpfGerado = document.querySelector('.build-cpf');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})();

import './assets/css/style.css';