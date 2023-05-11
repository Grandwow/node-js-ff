const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

if (cluster.isMaster) {
    for (let i=0; i < os.cpus().length; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`Воркер с pid = ${worker.process.id} умер`)
        cluster.fork()
    })
}else {
    console.log(`Воркер с pid= ${process.pid}`)

    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} еще работает`)
    },5000)
}



