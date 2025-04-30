import './style/style1.css'
import './style/style2.less'
import { whatYear } from './date'

console.log(whatYear())


const insertImgElement = (imgFile) => {
    const img = new Image();
    img.src = imgFile;
    document.body.appendChild(img);
}

import imgFile2 from "./img/webpack-big.png"
insertImgElement(imgFile2);
import imgFile1 from "./img/webpack-small.png"
insertImgElement(imgFile1);

setTimeout(() => {
    import('./dynamic.js').then(res => {
        console.log(res.default.msg);
    })
}, 2000);