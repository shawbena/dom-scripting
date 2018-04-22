"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
var lib_1 = require("../lib");
/**
 * display abbreviation defination list.
*/
function displayAbbreviations() {
    if (!document.getElementsByName) {
        return;
    }
    if (!document.createElement) {
        return;
    }
    if (!document.createTextNode) {
        return;
    }
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) {
        return;
    }
    var defs = {};
    for (var i = 0; i < abbreviations.length; i++) {
        var abbreviation = abbreviations[i];
        if (!abbreviation.childNodes.length) {
            return; // ie6 <=
        }
        var defination = abbreviation.getAttribute('title');
        var key = abbreviation.lastChild.nodeValue;
        if (key) {
            defs[key] = defination;
        }
    }
    // for performance
    if (!Object.keys(defs).length) {
        return;
    }
    var dlist = document.createElement('dl'); // DocumentFragment
    for (var key in defs) {
        var defination = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement('dd');
        var ddesc_text = void 0;
        if (defination) {
            ddesc_text = document.createTextNode(defination);
            ddesc.appendChild(ddesc_text);
        }
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    // add abbreviation header
    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviation');
    header.appendChild(header_text);
    document.body.appendChild(header); //HTML-DOM
    document.body.appendChild(dlist);
}
function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return;
    }
    var quotes = document.getElementsByTagName('blockquote');
    for (var i = 0; i < quotes.length; i++) {
        var url = quotes[i].getAttribute('cite');
        // no cite
        if (!url) {
            continue;
        }
        var quoteChildren = quotes[i].getElementsByTagName('*');
        // empty blockquote
        if (!quoteChildren.length) {
            continue;
        }
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement('a');
        var link_source = document.createTextNode('source');
        link.appendChild(link_source);
        link.setAttribute('href', url);
        var superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return;
    }
    var links = document.getElementsByTagName('a');
    var akeys = {};
    if (!links.length) {
        return;
    }
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var accesskey = link.getAttribute('accesskey');
        var text = link.textContent;
        if (!accesskey || !text) {
            continue;
        }
        akeys[accesskey] = text;
    }
    var fragement = document.createDocumentFragment();
    var list = document.createElement('li');
    Object.keys(akeys).forEach(function (key) {
        var text = akeys[key];
        var str = key + (": " + text);
        var item = document.createElement('li');
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        fragement.appendChild(item);
    });
    list.appendChild(fragement);
    var header = document.createElement('h3');
    var header_text = document.createTextNode('Accesskeys');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
lib_1.addLoadEvent(displayAbbreviations);
lib_1.addLoadEvent(displayCitations);
lib_1.addLoadEvent(displayAccesskeys);
