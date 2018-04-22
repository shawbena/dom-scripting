function getTheStyle() {
    var elem = document.getElementById("elem-container");
    let styles = window.getComputedStyle(elem, null);
    var theCSSprop = styles.getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
}

function dumpComputedStyles(elem, prop) {
    var cs = window.getComputedStyle(elem, null);
    if (prop) {
        console.log(prop + " : " + cs.getPropertyValue(prop));
        return;
    }
    var len = cs.length;
    for (var i = 0; i < len; i++) {
        var style = cs[i];
        console.log(style + " : " + cs.getPropertyValue(style));
    }
    console.log(i);
}

var elem = document.getElementById("elem-container");
dumpComputedStyles(elem);
var h3 = document.querySelector('h3'); 
var h3AfterStyle = getComputedStyle(h3, ':after');
var result = h3AfterStyle.content;

console.log('the generated content is: ', result); // returns ' rocks!'
// getTheStyle();