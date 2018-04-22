import './index.css';
import { addLoadEvent } from '../../lib';

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
        let text = whichPic.getAttribute('title') || '';
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

addLoadEvent(function () {
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', '/images/timg.jpg');
    placeholder.setAttribute('alt', 'my image gallery');

    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    let descptext = document.createTextNode('Choose an image');
    description.appendChild(descptext);

    let gallery = document.getElementById('imagegallery');
    if (gallery) {
        gallery.parentElement && gallery.parentElement.insertBefore(placeholder, gallery);
        gallery.parentElement && gallery.parentElement.insertBefore(description, gallery);
    }

});

addLoadEvent(prepareGallary);