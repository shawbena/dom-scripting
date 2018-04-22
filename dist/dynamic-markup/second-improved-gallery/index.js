"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var lib_1 = require("../../lib");
function showPic(whichPic) {
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
    if (!placeholder) {
        return false;
    }
    if (placeholder.nodeName != 'IMG') {
        return false;
    }
    placeholder.setAttribute('src', source);
    if (description) {
        var text = whichPic.getAttribute('title') || '';
        if (description.firstChild && description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
function prepareGallary() {
    if (!document.getElementsByTagName) {
        return;
    }
    if (!document.getElementById) {
        return;
    }
    if (!document.getElementById('imagegallery')) {
        return;
    }
    var gallery = document.getElementById('imagegallery');
    if (gallery) {
        var links = gallery.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                return !showPic(this);
            };
        }
    }
}
function preparePlaceholder() {
    if (!document.createElement) {
        return false;
    }
    if (!document.createTextNode) {
        return false;
    }
    if (!document.getElementById('imagegallery')) {
        return false;
    }
    var gallery = document.getElementById('imagegallery');
    if (!gallery) {
        return;
    }
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', '/images/timg.jpg');
    placeholder.setAttribute('alt', 'my image gallery');
    var description = document.createElement('p');
    description.setAttribute('id', 'description');
    var descptext = document.createTextNode('Choose an image');
    description.appendChild(descptext);
    lib_1.insertAfter(placeholder, gallery);
    lib_1.insertAfter(description, placeholder);
}
lib_1.addLoadEvent(preparePlaceholder);
lib_1.addLoadEvent(prepareGallary);
