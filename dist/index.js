Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function scrollToTop(smooth) {
    if (smooth === void 0) { smooth = false; }
    if (smooth) {
        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        catch (e) {
            document.documentElement.scrollTop = 0;
        }
    }
    else {
        document.documentElement.scrollTop = 0;
    }
}
var ScrollToTop = function (_a) {
    var _b = _a.top, top = _b === void 0 ? 20 : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? "black" : _d, _e = _a.smooth, smooth = _e === void 0 ? false : _e, props = __rest(_a, ["top", "className", "color", "smooth"]);
    var _f = React.useState(false), visible = _f[0], setVisible = _f[1];
    React.useEffect(function () {
        document.addEventListener("scroll", onScroll);
        // Remove listener on unmount
        return function () { return document.removeEventListener("scroll", onScroll); };
    }, []);
    var onScroll = function () {
        setVisible(document.documentElement.scrollTop > top);
    };
    return (React__default.createElement(React__default.Fragment, null, visible && (React__default.createElement("button", __assign({ className: className + " scroll-to-top", onClick: function () { return scrollToTop(smooth); } }, props),
        React__default.createElement("svg", { fill: color, viewBox: "0 0 256 256" },
            React__default.createElement("path", { d: "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z" }))))));
};

exports.default = ScrollToTop;
//# sourceMappingURL=index.js.map
