import resume from '../data/resume';

export const showResume = () => {
    return new Promise((resolve,reject)=>{
        let start = 0;
        let resumeBox = document.getElementById("resume_box");
        let len = resume.length;
        let timer = null;
        let delay = 60;
        timer = setInterval(()=>{
            resumeBox.innerHTML = resume.slice(0,start+2);
            start++;
            if(start>=len){
                clearInterval(timer)
            }
        },delay)
    })
}