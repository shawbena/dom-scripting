"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get next Element.
 * @param node Node
 */
function getNextElement(node) {
    if (node.nodeType === 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
exports.default = getNextElement;
