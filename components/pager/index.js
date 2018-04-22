(function ($) {
    var d = function (a) {
        var b = /^\d*$/;
        return b.test(a)
    };
    $.fn.pager = function (option) {
        function Pager(option, $element) {
            this.render = function () {
                if (option.pageNumber > option.pageCount) {
                    return
                }
                var g = $("<ul></ul>");
                var item = option.item;
                for (var i = 0; i < item.length; i++) {
                    g.append(this.handler(item[i]))
                }
                return g
            };
            this.handler = function (item) {
                switch (j) {
                    case "recordCount":
                        var g = option.text.recordCount;
                        g = g.replace(/{#recordCount}/g, option.recordCount);
                        return $('<li class="recordCount">' + g + "</li>");
                    case "first":
                    case "pre":
                    case "next":
                    case "last":
                        return this.renderButton(item);
                    case "pageCount":
                        var g = option.text.pageCount;
                        g = g.replace(/{#pageCount}/g, option.pageCount);
                        return $('<li class="pageCount">' + g + "</li>");
                    case "qpage":
                        return this.renderQPages();
                    case "pageSizer":
                        return this.renderPageSizer();
                    case "quickPager":
                        return this.renderQuickPager();
                    default:
                        return '<li class="text">' + item + "</li>"
                }
            }
                ;
            this.renderButton = function (g) {
                var o = 1;
                var m = option.text[g];
                switch (g) {
                    case "first":
                        o = 1;
                        break;
                    case "pre":
                        o = option.pageNumber - 1;
                        break;
                    case "next":
                        o = option.pageNumber + 1;
                        break;
                    case "last":
                        o = option.pageCount;
                        break;
                    case "pageCount":
                        o = option.pageCount;
                        break
                }
                var p = new RegExp("{#" + g + "}", "gi");
                m = m.replace(p, o);
                var n = $('<li class="pgNext link ' + g + '">' + m + "</li>");
                if (g == "first" || g == "pre") {
                    option.pageNumber <= 1 ? n.addClass(g + "-empty") : n.bind("click", {
                        E: this
                    }, function (i) {
                        i.data.E.callBack(o)
                    })
                } else {
                    option.pageNumber >= option.pageCount ? n.addClass(g + "-empty") : n.bind("click", {
                        E: this
                    }, function (i) {
                        i.data.E.callBack(o)
                    })
                }
                return n
            }
                ;
            this.renderQPages = function () {
                var p = option.text.qpage;
                var m = $("<span class='qpages'></span>");
                var r = 1;
                var u = option.qpageSize;
                var v = parseInt(u / 2);
                if (option.pageNumber > v) {
                    r = option.pageNumber - v;
                    u = option.pageNumber + v
                }
                if (u > option.pageCount) {
                    r = option.pageCount - v * 2;
                    u = option.pageCount
                }
                if (r < 1) {
                    r = 1
                }
                for (var q = r; q <= u; q++) {
                    var k = $('<li class="page-number link">' + p.replace(/{#qpage}/g, q) + "</li>");
                    q == option.pageNumber ? k.addClass("pgCurrent") : k.bind("click", {
                        E: this
                    }, function (i) {
                        i.data.E.callBack(this.firstChild.data)
                    });
                    k.appendTo(m)
                }
                if (option.pageCount > option.qpageSize) {
                    var g = $('<li class="page-number link page-number-last">' + p.replace(/{#qpage}/g, option.pageCount) + "</li>");
                    var l = $('<li class="page-number link page-number-first">' + p.replace(/{#qpage}/g, "1") + "</li>");
                    option.pageNumber >= option.pageCount ? g.addClass("pgEmpty") : g.bind("click", {
                        E: this
                    }, function (i) {
                        i.data.E.callBack(option.pageCount)
                    });
                    var t = k.parent().find(".page-number").eq(0).text();
                    if (t > 1 && t == 2) {
                        l.bind("click", {
                            F: this
                        }, function (i) {
                            i.data.F.callBack("1")
                        });
                        l.prependTo(m)
                    } else {
                        if (t > 2) {
                            l.bind("click", {
                                F: this
                            }, function (i) {
                                i.data.F.callBack("1")
                            });
                            m.prepend('<li class="text">...</li>');
                            l.prependTo(m)
                        }
                    }
                    if (option.pageNumber < option.pageCount - 4) {
                        m.append('<li class="text">...</li>');
                        m.append(g)
                    }
                    var n = Number(g.parent().find(".page-number").eq(-2).text())
                        , s = Number(g.parent().find(".page-number").eq(-1).text());
                    if (n + 1 == s) {
                        g.prev(".text").remove()
                    }
                    if (n == s) {
                        g.prev(".text").remove();
                        g.remove()
                    }
                }
                return m
            }
                ;
            this.renderQuickPager = function () {
                if (option.pageCount <= 1) {
                    return null
                }
                var g = null;
                var i = $('<li class="text quickPager"></li>');
                if (option.pageCount <= 10) {
                    var m = "<select>";
                    for (var n = 1; n <= option.pageCount; n++) {
                        m += '<option value="' + n + '"';
                        if (n == option.pageNumber) {
                            m += " selected"
                        }
                        m += ">" + n + "</option>"
                    }
                    m += "</select>";
                    g = $(m);
                    g.bind("change", {
                        E: this
                    }, function (j) {
                        j.data.E.callBack($(this).attr("value"))
                    })
                } else {
                    g = $('<span class="fl">\u7b2c</span><div id="chatpage"><input id="quickPager" class="pagenum fl" value="' + option.pageNumber + '" style="width:' + (option.pageNumber.toString().length + 1) * 10 + 'px;"><a id="enter" class="enter fl" href="javascript:void(0)"></a></div><span class="fl">&nbsp;/' + option.pageCount + "&nbsp;\u9875</span>");
                    g.find("#quickPager").bind("keypress", {
                        E: this
                    }, function (k) {
                        var j = k.data.E;
                        if (k.keyCode == 13) {
                            var l = $(this).attr("value");
                            if (!d(l)) {
                                alert("\u8bf7\u8f93\u5165\u6570\u5b57\uff01");
                                return false
                            }
                            if (parseInt(l) > option.pageCount) {
                                alert("\u6700\u5927\u9875\u6570\u4e3a" + option.pageCount + "\uff01");
                                return false
                            }
                            j.callBack(l);
                            return false
                        }
                    });
                    g.find("a#enter").bind("click", {
                        E: this
                    }, function (k) {
                        var j = k.data.E;
                        var l = g.find("#quickPager").attr("value");
                        if (!d(l)) {
                            alert("\u8bf7\u8f93\u5165\u6570\u5b57\uff01");
                            return false
                        }
                        if (parseInt(l) > option.pageCount) {
                            alert("\u6700\u5927\u9875\u6570\u4e3a" + option.pageCount + "\uff01");
                            return false
                        }
                        j.callBack(l);
                        return false
                    })
                }
                i.append(g);
                return i
            }
                ;
            this.renderPageSizer = function () {
                var g;
                if (option.rowList) {
                    var o = option.text.pageSizer;
                    o = o.replace(/{#pageSizer}/g, '</span><div id="select" class="fl"></div><span class="fl">');
                    g = $('<li class="text pageSizer"><span class="fl">' + o + "</span></li>");
                    var p = '<select name="pageSize">';
                    for (var i = 0; i < option.rowList.length; i++) {
                        p += '<option value="' + option.rowList[i] + '"';
                        if (option.rowList[i] == option.pageSize) {
                            p += " selected"
                        }
                        p += ">" + option.rowList[i] + "</option>"
                    }
                    p += "</select>";
                    var n = $(p);
                    n.bind("change", {
                        E: this
                    }, function (j) {
                        if (option.pageSize == this.value) {
                            return
                        }
                        option.pageSize = this.value;
                        j.data.E.callBack(option.pageNumber)
                    });
                    $("#select", g).append(n)
                }
                return g
            }
                ;
            this.callBack = function (g) {
                if (typeof (g) != "number") {
                    g = parseInt(g)
                }
                if (g) {
                    option.pageNumber = g
                }
                if (typeof (option.callBack) == "function") {
                    option.callBack(option)
                }
            }
                ;
            $element.empty().append(this.render())
        }
        var defaultOption = {
            pageNumber: 1,
            pageCount: 1,
            pageSize: null,
            recordCount: 0,
            qpageSize: 9,
            rowList: null,
            text: {
                recordCount: "\u603b\u6570\u76ee:{#recordCount}",
                first: "\u9996\u9875",
                pre: "\u4e0a\u4e00\u9875",
                qpage: "{#qpage}",
                pageCount: "{#pageCount}",
                next: "\u4e0b\u4e00\u9875",
                last: "\u672b\u9875",
                pageSizer: "\u6bcf\u9875{#pageSizer}/\u884c"
            },
            item: ["recordCount", "first", "pre", "qpage", "next", "quickPager"]
        };
        option.text = $.extend({}, defaultOption.text, option.text);
        option = $.extend({}, defaultOption, option);

        // this jquery instancce
        return this.each(function () {
            new Pager(option, $(this))
        })
    }
}
)(jQuery);
