import  './webpack'
import './styles/global.css'

async function start() {
  return  Promise.resolve('Start');
}

console.log('start');

start().then(console.log);