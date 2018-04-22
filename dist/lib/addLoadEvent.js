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
