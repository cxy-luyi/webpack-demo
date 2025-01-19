import './style/style1.css'
import './style/style2.less'

const whatYear = () => {
    const now = new Date();

    return "现在是" + now.getFullYear() + "年"
}

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