//readable чтение
//writeble запись 
//duplex для чтения и записи
//transform такой же как duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data)  => {
//     if(err) {
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

//один чанк по дефолту 64 кб
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })

// stream.on('end', () => {console.log('Файл закончился')})
// stream.on('open', () => {console.log('Файл открыт')})
// stream.on('err', () => {console.log('Ошибка')})

// const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));
// for(let i=0; i < 20; i++) {
//     writebleStream.write(i + '\n');
// }

// writebleStream.end();
// writebleStream.close();
// writebleStream.destroy();
// WritableStream.on('error');

const http = require('http');

http.createServer((req, res) => {
    //req - readble stream
    //res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

    //Стрим закончит читать раньше чем пользователь скачает
    stream.pipe(res);
})

