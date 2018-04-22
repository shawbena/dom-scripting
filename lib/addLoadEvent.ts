/**
 * add window.onload event handler
 */
function addLoadEvent(fun: any) {
    // 将 fun 约束为函数类型
    let oldonload: () => any = window.onload as { (): () => any };
    if (typeof oldonload != 'function') {
        window.onload = fun;
    } else {
        window.onload = function (this: Window) {
            oldonload();
            fun();
        };
    }
}

export default addLoadEvent;