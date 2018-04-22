import './index.scss';
import previewImage =  require('../../asserts/images/topic.png');
import { insertAfter, addLoadEvent, MoveElement } from '../../lib';

function prepareSlideShow(): void{
    if(!document.getElementById || !document.getElementsByTagName){
        return;
    }
    let linklist = document.getElementById('linklist');
    if(!linklist){
        return;
    }
    let slideshow = document.createElement('div');
    let previews = document.createElement('img');
    slideshow.setAttribute('id', 'slideshow');
    previews.setAttribute('id', 'preview');
    previews.setAttribute('src', previewImage);
    previews.setAttribute('alt', 'building blocks of web design');
    slideshow.appendChild(previews);
    insertAfter(slideshow, linklist);

    let links = linklist.getElementsByTagName('a');
    let link1MoveInstance = new MoveElement('preview', -100, 0, 10);
    let link2MoveInstance = new MoveElement('preview', -200, 0, 10);
    let link3MoveInstance = new MoveElement('preview', -300, 0, 10);
    links[0].onmouseover = function(){
        link1MoveInstance.clearMove();
        link2MoveInstance.clearMove();
        link3MoveInstance.clearMove();
        link1MoveInstance.move();
    };
    links[1].onmouseover = function(){
        link1MoveInstance.clearMove();
        link2MoveInstance.clearMove();
        link3MoveInstance.clearMove();
        link2MoveInstance.move();
    };
    links[2].onmouseover = function(){
        link1MoveInstance.clearMove();
        link2MoveInstance.clearMove();
        link3MoveInstance.clearMove();
        link3MoveInstance.move();
    };
}

addLoadEvent(prepareSlideShow);