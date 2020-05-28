function random(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, time){
   return new Promise((resolve, reject) => {
       if(typeof msg !== 'string'){
        reject('Caí no erro.');
        return;
       } 
        setTimeout(()=>{
            resolve(msg.toUpperCase());
            return;
        }, time);
    });    
}

async function execut(){
    try {
        const fase1 = await waitThere('Fase 1', random(0, 3));
        console.log(fase1);

        const fase2 = await waitThere(2222, random(0, 3));
        console.log(fase2);

        const fase3 = await waitThere('Fase 3', random(0, 3));
        console.log(fase3);

        console.log('Finalizou na fas:', fase3);
    } catch(e){
        console.log(e);
    }    
}

execut();