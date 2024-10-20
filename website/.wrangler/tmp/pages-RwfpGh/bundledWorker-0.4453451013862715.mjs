// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var se = Object.create;
var N = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ne = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ie = Object.prototype.hasOwnProperty;
var T = (e, t) => () => (e && (t = e(e = 0)), t);
var U = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var oe = (e, t, a, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of ne(t))
      !ie.call(e, r) && r !== a && N(e, r, { get: () => t[r], enumerable: !(s = ae(t, r)) || s.enumerable });
  return e;
};
var V = (e, t, a) => (a = e != null ? se(re(e)) : {}, oe(t || !e || !e.__esModule ? N(a, "default", { value: e, enumerable: true }) : a, e));
var g;
var u = T(() => {
  g = { collectedLocales: [] };
});
var f;
var l = T(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(.*).json$", dest: "/$1", override: true, continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", override: true, continue: true }, { continue: true, src: "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$", missing: [{ type: "header", key: "x-prerender-revalidate", value: "20e8f734018768562c45d009c8a2f9f4" }], middlewarePath: "src/middleware", middlewareRawSrc: ["/"], override: true }, { continue: true, src: "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(en|zh))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(.json)?[\\/#\\?]?$", missing: [{ type: "header", key: "x-prerender-revalidate", value: "20e8f734018768562c45d009c8a2f9f4" }], middlewarePath: "src/middleware", middlewareRawSrc: ["/(en|zh)/:path*"], override: true }, { src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/AQYR4rK_NigLrMk4Vwbqj/index.json", continue: true, override: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/AQYR4rK_NigLrMk4Vwbqj/$1.json", continue: true, override: true }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(.*).json$", dest: "/$1", continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", continue: true }, { src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/AQYR4rK_NigLrMk4Vwbqj/index.json", continue: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/AQYR4rK_NigLrMk4Vwbqj/$1.json", continue: true }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(?<nxtPlocale>[^/]+?)(?:/)?.json$", dest: "/[locale]?nxtPlocale=$nxtPlocale" }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(?<nxtPlocale>[^/]+?)/contact\\-us(?:/)?.json$", dest: "/[locale]/contact-us?nxtPlocale=$nxtPlocale" }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(?<nxtPlocale>[^/]+?)/(?<nxtPrest>.+?)(?:/)?.json$", dest: "/[locale]/[...rest]?nxtPlocale=$nxtPlocale&nxtPrest=$nxtPrest" }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(?<nxtPnot_found>.+?)(?:/)?.json$", dest: "/[...not_found]?nxtPnot_found=$nxtPnot_found" }, { src: "^/(?<nxtPlocale>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/[locale].rsc?nxtPlocale=$nxtPlocale" }, { src: "^/(?<nxtPlocale>[^/]+?)(?:/)?$", dest: "/[locale]?nxtPlocale=$nxtPlocale" }, { src: "^/(?<nxtPlocale>[^/]+?)/contact\\-us(?:\\.rsc)(?:/)?$", dest: "/[locale]/contact-us.rsc?nxtPlocale=$nxtPlocale" }, { src: "^/(?<nxtPlocale>[^/]+?)/contact\\-us(?:/)?$", dest: "/[locale]/contact-us?nxtPlocale=$nxtPlocale" }, { src: "^/(?<nxtPlocale>[^/]+?)/(?<nxtPrest>.+?)(?:\\.rsc)(?:/)?$", dest: "/[locale]/[...rest].rsc?nxtPlocale=$nxtPlocale&nxtPrest=$nxtPrest" }, { src: "^/(?<nxtPlocale>[^/]+?)/(?<nxtPrest>.+?)(?:/)?$", dest: "/[locale]/[...rest]?nxtPlocale=$nxtPlocale&nxtPrest=$nxtPrest" }, { src: "^/(?<nxtPnot_found>.+?)(?:\\.rsc)(?:/)?$", dest: "/[...not_found].rsc?nxtPnot_found=$nxtPnot_found" }, { src: "^/(?<nxtPnot_found>.+?)(?:/)?$", dest: "/[...not_found]?nxtPnot_found=$nxtPnot_found" }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(.*).json$", headers: { "x-nextjs-matched-path": "/$1" }, continue: true, override: true }, { src: "^/_next/data/AQYR4rK_NigLrMk4Vwbqj/(.*).json$", dest: "__next_data_catchall" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|AQYR4rK_NigLrMk4Vwbqj)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" }, "__next_data_catchall.json": { path: "__next_data_catchall", contentType: "application/json" } }, framework: { version: "14.2.9" }, crons: [] };
});
var m;
var p = T(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/__next_data_catchall.json": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/AQYR4rK_NigLrMk4Vwbqj/_buildManifest.js": { type: "static" }, "/_next/static/AQYR4rK_NigLrMk4Vwbqj/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/176-b30243ac9aeea707.js": { type: "static" }, "/_next/static/chunks/183-e73ea374e2c8e4b9.js": { type: "static" }, "/_next/static/chunks/334.eabb67b14acaae8d.js": { type: "static" }, "/_next/static/chunks/526-ed74e2e6169b85bd.js": { type: "static" }, "/_next/static/chunks/740-0c8ca9638233ffcd.js": { type: "static" }, "/_next/static/chunks/759.6326f1a77a3c0a97.js": { type: "static" }, "/_next/static/chunks/app/[...not_found]/page-42bd0cc1d4c8d297.js": { type: "static" }, "/_next/static/chunks/app/[locale]/[...rest]/page-d37b129c1c8a08e9.js": { type: "static" }, "/_next/static/chunks/app/[locale]/contact-us/page-b3b7e0b458765317.js": { type: "static" }, "/_next/static/chunks/app/[locale]/layout-c5ae8cdfb6bc731f.js": { type: "static" }, "/_next/static/chunks/app/[locale]/not-found-313eb944d89c7031.js": { type: "static" }, "/_next/static/chunks/app/[locale]/page-db7e80f0b509c4fd.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-126175630e6603e4.js": { type: "static" }, "/_next/static/chunks/app/layout-297322924acf61db.js": { type: "static" }, "/_next/static/chunks/app/not-found-c78af33dbd1d318b.js": { type: "static" }, "/_next/static/chunks/fd9d1056-62aaf4b921c84028.js": { type: "static" }, "/_next/static/chunks/framework-f66176bb897dc684.js": { type: "static" }, "/_next/static/chunks/main-app-6856ecd120b754d5.js": { type: "static" }, "/_next/static/chunks/main-bbae615c4995fcc0.js": { type: "static" }, "/_next/static/chunks/pages/_app-6a626577ffa902a4.js": { type: "static" }, "/_next/static/chunks/pages/_error-1be831200e60c5c0.js": { type: "static" }, "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js": { type: "static" }, "/_next/static/chunks/webpack-47c9505c31a5b1f3.js": { type: "static" }, "/_next/static/css/2c9470ebc8b75834.css": { type: "static" }, "/_next/static/css/64ad5d3d9c46fed7.css": { type: "static" }, "/_next/static/css/88eb4b264255f033.css": { type: "static" }, "/_next/static/css/93b2ee90759a295f.css": { type: "static" }, "/_next/static/media/1.e727d514.png": { type: "static" }, "/_next/static/media/10.f3f65f19.jpg": { type: "static" }, "/_next/static/media/2.b750e6e2.png": { type: "static" }, "/_next/static/media/3.84c23bac.png": { type: "static" }, "/_next/static/media/4.1f6ff5f5.png": { type: "static" }, "/_next/static/media/5.e0ae8034.png": { type: "static" }, "/_next/static/media/6.e2c0f75c.png": { type: "static" }, "/_next/static/media/7.ddc82552.png": { type: "static" }, "/_next/static/media/8.6e6588dd.png": { type: "static" }, "/_next/static/media/9.fa8fba72.png": { type: "static" }, "/_next/static/media/cross.aaf1255e.svg": { type: "static" }, "/_next/static/media/hamburger.6b7ca682.svg": { type: "static" }, "/image/Demo2/1.png": { type: "static" }, "/image/Demo2/10.jpg": { type: "static" }, "/image/Demo2/2.png": { type: "static" }, "/image/Demo2/3.png": { type: "static" }, "/image/Demo2/4.png": { type: "static" }, "/image/Demo2/5.png": { type: "static" }, "/image/Demo2/6.png": { type: "static" }, "/image/Demo2/7.png": { type: "static" }, "/image/Demo2/8.png": { type: "static" }, "/image/Demo2/9.png": { type: "static" }, "/image/Demo2/ani1.MP4": { type: "static" }, "/image/Icon.jpg": { type: "static" }, "/image/meter.jpg": { type: "static" }, "/image/vision/1.jpg": { type: "static" }, "/image/vision/2.jpg": { type: "static" }, "/image/vision/3.jpg": { type: "static" }, "/image/vision/phone.png": { type: "static" }, "/nav.js": { type: "static" }, "/svg/cross.svg": { type: "static" }, "/svg/hamburger.svg": { type: "static" }, "/svg/next.svg": { type: "static" }, "/svg/vercel.svg": { type: "static" }, "/[...not_found]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[...not_found].func.js" }, "/[...not_found].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[...not_found].func.js" }, "/[locale]/[...rest]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale]/[...rest].func.js" }, "/[locale]/[...rest].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale]/[...rest].func.js" }, "/[locale]/contact-us": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale]/contact-us.func.js" }, "/[locale]/contact-us.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale]/contact-us.func.js" }, "/[locale]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale].func.js" }, "/[locale].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/[locale].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/__next_data_catchall": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, "src/middleware": { type: "middleware", entrypoint: "__next-on-pages-dist__/functions/src/middleware.func.js" } };
});
var $ = U((Ge, D) => {
  "use strict";
  u();
  l();
  p();
  function R(e, t) {
    e = String(e || "").trim();
    let a = e, s, r = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      r += e.substring(o + 1), e = e.substring(1, o);
    }
    let n = 0;
    return e = le(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let d = o.substring(c[0].length, o.length - 1);
        return t && (t[n] = c[1]), n++, `(${d})`;
      }
      return o.substring(0, 3) === "(?:" || n++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(e, r, a, r, s);
  }
  function le(e, t) {
    let a = 0, s = 0, r = false;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      if (r) {
        r = false;
        continue;
      }
      switch (n) {
        case "(":
          s === 0 && (a = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = a === 0 ? "" : e.substring(0, a), d = e.substring(o), h = String(t(e.substring(a, o)));
            e = c + h + d, i = a;
          }
          break;
        case "\\":
          r = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(s, r, i, n, o) {
        super(s, r), this.pcrePattern = i, this.pcreFlags = n, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  D.exports = R;
});
var X = U((H) => {
  "use strict";
  u();
  l();
  p();
  H.parse = be;
  H.serialize = ve;
  var we = Object.prototype.toString, E = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function be(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = t || {}, r = s.decode || Pe, i = 0; i < e.length; ) {
      var n = e.indexOf("=", i);
      if (n === -1)
        break;
      var o = e.indexOf(";", i);
      if (o === -1)
        o = e.length;
      else if (o < n) {
        i = e.lastIndexOf(";", n - 1) + 1;
        continue;
      }
      var c = e.slice(i, n).trim();
      if (a[c] === void 0) {
        var d = e.slice(n + 1, o).trim();
        d.charCodeAt(0) === 34 && (d = d.slice(1, -1)), a[c] = ke(d, r);
      }
      i = o + 1;
    }
    return a;
  }
  function ve(e, t, a) {
    var s = a || {}, r = s.encode || Se;
    if (typeof r != "function")
      throw new TypeError("option encode is invalid");
    if (!E.test(e))
      throw new TypeError("argument name is invalid");
    var i = r(t);
    if (i && !E.test(i))
      throw new TypeError("argument val is invalid");
    var n = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      n += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!E.test(s.domain))
        throw new TypeError("option domain is invalid");
      n += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!E.test(s.path))
        throw new TypeError("option path is invalid");
      n += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!Ce(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      n += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (n += "; HttpOnly"), s.secure && (n += "; Secure"), s.priority) {
      var d = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (d) {
        case "low":
          n += "; Priority=Low";
          break;
        case "medium":
          n += "; Priority=Medium";
          break;
        case "high":
          n += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var h = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (h) {
        case true:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return n;
  }
  function Pe(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function Se(e) {
    return encodeURIComponent(e);
  }
  function Ce(e) {
    return we.call(e) === "[object Date]" || e instanceof Date;
  }
  function ke(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
u();
l();
p();
u();
l();
p();
u();
l();
p();
var b = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
l();
p();
u();
l();
p();
u();
l();
p();
u();
l();
p();
var q = V($());
function C(e, t, a) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i", r = [];
  return { match: (0, q.default)(`%${e}%${s}`, r).exec(t), captureGroupKeys: r };
}
function v(e, t, a, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (r, i) => {
    let n = a.indexOf(i);
    return s && n === -1 ? r : (n === -1 ? t[parseInt(i, 10)] : t[n + 1]) || "";
  });
}
function I(e, { url: t, cookies: a, headers: s, routeDest: r }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? j(e.value, s.get(e.key), r) : { valid: s.has(e.key) };
    case "cookie": {
      let i = a[e.key];
      return i && e.value !== void 0 ? j(e.value, i, r) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? j(e.value, t.searchParams.get(e.key), r) : { valid: t.searchParams.has(e.key) };
  }
}
function j(e, t, a) {
  let { match: s, captureGroupKeys: r } = C(e, t);
  return a && s && r.length ? { valid: !!s, newRouteDest: v(a, s, r, { namedOnly: true }) } : { valid: !!s };
}
u();
l();
p();
function F(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", b), new Request(e, { headers: t });
}
u();
l();
p();
function _(e, t, a) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [r, i] of s) {
    let n = r.toLowerCase(), o = a?.match ? v(i, a.match, a.captureGroupKeys) : i;
    n === "set-cookie" ? e.append(n, o) : e.set(n, o);
  }
}
function P(e) {
  return /^https?:\/\//.test(e);
}
function x(e, t) {
  for (let [a, s] of t.entries()) {
    let r = /^nxtP(.+)$/.exec(a), i = /^nxtI(.+)$/.exec(a);
    r?.[1] ? (e.set(a, s), e.set(r[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(a) || !!s && !e.getAll(a).includes(s)) && e.append(a, s);
  }
}
function L(e, t) {
  let a = new URL(t, e.url);
  return x(a.searchParams, new URL(e.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, e);
}
function S(e) {
  return new Response(e.body, e);
}
function A(e) {
  return e.split(",").map((t) => {
    let [a, s] = t.split(";"), r = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(r) ? 1 : r];
  }).sort((t, a) => a[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
u();
l();
p();
function O(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function k(e, { request: t, assetsFetcher: a, ctx: s }, { path: r, searchParams: i }) {
  let n, o = new URL(t.url);
  x(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let d = await import(e.entrypoint);
        try {
          n = await d.default(c, s);
        } catch (h) {
          let y = h;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        n = S(await a.fetch(L(c, e.path ?? r))), e.headers && _(n.headers, e.headers);
        break;
      }
      case "static": {
        n = await a.fetch(L(c, r));
        break;
      }
      default:
        n = new Response("Not Found", { status: 404 });
    }
  } catch (d) {
    return console.error(d), new Response("Internal Server Error", { status: 500 });
  }
  return S(n);
}
function B(e, t) {
  let a = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(a) || !e.endsWith(s) ? false : e.slice(a.length, -s.length).split("|").every((i) => t.has(i));
}
u();
l();
p();
function pe(e, { protocol: t, hostname: a, port: s, pathname: r }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(a).test(e.hostname) || s && !new RegExp(s).test(e.port) || r && !new RegExp(r).test(e.pathname));
}
function de(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: a, searchParams: s } = new URL(e.url), r = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), n = Number.parseInt(s.get("q") ?? "75", 10);
  if (!r || Number.isNaN(i) || Number.isNaN(n) || !t?.sizes?.includes(i) || n < 0 || n > 100)
    return;
  let o = new URL(r, a);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = r.startsWith("//"), d = r.startsWith("/") && !c;
  if (!d && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((w) => pe(o, w)))
    return;
  let h = e.headers.get("Accept") ?? "", y = t?.formats?.find((w) => h.includes(w))?.replace("image/", "");
  return { isRelative: d, imageUrl: o, options: { width: i, quality: n, format: y } };
}
function he(e, t, a) {
  let s = new Headers();
  if (a?.contentSecurityPolicy && s.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), n = i ? `${a.contentDispositionType}; filename="${i}"` : a.contentDispositionType;
    s.set("Content-Disposition", n);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let r = S(e);
  return _(r.headers, s), r;
}
async function G(e, { buildOutput: t, assetsFetcher: a, imagesConfig: s }) {
  let r = de(e, s);
  if (!r)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: n } = r, c = await (i && n.pathname in t ? a.fetch.bind(a) : fetch)(n);
  return he(c, n, s);
}
u();
l();
p();
u();
l();
p();
var fe = "x-vercel-cache-tags";
var me = "x-next-cache-soft-tags";
var ge = Symbol.for("__cloudflare-request-context__");
async function z(e) {
  let t = `https://${b}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let a = new URL(e.url), s = await ye();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let i = a.searchParams.get("tags")?.split(",") ?? [];
      for (let n of i)
        await s.revalidateTag(n);
      return new Response(null, { status: 200 });
    }
    let r = a.pathname.replace("/v1/suspense-cache/", "");
    if (!r.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = W(e, me), n = await s.get(r, { softTags: i });
        return n ? new Response(JSON.stringify(n.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (n.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = globalThis[ge], n = async () => {
          let o = await e.json();
          o.data.tags === void 0 && (o.tags ??= W(e, fe) ?? []), await s.set(r, o);
        };
        return i ? i.ctx.waitUntil(n()) : await n(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
async function ye() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? K("kv") : K("cache-api");
}
async function K(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function W(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function Z() {
  globalThis[J] || (_e(), globalThis[J] = true);
}
function _e() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let a = new Request(...t), s = await xe(a);
    return s || (s = await z(a), s) ? s : (Re(a), e(a));
  };
}
async function xe(e) {
  if (e.url.startsWith("blob:"))
    try {
      let a = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return a;
      }, get body() {
        return new ReadableStream({ start(r) {
          let i = Buffer.from(a);
          r.enqueue(i), r.close();
        } });
      }, async text() {
        return Buffer.from(a).toString();
      }, async json() {
        let r = Buffer.from(a);
        return JSON.stringify(r.toString());
      }, async blob() {
        return new Blob(a);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function Re(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
u();
l();
p();
var Q = V(X());
var M = class {
  constructor(t, a, s, r, i) {
    this.routes = t;
    this.output = a;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((n) => n.domain === this.url.hostname), this.locales = new Set(r.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: a, checkIntercept: s }) {
    let r = C(t.src, this.path, t.caseSensitive);
    if (!r.match || t.methods && !t.methods.map((n) => n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((n) => {
      let o = I(n, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((n) => I(n, i).valid) && !(a && t.status !== this.status)) {
      if (s && t.dest) {
        let n = /\/(\(\.+\))+/, o = n.test(t.dest), c = n.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: r, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let a = "x-middleware-override-headers", s = t.headers.get(a);
    if (s) {
      let c = new Set(s.split(",").map((d) => d.trim()));
      for (let d of c.keys()) {
        let h = `x-middleware-request-${d}`, y = t.headers.get(h);
        this.reqCtx.request.headers.get(d) !== y && (y ? this.reqCtx.request.headers.set(d, y) : this.reqCtx.request.headers.delete(d)), t.headers.delete(h);
      }
      t.headers.delete(a);
    }
    let r = "x-middleware-rewrite", i = t.headers.get(r);
    if (i) {
      let c = new URL(i, this.url), d = this.url.hostname !== c.hostname;
      this.path = d ? `${c}` : c.pathname, x(this.searchParams, c.searchParams), t.headers.delete(r);
    }
    let n = "x-middleware-next";
    t.headers.get(n) ? t.headers.delete(n) : !i && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), _(this.reqCtx.request.headers, t.headers), _(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let a = t && this.output[t];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let s = await k(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, a, s) {
    !t.headers || (_(this.headers.normal, t.headers, { match: a, captureGroupKeys: s }), t.important && _(this.headers.important, t.headers, { match: a, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, a, s) {
    if (!t.dest)
      return this.path;
    let r = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = v(i, a, s);
    let n = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(r), c = /^\/__index\.prefetch\.rsc$/i.test(r);
    n && !o && !c && (this.path = r);
    let d = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    d && !h && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let w = new URL(this.path, this.url);
    return x(this.searchParams, w.searchParams), P(this.path) || (this.path = w.pathname), r;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: r } } = t, i = r && this.cookies[r], n = A(i ?? ""), o = A(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...n, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, a) {
    return !this.locales || a !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, a) {
    let s = this.getLocaleFriendlyRoute(a, t), { routeMatch: r, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, n = { ...s, dest: i };
    if (!r?.match || n.middlewarePath && this.middlewareInvoked.includes(n.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = r;
    if (this.applyRouteOverrides(n), this.applyLocaleRedirects(n), !await this.runRouteMiddleware(n.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(n, o, c), this.applyRouteStatus(n);
    let h = this.applyRouteDest(n, o, c);
    if (n.check && !P(this.path))
      if (h === this.path) {
        if (t !== "miss")
          return this.checkPhase(O(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !n.continue || n.status && n.status >= 300 && n.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let a = true;
    for (let i of this.routes[t]) {
      let n = await this.checkRoute(t, i);
      if (n === "error")
        return "error";
      if (n === "done") {
        a = false;
        break;
      }
    }
    if (t === "hit" || P(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let n = new RegExp(`/${i}(/.*)`), c = this.path.match(n)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let r = "miss";
    return s || t === "miss" || t === "error" ? r = "hit" : a && (r = O(t)), this.checkPhase(r);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
};
async function Y(e, t, a, s) {
  let r = new M(t.routes, a, e, s, t.wildcard), i = await ee(r);
  return Ee(e, i, a);
}
async function ee(e, t = "none", a = false) {
  return await e.run(t) === "error" || !a && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function Ee(e, { path: t = "/404", status: a, headers: s, searchParams: r, body: i }, n) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let h = [...r.keys()].length ? `?${r.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${h}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: a });
  else if (P(t)) {
    let h = new URL(t);
    x(h.searchParams, r), c = await fetch(h, e.request);
  } else
    c = await k(n[t], e, { path: t, status: a, headers: s, searchParams: r });
  let d = s.normal;
  return _(d, c.headers), _(d, s.important), c = new Response(c.body, { ...c, status: a || c.status, headers: d }), c;
}
u();
l();
p();
function te() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: Me };
}
function Me(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t)
    return t;
  let a = Te();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, a), a;
}
function Te() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (t, a) => e.has(a) ? e.get(a) : Reflect.get(globalThis, a), set: (t, a, s) => je.has(a) ? Reflect.set(globalThis, a, s) : (e.set(a, s), true) });
}
var je = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ms = { async fetch(e, t, a) {
  te(), Z();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let n = new URL(e.url), o = await t.ASSETS.fetch(`${n.protocol}//${n.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: r, requestContextAsyncLocalStorage: i } = s;
  return r.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: b }, async () => i.run({ env: t, ctx: a, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return G(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = F(e);
    return Y({ request: o, ctx: a, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };
export {
  ms as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.4453451013862715.mjs.map
