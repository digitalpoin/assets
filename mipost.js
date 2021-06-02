function openNav() {
    document.getElementById("myTopnav").style.left = "0"
}

function closeNav() {
    document.getElementById("myTopnav").style.left = "-250px"
}

function menuoverlayOn() {
    document.getElementById("menuoverlay").style.display = "block"
}

function menuoverlayOff() {
    document.getElementById("menuoverlay").style.display = "none"
}

function addClassBody() {
    var t = document.body,
        e = "flow"; - 1 == t.className.split(" ").indexOf(e) && (t.className += " " + e)
}

function removeClassBody() {
    var t = document.body;
    t.className = t.className.replace(/\bflow\b/g, "")
}

function jump(t) {
    t = document.getElementById(t).offsetTop;
    window.scrollTo(0, t)
}

function scrollFunction() {
    200 < document.body.scrollTop || 200 < document.documentElement.scrollTop ? document.getElementById("backToTop").style.display = "block" : document.getElementById("backToTop").style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

function videoPlay(t) {
    return t.innerHTML = t.innerHTML.replace("\x3c!--", "").replace("--\x3e", ""), t.onclick = null, !1
}
for (var randomRandomIndex, showRandomPost, randomRelatedIndex, showRelatedPost, btns = document.getElementsByClassName("dropbtn"), i = 0; i < btns.length; i++) btns[i].addEventListener("click", function() {
    var t = document.getElementsByClassName("active");
    0 < t.length && (t[0].className = t[0].className.replace(" active", "")), this.className += " active"
});
window.onclick = function(t) {
        if (!t.target.matches(".dropbtn"))
            for (var e = document.getElementsByClassName("dropbtn"), a = 0; a < e.length; a++) {
                var n = e[a];
                n.classList.contains("active") && n.classList.remove("active")
            }
    };
for (var imgEl = document.querySelectorAll(".post-body img"), i = 0; i < imgEl.length; i++) imgEl[i].getAttribute("src") && (imgEl[i].setAttribute("data-src", imgEl[i].getAttribute("src")), imgEl[i].removeAttribute("src"), imgEl[i].className += " lazyload");
! function(t) {
    var e = function(d, R) {
        "use strict";
        var $, F;
        if (function() {
                var t, e = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                F = d.lazySizesConfig || d.lazysizesConfig || {};
                for (t in e) t in F || (F[t] = e[t])
            }(), !R || !R.getElementsByClassName) return {
            init: function() {},
            cfg: F,
            noSupport: !0
        };
        var H = R.documentElement,
            c = d.Date,
            n = d.HTMLPictureElement,
            O = "addEventListener",
            j = "getAttribute",
            W = d[O],
            Q = d.setTimeout,
            o = d.requestAnimationFrame || Q,
            r = d.requestIdleCallback,
            D = /^picture$/i,
            i = ["load", "error", "lazyincluded", "_lazyloaded"],
            a = {},
            U = Array.prototype.forEach,
            V = function(t, e) {
                return a[e] || (a[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), a[e].test(t[j]("class") || "") && a[e]
            },
            q = function(t, e) {
                V(t, e) || t.setAttribute("class", (t[j]("class") || "").trim() + " " + e)
            },
            G = function(t, e) {
                var a;
                (a = V(t, e)) && t.setAttribute("class", (t[j]("class") || "").replace(a, " "))
            },
            K = function(e, a, t) {
                var n = t ? O : "removeEventListener";
                t && K(e, a), i.forEach(function(t) {
                    e[n](t, a)
                })
            },
            X = function(t, e, a, n, i) {
                var l = R.createEvent("Event");
                return a || (a = {}), a.instance = $, l.initEvent(e, !n, !i), l.detail = a, t.dispatchEvent(l), l
            },
            J = function(t, e) {
                var a;
                !n && (a = d.picturefill || F.pf) ? (e && e.src && !t[j]("srcset") && t.setAttribute("srcset", e.src), a({
                    reevaluate: !0,
                    elements: [t]
                })) : e && e.src && (t.src = e.src)
            },
            Y = function(t, e) {
                return (getComputedStyle(t, null) || {})[e]
            },
            s = function(t, e, a) {
                for (a = a || t.offsetWidth; a < F.minSize && e && !t._lazysizesWidth;) a = e.offsetWidth, e = e.parentNode;
                return a
            },
            Z = function() {
                var a, n, e = [],
                    i = [],
                    l = e,
                    s = function() {
                        var t = l;
                        for (l = e.length ? i : e, a = !0, n = !1; t.length;) t.shift()();
                        a = !1
                    },
                    t = function(t, e) {
                        a && !e ? t.apply(this, arguments) : (l.push(t), n || (n = !0, (R.hidden ? Q : o)(s)))
                    };
                return t._lsFlush = s, t
            }(),
            tt = function(a, t) {
                return t ? function() {
                    Z(a)
                } : function() {
                    var t = this,
                        e = arguments;
                    Z(function() {
                        a.apply(t, e)
                    })
                }
            },
            et = function(t) {
                var a, n = 0,
                    i = F.throttleDelay,
                    l = F.ricTimeout,
                    e = function() {
                        a = !1, n = c.now(), t()
                    },
                    s = r && l > 49 ? function() {
                        r(e, {
                            timeout: l
                        }), l !== F.ricTimeout && (l = F.ricTimeout)
                    } : tt(function() {
                        Q(e)
                    }, !0);
                return function(t) {
                    var e;
                    (t = !0 === t) && (l = 33), a || (a = !0, e = i - (c.now() - n), 0 > e && (e = 0), t || 9 > e ? s() : Q(s, e))
                }
            },
            at = function(t) {
                var e, a, n = 99,
                    i = function() {
                        e = null, t()
                    },
                    l = function() {
                        var t = c.now() - a;
                        n > t ? Q(l, n - t) : (r || i)(i)
                    };
                return function() {
                    a = c.now(), e || (e = Q(l, n))
                }
            },
            t = function() {
                var p, h, m, f, t, g, y, b, v, A, z, w, l = /^img$/i,
                    u = /^iframe$/i,
                    C = "onscroll" in d && !/(gle|ing)bot/.test(navigator.userAgent),
                    E = 0,
                    k = 0,
                    S = 0,
                    T = -1,
                    x = function(t) {
                        S--, (!t || 0 > S || !t.target) && (S = 0)
                    },
                    L = function(t) {
                        return null == w && (w = "hidden" == Y(R.body, "visibility")), w || "hidden" != Y(t.parentNode, "visibility") && "hidden" != Y(t, "visibility")
                    },
                    B = function(t, e) {
                        var a, n = t,
                            i = L(t);
                        for (b -= e, z += e, v -= e, A += e; i && (n = n.offsetParent) && n != R.body && n != H;)(i = (Y(n, "opacity") || 1) > 0) && "visible" != Y(n, "overflow") && (a = n.getBoundingClientRect(), i = A > a.left && v < a.right && z > a.top - 1 && b < a.bottom + 1);
                        return i
                    },
                    e = function() {
                        var t, e, a, n, i, l, s, o, r, d, c, m, u = $.elements;
                        if ((f = F.loadMode) && 8 > S && (t = u.length)) {
                            for (e = 0, T++; t > e; e++)
                                if (u[e] && !u[e]._lazyRace)
                                    if (!C || $.prematureUnveil && $.prematureUnveil(u[e])) M(u[e]);
                                    else if ((o = u[e][j]("data-expand")) && (l = 1 * o) || (l = k), d || (d = !F.expand || F.expand < 1 ? H.clientHeight > 500 && H.clientWidth > 500 ? 500 : 370 : F.expand, $._defEx = d, c = d * F.expFactor, m = F.hFac, w = null, c > k && 1 > S && T > 2 && f > 2 && !R.hidden ? (k = c, T = 0) : k = f > 1 && T > 1 && 6 > S ? d : E), r !== l && (g = innerWidth + l * m, y = innerHeight + l, s = -1 * l, r = l), a = u[e].getBoundingClientRect(), (z = a.bottom) >= s && (b = a.top) <= y && (A = a.right) >= s * m && (v = a.left) <= g && (z || A || v || b) && (F.loadHidden || L(u[e])) && (h && 3 > S && !o && (3 > f || 4 > T) || B(u[e], l))) {
                                if (M(u[e]), i = !0, S > 9) break
                            } else !i && h && !n && 4 > S && 4 > T && f > 2 && (p[0] || F.preloadAfterLoad) && (p[0] || !o && (z || A || v || b || "auto" != u[e][j](F.sizesAttr))) && (n = p[0] || u[e]);
                            n && !i && M(n)
                        }
                    },
                    a = et(e),
                    N = function(t) {
                        var e = t.target;
                        return e._lazyCache ? void delete e._lazyCache : (x(t), q(e, F.loadedClass), G(e, F.loadingClass), K(e, P), X(e, "lazyloaded"), void 0)
                    },
                    n = tt(N),
                    P = function(t) {
                        n({
                            target: t.target
                        })
                    },
                    _ = function(e, a) {
                        try {
                            e.contentWindow.location.replace(a)
                        } catch (t) {
                            e.src = a
                        }
                    },
                    I = function(t) {
                        var e, a = t[j](F.srcsetAttr);
                        (e = F.customMedia[t[j]("data-media") || t[j]("media")]) && t.setAttribute("media", e), a && t.setAttribute("srcset", a)
                    },
                    s = tt(function(e, t, a, n, i) {
                        var l, s, o, r, d, c;
                        (d = X(e, "lazybeforeunveil", t)).defaultPrevented || (n && (a ? q(e, F.autosizesClass) : e.setAttribute("sizes", n)), s = e[j](F.srcsetAttr), l = e[j](F.srcAttr).replace(/.*?:\/\//g, "https://cdn.statically.io/img/"), i && (o = e.parentNode, r = o && D.test(o.nodeName || "")), c = t.firesLoad || "src" in e && (s || l || r), d = {
                            target: e
                        }, q(e, F.loadingClass), c && (clearTimeout(m), m = Q(x, 2500), K(e, P, !0)), r && U.call(o.getElementsByTagName("source"), I), s ? e.setAttribute("srcset", s) : l && !r && (u.test(e.nodeName) ? _(e, l) : e.src = l), i && (s || r) && J(e, {
                            src: l
                        })), e._lazyRace && delete e._lazyRace, G(e, F.lazyClass), Z(function() {
                            var t = e.complete && e.naturalWidth > 1;
                            c && !t || (t && q(e, "ls-is-cached"), N(d), e._lazyCache = !0, Q(function() {
                                "_lazyCache" in e && delete e._lazyCache
                            }, 9)), "lazy" == e.loading && S--
                        }, !0)
                    }),
                    M = function(t) {
                        if (!t._lazyRace) {
                            var e, a = l.test(t.nodeName),
                                n = a && (t[j](F.sizesAttr) || t[j]("sizes")),
                                i = "auto" == n;
                            (!i && h || !a || !t[j]("src") && !t.srcset || t.complete || V(t, F.errorClass) || !V(t, F.lazyClass)) && (e = X(t, "lazyunveilread").detail, i && nt.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, S++, s(t, e, i, n, a))
                        }
                    },
                    i = at(function() {
                        F.loadMode = 3, a()
                    }),
                    o = function() {
                        3 == F.loadMode && (F.loadMode = 2), i()
                    },
                    r = function() {
                        if (!h) {
                            if (c.now() - t < 999) return void Q(r, 999);
                            h = !0, F.loadMode = 3, a(), W("scroll", o, !0)
                        }
                    };
                return {
                    _: function() {
                        t = c.now(), $.elements = R.getElementsByClassName(F.lazyClass), p = R.getElementsByClassName(F.lazyClass + " " + F.preloadClass), W("scroll", a, !0), W("resize", a, !0), d.MutationObserver ? new MutationObserver(a).observe(H, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (H[O]("DOMNodeInserted", a, !0), H[O]("DOMAttrModified", a, !0), setInterval(a, 999)), W("hashchange", a, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) {
                            R[O](t, a, !0)
                        }), /d$|^c/.test(R.readyState) ? r() : (W("load", r), R[O]("DOMContentLoaded", a), Q(r, 2e4)), $.elements.length ? (e(), Z._lsFlush()) : a()
                    },
                    checkElems: a,
                    unveil: M,
                    _aLSL: o
                }
            }(),
            nt = function() {
                var a, l = tt(function(t, e, a, n) {
                        var i, l, s;
                        if (t._lazysizesWidth = n, n += "px", t.setAttribute("sizes", n), D.test(e.nodeName || ""))
                            for (i = e.getElementsByTagName("source"), l = 0, s = i.length; s > l; l++) i[l].setAttribute("sizes", n);
                        a.detail.dataAttr || J(t, a.detail)
                    }),
                    n = function(t, e, a) {
                        var n, i = t.parentNode;
                        i && (a = s(t, i, a), n = X(t, "lazybeforesizes", {
                            width: a,
                            dataAttr: !!e
                        }), n.defaultPrevented || (a = n.detail.width) && a !== t._lazysizesWidth && l(t, i, n, a))
                    },
                    t = function() {
                        var t, e = a.length;
                        if (e)
                            for (t = 0; e > t; t++) n(a[t])
                    },
                    e = at(t);
                return {
                    _: function() {
                        a = R.getElementsByClassName(F.autosizesClass), W("resize", e)
                    },
                    checkElems: e,
                    updateElem: n
                }
            }(),
            e = function() {
                !e.i && R.getElementsByClassName && (e.i = !0, nt._(), t._())
            };
        return Q(function() {
            F.init && e()
        }), $ = {
            cfg: F,
            autoSizer: nt,
            loader: t,
            init: e,
            uP: J,
            aC: q,
            rC: G,
            hC: V,
            fire: X,
            gW: s,
            rAF: Z
        }
    }(t, t.document);
    t.lazySizes = e, "object" == typeof module && module.exports && (module.exports = e)
}("undefined" != typeof window ? window : {});
