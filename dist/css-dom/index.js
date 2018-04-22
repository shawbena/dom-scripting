"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) {
        return;
    }
    var headers = document.getElementsByTagName('h1');
    for (var i = 0; i < headers.length; i++) {
        if (!headers[i].nextSibling) {
            continue;
        }
        var elem = lib_1.getNextElement(headers[i].nextSibling);
        if (elem) {
            elem.style.fontWeight = 'bold';
            elem.style.fontSize = '1.2em';
        }
    }
}
lib_1.addLoadEvent(styleHeaderSiblings);
