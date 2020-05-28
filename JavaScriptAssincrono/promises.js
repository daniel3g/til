function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time){
   return new Promise((resolve, reject) => {
       if(typeof msg !== 'string'){
        reject(false);
        return;
       } 
        setTimeout(()=>{
            resolve(msg.toUpperCase());
            return;
        }, time);
    });    
}

/* waitThere('Frase 1', random(1, 3)).then(answer => {
    console.log(answer);
    return waitThere(22222, random(1, 3)).then(answer => {
        console.log(answer);
        return waitThere('Frase 3', random(1, 3)).then(answer => {
            console.log(answer);
        })
    })
}).catch(e => {
    console.log('erro: ', e);
});

console.log('Essa mensagem vem antes da promise.'); */

//promise.all entrega todas as promises juntas assim que resolve todas, caso uma dê erro ele entrega ero para todas.
//promise.race entrega a primeira promise resolvida, continua executando mas não entrega mais nenhuma.
//promise.resolve entrega uma promise resolvida.
//promise.reject entrega uma promise rejeitada.

const promises = [
   //'primeiro valor',
    waitThere('Frase 1', random(1, 5)),
    waitThere('Frase 2', random(1, 5)),
    waitThere('Frase 3', random(1, 5)),
    //'Outro valor'
];

Promise.race(promises).then(value => {
    console.log(value);
}).catch(e => {
    console.log(e);
});