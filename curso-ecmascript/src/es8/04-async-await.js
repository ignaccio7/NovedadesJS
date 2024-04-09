const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // if (true) {
        //     setTimeout(() => {
        //         resolve("AsynC!!")
        //     }, 1500);
        // } else {
        //     reject("Error en el reject");
        // }

        (false)
            ? setTimeout(() => resolve("AsynC!!"), 2000)
            : reject(new Error("Error"));
    });
}

/*
async function main() {
    console.log("before");
    await fnAsync().then((msj)=>{
        console.log(msj);
    });
    console.log("After");
}*/

async function main() {
    console.log("before");
    try {
        const imp = await fnAsync();
        console.log(imp);
    } catch (error) {
        console.log(error);
    }
    console.log("After");
}

main();