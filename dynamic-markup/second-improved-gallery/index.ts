import './index.css';

import { addLoadEvent, insertAfter } from '../../lib';

function showPic(whichPic: HTMLAnchorElement): boolean {
    let source = whichPic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    let description = document.getElementById('description');
    if (!placeholder) {
        return false;
    }
    if (placeholder.nodeName != 'IMG') {
        return false;
    }
    placeholder.setAttribute('src', source as string);
    if (description) {
        let text = whichPic.getAttribute("title") || "";
        if (description.firstChild && description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }

    return true;
}

function prepareGallary(): void {
    if (!document.getElementsByTagName) {
        return;
    }
    if (!document.getElementById) {
        return;
    }
    if (!document.getElementById('imagegallery')) {
        return;
    }

    let gallery = document.getElementById('imagegallery');
    if (gallery) {
        let links = gallery.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function (this: HTMLElement) {
                return !showPic(this as HTMLAnchorElement);
            };
        }
    }

}

function preparePlaceholder(): void{
    if(!document.createElement){
        return;
    }
    if(!document.createTextNode){
        return;
    }
    if (!document.getElementById('imagegallery')) {
        return;
    }

    let gallery = document.getElementById('imagegallery');
    if(!gallery){
        return;
    }
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', '/images/timg.jpg');
    placeholder.setAttribute('alt', 'my image gallery');

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    const descptext = document.createTextNode("Choose an image");
    description.appendChild(descptext);

    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceholder);

addLoadEvent(prepareGallary);
