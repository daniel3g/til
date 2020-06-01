import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min) );
    }

    formataCPF(novoCPF){
        return (
        novoCPF.slice(0, 3) + '.' +
        novoCPF.slice(3, 6) + '.' +
        novoCPF.slice(6, 9) + '.' +
        novoCPF.slice(9, 11)
        );
    }

    geraNovoCPF(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
        const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);       
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formataCPF(novoCPF);
    }
}

