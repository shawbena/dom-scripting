"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * insert a node after a node.
 * @param {Node} newNode
 * @param {Node} targetNode
 */
function insertAfter(newNode, targetNode) {
    var parent = targetNode.parentNode;
    if (parent && parent.lastChild == targetNode) {
        parent.appendChild(newNode);
    }
    else {
        parent && parent.insertBefore(newNode, targetNode.nextSibling);
    }
}
exports.default = insertAfter;
