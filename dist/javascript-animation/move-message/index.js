"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../../lib");
function positionMessage() {
    if (!document.getElementById) {
        return;
    }
    var elem = document.getElementById('message');
    if (!elem) {
        return;
    }
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
    var movement = setTimeout(function () { return moveMessage(); }, 10);
}
function moveMessage() {
    if (!document.getElementById) {
        return;
    }
    var elem = document.getElementById('message');
    if (!elem) {
        return;
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) {
        return;
    }
    if (xpos < 200) {
        xpos++;
    }
    if (ypos < 100) {
        xpos++;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    setTimeout(function () { return moveMessage(); }, 10);
}
lib_1.addLoadEvent(positionMessage);
