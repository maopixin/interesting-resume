import {showStyle} from './utils/styles-write'
import {showResume} from './utils/resume-write'
import './assets/less/reset.less'
async function init(){
    await showStyle(0);
    await showResume();
    await showStyle(1);
    await showStyle(2);
}


init();