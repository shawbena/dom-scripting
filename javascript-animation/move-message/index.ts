import { addLoadEvent } from '../../lib';

function positionMessage(): void{
    if(!document.getElementById){
        return;
    }
    let elem = document.getElementById('message');
    if(!elem){
        return;
    }
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
    // const movement = setTimeout(() => moveMessage(), 10);
    setTimeout(() => moveMessage(), 10);
}

function moveMessage(): void{
    if(!document.getElementById){
        return;
    }
    let elem = document.getElementById('message');
    if(!elem){
        return;
    }
    
    let xpos = parseInt(elem.style.left as string);
    let ypos = parseInt(elem.style.top as string);
    if(xpos == 200 && ypos == 100){
        return;
    }

    if(xpos < 200){
        xpos++;
    }
    if(ypos < 100){
        xpos++;
    }
    elem.style.left = `${xpos}px`;
    elem.style.top = `${ypos}px`;
    setTimeout(() => moveMessage(), 10);
}

addLoadEvent(positionMessage);