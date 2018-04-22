/**
 * insert a node after a node.
 * @param {Node} newNode 
 * @param {Node} targetNode 
 */
function insertAfter(newNode: Node, targetNode: Node){
    let parent = targetNode.parentNode;
    if(!parent){
        return;
    }
    if(parent.lastChild == targetNode){
        parent.appendChild(newNode);
    }else{
        parent.insertBefore(newNode, targetNode.nextSibling);
    }
}

export default insertAfter;