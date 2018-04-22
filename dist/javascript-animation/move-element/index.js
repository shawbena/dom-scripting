"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../../lib");
function positionMessage() {
    if (!document.getElementById) {
        return;
    }
    var elem = document.getElementById('message');
    var elem2 = document.getElementById('message2');
    if (elem) {
        elem.style.position = 'absolute';
        elem.style.left = '50px';
        elem.style.top = '100px';
        moveElement('message', 200, 200, 10);
    }
    if (elem2) {
        elem2.style.position = 'absolute';
        elem2.style.left = '50px';
        elem2.style.top = '100px';
        moveElement('message2', 200, 50, 10);
    }
}
function moveElement(eleId, finalX, finalY, interval) {
    if (!document.getElementById) {
        return;
    }
    var elem = document.getElementById(eleId);
    if (!elem) {
        return;
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == finalX && ypos == finalY) {
        return;
    }
    if (xpos < finalX) {
        xpos++;
    }
    if (ypos < finalY) {
        ypos++;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    setTimeout(function () { return moveElement(eleId, finalX, finalY, interval); }, interval);
}
lib_1.addLoadEvent(positionMessage);
