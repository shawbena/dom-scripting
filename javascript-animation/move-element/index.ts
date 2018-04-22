import { addLoadEvent, MoveElement } from '../../lib';

function positionMessage(): void {
    if (!document.getElementById) {
        return;
    }
    let elem = document.getElementById('message');
    let elem2 = document.getElementById('message2');
    if (elem) {
        elem.style.position = 'absolute';
        elem.style.left = '50px';
        elem.style.top = '100px';
        new MoveElement('message', 200, 200, 10).move();
    }
    if (elem2) {
        elem2.style.position = 'absolute';
        elem2.style.left = '50px';
        elem2.style.top = '100px';
        new MoveElement('message2', 200, 50, 10).move();
    }
}

addLoadEvent(positionMessage);