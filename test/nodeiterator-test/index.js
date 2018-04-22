var nodeIterator = document.createNodeIterator(
    document.body, NodeFilter.SHOW_ELEMENT, 
    {
        acceptNode(node){
            return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

var pars = [];
var currentNode;
while(currentNode = nodeIterator.nextNode()){
    pars.push(currentNode);
}

console.log(pars);