"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showPic(whichPic) {
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
    placeholder && placeholder.setAttribute('src', source);
    if (description) {
        if (description.firstChild) {
            description.firstChild.nodeValue = whichPic.getAttribute('title');
        }
    }
}
exports.default = (function () { });
