// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"c4jwN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e3eb47ae5558e22f";
module.bundle.HMR_BUNDLE_ID = "79d683f0989eaf5e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dcSQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _anchorizeHeadingsJs = require("./anchorizeHeadings.js");
var _anchorizeHeadingsJsDefault = parcelHelpers.interopDefault(_anchorizeHeadingsJs);
var _floatingFootnotesJs = require("./floatingFootnotes.js");
var _floatingFootnotesJsDefault = parcelHelpers.interopDefault(_floatingFootnotesJs);
(0, _floatingFootnotesJsDefault.default)();
(0, _anchorizeHeadingsJsDefault.default)();

},{"./anchorizeHeadings.js":"hA8ap","./floatingFootnotes.js":"laVSG","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"hA8ap":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
// Borrowed from https://github.com/gohugoio/gohugoioTheme/blob/2e7250ca437d4666329d3ca96708dd3a4ff59818/assets/js/anchorforid.js
function anchorForId(id) {
    const anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.title = "Link to this section";
    anchor.href = "#" + id;
    // Icon from https://useiconic.com/open#icons
    anchor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z" /></svg>';
    return anchor;
}
function anchorizeHeadings() {
    // If we've found more than 1 article, then abort. It probably means I've
    // messed something up if this is the case, but I don't have enough
    // confidence in the way I've set everything up to _not_ do this safety
    // check.
    const articles = document.querySelectorAll("article#main");
    if (articles.length != 1) return;
    // Keep this list of header classes in sync with style.css
    const headers = articles[0].querySelectorAll("h2, h3, h4");
    Array.prototype.forEach.call(headers, function(el, i) {
        var link = anchorForId(el.id);
        el.appendChild(link);
    });
}
function anchorizeOnReady() {
    (0, _utilsJs.docReady)(anchorizeHeadings);
}
exports.default = anchorizeOnReady;

},{"./utils.js":"bwxna","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"bwxna":[function(require,module,exports) {
// borrowed from https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "docReady", ()=>docReady);
parcelHelpers.export(exports, "windowLoaded", ()=>windowLoaded);
parcelHelpers.export(exports, "onWindowResize", ()=>onWindowResize);
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") // call on next available tick
    setTimeout(fn, 1);
    else document.addEventListener("DOMContentLoaded", fn);
}
function windowLoaded(fn) {
    // see if we're already loaded
    if (document.readyState === "complete") // call on next available tick
    setTimeout(fn, 1);
    else window.addEventListener("load", fn);
}
function onWindowResize(fn) {
    windowLoaded(function() {
        window.addEventListener("resize", fn);
        setTimeout(fn, 1);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"2GLs3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"laVSG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _resizeObserver = require("@juggle/resize-observer");
const ARTICLE_CONTENT_SELECTOR = "article#main";
const FOOTNOTE_SECTION_SELECTOR = "div.footnotes[role=doc-endnotes]";
// this is a prefix-match on ID.
const INDIVIDUAL_FOOTNOTE_SELECTOR = "li[id^='fn:']";
const FLOATING_FOOTNOTE_MIN_WIDTH = 1260;
// Computes an offset such that setting `top` on elemToAlign will put it
// in vertical alignment with targetAlignment.
function computeOffsetForAlignment(elemToAlign, targetAlignment) {
    const offsetParentTop = elemToAlign.offsetParent.getBoundingClientRect().top;
    // Distance between the top of the offset parent and the top of the target alignment
    return targetAlignment.getBoundingClientRect().top - offsetParentTop;
}
function setFootnoteOffsets(footnotes) {
    // Keep track of the bottom of the last element, because we don't want to
    // overlap footnotes.
    let bottomOfLastElem = 0;
    Array.prototype.forEach.call(footnotes, function(footnote, i) {
        // In theory, don't need to escape this because IDs can't contain
        // quotes, in practice, not sure. ¯\_(ツ)_/¯
        // Get the thing that refers to the footnote
        const intextLink = document.querySelector("a.footnote-ref[href='#" + footnote.id + "']");
        // Find its "content parent"; nearest paragraph or list item or
        // whatever. We use this for alignment because it looks much cleaner.
        // If it doesn't, your paragraphs are too long :P
        // Fallback - use the same height as the link.
        const verticalAlignmentTarget = intextLink.closest("p,li") || intextLink;
        let offset = computeOffsetForAlignment(footnote, verticalAlignmentTarget);
        if (offset < bottomOfLastElem) offset = bottomOfLastElem;
        // computedStyle values are always in pixels, but have the suffix 'px'.
        // offsetHeight doesn't include margins, but we want it to use them so
        // we retain the style / visual fidelity when all the footnotes are
        // crammed together.
        bottomOfLastElem = offset + footnote.offsetHeight + parseInt(window.getComputedStyle(footnote).marginBottom) + parseInt(window.getComputedStyle(footnote).marginTop);
        footnote.style.top = offset + "px";
        footnote.style.position = "absolute";
    });
}
function clearFootnoteOffsets(footnotes) {
    // Reset all
    Array.prototype.forEach.call(footnotes, function(fn, i) {
        fn.style.top = null;
        fn.style.position = null;
    });
}
// contract: this is idempotent; i.e. it won't wreck anything if you call it
// with the same value over and over again. Though maybe it'll wreck performance
// lol.
function updateFootnoteFloat(shouldFloat) {
    const footnoteSection = document.querySelector(FOOTNOTE_SECTION_SELECTOR);
    const footnotes = footnoteSection.querySelectorAll(INDIVIDUAL_FOOTNOTE_SELECTOR);
    if (shouldFloat) {
        // Do this first because we need styles applied before doing other
        // calculations
        footnoteSection.classList.add("floating-footnotes");
        setFootnoteOffsets(footnotes);
        subscribeToUpdates();
    } else {
        unsubscribeFromUpdates();
        clearFootnoteOffsets(footnotes);
        footnoteSection.classList.remove("floating-footnotes");
    }
}
function subscribeToUpdates() {
    const article = document.querySelector(ARTICLE_CONTENT_SELECTOR);
    // Watch for dimension changes on the thing that holds all the footnotes so
    // we can reposition as required
    resizeObserver.observe(article);
}
function unsubscribeFromUpdates() {
    resizeObserver.disconnect();
}
const notifySizeChange = function() {
    // Default state, not expanded.
    let bigEnough = false;
    return function() {
        // Pixel width at which this looks good
        let nowBigEnough = window.innerWidth >= FLOATING_FOOTNOTE_MIN_WIDTH;
        if (nowBigEnough !== bigEnough) {
            updateFootnoteFloat(nowBigEnough);
            bigEnough = nowBigEnough;
        }
    };
}();
const resizeObserver = new (0, _resizeObserver.ResizeObserver)((_entries, observer)=>{
    // By virtue of the fact that we're subscribed, we know this is true.
    updateFootnoteFloat(true);
});
function enableFloatingFootnotes() {
    (0, _utilsJs.docReady)(()=>{
        const footnoteSection = document.querySelector(FOOTNOTE_SECTION_SELECTOR);
        const article = document.querySelector(ARTICLE_CONTENT_SELECTOR);
        const allowFloatingFootnotes = article && !article.classList.contains("no-floating-footnotes");
        // only set it all up if there's actually a footnote section and
        // we haven't explicitly disabled floating footnotes.
        if (footnoteSection && allowFloatingFootnotes) (0, _utilsJs.onWindowResize)(notifySizeChange);
    });
}
exports.default = enableFloatingFootnotes;

},{"./utils.js":"bwxna","@juggle/resize-observer":"ik6lf","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"ik6lf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserver", ()=>(0, _resizeObserver.ResizeObserver));
parcelHelpers.export(exports, "ResizeObserverEntry", ()=>(0, _resizeObserverEntry.ResizeObserverEntry));
parcelHelpers.export(exports, "ResizeObserverSize", ()=>(0, _resizeObserverSize.ResizeObserverSize));
var _resizeObserver = require("../ResizeObserver");
var _resizeObserverEntry = require("../ResizeObserverEntry");
var _resizeObserverSize = require("../ResizeObserverSize");

},{"../ResizeObserver":"2wKu4","../ResizeObserverEntry":"b6ZCI","../ResizeObserverSize":"b17XS","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"2wKu4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserver", ()=>ResizeObserver);
var _resizeObserverController = require("./ResizeObserverController");
var _element = require("./utils/element");
var ResizeObserver = function() {
    function ResizeObserver(callback) {
        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof callback !== "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        (0, _resizeObserverController.ResizeObserverController).connect(this, callback);
    }
    ResizeObserver.prototype.observe = function(target, options) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, _element.isElement)(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, _resizeObserverController.ResizeObserverController).observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function(target) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, _element.isElement)(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, _resizeObserverController.ResizeObserverController).unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function() {
        (0, _resizeObserverController.ResizeObserverController).disconnect(this);
    };
    ResizeObserver.toString = function() {
        return "function ResizeObserver () { [polyfill code] }";
    };
    return ResizeObserver;
}();

},{"./ResizeObserverController":"7n7Wc","./utils/element":"9nxqU","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"7n7Wc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverController", ()=>ResizeObserverController);
var _scheduler = require("./utils/scheduler");
var _resizeObservation = require("./ResizeObservation");
var _resizeObserverDetail = require("./ResizeObserverDetail");
var _resizeObservers = require("./utils/resizeObservers");
var observerMap = new WeakMap();
var getObservationIndex = function(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1){
        if (observationTargets[i].target === target) return i;
    }
    return -1;
};
var ResizeObserverController = function() {
    function ResizeObserverController() {}
    ResizeObserverController.connect = function(resizeObserver, callback) {
        var detail = new (0, _resizeObserverDetail.ResizeObserverDetail)(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function(resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && (0, _resizeObservers.resizeObservers).push(detail);
            detail.observationTargets.push(new (0, _resizeObservation.ResizeObservation)(target, options && options.box));
            (0, _scheduler.updateCount)(1);
            (0, _scheduler.scheduler).schedule();
        }
    };
    ResizeObserverController.unobserve = function(resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && (0, _resizeObservers.resizeObservers).splice((0, _resizeObservers.resizeObservers).indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0, _scheduler.updateCount)(-1);
        }
    };
    ResizeObserverController.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}();

},{"./utils/scheduler":"hfgue","./ResizeObservation":"hCgWf","./ResizeObserverDetail":"efykr","./utils/resizeObservers":"iOs98","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"hfgue":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduler", ()=>scheduler);
parcelHelpers.export(exports, "updateCount", ()=>updateCount);
var _process = require("./process");
var _global = require("./global");
var _queueResizeObserver = require("./queueResizeObserver");
var watching = 0;
var isWatching = function() {
    return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
var events = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus"
];
var time = function(timeout) {
    if (timeout === void 0) timeout = 0;
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
            return _this.schedule();
        };
    }
    Scheduler.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) timeout = CATCH_PERIOD;
        if (scheduled) return;
        scheduled = true;
        var until = time(timeout);
        (0, _queueResizeObserver.queueResizeObserver)(function() {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0, _process.process)();
            } finally{
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) return;
                if (elementsHaveResized) _this.run(1000);
                else if (timeout > 0) _this.run(timeout);
                else _this.start();
            }
        });
    };
    Scheduler.prototype.schedule = function() {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function() {
        var _this = this;
        var cb = function() {
            return _this.observer && _this.observer.observe(document.body, observerConfig);
        };
        document.body ? cb() : (0, _global.global).addEventListener("DOMContentLoaded", cb);
    };
    Scheduler.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function(name) {
                return (0, _global.global).addEventListener(name, _this.listener, true);
            });
        }
    };
    Scheduler.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function(name) {
                return (0, _global.global).removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
        }
    };
    return Scheduler;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

},{"./process":"lmLKP","./global":"5f36L","./queueResizeObserver":"1pVFA","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"lmLKP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "process", ()=>process);
var _hasActiveObservations = require("../algorithms/hasActiveObservations");
var _hasSkippedObservations = require("../algorithms/hasSkippedObservations");
var _deliverResizeLoopError = require("../algorithms/deliverResizeLoopError");
var _broadcastActiveObservations = require("../algorithms/broadcastActiveObservations");
var _gatherActiveObservationsAtDepth = require("../algorithms/gatherActiveObservationsAtDepth");
var process = function() {
    var depth = 0;
    (0, _gatherActiveObservationsAtDepth.gatherActiveObservationsAtDepth)(depth);
    while((0, _hasActiveObservations.hasActiveObservations)()){
        depth = (0, _broadcastActiveObservations.broadcastActiveObservations)();
        (0, _gatherActiveObservationsAtDepth.gatherActiveObservationsAtDepth)(depth);
    }
    if ((0, _hasSkippedObservations.hasSkippedObservations)()) (0, _deliverResizeLoopError.deliverResizeLoopError)();
    return depth > 0;
};

},{"../algorithms/hasActiveObservations":"fsoZf","../algorithms/hasSkippedObservations":"6t0xt","../algorithms/deliverResizeLoopError":"5aRCB","../algorithms/broadcastActiveObservations":"bYkhd","../algorithms/gatherActiveObservationsAtDepth":"6S6sH","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"fsoZf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasActiveObservations", ()=>hasActiveObservations);
var _resizeObservers = require("../utils/resizeObservers");
var hasActiveObservations = function() {
    return (0, _resizeObservers.resizeObservers).some(function(ro) {
        return ro.activeTargets.length > 0;
    });
};

},{"../utils/resizeObservers":"iOs98","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"iOs98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeObservers", ()=>resizeObservers);
var resizeObservers = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"6t0xt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasSkippedObservations", ()=>hasSkippedObservations);
var _resizeObservers = require("../utils/resizeObservers");
var hasSkippedObservations = function() {
    return (0, _resizeObservers.resizeObservers).some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
};

},{"../utils/resizeObservers":"iOs98","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"5aRCB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deliverResizeLoopError", ()=>deliverResizeLoopError);
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
    var event;
    if (typeof ErrorEvent === "function") event = new ErrorEvent("error", {
        message: msg
    });
    else {
        event = document.createEvent("Event");
        event.initEvent("error", false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"bYkhd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "broadcastActiveObservations", ()=>broadcastActiveObservations);
var _resizeObservers = require("../utils/resizeObservers");
var _resizeObserverEntry = require("../ResizeObserverEntry");
var _calculateDepthForNode = require("./calculateDepthForNode");
var _calculateBoxSize = require("./calculateBoxSize");
var broadcastActiveObservations = function() {
    var shallowestDepth = Infinity;
    var callbacks = [];
    (0, _resizeObservers.resizeObservers).forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) return;
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new (0, _resizeObserverEntry.ResizeObserverEntry)(ot.target);
            var targetDepth = (0, _calculateDepthForNode.calculateDepthForNode)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0, _calculateBoxSize.calculateBoxSize)(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) shallowestDepth = targetDepth;
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for(var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++){
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

},{"../utils/resizeObservers":"iOs98","../ResizeObserverEntry":"b6ZCI","./calculateDepthForNode":"ejorc","./calculateBoxSize":"3N4bT","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"b6ZCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverEntry", ()=>ResizeObserverEntry);
var _calculateBoxSize = require("./algorithms/calculateBoxSize");
var _freeze = require("./utils/freeze");
var ResizeObserverEntry = function() {
    function ResizeObserverEntry(target) {
        var boxes = (0, _calculateBoxSize.calculateBoxSizes)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0, _freeze.freeze)([
            boxes.borderBoxSize
        ]);
        this.contentBoxSize = (0, _freeze.freeze)([
            boxes.contentBoxSize
        ]);
        this.devicePixelContentBoxSize = (0, _freeze.freeze)([
            boxes.devicePixelContentBoxSize
        ]);
    }
    return ResizeObserverEntry;
}();

},{"./algorithms/calculateBoxSize":"3N4bT","./utils/freeze":"aGDhW","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"3N4bT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateBoxSize", ()=>calculateBoxSize);
parcelHelpers.export(exports, "calculateBoxSizes", ()=>calculateBoxSizes);
var _resizeObserverBoxOptions = require("../ResizeObserverBoxOptions");
var _resizeObserverSize = require("../ResizeObserverSize");
var _domrectReadOnly = require("../DOMRectReadOnly");
var _element = require("../utils/element");
var _freeze = require("../utils/freeze");
var _global = require("../utils/global");
var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test((0, _global.global).navigator && (0, _global.global).navigator.userAgent);
var parseDimension = function(pixel) {
    return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) inlineSize = 0;
    if (blockSize === void 0) blockSize = 0;
    if (switchSizes === void 0) switchSizes = false;
    return new (0, _resizeObserverSize.ResizeObserverSize)((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0, _freeze.freeze)({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new (0, _domrectReadOnly.DOMRectReadOnly)(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
    if (forceRecalculation === void 0) forceRecalculation = false;
    if (cache.has(target) && !forceRecalculation) return cache.get(target);
    if ((0, _element.isHidden)(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0, _element.isSVG)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === "border-box";
    var switchSizes = verticalRegexp.test(cs.writingMode || "");
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0, _freeze.freeze)({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new (0, _domrectReadOnly.DOMRectReadOnly)(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case (0, _resizeObserverBoxOptions.ResizeObserverBoxOptions).DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case (0, _resizeObserverBoxOptions.ResizeObserverBoxOptions).BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

},{"../ResizeObserverBoxOptions":"1kVHw","../ResizeObserverSize":"b17XS","../DOMRectReadOnly":"jnp6I","../utils/element":"9nxqU","../utils/freeze":"aGDhW","../utils/global":"5f36L","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"1kVHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverBoxOptions", ()=>ResizeObserverBoxOptions);
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"b17XS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverSize", ()=>ResizeObserverSize);
var _freeze = require("./utils/freeze");
var ResizeObserverSize = function() {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0, _freeze.freeze)(this);
    }
    return ResizeObserverSize;
}();

},{"./utils/freeze":"aGDhW","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"aGDhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "freeze", ()=>freeze);
var freeze = function(obj) {
    return Object.freeze(obj);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"jnp6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMRectReadOnly", ()=>DOMRectReadOnly);
var _freeze = require("./utils/freeze");
var DOMRectReadOnly = function() {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0, _freeze.freeze)(this);
    }
    DOMRectReadOnly.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return {
            x: x,
            y: y,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height
        };
    };
    DOMRectReadOnly.fromRect = function(rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}();

},{"./utils/freeze":"aGDhW","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"9nxqU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVG", ()=>isSVG);
parcelHelpers.export(exports, "isHidden", ()=>isHidden);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isReplacedElement", ()=>isReplacedElement);
var isSVG = function(target) {
    return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
    var _a;
    if (obj instanceof Element) return true;
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
    switch(target.tagName){
        case "INPUT":
            if (target.type !== "image") break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
            return true;
    }
    return false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"5f36L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "global", ()=>global);
var global = typeof window !== "undefined" ? window : {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"ejorc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateDepthForNode", ()=>calculateDepthForNode);
var _element = require("../utils/element");
var calculateDepthForNode = function(node) {
    if ((0, _element.isHidden)(node)) return Infinity;
    var depth = 0;
    var parent = node.parentNode;
    while(parent){
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

},{"../utils/element":"9nxqU","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"6S6sH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gatherActiveObservationsAtDepth", ()=>gatherActiveObservationsAtDepth);
var _resizeObservers = require("../utils/resizeObservers");
var _calculateDepthForNode = require("./calculateDepthForNode");
var gatherActiveObservationsAtDepth = function(depth) {
    (0, _resizeObservers.resizeObservers).forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0, _calculateDepthForNode.calculateDepthForNode)(ot.target) > depth) ro.activeTargets.push(ot);
                else ro.skippedTargets.push(ot);
            }
        });
    });
};

},{"../utils/resizeObservers":"iOs98","./calculateDepthForNode":"ejorc","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"1pVFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queueResizeObserver", ()=>queueResizeObserver);
var _queueMicroTask = require("./queueMicroTask");
var queueResizeObserver = function(cb) {
    (0, _queueMicroTask.queueMicroTask)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

},{"./queueMicroTask":"kB01o","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"kB01o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queueMicroTask", ()=>queueMicroTask);
var trigger;
var callbacks = [];
var notify = function() {
    return callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
};
var queueMicroTask = function(callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode("");
        var config = {
            characterData: true
        };
        new MutationObserver(function() {
            return notify();
        }).observe(el_1, config);
        trigger = function() {
            el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    callbacks.push(callback);
    trigger();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"hCgWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObservation", ()=>ResizeObservation);
var _resizeObserverBoxOptions = require("./ResizeObserverBoxOptions");
var _calculateBoxSize = require("./algorithms/calculateBoxSize");
var _element = require("./utils/element");
var skipNotifyOnElement = function(target) {
    return !(0, _element.isSVG)(target) && !(0, _element.isReplacedElement)(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || (0, _resizeObserverBoxOptions.ResizeObserverBoxOptions).CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function() {
        var size = (0, _calculateBoxSize.calculateBoxSize)(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) this.lastReportedSize = size;
        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) return true;
        return false;
    };
    return ResizeObservation;
}();

},{"./ResizeObserverBoxOptions":"1kVHw","./algorithms/calculateBoxSize":"3N4bT","./utils/element":"9nxqU","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"efykr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeObserverDetail", ()=>ResizeObserverDetail);
var ResizeObserverDetail = function() {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}]},["c4jwN","dcSQ5"], "dcSQ5", "parcelRequire2734")

//# sourceMappingURL=main.js.map
