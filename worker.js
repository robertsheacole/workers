let workerPromise = (data) => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < 2000000000; i++) {
            let x = i + Math.random();
         }
        resolve(data);
    });
}


onmessage = (e) => {
    workerPromise(e.data).then((i) => {
        setTimeout(() => {
            postMessage("none"); 
         }, 2000)
    });
}
