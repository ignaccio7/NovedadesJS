

const products = await fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    }
}).then((res)=>{
    //console.log(res);
    return res.json();
}).then((resp)=>{
    //console.log(resp);
    return resp;
});

//console.log("hola"); //se ejecuta despues y no necesitamos envolver el await en una funcion async

export { products };

