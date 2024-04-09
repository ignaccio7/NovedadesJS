const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve("resolve promise 2");
    }, 0)
);
const promise3 = new Promise((resolve, reject) => resolve("resolve promise 3"));

//resolvera la primera promesa que se cumpla
Promise.any([promise1, promise2, promise3]).then(
    (response) => console.log(response) // resolve promise 3 -> captures the first resolve that happens
);