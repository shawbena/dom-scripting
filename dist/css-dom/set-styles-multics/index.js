"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../../lib");
require("./index.sass");
function stripTables() {
    if (!document.getElementsByTagName) {
        return;
    }
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName('tr');
        for (var i_1 = 0; i_1 < rows.length; i_1++) {
            if (odd) {
                rows[i_1].style.backgroundColor = '#ffc';
                odd = false;
            }
            else {
                rows[i_1].style.backgroundColor = '#fff';
                odd = true;
            }
        }
    }
}
function highlightRows() {
    if (!document.getElementsByTagName) {
        return;
    }
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = 'bold';
        };
        rows[i].onmouseout = function () {
            this.style.fontWeight = 'normal';
        };
    }
}
lib_1.addLoadEvent(stripTables);
lib_1.addLoadEvent(highlightRows);
