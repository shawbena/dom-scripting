$("#all_prd_counsel").show();
$("#all_prd_counsel").pager({
    pageNumber: a.pageNumber,
    pageCount: a.totalPage,
    pageSize: 3,
    text: {
        first: "|&lt;",
        pre: "&lt",
        next: "&gt;",
        last: "&gt;|"
    },
    item: ["first", "pre", "qpage", "next", "last", "quickPager"],
    callBack: ec.product.counselloadall
});