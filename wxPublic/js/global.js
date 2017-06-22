function clickStat(t) {
    pgvSendClick({
        hottag: t
    })
}
function imgUrlAddHttp(t) {
    var i = t.trim();
    return 0 == i.indexOf("https") ? i.replace(/^https/, "http") : 0 != i.indexOf("http") && (i = "http:" + i),
    i
}
function setShareConfig(t, i, e, n, d, r, o, a) {
    var g = function() {
        var g = function() {
            WeixinJSBridge.on("menu:share:appmessage", function(t) {
                WeixinJSBridge.invoke("sendAppMessage", {
                    title: i,
                    desc: e,
                    link: r,
                    img_url: imgUrlAddHttp(n),
                    img_width: "120",
                    img_height: "120"
                }, function(t) {
                    "function" == typeof a && a()
                })
            }),
            WeixinJSBridge.on("menu:share:timeline", function(i) {
                WeixinJSBridge.invoke("shareTimeline", {
                    title: t,
                    desc: e,
                    link: d,
                    img_url: imgUrlAddHttp(n),
                    img_width: "120",
                    img_height: "120"
                }, function(t) {
                    "function" == typeof o && o()
                })
            })
        };
        return {
            init: g
        }
    }();
    "undefined" == typeof window.WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", g.init, !1) : g.init()
}
"function" == typeof pgvMain && pgvMain();
for (var stat_nodes = document.querySelectorAll("[data-stat]"), i = 0, len = stat_nodes.length; i < len; i++)
    stat_nodes[i].addEventListener("click", function(t) {
        clickStat(t.target.getAttribute("data-stat"))
    });
/*  |xGv00|58736ecce68b2eaf3799b9234ffe9c6e */
