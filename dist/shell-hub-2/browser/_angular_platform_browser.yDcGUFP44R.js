import { a as _, b as R, c as m, d as D, e as I, f as ne, g as T } from "@nf-internal/chunk-REXVXS4C";
import { a as P } from "@nf-internal/chunk-4CLCTAJ7";
import { \u0275DomAdapter as re, \u0275setRootDomAdapter as oe, \u0275parseCookieValue as ie, \u0275getDOM as V, DOCUMENT as M, \u0275PLATFORM_BROWSER_ID as se, XhrFactory as ae, CommonModule as ce } from "@angular/common";
import * as l from "@angular/core";
import { \u0275global as p, \u0275RuntimeError as ue, \u0275internalCreateApplication as x, PLATFORM_ID as le, PLATFORM_INITIALIZER as de, createPlatformFactory as pe, platformCore as fe, InjectionToken as st, \u0275TESTABILITY_GETTER as b, \u0275TESTABILITY as me, Testability as C, NgZone as j, TestabilityRegistry as B, \u0275INJECTOR_SCOPE as he, ErrorHandler as F, RendererFactory2 as ge, ApplicationModule as Ee, \u0275setDocument as ve } from "@angular/core";
var S = class t extends re {
    supportsDOMEvents = !0;
    static makeCurrent() { oe(new t); }
    onAndCancel(o, e, n, r) { return o.addEventListener(e, n, r), () => { o.removeEventListener(e, n, r); }; }
    dispatchEvent(o, e) { o.dispatchEvent(e); }
    remove(o) { o.remove(); }
    createElement(o, e) { return e = e || this.getDefaultDocument(), e.createElement(o); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(o) { return o.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(o) { return o instanceof DocumentFragment; }
    getGlobalEventTarget(o, e) { return e === "window" ? window : e === "document" ? o : e === "body" ? o.body : null; }
    getBaseHref(o) { let e = ye(); return e == null ? null : _e(e); }
    resetBaseElement() { h = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(o) { return ie(document.cookie, o); }
}, h = null;
function ye() { return h = h || document.head.querySelector("base"), h ? h.getAttribute("href") : null; }
function _e(t) { return new URL(t, document.baseURI).pathname; }
var w = class {
    addToWindow(o) { p.getAngularTestability = (n, r = !0) => { let i = o.findTestabilityInTree(n, r); if (i == null)
        throw new ue(5103, !1); return i; }, p.getAllAngularTestabilities = () => o.getAllTestabilities(), p.getAllAngularRootElements = () => o.getAllRootElements(); let e = n => { let r = p.getAllAngularTestabilities(), i = r.length, s = function () { i--, i == 0 && n(); }; r.forEach(a => { a.whenStable(s); }); }; p.frameworkStabilizers || (p.frameworkStabilizers = []), p.frameworkStabilizers.push(e); }
    findTestabilityInTree(o, e, n) { if (e == null)
        return null; let r = o.getTestability(e); return r ?? (n ? V().isShadowRoot(e) ? this.findTestabilityInTree(o, e.host, !0) : this.findTestabilityInTree(o, e.parentElement, !0) : null); }
}, Te = (() => { class t {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), U = ["alt", "control", "meta", "shift"], Me = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, Se = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey }, z = (() => { class t extends _ {
    constructor(e) { super(e); }
    supports(e) { return t.parseEventName(e) != null; }
    addEventListener(e, n, r, i) { let s = t.parseEventName(n), a = t.eventCallback(s.fullKey, r, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => V().onAndCancel(e, s.domEventName, a, i)); }
    static parseEventName(e) { let n = e.toLowerCase().split("."), r = n.shift(); if (n.length === 0 || !(r === "keydown" || r === "keyup"))
        return null; let i = t._normalizeKey(n.pop()), s = "", a = n.indexOf("code"); if (a > -1 && (n.splice(a, 1), s = "code."), U.forEach(k => { let H = n.indexOf(k); H > -1 && (n.splice(H, 1), s += k + "."); }), s += i, n.length != 0 || i.length === 0)
        return null; let u = {}; return u.domEventName = r, u.fullKey = s, u; }
    static matchEventFullKeyCode(e, n) { let r = Me[e.key] || e.key, i = ""; return n.indexOf("code.") > -1 && (r = e.code, i = "code."), r == null || !r ? !1 : (r = r.toLowerCase(), r === " " ? r = "space" : r === "." && (r = "dot"), U.forEach(s => { if (s !== r) {
        let a = Se[s];
        a(e) && (i += s + ".");
    } }), i += r, i === n); }
    static eventCallback(e, n, r) { return i => { t.matchEventFullKeyCode(i, e) && r.runGuarded(() => n(i)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (n) { return new (n || t)(l.\u0275\u0275inject(M)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
function we(t, o, e) { let n = P({ rootComponent: t, platformRef: e?.platformRef }, G(o)); return x(n); }
function Re(t) { return x(G(t)); }
function G(t) { return { appProviders: [...K, ...t?.providers ?? []], platformProviders: Y }; }
function De() { return [...Z]; }
function Ie() { S.makeCurrent(); }
function be() { return new F; }
function Ce() { return ve(document), document; }
var Y = [{ provide: le, useValue: se }, { provide: de, useValue: Ie, multi: !0 }, { provide: M, useFactory: Ce }], Ae = pe(fe, "browser", Y);
var Z = [{ provide: b, useClass: w }, { provide: me, useClass: C, deps: [j, B, b] }, { provide: C, useClass: C, deps: [j, B, b] }], K = [{ provide: he, useValue: "root" }, { provide: F, useFactory: be }, { provide: m, useClass: R, multi: !0, deps: [M] }, { provide: m, useClass: z, multi: !0, deps: [M] }, T, I, D, { provide: ge, useExisting: T }, { provide: ae, useClass: Te }, []], Oe = (() => { class t {
    constructor() { }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [...K, ...Z], imports: [ce, Ee] });
} return t; })();
import { \u0275getDOM as W, DOCUMENT as v } from "@angular/common";
import { \u0275getDOM as zt } from "@angular/common";
import * as c from "@angular/core";
import { \u0275global as $, ApplicationRef as Ne, InjectionToken as X, \u0275Console as gt, Optional as Le, Injector as ke, \u0275RuntimeError as A, SecurityContext as f, \u0275allowSanitizationBypassAndThrow as g, \u0275unwrapSafeValue as E, \u0275_sanitizeUrl as He, \u0275_sanitizeHtml as Pe, \u0275bypassSanitizationTrustHtml as je, \u0275bypassSanitizationTrustStyle as Be, \u0275bypassSanitizationTrustScript as Ue, \u0275bypassSanitizationTrustUrl as Ve, \u0275bypassSanitizationTrustResourceUrl as xe, \u0275withI18nSupport as Fe, \u0275withEventReplay as ze, \u0275withIncrementalHydration as Ge, makeEnvironmentProviders as Ye, \u0275withDomHydration as Ze, ENVIRONMENT_INITIALIZER as _t, inject as Tt, NgZone as Mt, \u0275ZONELESS_ENABLED as St, \u0275formatRuntimeError as wt, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as Rt, Version as Ke } from "@angular/core";
import { \u0275withHttpTransferCache as q } from "@angular/common/http";
var bt = (() => { class t {
    _doc;
    _dom;
    constructor(e) { this._doc = e, this._dom = W(); }
    addTag(e, n = !1) { return e ? this._getOrCreateElement(e, n) : null; }
    addTags(e, n = !1) { return e ? e.reduce((r, i) => (i && r.push(this._getOrCreateElement(i, n)), r), []) : []; }
    getTag(e) { if (!e)
        return null; let n = this._doc.querySelector(`meta[${e}]`); return n?.nodeName.toLowerCase() === "meta" ? n : null; }
    getTags(e) { if (!e)
        return []; let n = this._doc.querySelectorAll(`meta[${e}]`); return n ? [].slice.call(n).filter(r => r.nodeName.toLowerCase() === "meta") : []; }
    updateTag(e, n) { if (!e)
        return null; n = n || this._parseSelector(e); let r = this.getTag(n); return r ? this._setMetaElementAttributes(e, r) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, n = !1) { if (!n) {
        let s = this._parseSelector(e), a = this.getTags(s).filter(u => this._containsAttributes(e, u))[0];
        if (a !== void 0)
            return a;
    } let r = this._dom.createElement("meta"); return this._setMetaElementAttributes(e, r), this._doc.getElementsByTagName("head")[0].appendChild(r), r; }
    _setMetaElementAttributes(e, n) { return Object.keys(e).forEach(r => n.setAttribute(this._getMetaKeyMap(r), e[r])), n; }
    _parseSelector(e) { let n = e.name ? "name" : "property"; return `${n}=${this._escapeSelectorValue(String(e[n]))}`; }
    _escapeSelectorValue(e) { return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
    _containsAttributes(e, n) { return Object.keys(e).every(r => n.getAttribute(this._getMetaKeyMap(r)) === e[r]); }
    _getMetaKeyMap(e) { return $e[e] || e; }
    static \u0275fac = function (n) { return new (n || t)(c.\u0275\u0275inject(v)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), $e = { httpEquiv: "http-equiv" }, Ct = (() => { class t {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (n) { return new (n || t)(c.\u0275\u0275inject(v)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Q(t, o) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = $.ng = $.ng || {};
    e[t] = o;
} }
var O = class {
    msPerTick;
    numTicks;
    constructor(o, e) { this.msPerTick = o, this.numTicks = e; }
}, N = class {
    appRef;
    constructor(o) { this.appRef = o.injector.get(Ne); }
    timeChangeDetection(o) { let e = o && o.record, n = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(n); let r = performance.now(), i = 0; for (; i < 5 || performance.now() - r < 500;)
        this.appRef.tick(), i++; let s = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(n); let a = (s - r) / i; return console.log(`ran ${i} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new O(a, i); }
}, ee = "profiler";
function At(t) { return Q(ee, new N(t)), t; }
function Ot() { Q(ee, null); }
var J = class {
    static all() { return () => !0; }
    static css(o) { return e => e.nativeElement != null ? Je(e.nativeElement, o) : !1; }
    static directive(o) { return e => e.providerTokens.indexOf(o) !== -1; }
};
function Je(t, o) { return W().isElementNode(t) ? t.matches && t.matches(o) || t.msMatchesSelector && t.msMatchesSelector(o) || t.webkitMatchesSelector && t.webkitMatchesSelector(o) : !1; }
var We = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0, doubletap: !0 }, L = new X(""), te = new X(""), Xe = (() => { class t {
    events = [];
    overrides = {};
    options;
    buildHammer(e) { let n = new Hammer(e, this.options); n.get("pinch").set({ enable: !0 }), n.get("rotate").set({ enable: !0 }); for (let r in this.overrides)
        n.get(r).set(this.overrides[r]); return n; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), qe = (() => { class t extends _ {
    _config;
    _injector;
    loader;
    _loaderPromise = null;
    constructor(e, n, r, i) { super(e), this._config = n, this._injector = r, this.loader = i; }
    supports(e) { return !(!We.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader); }
    addEventListener(e, n, r) { let i = this.manager.getZone(); if (n = n.toLowerCase(), !window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || i.runOutsideAngular(() => this.loader());
        let s = !1, a = () => { s = !0; };
        return i.runOutsideAngular(() => this._loaderPromise.then(() => { if (!window.Hammer) {
            a = () => { };
            return;
        } s || (a = this.addEventListener(e, n, r)); }).catch(() => { a = () => { }; })), () => { a(); };
    } return i.runOutsideAngular(() => { let s = this._config.buildHammer(e), a = function (u) { i.runGuarded(function () { r(u); }); }; return s.on(n, a), () => { s.off(n, a), typeof s.destroy == "function" && s.destroy(); }; }); }
    isCustomEvent(e) { return this._config.events.indexOf(e) > -1; }
    static \u0275fac = function (n) { return new (n || t)(c.\u0275\u0275inject(v), c.\u0275\u0275inject(L), c.\u0275\u0275inject(c.Injector), c.\u0275\u0275inject(te, 8)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), Nt = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = c.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = c.\u0275\u0275defineInjector({ providers: [{ provide: m, useClass: qe, multi: !0, deps: [v, L, ke, [new Le, te]] }, { provide: L, useClass: Xe }] });
} return t; })(), Qe = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: function (n) { let r = null; return n ? r = new (n || t) : r = c.\u0275\u0275inject(et), r; }, providedIn: "root" });
} return t; })(), et = (() => { class t extends Qe {
    _doc;
    constructor(e) { super(), this._doc = e; }
    sanitize(e, n) { if (n == null)
        return null; switch (e) {
        case f.NONE: return n;
        case f.HTML: return g(n, "HTML") ? E(n) : Pe(this._doc, String(n)).toString();
        case f.STYLE: return g(n, "Style") ? E(n) : n;
        case f.SCRIPT:
            if (g(n, "Script"))
                return E(n);
            throw new A(5200, !1);
        case f.URL: return g(n, "URL") ? E(n) : He(String(n));
        case f.RESOURCE_URL:
            if (g(n, "ResourceURL"))
                return E(n);
            throw new A(5201, !1);
        default: throw new A(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return je(e); }
    bypassSecurityTrustStyle(e) { return Be(e); }
    bypassSecurityTrustScript(e) { return Ue(e); }
    bypassSecurityTrustUrl(e) { return Ve(e); }
    bypassSecurityTrustResourceUrl(e) { return xe(e); }
    static \u0275fac = function (n) { return new (n || t)(c.\u0275\u0275inject(v)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), d = (function (t) { return t[t.NoHttpTransferCache = 0] = "NoHttpTransferCache", t[t.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", t[t.I18nSupport = 2] = "I18nSupport", t[t.EventReplay = 3] = "EventReplay", t[t.IncrementalHydration = 4] = "IncrementalHydration", t; })(d || {});
function y(t, o = [], e = {}) { return { \u0275kind: t, \u0275providers: o }; }
function Lt() { return y(d.NoHttpTransferCache); }
function kt(t) { return y(d.HttpTransferCacheOptions, q(t)); }
function Ht() { return y(d.I18nSupport, Fe()); }
function Pt() { return y(d.EventReplay, ze()); }
function jt() { return y(d.IncrementalHydration, Ge()); }
function Bt(...t) { let o = [], e = new Set; for (let { \u0275providers: r, \u0275kind: i } of t)
    e.add(i), r.length && o.push(r); let n = e.has(d.HttpTransferCacheOptions); return Ye([[], [], Ze(), e.has(d.NoHttpTransferCache) || n ? [] : q({}), o]); }
var Ut = new Ke("20.3.25");
export { Oe as BrowserModule, J as By, Qe as DomSanitizer, m as EVENT_MANAGER_PLUGINS, D as EventManager, _ as EventManagerPlugin, L as HAMMER_GESTURE_CONFIG, te as HAMMER_LOADER, Xe as HammerGestureConfig, Nt as HammerModule, d as HydrationFeatureKind, bt as Meta, ne as REMOVE_STYLES_ON_COMPONENT_DESTROY, Ct as Title, Ut as VERSION, we as bootstrapApplication, Re as createApplication, Ot as disableDebugTools, At as enableDebugTools, Ae as platformBrowser, Bt as provideClientHydration, De as provideProtractorTestingSupport, Pt as withEventReplay, kt as withHttpTransferCacheOptions, Ht as withI18nSupport, jt as withIncrementalHydration, Lt as withNoHttpTransferCache, S as \u0275BrowserDomAdapter, w as \u0275BrowserGetTestability, R as \u0275DomEventsPlugin, T as \u0275DomRendererFactory2, et as \u0275DomSanitizerImpl, qe as \u0275HammerGesturesPlugin, z as \u0275KeyEventsPlugin, I as \u0275SharedStylesHost, zt as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v20.3.25
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
