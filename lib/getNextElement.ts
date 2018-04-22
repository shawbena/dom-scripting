
/**
 * Get next Element.
 * @param node Node
 */
export default function getNextElement<T extends Element>(node: Node): T | null{
    if(node.nodeType === 1){
        return node as T;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }

    return null;
}