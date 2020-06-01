export default class ValidaCPF {
    constructor(cpfEnviado){
        this.cpf = cpfEnviado;
    }

    get cpfLimpo(){
        const cpf = this.cpf;
        return cpf.replace(/\D+/g, '');
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, 9);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
    
        return novoCpf === this.cpfLimpo;
    }

    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        const regressivo = cpfParcial.length + 1;
        const cpfSoma = cpfArray.map((valor, indice) => Number(valor)*(regressivo - indice))
        .reduce((somatoria, valor) => somatoria + valor);
        const digito = 11 - (cpfSoma % 11);
        return digito > 9? '0' : String(digito);
    }

    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

console.log('Cheguei aqui');