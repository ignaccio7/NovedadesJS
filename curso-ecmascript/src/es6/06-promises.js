//CALLBACK
//console.log("CALLBACK");
//console.log("1");

function imprimeNum2(functionx) {
    setTimeout(function () {
        console.log("2")
        //Aquí yo ya se que se ejecutó el 2
        functionx();
    }, 2000)
}
function imprimeNum3() {
    console.log("3");
}
//imprimeNum2(imprimeNum3);

//PROMISE
//console.log("PROMISE");
//console.log("1");
/*
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            console.log("2");
            return resolve("se resolvio la promesa");
        } else {
            return reject("REJECT");
        }
    }, 1500);
})
*/
/*
miPromesa.then((msj)=>{
    console.log("3");
    console.log(msj);
}).catch((msj)=>{
    console.log("Ocurrio un error"+msj);
})
*/

//

//ASYNC AWAIT
function conexionDb() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("2");
            resolve();
        }, 1080)
    });
}

async function codigoAsincrono() {
    try {
        console.log("1");
        await conexionDb();
        console.log("3");
    } catch (error) {
        console.log(error);
    }

}

codigoAsincrono();
