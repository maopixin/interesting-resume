import styles from "../data/styles";
import Prism from "prismjs"
let styleShow = document.getElementById("style-show");
let styleHide = document.getElementById("style-hidden");
let styleBox = document.getElementById("style-box")
let showingStyle = ""
let delay = 60
let timer = null

export const showStyle = (num) => {
    return new Promise((resolve,reject) => {
        let style = styles[num];
        if(!style) return false;
        let length = style.length;
        // 新的执行先获取已有的文字
        let oldText = styleHide.innerHTML;
        clearInterval(timer);
        timer = setInterval(()=>{
            // 判断是否需要滚动到底部
            let oHeight = styleShow.clientHeight - styleBox.clientHeight;
            if(oHeight>0){
                styleBox.scrollTop = styleShow.clientHeight
            }
            showingStyle = style.slice(0,showingStyle.length+2);
            styleHide.innerHTML = oldText + showingStyle;
            styleShow.innerHTML = Prism.highlight(oldText + showingStyle, Prism.languages.css);
            // 判断是否结束
            if(showingStyle.length>=length){
                clearInterval(timer);
                resolve();
            };
        },delay)
    })
}