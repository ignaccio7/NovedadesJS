const fnSemaforoVerde = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Semaforo en verde'), 8000)
            : reject(new Error('error'));
    });
}

const validarSemaforo1 = async () => {
    const validarSemaforoVerde = await fnSemaforoVerde();
    console.log(validarSemaforoVerde);
    console.log('Puede pasar');
}



const fnSemaforoAmarillo = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Semaforo en amarillo'), 4000)
            : reject(new Error('error'));
    });
}

const validarSemaforo2 = async () => {
    const validarSemaforoAmarillo = await fnSemaforoAmarillo();
    console.log(validarSemaforoAmarillo);
    console.log('Esta a punto de cambiar el color');
}



const fnSemaforoRojo = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Semaforo en rojo'), 1000)
            : reject(new Error('error'));
    });
}

const validarSemaforo3 = async () => {
    const validarSemaforoRojo = await fnSemaforoRojo();
    console.log(validarSemaforoRojo);
    console.log('Por favor pare');
}

validarSemaforo1();
validarSemaforo2();
validarSemaforo3();
