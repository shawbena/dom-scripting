webpackJsonp([7],{

/***/ "+LAf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__("UKuM");
function positionMessage() {
    if (!document.getElementById) {
        return;
    }
    var elem = document.getElementById('message');
    var elem2 = document.getElementById('message2');
    if (elem) {
        elem.style.position = 'absolute';
        elem.style.left = '50px';
        elem.style.top = '100px';
        new lib_1.MoveElement('message', 200, 200, 10).move();
    }
    if (elem2) {
        elem2.style.position = 'absolute';
        elem2.style.left = '50px';
        elem2.style.top = '100px';
        new lib_1.MoveElement('message2', 200, 50, 10).move();
    }
}
lib_1.addLoadEvent(positionMessage);


/***/ }),

/***/ "UKuM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addLoadEvent_1 = __webpack_require__("rKFs");
exports.addLoadEvent = addLoadEvent_1.default;
var getNextElement_1 = __webpack_require__("fMmY");
exports.getNextElement = getNextElement_1.default;
var insertAfter_1 = __webpack_require__("hUos");
exports.insertAfter = insertAfter_1.default;
var moveElement_1 = __webpack_require__("UubQ");
exports.MoveElement = moveElement_1.default;


/***/ }),

/***/ "UubQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MoveElement = /** @class */ (function () {
    function MoveElement(eleId, finalX, finalY, interval) {
        this.movementTimeoutId = -9999;
        this.eleId = eleId;
        this.finalX = finalX;
        this.finalY = finalY;
        this.interval = interval;
    }
    MoveElement.prototype.clearMove = function () {
        clearTimeout(this.movementTimeoutId);
    };
    MoveElement.prototype.move = function () {
        var _this = this;
        if (!document.getElementById) {
            return;
        }
        var elem = document.getElementById(this.eleId);
        if (!elem) {
            return;
        }
        if (!elem.style.left) {
            elem.style.left = '0px';
        }
        if (!elem.style.top) {
            elem.style.top = '0px';
        }
        var xpos = parseInt(elem.style.left);
        var ypos = parseInt(elem.style.top);
        var delX = this.finalX - xpos;
        var delY = this.finalY - ypos;
        if (xpos == this.finalX && ypos == this.finalY) {
            return;
        }
        var speed = 15.0;
        // 向左或向右移动但没移动过目标
        if (delX <= 0 && xpos < this.finalX || delX > 0 && xpos > this.finalX) {
            xpos = this.finalX;
        }
        else {
            if (delX < 0) {
                xpos += Math.floor(delX / speed);
            }
            else {
                xpos += Math.ceil(delX / speed);
            }
        }
        if (delY < 0 && ypos < this.finalY || delY > 0 && ypos > this.finalY) {
            ypos = this.finalY;
        }
        else {
            if (delY < 0) {
                ypos += Math.floor(delY / speed);
            }
            else {
                ypos += Math.ceil(delY / speed);
            }
        }
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        this.movementTimeoutId = setTimeout(function () { return _this.move(); });
    };
    return MoveElement;
}());
exports.default = MoveElement;


/***/ }),

/***/ "fMmY":
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "hUos":
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "rKFs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * add window.onload event handler
 */
function addLoadEvent(fun) {
    // 将 fun 约束为函数类型
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = fun;
    }
    else {
        window.onload = function () {
            oldonload();
            fun();
        };
    }
}
exports.default = addLoadEvent;


/***/ })

},["+LAf"]);
//# sourceMappingURL=move_element.js.map