const path = require('path');

console.log('Склеить участки пути',path.join('1', 'lessons1', 'process.js'));
const fullpath = path.resolve(__dirname,'first', 'second', 'third.js');
console.log('Парсинг пути',path.parse(fullpath));

// ----------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);