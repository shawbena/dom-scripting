import { addLoadEvent, getNextElement } from '../lib';

function styleHeaderSiblings(): void{
    if(!document.getElementsByTagName){
        return;
    }
    
    let headers = document.getElementsByTagName('h1');
    for(let i = 0; i < headers.length; i++){
        if(!headers[i].nextSibling){
            continue;
        }
        let elem = getNextElement<HTMLElement>(headers[i].nextSibling as Node);
        if(elem){
            elem.style.fontWeight = 'bold';
            elem.style.fontSize = '1.2em';
        }
        
    }
}

addLoadEvent(styleHeaderSiblings);