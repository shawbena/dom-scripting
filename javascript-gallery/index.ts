function showPic(whichPic: HTMLAnchorElement): void {
    let source = whichPic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    let description = document.getElementById('description');
    placeholder && placeholder.setAttribute('src', source as string);
    if(description){
        if(description.firstChild){
            description.firstChild.nodeValue = whichPic.getAttribute('title');
        }
    }
}
console.log();
export default () => {};
