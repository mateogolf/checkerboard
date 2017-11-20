import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkerboard from './Checkerboard';
import registerServiceWorker from './registerServiceWorker';

let sizeStr;
let size;
while(!sizeStr || sizeStr.length===0){
    sizeStr = prompt("how large do you want the checkerboard to be? (give number)")
    if (sizeStr.length === 0) continue;
    size = parseInt(sizeStr,10);
    console.log(size);
    if (isNaN(size)) sizeStr="";
}
// let size = parseInt(sizeStr, 10);
console.log(size)

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Checkerboard size={size} />, document.getElementById('board'));
registerServiceWorker();
