import './index.css';
import { addLoadEvent } from '../lib';

/**
 * abbreviation list type.
*/
interface AbbrDefs {
    [prop: string]: string | null;
}

interface AccessKeysObj{
    [prop: string]: string;
}

/**
 * display abbreviation defination list.
*/
function displayAbbreviations(): void {
    if(!document.getElementsByName){
        return;
    }
    if(!document.createElement){
        return;
    }
    if(!document.createTextNode){
        return;
    }
    let abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) {
        return;
    }

    let defs: AbbrDefs = {};
    for (let i = 0; i < abbreviations.length; i++) {
        let abbreviation = abbreviations[i];
        if(!abbreviation.childNodes.length){
            return; // ie6 <=
        }
        let defination = abbreviation.getAttribute('title');
        let key = (abbreviation.lastChild as Node).nodeValue;
        if (key) {
            defs[key] = defination;
        }
    }
    // for performance
    if(!Object.keys(defs).length){
        return;
    }

    let dlist = document.createElement('dl'); // DocumentFragment
    for (let key in defs) {
        let defination = defs[key];
        let dtitle = document.createElement('dt');
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        let ddesc = document.createElement('dd');
        let ddesc_text: Text;
        if (defination) {
            ddesc_text = document.createTextNode(defination);
            ddesc.appendChild(ddesc_text);
        }

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    // add abbreviation header
    let header = document.createElement('h2');
    let header_text = document.createTextNode('Abbreviation');
    header.appendChild(header_text);

    document.body.appendChild(header); // HTML-DOM
    document.body.appendChild(dlist);
}

function displayCitations(): void{
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode){
        return;
    }
    let quotes = document.getElementsByTagName('blockquote');
    for(let i = 0; i < quotes.length; i++){
        let url = quotes[i].getAttribute('cite');
        // no cite
        if(!url){
            continue;
        }
        let quoteChildren = quotes[i].getElementsByTagName('*');
        // empty blockquote
        if(!quoteChildren.length){
            continue;
        }
        let elem = quoteChildren[quoteChildren.length - 1];
        let link = document.createElement('a');
        let link_source = document.createTextNode('source');
        link.appendChild(link_source);
        link.setAttribute('href', url);
        let superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}


function displayAccesskeys(): void{
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode){
        return;
    }

    let links = document.getElementsByTagName('a');
    let akeys: AccessKeysObj = {};

    if(!links.length){
        return;
    }

    for(let i = 0; i < links.length; i++){
        let link = links[i];
        let accesskey = link.getAttribute('accesskey');
        let text = link.textContent;
        if(!accesskey || !text){
            continue;
        }
        akeys[accesskey] = text;
    }

    let fragement = document.createDocumentFragment();
    let list = document.createElement('li');
    Object.keys(akeys).forEach((key) => {
        let text = akeys[key];
        let str = key + `: ${text}`;
        let item = document.createElement('li');
        let item_text = document.createTextNode(str);
        item.appendChild(item_text);
        fragement.appendChild(item);
    });
    
    list.appendChild(fragement);
    let header = document.createElement('h3');
    let header_text = document.createTextNode('Accesskeys');
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(list);

}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);