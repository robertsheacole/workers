var loader = document.querySelector('.loader');

console.log(typeof loader);


if(window.Worker) {  

    
    function runWorker() {
        loader.style.display = "inline-block";
        worker = new Worker('worker.js');

        worker.postMessage("test");

        worker.onmessage = (e) => {
            console.log("I got it from the worker..." + e.data);
            loader.style.display = e.data;
            console.log(e.data);
        }
        
    
    }

    function runRegular() {
        loader.style.display = "inline-block";
        console.log('regular')

        
        let regularPromise = () => {
            return new Promise((resolve, reject) => {
                for(let i = 0; i < 2000000000; i++) {
                    let x = i + Math.random();
                 }
                resolve();
            });
        }

        regularPromise().then(() => {
                setTimeout(() => {
                    loader.style.display = "none";
                }, 2000)
        });

    }

    
}