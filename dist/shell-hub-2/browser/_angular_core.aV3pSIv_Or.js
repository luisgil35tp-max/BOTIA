import { a as _c, b as Je, f as Sc } from "@nf-internal/chunk-G5YPXJ7P";
import { B as Rc, E as Ac, F as Oc, G as th, H as nh, I as rh, J as oh, K as ih, L as pN, a as ae, b as A, c as Ti, f as bc, g as Ci, n as Gr, p as Ni, r as Mi, s as Lt, w as wi, x as Xp, y as eh } from "@nf-internal/chunk-SNILWNLH";
import { a as q, b as Ce, d as Pt } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as hN, Observable as gN } from "rxjs";
import { setActiveConsumer as xn } from "@angular/core/primitives/signals";
import { isNotFound as mN } from "@angular/core/primitives/di";
var Si = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, vN = new Si("20.3.25");
var Ri = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", T = class extends Error {
    code;
    constructor(t, n) { super(Zr(t, n)), this.code = t; }
};
function yN(e) { return `NG0${Math.abs(e)}`; }
function Zr(e, t) { return `${yN(e)}${t ? ": " + t : ""}`; }
var be = globalThis;
function F(e) { for (let t in e)
    if (e[t] === F)
        return t; throw Error(""); }
function lh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function $e(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map($e).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n;
}
function Ai(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function EN(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var IN = F({ __forward_ref__: F });
function Yr(e) { return e.__forward_ref__ = Yr, e.toString = function () { return $e(this()); }, e; }
function x(e) { return Kr(e) ? e() : e; }
function Kr(e) { return typeof e == "function" && e.hasOwnProperty(IN) && e.__forward_ref__ === Yr; }
function uh(e, t, n) { e != t && Gc(n, e, t, "=="); }
function Gc(e, t, n, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)); }
function j(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var DN = j;
function Jr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function Xr(e) { return CN(e, Pn); }
function TN(e) { return Xr(e) !== null; }
function CN(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function NN(e) { let t = e?.[Pn] ?? null; return t || null; }
function kc(e) { return e && e.hasOwnProperty(Wr) ? e[Wr] : null; }
var Pn = F({ \u0275prov: F }), Wr = F({ \u0275inj: F }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = j({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, sh;
function MN(e) { Gc("setInjectorProfilerContext should never be called in production mode"); let t = sh; return sh = e, t; }
function qc(e) { return e && !!e.\u0275providers; }
var nn = F({ \u0275cmp: F }), eo = F({ \u0275dir: F }), to = F({ \u0275pipe: F }), Oi = F({ \u0275mod: F }), Xe = F({ \u0275fac: F }), rn = F({ __NG_ELEMENT_ID__: F }), ah = F({ __NG_ENV_ID__: F });
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Re(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var dh = F({ ngErrorCode: F }), wN = F({ ngErrorMessage: F }), _N = F({ ngTokenPath: F });
function Wc(e, t) { return fh("", -200, t); }
function xi(e, t) { throw new T(-201, !1); }
function fh(e, t, n) { let r = new T(t, e); return r[dh] = t, r[wN] = e, n && (r[_N] = n), r; }
function SN(e) { return e[dh]; }
var Pc;
function ph() { return Pc; }
function Ie(e) { let t = Pc; return Pc = e, t; }
function zc(e, t, n) { let r = Xr(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (n & 8)
    return null; if (t !== void 0)
    return t; xi(e, "Injector"); }
var bN = {}, Jt = bN, Lc = "__NG_DI_FLAG__", Fc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let r = Xt(n) || 0; try {
        return this.injector.get(t, r & 8 ? null : Jt, r);
    }
    catch (o) {
        if (Sc(o))
            return o;
        throw o;
    } }
};
function RN(e, t = 0) { let n = _c(); if (n === void 0)
    throw new T(-203, !1); if (n === null)
    return zc(e, void 0, t); {
    let r = AN(t), o = n.retrieve(e, r);
    if (Sc(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function fe(e, t = 0) { return (ph() || RN)(x(e), t); }
function ki(e) { throw new T(202, !1); }
function E(e, t) { return fe(e, Xt(t)); }
function Xt(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function AN(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function jc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let r = x(e[n]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new T(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let a = r[s], c = ON(a);
            typeof c == "number" ? c === -1 ? o = a.token : i |= c : o = a;
        }
        t.push(fe(o, i));
    }
    else
        t.push(fe(r));
} return t; }
function Ln(e, t) { return e[Lc] = t, e.prototype[Lc] = t, e; }
function ON(e) { return e[Lc]; }
function Ft(e, t) { let n = e.hasOwnProperty(Xe); return n ? e[Xe] : null; }
function hh(e, t, n) { if (e.length !== t.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = t[r];
    if (n && (o = n(o), i = n(i)), i !== o)
        return !1;
} return !0; }
function Ue(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Pi(e, t) { e.forEach(n => Array.isArray(n) ? Pi(n, t) : t(n)); }
function Qc(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function no(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function ro(e, t) { let n = []; for (let r = 0; r < e; r++)
    n.push(t); return n; }
function Zc(e, t, n) { let r = e.length - n; for (; t < r;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Yc(e, t, n, r) { let o = e.length; if (o == t)
    e.push(n, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = n;
else {
    for (o--, e.push(e[o - 1], e[o]); o > t;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[t] = n, e[t + 1] = r;
} }
function oo(e, t, n) { let r = Fn(e, t); return r >= 0 ? e[r | 1] = n : (r = ~r, Yc(e, r, t, n)), r; }
function Li(e, t) { let n = Fn(e, t); if (n >= 0)
    return e[n | 1]; }
function Fn(e, t) { return xN(e, t, 1); }
function xN(e, t, n) { let r = 0, o = e.length >> n; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? o = i : r = i + 1;
} return ~(o << n); }
var Pe = {}, L = [], Le = new C(""), Kc = new C("", -1), Jc = new C(""), zr = class {
    get(t, n = Jt) { if (n === Jt) {
        let o = fh("", -201);
        throw o.name = "\u0275NotFound", o;
    } return n; }
};
function on(e) { return e[Oi] || null; }
function Fi(e) { let t = on(e); if (!t)
    throw new T(915, !1); return t; }
function W(e) { return e[nn] || null; }
function Ae(e) { return e[eo] || null; }
function Ge(e) { return e[to] || null; }
function io(e) { let t = W(e) || Ae(e) || Ge(e); return t !== null && t.standalone; }
function qe(e) { return { \u0275providers: e }; }
function gh(e) { return qe([{ provide: Le, multi: !0, useValue: e }]); }
function mh(...e) { return { \u0275providers: ji(!0, e), \u0275fromNgModule: !0 }; }
function ji(e, ...t) { let n = [], r = new Set, o, i = s => { n.push(s); }; return Pi(t, s => { let a = s; bi(a, i, [], r) && (o ||= [], o.push(a)); }), o !== void 0 && vh(o, i), n; }
function vh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Xc(o, i => { t(i, r); });
} }
function bi(e, t, n, r) { if (e = x(e), !e)
    return !1; let o = null, i = kc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = kc(c), i)
        o = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let a = r.has(o); if (s) {
    if (a)
        return !1;
    if (r.add(o), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            bi(l, t, n, r);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        r.add(o);
        let l;
        try {
            Pi(i.imports, u => { bi(u, t, n, r) && (l ||= [], l.push(u)); });
        }
        finally { }
        l !== void 0 && vh(l, t);
    }
    if (!a) {
        let l = Ft(o) || (() => new o);
        t({ provide: o, useFactory: l, deps: L }, o), t({ provide: Jc, useValue: o, multi: !0 }, o), t({ provide: Le, useValue: () => fe(o), multi: !0 }, o);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        Xc(c, u => { t(u, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Xc(e, t) { for (let n of e)
    qc(n) && (n = n.\u0275providers), Array.isArray(n) ? Xc(n, t) : t(n); }
var kN = F({ provide: String, useValue: F });
function yh(e) { return e !== null && typeof e == "object" && kN in e; }
function PN(e) { return !!(e && e.useExisting); }
function LN(e) { return !!(e && e.useFactory); }
function en(e) { return typeof e == "function"; }
function Eh(e) { return !!e.useClass; }
var el = new C(""), _i = {}, ch = {}, xc;
function jn() { return xc === void 0 && (xc = new zr), xc; }
var Se = class {
}, tn = class extends Se {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) { super(), this.parent = n, this.source = r, this.scopes = o, Hc(t, s => this.processProvider(s)), this.records.set(Kc, kn(void 0, this)), o.has("environment") && this.records.set(Se, kn(void 0, this)); let i = this.records.get(el); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(Jc, L, { self: !0 })); }
    retrieve(t, n) { let r = Xt(n) || 0; try {
        return this.get(t, Jt, r);
    }
    catch (o) {
        if (mN(o))
            return o;
        throw o;
    } }
    destroy() { qr(this), this._destroyed = !0; let t = xn(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), xn(t);
    } }
    onDestroy(t) { return qr(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { qr(this); let n = Je(this), r = Ie(void 0), o; try {
        return t();
    }
    finally {
        Je(n), Ie(r);
    } }
    get(t, n = Jt, r) { if (qr(this), t.hasOwnProperty(ah))
        return t[ah](this); let o = Xt(r), i, s = Je(this), a = Ie(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = BN(t) && Xr(t);
                u && this.injectableDefInScope(u) ? l = kn(Vc(t), _i) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, o);
        }
        let c = o & 2 ? jn() : this.parent;
        return n = o & 8 && n === Jt ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = SN(c);
        throw l === -200 || l === -201 ? new T(l, null) : c;
    }
    finally {
        Ie(a), Je(s);
    } }
    resolveInjectorInitializers() { let t = xn(null), n = Je(this), r = Ie(void 0), o; try {
        let i = this.get(Le, L, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        Je(n), Ie(r), xn(t);
    } }
    toString() { let t = [], n = this.records; for (let r of n.keys())
        t.push($e(r)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = x(t); let n = en(t) ? t : x(t && t.provide), r = jN(t); if (!en(t) && t.multi === !0) {
        let o = this.records.get(n);
        o || (o = kn(void 0, _i, !0), o.factory = () => jc(o.multi), this.records.set(n, o)), n = t, o.multi.push(t);
    } this.records.set(n, r); }
    hydrate(t, n, r) { let o = xn(null); try {
        if (n.value === ch)
            throw Wc($e(t));
        return n.value === _i && (n.value = ch, n.value = n.factory(void 0, r)), typeof n.value == "object" && n.value && HN(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        xn(o);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = x(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function Vc(e) { let t = Xr(e), n = t !== null ? t.factory : Ft(e); if (n !== null)
    return n; if (e instanceof C)
    throw new T(204, !1); if (e instanceof Function)
    return FN(e); throw new T(204, !1); }
function FN(e) { if (e.length > 0)
    throw new T(204, !1); let n = NN(e); return n !== null ? () => n.factory(e) : () => new e; }
function jN(e) { if (yh(e))
    return kn(void 0, e.useValue); {
    let t = tl(e);
    return kn(t, _i);
} }
function tl(e, t, n) { let r; if (en(e)) {
    let o = x(e);
    return Ft(o) || Vc(o);
}
else if (yh(e))
    r = () => x(e.useValue);
else if (LN(e))
    r = () => e.useFactory(...jc(e.deps || []));
else if (PN(e))
    r = (o, i) => fe(x(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = x(e && (e.useClass || e.provide));
    if (VN(e))
        r = () => new o(...jc(e.deps));
    else
        return Ft(o) || Vc(o);
} return r; }
function qr(e) { if (e.destroyed)
    throw new T(205, !1); }
function kn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function VN(e) { return !!e.deps; }
function HN(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function BN(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Hc(e, t) { for (let n of e)
    Array.isArray(n) ? Hc(n, t) : n && qc(n) ? Hc(n.\u0275providers, t) : t(n); }
function Vi(e, t) { let n; e instanceof tn ? (qr(e), n = e) : n = new Fc(e); let r, o = Je(n), i = Ie(void 0); try {
    return t();
}
finally {
    Je(o), Ie(i);
} }
function Hi() { return ph() !== void 0 || _c() != null; }
function $N(e) { if (!Hi())
    throw new T(-203, !1); }
var $ = 0, m = 1, N = 2, z = 3, pe = 4, le = 5, ue = 6, jt = 7, H = 8, k = 9, We = 10, w = 11, Vt = 12, so = 13, sn = 14, X = 15, gt = 16, an = 17, tt = 18, Vn = 19, nl = 20, pt = 21, Bi = 22, mt = 23, Oe = 24, cn = 25, vt = 26, I = 27, rl = 1, xe = 6, ze = 7, ao = 8, ln = 9, U = 10;
function ee(e) { return Array.isArray(e) && typeof e[rl] == "object"; }
function Y(e) { return Array.isArray(e) && e[rl] === !0; }
function ol(e) { return (e.flags & 4) !== 0; }
function Me(e) { return e.componentOffset > -1; }
function Hn(e) { return (e.flags & 1) === 1; }
function we(e) { return !!e.template; }
function nt(e) { return (e[N] & 512) !== 0; }
function il(e) { return (e.type & 16) === 16; }
function Ih(e) { return (e[N] & 32) === 32; }
function rt(e) { return (e[N] & 256) === 256; }
var $i = "svg", Ui = "math";
function P(e) { for (; Array.isArray(e);)
    e = e[$]; return e; }
function co(e) { for (; Array.isArray(e);) {
    if (typeof e[rl] == "object")
        return e;
    e = e[$];
} return null; }
function un(e, t) { return P(t[e]); }
function ie(e, t) { return P(t[e.index]); }
function Dh(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? P(t[n]) : null; }
function yt(e, t) { return e.data[t]; }
function Ht(e, t) { return e[t]; }
function lo(e, t, n, r) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r; }
function me(e, t) { let n = t[e]; return ee(n) ? n : n[$]; }
function Th(e) { return (e[N] & 4) === 4; }
function Gi(e) { return (e[N] & 128) === 128; }
function Ch(e) { return Y(e[z]); }
function he(e, t) { return t == null ? null : e[t]; }
function sl(e) { e[an] = 0; }
function qi(e) { e[N] & 1024 || (e[N] |= 1024, Gi(e) && Bt(e)); }
function al(e, t) { for (; e > 0;)
    t = t[sn], e--; return t; }
function Bn(e) { return !!(e[N] & 9216 || e[Oe]?.dirty); }
function Wi(e) { e[We].changeDetectionScheduler?.notify(8), e[N] & 64 && (e[N] |= 1024), Bn(e) && Bt(e); }
function Bt(e) { e[We].changeDetectionScheduler?.notify(0); let t = ht(e); for (; t !== null && !(t[N] & 8192 || (t[N] |= 8192, !Gi(t)));)
    t = ht(t); }
function uo(e, t) { if (rt(e))
    throw new T(911, !1); e[pt] === null && (e[pt] = []), e[pt].push(t); }
function zi(e, t) { if (e[pt] === null)
    return; let n = e[pt].indexOf(t); n !== -1 && e[pt].splice(n, 1); }
function ht(e) { let t = e[z]; return Y(t) ? t[z] : t; }
function cl(e) { return e[jt] ??= []; }
function ll(e) { return e.cleanup ??= []; }
function Nh(e, t, n, r) { let o = cl(t); o.push(n), e.firstCreatePass && ll(e).push(r, o.length - 1); }
var S = { lFrame: Oh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Bc = !1;
function Mh() { return S.lFrame.elementDepthCount; }
function wh() { S.lFrame.elementDepthCount++; }
function ul() { S.lFrame.elementDepthCount--; }
function Qi() { return S.bindingsEnabled; }
function fo() { return S.skipHydrationRootTNode !== null; }
function dl(e) { return S.skipHydrationRootTNode === e; }
function fl() { S.bindingsEnabled = !0; }
function _h(e) { S.skipHydrationRootTNode = e; }
function pl() { S.bindingsEnabled = !1; }
function hl() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function R() { return S.lFrame.tView; }
function gl(e) { return S.lFrame.contextLView = e, e[H]; }
function ml(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = vl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function vl() { return S.lFrame.currentTNode; }
function $n() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function ot(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function yl() { return S.lFrame.isParent; }
function El() { S.lFrame.isParent = !1; }
function Il() { return S.lFrame.contextLView; }
function Dl() { return Bc; }
function Un(e) { let t = Bc; return Bc = e, t; }
function ve() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function it() { return S.lFrame.bindingIndex; }
function Tl(e) { return S.lFrame.bindingIndex = e; }
function ye() { return S.lFrame.bindingIndex++; }
function st(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function Sh() { return S.lFrame.inI18n; }
function Cl(e) { S.lFrame.inI18n = e; }
function bh(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, Zi(t); }
function Rh() { return S.lFrame.currentDirectiveIndex; }
function Zi(e) { S.lFrame.currentDirectiveIndex = e; }
function Yi(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function Ki() { return S.lFrame.currentQueryIndex; }
function po(e) { S.lFrame.currentQueryIndex = e; }
function UN(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[le] : null; }
function Nl(e, t, n) { if (n & 4) {
    let o = t, i = e;
    for (; o = o.parent, o === null && !(n & 1);)
        if (o = UN(i), o === null || (i = i[sn], o.type & 10))
            break;
    if (o === null)
        return !1;
    t = o, e = i;
} let r = S.lFrame = Ah(); return r.currentTNode = t, r.lView = e, !0; }
function Ji(e) { let t = Ah(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Ah() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? Oh(e) : t; }
function Oh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function xh() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Ml = xh;
function Xi() { let e = xh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function kh(e) { return (S.lFrame.contextLView = al(e, S.lFrame.contextLView))[H]; }
function ne() { return S.lFrame.selectedIndex; }
function at(e) { S.lFrame.selectedIndex = e; }
function Fe() { let e = S.lFrame; return yt(e.tView, e.selectedIndex); }
function wl() { S.lFrame.currentNamespace = $i; }
function _l() { S.lFrame.currentNamespace = Ui; }
function Sl() { GN(); }
function GN() { S.lFrame.currentNamespace = null; }
function es() { return S.lFrame.currentNamespace; }
var Ph = !0;
function ho() { return Ph; }
function Qe(e) { Ph = e; }
function $c(e, t = null, n = null, r) { let o = bl(e, t, n, r); return o.resolveInjectorInitializers(), o; }
function bl(e, t = null, n = null, r, o = new Set) { let i = [n || L, mh(e)]; return r = r || (typeof e == "object" ? void 0 : $e(e)), new tn(i, t || jn(), r || null, o); }
var ce = class e {
    static THROW_IF_NOT_FOUND = Jt;
    static NULL = new zr;
    static create(t, n) { if (Array.isArray(t))
        return $c({ name: "" }, n, t, ""); {
        let r = t.name ?? "";
        return $c({ name: r }, t.parent, t.providers, r);
    } }
    static \u0275prov = j({ token: e, providedIn: "any", factory: () => fe(Kc) });
    static __NG_ELEMENT_ID__ = -1;
}, Lh = new C(""), je = (() => { class e {
    static __NG_ELEMENT_ID__ = qN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Qr = class extends je {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return rt(this._lView); }
    onDestroy(t) { let n = this._lView; return uo(n, t), () => zi(n, t); }
};
function qN() { return new Qr(g()); }
var et = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, ct = new C("", { providedIn: "root", factory: () => { let e = E(Se), t; return n => { e.destroyed && !t ? setTimeout(() => { throw n; }) : (t ??= e.get(et), t.handleError(n)); }; } }), Rl = { provide: Le, useValue: () => void E(et), multi: !0 }, WN = new C("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = E(Lh).defaultView; if (!e)
        return; let t = E(ct), n = i => { t(i.reason), i.preventDefault(); }, r = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), E(je).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", n); }); } });
function zN() { return qe([gh(() => void E(WN))]); }
function Al(e) { return typeof e == "function" && e[ae] !== void 0; }
function QN(e) { return null; }
function $t(e, t) { let [n, r, o] = eh(e, t?.equal), i = n, s = i[ae]; return i.set = r, i.update = o, i.asReadonly = Gn.bind(i), i; }
function Gn() { let e = this[ae]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[ae] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function Ol(e) { return Al(e) && typeof e.set == "function"; }
function ZN(e, t) { if (Ti() !== null)
    throw new T(-602, !1); }
var dn = (() => { class e {
    view;
    node;
    constructor(n, r) { this.view = n, this.node = r; }
    static __NG_ELEMENT_ID__ = YN;
} return e; })();
function YN() { return new dn(g(), _()); }
var Ne = class {
}, qn = new C("", { providedIn: "root", factory: () => !1 });
var xl = new C(""), ts = new C(""), Et = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new hN(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new gN(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), go = (() => { class e {
    internalPendingTasks = E(Et);
    scheduler = E(Ne);
    errorHandler = E(ct);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let r = this.add(); n().catch(this.errorHandler).finally(r); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function fn(...e) { }
var mo = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new Uc });
} return e; })(), Uc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, r = this.queues.get(n); r.has(t) && (r.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let r = this.queues.get(n); r.has(t) || r.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, r] of this.queues)
            n === null ? t ||= this.flushQueue(r) : t ||= n.run(() => this.flushQueue(r));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let r of t)
        r.dirty && (this.dirtyEffectCount--, n = !0, r.run()); return n; }
};
import { Subject as ud, Subscription as dd } from "rxjs";
import { setActiveConsumer as Fh } from "@angular/core/primitives/signals";
import { map as KN } from "rxjs/operators";
var Wn = { JSACTION: "jsaction" };
function ut(e) { return { toString: e }.toString(); }
var Zn = "__annotations__", Yn = "__parameters__", Kn = "__prop__metadata__";
function zo(e, t, n, r, o) { return ut(() => { let i = fd(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return o && o(u, ...a), (u.hasOwnProperty(Zn) ? u[Zn] : Object.defineProperty(u, Zn, { value: [] })[Zn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function fd(e) { return function (...n) { if (e) {
    let r = e(...n);
    for (let o in r)
        this[o] = r[o];
} }; }
function Cr(e, t, n) { return ut(() => { let r = fd(t); function o(...i) { if (this instanceof o)
    return r.apply(this, i), this; let s = new o(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Yn) ? c[Yn] : Object.defineProperty(c, Yn, { value: [] })[Yn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return o.prototype.ngMetadataName = e, o.annotationCls = o, o; }); }
function wt(e, t, n, r) { return ut(() => { let o = fd(t); function i(...s) { if (this instanceof i)
    return o.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Kn) ? d[Kn] : Object.defineProperty(d, Kn, { value: {} })[Kn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Kg = Ln(Cr("Inject", e => ({ token: e })), -1), Jg = Ln(Cr("Optional"), 8), Xg = Ln(Cr("Self"), 2), em = Ln(Cr("SkipSelf"), 4), tm = Ln(Cr("Host"), 1);
function oe(e) { let t = be.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var jh = { \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: Jr, \u0275\u0275inject: fe, \u0275\u0275invalidFactoryDep: ki, resolveForwardRef: x }, nm = Function;
function yo(e) { return typeof e == "function"; }
var JN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, XN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, eM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, tM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function nM(e) { return JN.test(e) || tM.test(e) || XN.test(e) && !eM.test(e); }
var Ns = class {
    _reflect;
    constructor(t) { this._reflect = t || be.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let r; typeof t > "u" ? r = ro(n.length) : r = ro(t.length); for (let o = 0; o < r.length; o++)
        typeof t > "u" ? r[o] = [] : t[o] && t[o] != Object ? r[o] = [t[o]] : r[o] = [], n && n[o] != null && (r[o] = r[o].concat(n[o])); return r; }
    _ownParameters(t, n) { let r = t.toString(); if (nM(r))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let o = t.ctorParameters; if (o && o !== n.ctorParameters) {
        let a = typeof o == "function" ? o() : o, c = a.map(u => u && u.type), l = a.map(u => u && kl(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Yn) && t[Yn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : ro(t.length); }
    parameters(t) { if (!yo(t))
        return []; let n = ns(t), r = this._ownParameters(t, n); return !r && n !== Object && (r = this.parameters(n)), r || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let r = t.annotations;
        return typeof r == "function" && r.annotations && (r = r.annotations), r;
    } return t.decorators && t.decorators !== n.decorators ? kl(t.decorators) : t.hasOwnProperty(Zn) ? t[Zn] : null; }
    annotations(t) { if (!yo(t))
        return []; let n = ns(t), r = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(r); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let r = t.propMetadata;
        return typeof r == "function" && r.propMetadata && (r = r.propMetadata), r;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let r = t.propDecorators, o = {};
        return Object.keys(r).forEach(i => { o[i] = kl(r[i]); }), o;
    } return t.hasOwnProperty(Kn) ? t[Kn] : null; }
    propMetadata(t) { if (!yo(t))
        return {}; let n = ns(t), r = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { r[s] = i[s]; });
    } let o = this._ownPropMetadata(t, n); return o && Object.keys(o).forEach(i => { let s = []; r.hasOwnProperty(i) && s.push(...r[i]), s.push(...o[i]), r[i] = s; }), r; }
    ownPropMetadata(t) { return yo(t) ? this._ownPropMetadata(t, ns(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof nm && n in t.prototype; }
};
function kl(e) { return e ? e.map(t => { let r = t.type.annotationCls, o = t.args ? t.args : []; return new r(...o); }) : []; }
function ns(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var Ms = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) { this.previousValue = t, this.currentValue = n, this.firstChange = r; }
    isFirstChange() { return this.firstChange; }
};
function rm(e, t, n, r) { t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r; }
var om = (() => { let e = () => im; return e.ngInherit = !0, e; })();
function im(e) { return e.type.prototype.ngOnChanges && (e.setInput = oM), rM; }
function rM() { let e = am(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Pe)
        e.previous = t;
    else
        for (let r in t)
            n[r] = t[r];
    e.current = null, this.ngOnChanges(t);
} }
function oM(e, t, n, r, o) { let i = this.declaredInputs[r], s = am(e) || iM(e, { previous: Pe, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Ms(l && l.currentValue, n, c === Pe), rm(e, t, o, n); }
var sm = "__ngSimpleChanges__";
function am(e) { return e[sm] || null; }
function iM(e, t) { return e[sm] = t; }
var Vh = [];
var V = function (e, t = null, n) { for (let r = 0; r < Vh.length; r++) {
    let o = Vh[r];
    o(e, t, n);
} };
function sM(e, t, n) { let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype; if (r) {
    let s = im(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} o && (n.preOrderHooks ??= []).push(0 - e, o), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function cm(e, t) { for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function ps(e, t, n) { lm(e, t, 3, n); }
function hs(e, t, n, r) { (e[N] & 3) === n && lm(e, t, n, r); }
function Pl(e, t) { let n = e[N]; (n & 3) === t && (n &= 16383, n += 1, e[N] = n); }
function lm(e, t, n, r) { let o = r !== void 0 ? e[an] & 65535 : 0, i = r ?? -1, s = t.length - 1, a = 0; for (let c = o; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], r != null && a >= r)
            break;
    }
    else
        t[c] < 0 && (e[an] += 65536), (a < i || i == -1) && (aM(e, n, t, c), e[an] = (e[an] & 4294901760) + c + 2), c++; }
function Hh(e, t) { V(4, e, t); let n = A(null); try {
    t.call(e);
}
finally {
    A(n), V(5, e, t);
} }
function aM(e, t, n, r) { let o = n[r] < 0, i = n[r + 1], s = o ? -n[r] : n[r], a = e[s]; o ? e[N] >> 14 < e[an] >> 16 && (e[N] & 3) === t && (e[N] += 16384, Hh(a, i)) : Hh(a, i); }
var nr = -1, yn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r, o) { this.factory = t, this.name = o, this.canSeeViewProviders = n, this.injectImpl = r; }
};
function na(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function um(e) { return !!(e.type & 128); }
function cM(e) { return (e.flags & 8) !== 0; }
function lM(e) { return (e.flags & 16) !== 0; }
function uM(e, t, n) { let r = 0; for (; r < n.length;) {
    let o = n[r];
    if (typeof o == "number") {
        if (o !== 0)
            break;
        r++;
        let i = n[r++], s = n[r++], a = n[r++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = o, s = n[++r];
        dM(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
} return r; }
function dm(e) { return e === 3 || e === 4 || e === 6; }
function dM(e) { return e.charCodeAt(0) === 64; }
function ur(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let r = 0; r < t.length; r++) {
            let o = t[r];
            typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Bh(e, n, o, null, t[++r]) : Bh(e, n, o, null, null));
        }
    } return e; }
function Bh(e, t, n, r, o) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        o !== null && (e[i + 1] = o);
        return;
    }
    i++, o !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), o !== null && e.splice(i++, 0, o); }
function fm(e) { return e !== nr; }
function ws(e) { return e & 32767; }
function fM(e) { return e >> 16; }
function _s(e, t) { let n = fM(e), r = t; for (; n > 0;)
    r = r[sn], n--; return r; }
var su = !0;
function Ss(e) { let t = su; return su = e, t; }
var pM = 256, pm = pM - 1, hm = 5, hM = 0, lt = {};
function gM(e, t, n) { let r; typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(rn) && (r = n[rn]), r == null && (r = n[rn] = hM++); let o = r & pm, i = 1 << o; t.data[e + (o >> hm)] |= i; }
function bs(e, t) { let n = gm(e, t); if (n !== -1)
    return n; let r = t[m]; r.firstCreatePass && (e.injectorIndex = t.length, Ll(r.data, e), Ll(t, null), Ll(r.blueprint, null)); let o = pd(e, t), i = e.injectorIndex; if (fm(o)) {
    let s = ws(o), a = _s(o, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = o, i; }
function Ll(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function gm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function pd(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, r = null, o = t; for (; o !== null;) {
    if (r = Dm(o), r === null)
        return nr;
    if (n++, o = o[sn], r.injectorIndex !== -1)
        return r.injectorIndex | n << 16;
} return nr; }
function au(e, t, n) { gM(e, t, n); }
function mM(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let r = n.length, o = 0;
    for (; o < r;) {
        let i = n[o];
        if (dm(i))
            break;
        if (i === 0)
            o = o + 2;
        else if (typeof i == "number")
            for (o++; o < r && typeof n[o] == "string";)
                o++;
        else {
            if (i === t)
                return n[o + 1];
            o = o + 2;
        }
    }
} return null; }
function mm(e, t, n) { if (n & 8 || e !== void 0)
    return e; xi(t, "NodeInjector"); }
function vm(e, t, n, r) { if (n & 8 && r === void 0 && (r = null), (n & 3) === 0) {
    let o = e[k], i = Ie(void 0);
    try {
        return o ? o.get(t, r, n & 8) : zc(t, r, n & 8);
    }
    finally {
        Ie(i);
    }
} return mm(r, t, n); }
function ym(e, t, n, r = 0, o) { if (e !== null) {
    if (t[N] & 2048 && !(r & 2)) {
        let s = IM(e, t, n, r, lt);
        if (s !== lt)
            return s;
    }
    let i = Em(e, t, n, r, lt);
    if (i !== lt)
        return i;
} return vm(t, n, r, o); }
function Em(e, t, n, r, o) { let i = yM(n); if (typeof i == "function") {
    if (!Nl(t, e, r))
        return r & 1 ? mm(o, n, r) : vm(t, n, r, o);
    try {
        let s;
        if (s = i(r), s == null && !(r & 8))
            xi(n);
        else
            return s;
    }
    finally {
        Ml();
    }
}
else if (typeof i == "number") {
    let s = null, a = gm(e, t), c = nr, l = r & 1 ? t[X][le] : null;
    for ((a === -1 || r & 4) && (c = a === -1 ? pd(e, t) : t[a + 8], c === nr || !Uh(r, !1) ? a = -1 : (s = t[m], a = ws(c), t = _s(c, t))); a !== -1;) {
        let u = t[m];
        if ($h(i, a, u.data)) {
            let d = vM(a, t, n, s, r, l);
            if (d !== lt)
                return d;
        }
        c = t[a + 8], c !== nr && Uh(r, t[m].data[a + 8] === l) && $h(i, a, t) ? (s = u, a = ws(c), t = _s(c, t)) : a = -1;
    }
} return o; }
function vM(e, t, n, r, o, i) { let s = t[m], a = s.data[e + 8], c = r == null ? Me(a) && su : r != s && (a.type & 3) !== 0, l = o & 1 && i === a, u = gs(a, s, n, c, l); return u !== null ? Ao(t, s, u, a, o) : lt; }
function gs(e, t, n, r, o) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = r ? a : a + u, f = o ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (o) {
    let p = s[c];
    if (p && we(p) && p.type === n)
        return c;
} return null; }
function Ao(e, t, n, r, o) { let i = e[n], s = t.data; if (i instanceof yn) {
    let a = i;
    if (a.resolving) {
        let p = Re(s[n]);
        throw Wc(p);
    }
    let c = Ss(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ie(a.injectImpl) : null, f = Nl(e, r, 0);
    try {
        i = e[n] = a.factory(void 0, o, s, e, r), t.firstCreatePass && n >= r.directiveStart && sM(n, s[n], t);
    }
    finally {
        d !== null && Ie(d), Ss(c), a.resolving = !1, Ml();
    }
} return i; }
function yM(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(rn) ? e[rn] : void 0; return typeof t == "number" ? t >= 0 ? t & pm : EM : t; }
function $h(e, t, n) { let r = 1 << e; return !!(n[t + (e >> hm)] & r); }
function Uh(e, t) { return !(e & 2) && !(e & 1 && t); }
var qt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, r) { return ym(this._tNode, this._lView, t, Xt(r), n); }
};
function EM() { return new qt(_(), g()); }
function Im(e) { return ut(() => { let t = e.prototype.constructor, n = t[Xe] || cu(t), r = Object.prototype, o = Object.getPrototypeOf(e.prototype).constructor; for (; o && o !== r;) {
    let i = o[Xe] || cu(o);
    if (i && i !== n)
        return i;
    o = Object.getPrototypeOf(o);
} return i => new i; }); }
function cu(e) { return Kr(e) ? () => { let t = cu(x(e)); return t && t(); } : Ft(e); }
function IM(e, t, n, r, o) { let i = e, s = t; for (; i !== null && s !== null && s[N] & 2048 && !nt(s);) {
    let a = Em(i, s, n, r | 2, lt);
    if (a !== lt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[nl];
        if (l) {
            let u = l.get(n, lt, r);
            if (u !== lt)
                return u;
        }
        c = Dm(s), s = s[sn];
    }
    i = c;
} return o; }
function Dm(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ra(e) { return mM(_(), e); }
var Tm = Cr("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ra(e) })), Gh = null;
function hd() { return Gh = Gh || new Ns; }
function oa(e) { return Cm(hd().parameters(e)); }
function Cm(e) { return e.map(t => DM(t)); }
function DM(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r === void 0)
            continue;
        let o = Object.getPrototypeOf(r);
        if (r instanceof Jg || o.ngMetadataName === "Optional")
            t.optional = !0;
        else if (r instanceof em || o.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (r instanceof Xg || o.ngMetadataName === "Self")
            t.self = !0;
        else if (r instanceof tm || o.ngMetadataName === "Host")
            t.host = !0;
        else if (r instanceof Kg)
            t.token = r.token;
        else if (r instanceof Tm) {
            if (r.attributeName === void 0)
                throw new T(204, !1);
            t.attribute = r.attributeName;
        }
        else
            t.token = r;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function TM(e, t) { let n = null, r = null; e.hasOwnProperty(Pn) || Object.defineProperty(e, Pn, { get: () => (n === null && (n = oe({ usage: 0, kind: "injectable", type: e }).compileInjectable(jh, `ng:///${e.name}/\u0275prov.js`, wM(e, t))), n) }), e.hasOwnProperty(Xe) || Object.defineProperty(e, Xe, { get: () => { if (r === null) {
        let o = oe({ usage: 0, kind: "injectable", type: e });
        r = o.compileFactory(jh, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: oa(e), target: o.FactoryTarget.Injectable });
    } return r; }, configurable: !0 }); }
var CM = F({ provide: String, useValue: F });
function qh(e) { return e.useClass !== void 0; }
function NM(e) { return CM in e; }
function Wh(e) { return e.useFactory !== void 0; }
function MM(e) { return e.useExisting !== void 0; }
function wM(e, t) { let n = t || { providedIn: null }, r = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (qh(n) || Wh(n)) && n.deps !== void 0 && (r.deps = Cm(n.deps)), qh(n) ? r.useClass = n.useClass : NM(n) ? r.useValue = n.useValue : Wh(n) ? r.useFactory = n.useFactory : MM(n) && (r.useExisting = n.useExisting), r; }
var _M = zo("Injectable", void 0, void 0, void 0, (e, t) => TM(e, t));
function SM() { return Nr(_(), g()); }
function Nr(e, t) { return new Qo(ie(e, t)); }
var Qo = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = SM;
} return e; })();
function Nm(e) { return e instanceof Qo ? e.nativeElement : e; }
function bM() { return this._results[Symbol.iterator](); }
var Rs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new ud; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let r = Ue(t); (this._changesDetected = !hh(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = bM;
}, Mr = "ngSkipHydration", RM = "ngskiphydration";
function gd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number")
        return !1;
    if (typeof r == "string" && r.toLowerCase() === RM)
        return !0;
} return !1; }
function Mm(e) { return e.hasAttribute(Mr); }
function Oo(e) { return (e.flags & 128) === 128; }
function wr(e) { if (Oo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Oo(e) || gd(t))
        return !0;
    t = t.parent;
} return !1; }
function wm(e) { return Oo(e) || gd(e) || wr(e); }
var ia = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(ia || {}), sa = new Map, AM = 0;
function OM() { return AM++; }
function xM(e) { sa.set(e[Vn], e); }
function _m(e) { return sa.get(e) || null; }
function lu(e) { sa.delete(e[Vn]); }
function kM() { return sa; }
var As = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return _m(this.lViewId); }
    constructor(t, n, r) { this.lViewId = t, this.nodeIndex = n, this.native = r; }
};
function _e(e) { let t = ms(e); if (t) {
    if (ee(t)) {
        let n = t, r, o, i;
        if (bm(e)) {
            if (r = FM(n, e), r == -1)
                throw new Error("The provided component was not found in the application");
            o = e;
        }
        else if (PM(e)) {
            if (r = jM(n, e), r == -1)
                throw new Error("The provided directive was not found in the application");
            i = Rm(r, n);
        }
        else if (r = Qh(n, e), r == -1)
            return null;
        let s = P(n[r]), a = ms(s), c = a && !Array.isArray(a) ? a : zh(n, r, s);
        if (o && c.component === void 0 && (c.component = o, Ve(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ve(i[l], c);
        }
        Ve(c.native, c), t = c;
    }
}
else {
    let n = e, r = n;
    for (; r = r.parentNode;) {
        let o = ms(r);
        if (o) {
            let i = Array.isArray(o) ? o : o.lView;
            if (!i)
                return null;
            let s = Qh(i, n);
            if (s >= 0) {
                let a = P(i[s]), c = zh(i, s, a);
                Ve(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function zh(e, t, n) { return new As(e[Vn], t, n); }
var uu = "__ngContext__";
function Ve(e, t) { ee(t) ? (e[uu] = t[Vn], xM(t)) : e[uu] = t; }
function ms(e) { let t = e[uu]; return typeof t == "number" ? _m(t) : t || null; }
function Sm(e) { let t = ms(e); return t ? ee(t) ? t : t.lView : null; }
function bm(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function PM(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Qh(e, t) { let n = e[m]; for (let r = I; r < n.bindingStartIndex; r++)
    if (P(e[r]) === t)
        return r; return -1; }
function LM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function FM(e, t) { let n = e[m].components; if (n)
    for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (me(o, e)[H] === t)
            return o;
    }
else if (me(I, e)[H] === t)
    return I; return -1; }
function jM(e, t) { let n = e[m].firstChild; for (; n;) {
    let r = n.directiveStart, o = n.directiveEnd;
    for (let i = r; i < o; i++)
        if (e[i] === t)
            return n.index;
    n = LM(n);
} return -1; }
function Rm(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return L; let r = []; for (let o = n.directiveStart; o < n.directiveEnd; o++) {
    let i = t[o];
    bm(i) || r.push(i);
} return r; }
function VM(e, t) { let n = t[m].data[e]; return Me(n) ? t[n.directiveStart + n.componentOffset] : null; }
function HM(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let r = {}, o = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        r[n.localNames[i]] = e[o], o++;
    return r;
} return null; }
function Am(e) { return xm(e[Vt]); }
function Om(e) { return xm(e[pe]); }
function xm(e) { for (; e !== null && !Y(e);)
    e = e[pe]; return e; }
function Zh(e) { let t = _e(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = VM(t.nodeIndex, n);
} return t.component; }
function BM(e) { KM(e); let t = _e(e), n = t ? t.lView : null; return n === null ? null : n[H]; }
function $M(e) { let t = _e(e), n = t ? t.lView : null; if (n === null)
    return null; let r; for (; n[m].type === 2 && (r = ht(n));)
    n = r; return nt(n) ? null : n[H]; }
function UM(e) { let t = _e(e), n = t ? t.lView : null; if (n === null)
    return ce.NULL; let r = n[m].data[t.nodeIndex]; return new qt(r, n); }
function GM(e) { let t = _e(e), n = t ? t.lView : null; if (n === null)
    return []; let r = n[m], o = r.data[t.nodeIndex], i = [], s = o.providerIndexes & 1048575, a = o.directiveEnd; for (let c = s; c < a; c++) {
    let l = r.data[c];
    YM(l) && (l = l.type), i.push(l);
} return i; }
function qM(e) { if (e instanceof Text)
    return []; let t = _e(e), n = t ? t.lView : null; if (n === null)
    return []; let r = n[m], o = t.nodeIndex; return r?.data[o] ? (t.directives === void 0 && (t.directives = Rm(o, n)), t.directives === null ? [] : [...t.directives]) : []; }
var km = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(km || {}), Pm = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Pm || {}), Lm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Lm || {});
function WM(e) { let t = _e(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = HM(n, t.nodeIndex);
} return t.localRefs || {}; }
function zM(e) { return _e(e).native; }
function QM(e) { let t = _e(e), n = t === null ? null : t.lView; if (n === null)
    return []; let r = n[m], o = n[jt], i = r.cleanup, s = []; if (i && o)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = P(n[l]), f = o[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", v = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: v, type: h });
        }
    } return s.sort(ZM), s; }
function ZM(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function YM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function KM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var du;
function JM(e) { du = e; }
function _t() { if (du !== void 0)
    return du; if (typeof document < "u")
    return document; throw new T(210, !1); }
var St = new C("", { providedIn: "root", factory: () => XM }), XM = "ng", md = new C(""), ew = new C("", { providedIn: "platform", factory: () => "unknown" }), tw = new C(""), nw = new C(""), rw = new C("", { providedIn: "root", factory: () => _t().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Fm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, ow = new C("", { providedIn: "root", factory: () => Fm });
function iw(e) { return e; }
function sw() { let e = new _n; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = jm(_t(), E(St))), e; }
var _n = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: sw });
    store = {};
    onSerializeCallbacks = {};
    get(n, r) { return this.store[n] !== void 0 ? this.store[n] : r; }
    set(n, r) { this.store[n] = r; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, r) { this.onSerializeCallbacks[n] = r; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (r) {
                console.warn("Exception in onSerialize callback: ", r);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function jm(e, t) { let n = e.getElementById(t + "-state"); if (n?.tagName === "SCRIPT" && n.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (r) {
        console.warn("Exception while restoring TransferState for app " + t, r);
    } return {}; }
var vd = "h", yd = "b", Vm = "f", Hm = "n", Zo = "e", aa = "t", _r = "c", Yo = "x", Ct = "r", ca = "i", Ko = "n", Sr = "d", la = "l", ua = "di", Jo = "s", Ed = "p", da = "t", Sn = new C(""), Bm = !1, Id = new C("", { providedIn: "root", factory: () => Bm }), Dd = new C(""), fa = new C(""), Td = !1, Cd = new C(""), Xo = new C("", { providedIn: "root", factory: () => new Map }), aw = new C("");
var Os = { passive: !0, capture: !0 }, Fl = new WeakMap, jl = new WeakMap, Jn = new WeakMap, xs = ["click", "keydown"], ks = ["mouseenter", "mouseover", "focusin"], zn = null, Vl = 0, xo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function $m(e, t) { let n = jl.get(e); if (!n) {
    n = new xo, jl.set(e, n);
    for (let r of xs)
        e.addEventListener(r, n.listener, Os);
} return n.callbacks.add(t), () => { let { callbacks: r, listener: o } = n; if (r.delete(t), r.size === 0) {
    jl.delete(e);
    for (let i of xs)
        e.removeEventListener(i, o, Os);
} }; }
function Um(e, t) { let n = Fl.get(e); if (!n) {
    n = new xo, Fl.set(e, n);
    for (let r of ks)
        e.addEventListener(r, n.listener, Os);
} return n.callbacks.add(t), () => { let { callbacks: r, listener: o } = n; if (r.delete(t), r.size === 0) {
    for (let i of ks)
        e.removeEventListener(i, o, Os);
    Fl.delete(e);
} }; }
function cw() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && Jn.has(t.target) && Jn.get(t.target).listener(); }); }
function lw(e, t, n) { let r = Jn.get(e); return zn = zn || n(), r || (r = new xo, zn.observe(e), Jn.set(e, r), Vl++), r.callbacks.add(t), () => { Jn.has(e) && (r.callbacks.delete(t), r.callbacks.size === 0 && (zn?.unobserve(e), Jn.delete(e), Vl--), Vl === 0 && (zn?.disconnect(), zn = null)); }; }
var br = "ngb";
function Nd(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let r = e.getAttribute(Wn.JSACTION), o = t.reduce((s, a) => (r?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Wn.JSACTION, `${r ?? ""}${o}`); let i = n ?? ""; i !== "" && o.length > 0 && e.setAttribute(br, i); }
var Gm = (e, t, n) => { let r = e, o = r.__jsaction_fns ?? new Map, i = o.get(t) ?? []; i.push(n), o.set(t, i), r.__jsaction_fns = o; }, Md = (e, t) => { let n = e, r = n.getAttribute(br) ?? "", o = t.get(r) ?? new Set; o.has(n) || o.add(n), t.set(r, o); };
function uw(e, t) { if (e.length > 0) {
    let n = [];
    for (let o of e)
        t.has(o) && (n = [...n, ...t.get(o)]);
    new Set(n).forEach(wd);
} }
var wd = e => { e.removeAttribute(Wn.JSACTION), e.removeAttribute(br), e.__jsaction_fns = void 0; }, _d = new C("", { providedIn: "root", factory: () => ({}) });
function Sd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let r of n)
        r(e); }
var fu = new Map;
function qm(e, t) { return fu.set(e, t), () => fu.delete(e); }
var Yh = !1, Wm = (e, t, n, r) => { };
function dw(e, t, n, r) { Wm(e, t, n, r); }
function zm() { Yh || (Wm = (e, t, n, r) => { let o = e[k].get(St); fu.get(o)?.(t, n, r); }, Yh = !0); }
var bt = new C(""), Qm = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(Xo);
    contract = E(_d);
    add(n, r) { if (this.registry.set(n, r), this.awaitingCallbacks.has(n)) {
        let o = this.awaitingCallbacks.get(n);
        for (let i of o)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { uw(n, this.jsActionMap); for (let r of n)
        this.registry.delete(r), this.jsActionMap.delete(r), this.invokeTriggerCleanupFns(r), this.hydrating.delete(r), this.awaitingCallbacks.delete(r); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, r) { let o = []; this.cleanupFns.has(n) && (o = this.cleanupFns.get(n)), o.push(r), this.cleanupFns.set(n, o); }
    invokeTriggerCleanupFns(n) { let r = this.cleanupFns.get(n) ?? []; for (let o of r)
        o(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, r) { let o = this.awaitingCallbacks.get(n) ?? []; o.push(r), this.awaitingCallbacks.set(n, o); }
    static \u0275prov = j({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Rr(e) { return (e.flags & 32) === 32; }
var Zm = "__nghData__", pa = Zm, Ym = "__nghDeferData__", ha = Ym;
function fw(e) { return e === Zm || e === Ym; }
var rr = "ngh", Km = "nghm", Jm = () => null;
function pw(e, t, n = !1) { let r = e.getAttribute(rr); if (r == null)
    return null; let [o, i] = r.split("|"); if (r = n ? i : o, !r)
    return null; let s = i ? `|${i}` : "", a = n ? o : s, c = {}; if (r !== "") {
    let u = t.get(_n, null, { optional: !0 });
    u !== null && (c = u.get(pa, [])[Number(r)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, ga(l, 0, e.nextSibling)), a ? e.setAttribute(rr, a) : e.removeAttribute(rr), l; }
function Xm() { Jm = pw; }
function ev(e, t, n = !1) { return Jm(e, t, n); }
function bd(e) { let t = e._lView; return t[m].type === 2 ? null : (nt(t) && (t = t[I]), t); }
function hw(e) { return e.textContent?.replace(/\s/gm, ""); }
function gw(e) { let t = _t(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = hw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), r, o = []; for (; r = n.nextNode();)
    o.push(r); for (let i of o)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var tv = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(tv || {}), mw = "__ngDebugHydrationInfo__";
function vw(e) { return e[mw] ?? null; }
function ga(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function pu(e, t) { return e.segmentHeads?.[t] ?? null; }
function ei(e) { return e.get(Cd, !1, { optional: !0 }); }
var yw = !1;
function Ew() { yw = !1; }
function nv(e, t) { let n = e.data, r = n[Zo]?.[t] ?? null; return r === null && n[_r]?.[t] && (r = Rd(e, t)), r; }
function Iw(e, t) { return e.data[Zo]?.[t] !== void 0; }
function rv(e, t) { return e.data[_r]?.[t] ?? null; }
function Rd(e, t) { let n = rv(e, t) ?? [], r = 0; for (let o of n)
    r += o[Ct] * (o[Yo] ?? 1); return r; }
function ov(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Sr];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function ma(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Sr];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!ov(e)?.has(t); }
function va(e, t) { let n = e[ue]; return n !== null && !fo() && !Rr(t) && !ma(n, t.index - I); }
function Ad(e, t) { let n = t, r = e.corruptedTextNodes; n.textContent === "" ? r.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && r.set(n, "ngtns"); }
function iv(e) { let t = []; return e !== null && (e.has(4) && t.push(...ks), e.has(3) && t.push(...xs)), t; }
function Dw(e, t) { let n = t.get(bt), o = t.get(_n).get(ha, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = o[s][Ed];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function Tw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, r = [ks.join(":;"), xs.join(":;")].join("|"); for (let o of t) {
    let i = o.getAttribute("jsaction"), s = o.getAttribute("ngb");
    i?.match(r) && s !== null && n.add(o);
} return n; }
function sv(e, t) { let n = Tw(e), r = t.get(Xo); for (let o of n)
    Md(o, r); }
var av = () => ({});
function Cw(e) { let t = e.get(_n, null, { optional: !0 }); return t !== null ? t.get(ha, {}) : {}; }
function cv() { av = Cw; }
function Nw(e) { return av(e); }
function Mw(e) { return typeof e == "object" && e.trigger === 5; }
function ww(e) { return e[da]?.find(n => Mw(n))?.delay ?? null; }
function Hl(e, t) { return e[da]?.includes(t) ?? !1; }
function _w(e) { return { data: e, hydrate: { idle: Hl(e, 0), immediate: Hl(e, 1), timer: ww(e), viewport: Hl(e, 2) } }; }
function lv(e) { let t = Nw(e), n = new Map; for (let r in t)
    n.set(r, _w(t[r])); return n; }
function Bl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Km; }
function Kh(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function uv(e) { for (let r of e.body.childNodes)
    if (Bl(r))
        return; let t = Kh(e.body.previousSibling); if (Bl(t))
    return; let n = Kh(e.head.lastChild); if (!Bl(n))
    throw new T(-507, !1); }
function dv(e, t) { let n = e.contentQueries; if (n !== null) {
    let r = A(null);
    try {
        for (let o = 0; o < n.length; o += 2) {
            let i = n[o], s = n[o + 1];
            if (s !== -1) {
                let a = e.data[s];
                po(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        A(r);
    }
} }
function hu(e, t, n) { po(0); let r = A(null); try {
    t(e, n);
}
finally {
    A(r);
} }
function Od(e, t, n) { if (ol(t)) {
    let r = A(null);
    try {
        let o = t.directiveStart, i = t.directiveEnd;
        for (let s = o; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        A(r);
    }
} }
var Nt = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(Nt || {}), Sw = { name: "custom-elements" }, bw = { name: "no-errors-schema" }, fv = !1;
function Rw(e) { fv = e; }
function Aw() { return fv; }
var pv = !1;
function Ow(e) { pv = e; }
function xw() { return pv; }
var rs;
function hv() { if (rs === void 0 && (rs = null, be.trustedTypes))
    try {
        rs = be.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return rs; }
function Ar(e) { return hv()?.createHTML(e) || e; }
function kw(e) { return hv()?.createScriptURL(e) || e; }
var os;
function xd() { if (os === void 0 && (os = null, be.trustedTypes))
    try {
        os = be.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return os; }
function Jh(e) { return xd()?.createHTML(e) || e; }
function Xh(e) { return xd()?.createScript(e) || e; }
function eg(e) { return xd()?.createScriptURL(e) || e; }
var Mt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ri})`; }
}, gu = class extends Mt {
    getTypeName() { return "HTML"; }
}, mu = class extends Mt {
    getTypeName() { return "Style"; }
}, vu = class extends Mt {
    getTypeName() { return "Script"; }
}, yu = class extends Mt {
    getTypeName() { return "URL"; }
}, Eu = class extends Mt {
    getTypeName() { return "ResourceURL"; }
};
function Rt(e) { return e instanceof Mt ? e.changingThisBreaksApplicationSecurity : e; }
function Or(e, t) { let n = gv(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Ri})`);
} return n === t; }
function gv(e) { return e instanceof Mt && e.getTypeName() || null; }
function Pw(e) { return new gu(e); }
function Lw(e) { return new mu(e); }
function Fw(e) { return new vu(e); }
function jw(e) { return new yu(e); }
function Vw(e) { return new Eu(e); }
function mv(e) { let t = new Du(e); return Hw() ? new Iu(t) : t; }
var Iu = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Ar(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, Du = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Ar(t), n; }
};
function Hw() { try {
    return !!new window.DOMParser().parseFromString(Ar(""), "text/html");
}
catch {
    return !1;
} }
var Bw = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ya(e) { return e = String(e), e.match(Bw) ? e : "unsafe:" + e; }
function At(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ti(...e) { let t = {}; for (let n of e)
    for (let r in n)
        n.hasOwnProperty(r) && (t[r] = !0); return t; }
var vv = At("area,br,col,hr,img,wbr"), yv = At("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Ev = At("rp,rt"), $w = ti(Ev, yv), Uw = ti(yv, At("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Gw = ti(Ev, At("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Tu = ti(vv, Uw, Gw, $w), Iv = At("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), qw = At("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Ww = At("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Cu = ti(Iv, qw, Ww), zw = At("script,style,template"), Nu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, r = !0, o = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
            o.push(n), n = Yw(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = Zw(n);
            if (i) {
                n = i;
                break;
            }
            n = o.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = tg(t).toLowerCase(); if (!Tu.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !zw.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let r = t.attributes; for (let o = 0; o < r.length; o++) {
        let i = r.item(o), s = i.name, a = s.toLowerCase();
        if (!Cu.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Iv[a] && (c = ya(c)), this.buf.push(" ", s, '="', ng(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = tg(t).toLowerCase(); Tu.hasOwnProperty(n) && !vv.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(ng(t)); }
};
function Qw(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function Zw(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Dv(t); return t; }
function Yw(e) { let t = e.firstChild; if (t && Qw(e, t))
    throw Dv(t); return t; }
function tg(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Dv(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var Kw = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Jw = /([^\#-~ |!])/g;
function ng(e) { return e.replace(/&/g, "&amp;").replace(Kw, function (t) { let n = t.charCodeAt(0), r = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"; }).replace(Jw, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var is;
function Tv(e, t) { let n = null; try {
    is = is || mv(e);
    let r = t ? String(t) : "";
    n = is.getInertBodyElement(r);
    let o = 5, i = r;
    do {
        if (o === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        o--, r = i, i = n.innerHTML, n = is.getInertBodyElement(r);
    } while (r !== i);
    let a = new Nu().sanitizeChildren(Mu(n) || n);
    return Ar(a);
}
finally {
    if (n) {
        let r = Mu(n) || n;
        for (; r.firstChild;)
            r.firstChild.remove();
    }
} }
function Mu(e) { return "content" in e && Xw(e) ? e.content : null; }
function Xw(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var e_ = /^>|^->|<!--|-->|--!>|<!-$/g, t_ = /(<|>)/g, n_ = "\u200B$1\u200B";
function r_(e) { return e.replace(e_, t => t.replace(t_, n_)); }
function kd(e, t) { return e.createText(t); }
function Cv(e, t, n) { e.setValue(t, n); }
function Pd(e, t) { return e.createComment(r_(t)); }
function Ea(e, t, n) { return e.createElement(t, n); }
function En(e, t, n, r, o) { e.insertBefore(t, n, r, o); }
function Nv(e, t, n) { e.appendChild(t, n); }
function rg(e, t, n, r, o) { r !== null ? En(e, t, n, r, o) : Nv(e, t, n); }
function ni(e, t, n, r) { e.removeChild(null, t, n, r); }
function Mv(e) { e.textContent = ""; }
function o_(e, t, n) { e.setAttribute(t, "style", n); }
function i_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function wv(e, t, n) { let { mergedAttrs: r, classes: o, styles: i } = n; r !== null && uM(e, t, r), o !== null && i_(e, t, o), i !== null && o_(e, t, i); }
function s_(e) { let t = g(); e.src = "", e.srcdoc = Ar(""), ni(t[w], e); }
var K = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e; })(K || {}), vs, og = "svg", a_ = "math";
function c_() { return vs || (vs = {}, Ut(K.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), Ut(K.STYLE, void 0, [["*", ["style"]]]), Ut(K.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), Ut(K.URL, a_, [["annotation", ["href", "xlink:href"]], ["annotation-xml", ["href", "xlink:href"]], ["maction", ["href", "xlink:href"]], ["malignmark", ["href", "xlink:href"]], ["math", ["href", "xlink:href"]], ["mroot", ["href", "xlink:href"]], ["msqrt", ["href", "xlink:href"]], ["merror", ["href", "xlink:href"]], ["mfrac", ["href", "xlink:href"]], ["mglyph", ["href", "xlink:href"]], ["msub", ["href", "xlink:href"]], ["msup", ["href", "xlink:href"]], ["msubsup", ["href", "xlink:href"]], ["mmultiscripts", ["href", "xlink:href"]], ["mprescripts", ["href", "xlink:href"]], ["mi", ["href", "xlink:href"]], ["mn", ["href", "xlink:href"]], ["mo", ["href", "xlink:href"]], ["mpadded", ["href", "xlink:href"]], ["mphantom", ["href", "xlink:href"]], ["mrow", ["href", "xlink:href"]], ["ms", ["href", "xlink:href"]], ["mspace", ["href", "xlink:href"]], ["mstyle", ["href", "xlink:href"]], ["mtable", ["href", "xlink:href"]], ["mtd", ["href", "xlink:href"]], ["mtr", ["href", "xlink:href"]], ["mtext", ["href", "xlink:href"]], ["mover", ["href", "xlink:href"]], ["munder", ["href", "xlink:href"]], ["munderover", ["href", "xlink:href"]], ["semantics", ["href", "xlink:href"]], ["none", ["href", "xlink:href"]]]), Ut(K.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), Ut(K.URL, og, [["a", ["href", "xlink:href"]]]), Ut(K.ATTRIBUTE_NO_BINDING, og, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), Ut(K.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]]])), vs; }
function Ut(e, t, n) { for (let [r, o] of n) {
    let i = t && r !== "*" && r !== "unknown" ? `:${t}:${r}` : r;
    i = i.toLowerCase();
    for (let s of o)
        vs[`${i}|${s.toLowerCase()}`] = e;
} }
function Ld(e) { let t = ri(); return t ? Jh(t.sanitize(K.HTML, e) || "") : Or(e, "HTML") ? Jh(Rt(e)) : Tv(_t(), b(e)); }
function Fd(e) { let t = ri(); return t ? t.sanitize(K.STYLE, e) || "" : Or(e, "Style") ? Rt(e) : b(e); }
function jd(e) { let t = ri(); return t ? t.sanitize(K.URL, e) || "" : Or(e, "URL") ? Rt(e) : ya(b(e)); }
function Ia(e) { let t = ri(); if (t)
    return eg(t.sanitize(K.RESOURCE_URL, e) || ""); if (Or(e, "ResourceURL"))
    return eg(Rt(e)); throw new T(904, !1); }
function Vd(e) { let t = ri(); if (t)
    return Xh(t.sanitize(K.SCRIPT, e) || ""); if (Or(e, "Script"))
    return Xh(Rt(e)); throw new T(905, !1); }
function _v(e) { return Ar(e[0]); }
function Sv(e) { return kw(e[0]); }
var l_ = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function u_(e, t) { return l_[e.toLowerCase()]?.[t.toLowerCase()] === !0 ? Ia : jd; }
function bv(e, t, n) { return u_(t, n)(e); }
function ri() { let e = g(); return e && e[We].sanitizer; }
var d_ = ["attributeName", "attributename"], ss = new Set(["href", "xlink:href"]), f_ = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, ":svg:animate": { attributename: !0, to: ss, values: ss, from: ss }, ":svg:set": { attributename: !0, to: ss }, ":svg:animatemotion": { attributename: !0 }, ":svg:animatetransform": { attributename: !0 } };
function Hd(e, t, n) { let r = t.toLowerCase(), o = n.toLowerCase(), s = ne() === -1 ? null : Fe(); if (s && s.type !== 2)
    return e; let a = r[0] !== ":" && s?.namespace ? `:${s.namespace}:${r}` : r, c = f_[a]?.[o]; if (!c)
    return e; let l = g(); if (s && r === "iframe") {
    let f = ie(s, l);
    s_(f);
} let u = t[0] === ":" ? t.split(":").pop() : t; if (typeof c != "boolean") {
    if (!s)
        throw new T(-910, !1);
    let f = ie(s, l);
    if (p_(f, c))
        throw new T(-910, !1);
    return e;
} let d = !1; throw new T(-910, d); }
function p_(e, t) { for (let n of d_) {
    let r = e.getAttribute(n);
    if (r !== null && t.has(r.toLowerCase()))
        return r;
} return null; }
function h_() { return qe([]); }
function Rv(e) { return e.ownerDocument.defaultView; }
function Av(e) { return e.ownerDocument; }
function Bd(e) { return e.ownerDocument.body; }
var g_ = "\uFFFD";
function Xn(e) { return e instanceof Function ? e() : e; }
function m_(e, t, n) { let r = e.length; for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1)
        return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
        let i = t.length;
        if (o + i === r || e.charCodeAt(o + i) <= 32)
            return o;
    }
    n = o + 1;
} }
var Ov = "ng-template";
function v_(e, t, n, r) { let o = 0; if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
        if (t[o] === "class" && m_(t[o + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if ($d(e))
    return !1; if (o = t.indexOf(1, o), o > -1) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function $d(e) { return e.type === 4 && e.value !== Ov; }
function y_(e, t, n) { let r = e.type === 4 && !n ? Ov : e.value; return t === r; }
function E_(e, t, n) { let r = 4, o = e.attrs, i = o !== null ? T_(o) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Ze(r) && !Ze(c))
            return !1;
        if (s && Ze(c))
            continue;
        s = !1, r = c | r & 1;
        continue;
    }
    if (!s)
        if (r & 4) {
            if (r = 2 | r & 1, c !== "" && !y_(e, c, n) || c === "" && t.length === 1) {
                if (Ze(r))
                    return !1;
                s = !0;
            }
        }
        else if (r & 8) {
            if (o === null || !v_(e, o, c, n)) {
                if (Ze(r))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = I_(c, o, $d(e), n);
            if (u === -1) {
                if (Ze(r))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = o[u + 1].toLowerCase(), r & 2 && l !== d) {
                    if (Ze(r))
                        return !1;
                    s = !0;
                }
            }
        }
} return Ze(r) || s; }
function Ze(e) { return (e & 1) === 0; }
function I_(e, t, n, r) { if (t === null)
    return -1; let o = 0; if (r || !n) {
    let i = !1;
    for (; o < t.length;) {
        let s = t[o];
        if (s === e)
            return o;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++o];
            for (; typeof a == "string";)
                a = t[++o];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                o += 4;
                continue;
            }
        }
        o += i ? 1 : 2;
    }
    return -1;
}
else
    return C_(t, e); }
function xv(e, t, n = !1) { for (let r = 0; r < t.length; r++)
    if (E_(e, t[r], n))
        return !0; return !1; }
function D_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function T_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (dm(n))
        return t;
} return e.length; }
function C_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let r = e[n];
        if (typeof r == "number")
            return -1;
        if (r === t)
            return n;
        n++;
    } return -1; }
function N_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
        for (let o = 0; o < e.length; o++)
            if (e[o] !== r[o])
                continue e;
        return !0;
    }
} return !1; }
function ig(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function M_(e) { let t = e[0], n = 1, r = 2, o = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (r & 2) {
            let a = e[++n];
            o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            r & 8 ? o += "." + s : r & 4 && (o += " " + s);
    else
        o !== "" && !Ze(s) && (t += ig(i, o), o = ""), r = s, i = i || !Ze(r);
    n++;
} return o !== "" && (t += ig(i, o)), t; }
function w_(e) { return e.map(M_).join(","); }
function __(e) { let t = [], n = [], r = 1, o = 2; for (; r < e.length;) {
    let i = e[r];
    if (typeof i == "string")
        o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
        if (!Ze(o))
            break;
        o = i;
    }
    r++;
} return n.length && t.push(1, ...n), t; }
var B = {};
function Ud(e, t, n, r, o, i, s, a, c, l, u) { let d = I + r, f = d + o, p = S_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function S_(e, t) { let n = []; for (let r = 0; r < t; r++)
    n.push(r < e ? null : B); return n; }
function kv(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Ud(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Da(e, t, n, r, o, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[$] = o, d[N] = r | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[N] & 2048) && (d[N] |= 2048), sl(d), d[z] = d[sn] = e, d[H] = n, d[We] = s || e && e[We], d[w] = a || e && e[w], d[k] = c || e && e[k] || null, d[le] = i, d[Vn] = OM(), d[ue] = u, d[nl] = l, d[X] = t.type == 2 ? e[X] : d, d; }
function b_(e, t, n) { let r = ie(t, e), o = kv(n), i = e[We].rendererFactory, s = qd(e, Da(e, o, null, Gd(n), r, t, null, i.createRenderer(r, n), null, null, null)); return e[t.index] = s; }
function Gd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function oi(e, t, n, r) { if (n === 0)
    return -1; let o = t.length; for (let i = 0; i < n; i++)
    t.push(r), e.blueprint.push(r), e.data.push(null); return o; }
function qd(e, t) { return e[Vt] ? e[so][pe] = t : e[Vt] = t, e[so] = t, t; }
function Pv(e = 1) { Lv(R(), g(), ne() + e, !1); }
function Lv(e, t, n, r) { if (!r)
    if ((t[N] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && ps(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && hs(t, i, 0, n);
    } at(n); }
var Ta = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ta || {});
function ko(e, t, n, r) { let o = A(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ta.SignalBased) !== 0 && (c = t[i][ae]), c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)), e.setInput !== null ? e.setInput(t, c, r, n, i) : rm(t, c, i, r);
}
finally {
    A(o);
} }
var Ps = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Ps || {}), wu;
function Wd(e, t) { return wu(e, t); }
function R_(e) { wu === void 0 && (wu = e()); }
function Ls(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function or(e, t) { return e.getPropertyValue(t).split(",").map(r => r.trim()); }
function A_(e) { let t = or(e, "transition-property"), n = or(e, "transition-duration"), r = or(e, "transition-delay"), o = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Ls(r[i]) + Ls(n[i]);
    s > o.duration && (o.propertyName = t[i], o.duration = s);
} return o; }
function O_(e) { let t = or(e, "animation-name"), n = or(e, "animation-delay"), r = or(e, "animation-duration"), o = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Ls(n[i]) + Ls(r[i]);
    s > o.duration && (o.animationName = t[i], o.duration = s);
} return o; }
function Fv(e, t) { return e !== void 0 && e.duration > t.duration; }
function jv(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function x_(e, t) { let n = getComputedStyle(e), r = O_(n), o = A_(n), i = r.duration > o.duration ? r : o; Fv(t.get(e), i) || jv(i) && t.set(e, i); }
function Vv(e, t, n) { if (!n)
    return; let r = e.getAnimations(); return r.length === 0 ? x_(e, t) : k_(e, t, r); }
function k_(e, t, n) { let r = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let o of n) {
    let i = o.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    o.animationName ? l = o.animationName : c = o.transitionProperty, a >= r.duration && (r = { animationName: l, propertyName: c, duration: a });
} Fv(t.get(e), r) || jv(r) && t.set(e, r); }
var In = new Set, Ca = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ca || {}), xr = new C(""), sg = new Set;
function te(e) { sg.has(e) || (sg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Hv = !1, _u = class extends ud {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Hi() && (this.destroyRef = E(je, { optional: !0 }) ?? void 0, this.pendingTasks = E(Et, { optional: !0 }) ?? void 0); }
    emit(t) { let n = A(null); try {
        super.next(t);
    }
    finally {
        A(n);
    } }
    subscribe(t, n, r) { let o = t, i = n || (() => null), s = r; if (t && typeof t == "object") {
        let c = t;
        o = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: o, error: i, complete: s }); return t instanceof dd && t.add(a), a; }
    wrapInTimeout(t) { return n => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, Dt = _u;
function Bv(e) { let t, n; function r() { e = fn; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function ag(e) { return queueMicrotask(() => e()), () => { e = fn; }; }
var zd = "isAngularZone", Fs = zd + "_ID", P_ = 0, G = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Dt(!1);
    onMicrotaskEmpty = new Dt(!1);
    onStable = new Dt(!1);
    onError = new Dt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = Hv } = t; if (typeof Zone > "u")
        throw new T(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, j_(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(zd) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new T(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new T(909, !1); }
    run(t, n, r) { return this._inner.run(t, n, r); }
    runTask(t, n, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, t, L_, fn, fn); try {
        return i.runTask(s, n, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, r) { return this._inner.runGuarded(t, n, r); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, L_ = {};
function Qd(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function F_(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Bv(() => { e.callbackScheduled = !1, Su(e), e.isCheckStableRunning = !0, Qd(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), Su(e); }
function j_(e) { let t = () => { F_(e); }, n = P_++; e._inner = e._inner.fork({ name: "angular", properties: { [zd]: !0, [Fs]: n, [Fs + n]: !0 }, onInvokeTask: (r, o, i, s, a, c) => { if (V_(c))
        return r.invokeTask(i, s, a, c); try {
        return cg(e), r.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), lg(e);
    } }, onInvoke: (r, o, i, s, a, c, l) => { try {
        return cg(e), r.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !H_(c) && t(), lg(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Su(e), Qd(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function Su(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function cg(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function lg(e) { e._nesting--, Qd(e); }
var dr = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new Dt;
    onMicrotaskEmpty = new Dt;
    onStable = new Dt;
    onError = new Dt;
    run(t, n, r) { return t.apply(n, r); }
    runGuarded(t, n, r) { return t.apply(n, r); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, r, o) { return t.apply(n, r); }
};
function V_(e) { return $v(e, "__ignore_ng_zone__"); }
function H_(e) { return $v(e, "__scheduler_tick__"); }
function $v(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function Uv(e = "zone.js", t) { return e === "noop" ? new dr : e === "zone.js" ? new G(t) : e; }
var Na = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Zd = [0, 1, 2, 3], Yd = (() => { class e {
    ngZone = E(G);
    scheduler = E(Ne);
    errorHandler = E(et, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(xr, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(16), this.executing = !0; for (let r of Zd)
        for (let o of this.sequences)
            if (!(o.erroredOrDestroyed || !o.hooks[r]))
                try {
                    o.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = o.hooks[r]; return i(o.pipelinedValue); }, o.snapshot));
                }
                catch (i) {
                    o.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let r of this.sequences)
        r.afterRun(), r.once && (this.sequences.delete(r), r.destroy()); for (let r of this.deferredRegistrations)
        this.sequences.add(r); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(17); }
    register(n) { let { view: r } = n; r !== void 0 ? ((r[cn] ??= []).push(n), Bt(r), r[N] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, r) { return r ? r.run(Ca.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Po = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s = null) { this.impl = t, this.hooks = n, this.view = r, this.once = o, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[cn]; t && (this.view[cn] = t.filter(n => n !== this)); }
};
function Gv(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Ma : (te("NgAfterRender"), qv(e, n, t, !1)); }
function Kd(e, t) { let n = t?.injector ?? E(ce); return typeof ngServerMode < "u" && ngServerMode ? Ma : (te("NgAfterNextRender"), qv(e, n, t, !0)); }
function B_(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function qv(e, t, n, r) { let o = t.get(Na); o.impl ??= t.get(Yd); let i = t.get(xr, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(je) : null, a = t.get(dn, null, { optional: !0 }), c = new Po(o.impl, B_(e), a?.view, r, s, i?.snapshot(null)); return o.impl.register(c), c; }
var Ma = { destroy() { } }, wa = new C("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function Wv(e, t, n) { let r = e.get(wa); if (Array.isArray(t))
    for (let o of t)
        r.queue.add(o), n?.detachedLeaveAnimationFns?.push(o);
else
    r.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); r.scheduler && r.scheduler(e); }
function $_(e, t) { let n = e.get(wa); if (t.detachedLeaveAnimationFns) {
    for (let r of t.detachedLeaveAnimationFns)
        n.queue.delete(r);
    t.detachedLeaveAnimationFns = void 0;
} }
function U_(e) { let t = e.get(wa); t.isScheduled || (Kd(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function _a(e) { let t = e.get(wa); t.scheduler = U_, t.scheduler(e); }
function Jd(e, t) { for (let [n, r] of t)
    Wv(e, r.animateFns); }
function ug(e, t, n, r) { let o = e?.[vt]?.enter; t !== null && o && o.has(n.index) && Jd(r, o); }
function er(e, t, n, r, o, i, s, a) { if (o != null) {
    let c, l = !1;
    Y(o) ? c = o : ee(o) && (l = !0, o = o[$]);
    let u = P(o);
    e === 0 && r !== null ? (ug(a, r, i, n), s == null ? Nv(t, r, u) : En(t, r, u, s || null, !0)) : e === 1 && r !== null ? (ug(a, r, i, n), En(t, r, u, s || null, !0)) : e === 2 ? dg(a, i, n, d => { ni(t, u, l, d); }) : e === 3 && dg(a, i, n, () => { t.destroyNode(u); }), c != null && Y_(t, e, n, c, i, r, s);
} }
function zv(e, t) { Qv(e, t), t[$] = null, t[le] = null; }
function G_(e, t, n, r, o, i) { r[$] = o, r[le] = t, Sa(e, r, n, 1, o, i); }
function Qv(e, t) { t[We].changeDetectionScheduler?.notify(9), Sa(e, t, t[w], 2, null, null); }
function q_(e) { let t = e[Vt]; if (!t)
    return $l(e[m], e); for (; t;) {
    let n = null;
    if (ee(t))
        n = t[Vt];
    else {
        let r = t[U];
        r && (n = r);
    }
    if (!n) {
        for (; t && !t[pe] && t !== e;)
            ee(t) && $l(t[m], t), t = t[z];
        t === null && (t = e), ee(t) && $l(t[m], t), n = t && t[pe];
    }
    t = n;
} }
function Xd(e, t) { let n = e[ln], r = n.indexOf(t); n.splice(r, 1); }
function ii(e, t) { if (rt(t))
    return; let n = t[w]; n.destroyNode && Sa(e, t, n, 3, null, null), q_(t); }
function $l(e, t) { if (rt(t))
    return; let n = A(null); try {
    t[N] &= -129, t[N] |= 256, t[Oe] && Lt(t[Oe]), Q_(e, t), z_(e, t), t[m].type === 1 && t[w].destroy();
    let r = t[gt];
    if (r !== null && Y(t[z])) {
        r !== t[z] && Xd(r, t);
        let o = t[tt];
        o !== null && o.detachView(e);
    }
    lu(t);
}
finally {
    A(n);
} }
function dg(e, t, n, r) { let o = e?.[vt]; if (o == null || o.leave == null || !o.leave.has(t.index))
    return r(!1); e && In.add(e), Wv(n, () => { if (o.leave && o.leave.has(t.index)) {
    let s = o.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        o.detachedLeaveAnimationFns = void 0;
    }
    o.running = Promise.allSettled(a), W_(e, r);
}
else
    e && In.delete(e), r(!1); }, o); }
function W_(e, t) { let n = e[vt]?.running; if (n) {
    n.then(() => { e[vt].running = void 0, In.delete(e), t(!0); });
    return;
} t(!1); }
function z_(e, t) { let n = e.cleanup, r = t[jt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? r[a]() : r[-a].unsubscribe(), s += 2;
        }
        else {
            let a = r[n[s + 1]];
            n[s].call(a);
        } r !== null && (t[jt] = null); let o = t[pt]; if (o !== null) {
    t[pt] = null;
    for (let s = 0; s < o.length; s++) {
        let a = o[s];
        a();
    }
} let i = t[mt]; if (i !== null) {
    t[mt] = null;
    for (let s of i)
        s.destroy();
} }
function Q_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
        let o = t[n[r]];
        if (!(o instanceof yn)) {
            let i = n[r + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = o[i[s]], c = i[s + 1];
                    V(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(5, a, c);
                    }
                }
            else {
                V(4, o, i);
                try {
                    i.call(o);
                }
                finally {
                    V(5, o, i);
                }
            }
        }
    } }
function ef(e, t, n) { return Zv(e, t.parent, n); }
function Zv(e, t, n) { let r = t; for (; r !== null && r.type & 168;)
    t = r, r = t.parent; if (r === null)
    return n[$]; if (Me(r)) {
    let { encapsulation: o } = e.data[r.directiveStart + r.componentOffset];
    if (o === Nt.None || o === Nt.Emulated)
        return null;
} return ie(r, n); }
function Yv(e, t, n) { return Jv(e, t, n); }
function Kv(e, t, n) { return e.type & 40 ? ie(e, n) : null; }
var Jv = Kv, bu;
function Xv(e, t) { Jv = e, bu = t; }
function tf(e, t, n, r) { let o = ef(e, r, t), i = t[w], s = r.parent || t[le], a = Yv(s, r, t); if (o != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            rg(i, o, n[c], a, !1);
    else
        rg(i, o, n, a, !1); bu !== void 0 && bu(i, r, t, n, o); }
function mn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ie(t, e);
    if (n & 4)
        return js(-1, e[t.index]);
    if (n & 8) {
        let r = t.child;
        if (r !== null)
            return mn(e, r);
        {
            let o = e[t.index];
            return Y(o) ? js(-1, o) : P(o);
        }
    }
    else {
        if (n & 128)
            return mn(e, t.next);
        if (n & 32)
            return Wd(t, e)() || P(e[t.index]);
        {
            let r = ey(e, t);
            if (r !== null) {
                if (Array.isArray(r))
                    return r[0];
                let o = ht(e[X]);
                return mn(o, r);
            }
            else
                return mn(e, t.next);
        }
    }
} return null; }
function ey(e, t) { if (t !== null) {
    let r = e[X][le], o = t.projection;
    return r.projection[o];
} return null; }
function js(e, t) { let n = U + e + 1; if (n < t.length) {
    let r = t[n], o = r[m].firstChild;
    if (o !== null)
        return mn(r, o);
} return t[ze]; }
function nf(e, t, n, r, o, i, s) { for (; n != null;) {
    let a = r[k];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = r[n.index], l = n.type;
    if (s && t === 0 && (c && Ve(P(c), r), n.flags |= 2), !Rr(n))
        if (l & 8)
            nf(e, t, n.child, r, o, i, !1), er(t, e, a, o, c, n, i, r);
        else if (l & 32) {
            let u = Wd(n, r), d;
            for (; d = u();)
                er(t, e, a, o, d, n, i, r);
            er(t, e, a, o, c, n, i, r);
        }
        else
            l & 16 ? ty(e, t, r, n, o, i) : er(t, e, a, o, c, n, i, r);
    n = s ? n.projectionNext : n.next;
} }
function Sa(e, t, n, r, o, i) { nf(n, r, e.firstChild, t, o, i, !1); }
function Z_(e, t, n) { let r = t[w], o = ef(e, n, t), i = n.parent || t[le], s = Yv(i, n, t); ty(r, 0, t, n, o, s); }
function ty(e, t, n, r, o, i) { let s = n[X], c = s[le].projection[r.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        er(t, e, n[k], o, u, r, i, n);
    }
else {
    let l = c, u = s[z];
    Oo(r) && (l.flags |= 128), nf(e, t, l, u, o, i, !0);
} }
function Y_(e, t, n, r, o, i, s) { let a = r[ze], c = P(r); a !== c && er(t, e, n, i, a, o, s); for (let l = U; l < r.length; l++) {
    let u = r[l];
    Sa(u[m], u, e, t, i, a);
} }
function K_(e, t, n, r, o) { if (t)
    o ? e.addClass(n, r) : e.removeClass(n, r);
else {
    let i = r.indexOf("-") === -1 ? void 0 : Ps.DashCase;
    o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= Ps.Important), e.setStyle(n, r, o, i));
} }
function ny(e, t, n, r, o) { let i = ne(), s = r & 2; try {
    at(-1), s && t.length > I && Lv(e, t, I, !1), V(s ? 2 : 0, o, n), n(r, o);
}
finally {
    at(i), V(s ? 3 : 1, o, n);
} }
function ba(e, t, n) { nS(e, t, n), (n.flags & 64) === 64 && rS(e, t, n); }
function kr(e, t, n = ie) { let r = t.localNames; if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
        let s = r[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[o++] = a;
    }
} }
function J_(e, t, n, r) { let i = r.get(Id, Bm) || n === Nt.ShadowDom, s = e.selectRootElement(t, i); if (s.tagName.toLowerCase() === "script")
    throw new T(905, !1); return X_(s), s; }
function X_(e) { ry(e); }
var ry = () => null;
function eS(e) { Mm(e) ? Mv(e) : gw(e); }
function oy() { ry = eS; }
function tS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function rf(e, t, n, r, o, i) { let s = t[m]; if (xa(e, s, t, n, r)) {
    Me(e) && iy(t, e.index);
    return;
} e.type & 3 && (n = tS(n)), of(e, t, n, r, o, i); }
function of(e, t, n, r, o, i) { if (e.type & 3) {
    let s = ie(e, t);
    r = i != null ? i(r, e.value || "", n) : r, o.setProperty(s, n, r);
}
else
    e.type & 12; }
function iy(e, t) { let n = me(t, e); n[N] & 16 || (n[N] |= 64); }
function nS(e, t, n) { let r = n.directiveStart, o = n.directiveEnd; Me(n) && b_(t, n, e.data[r + n.componentOffset]), e.firstCreatePass || bs(n, t); let i = n.initialInputs; for (let s = r; s < o; s++) {
    let a = e.data[s], c = Ao(t, e, s, n);
    if (Ve(c, t), i !== null && sS(t, s - r, c, a, n, i), we(a)) {
        let l = me(n.index, t);
        l[H] = Ao(t, e, s, n);
    }
} }
function rS(e, t, n) { let r = n.directiveStart, o = n.directiveEnd, i = n.index, s = Rh(); try {
    at(i);
    for (let a = r; a < o; a++) {
        let c = e.data[a], l = t[a];
        Zi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && oS(c, l);
    }
}
finally {
    at(-1), Zi(s);
} }
function oS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function sf(e, t) { let n = e.directiveRegistry, r = null; if (n)
    for (let o = 0; o < n.length; o++) {
        let i = n[o];
        xv(t, i.selectors, !1) && (r ??= [], we(i) ? r.unshift(i) : r.push(i));
    } return r; }
function iS(e, t, n, r, o, i) { let s = ie(e, t); Ra(t[w], s, i, e.value, n, r, o); }
function Ra(e, t, n, r, o, i, s) { if (i == null)
    e.removeAttribute(t, o, n);
else {
    let a = s == null ? b(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
} }
function sS(e, t, n, r, o, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        ko(r, n, c, l);
    } }
function Aa(e, t, n, r, o) { let i = I + n, s = t[m], a = o(s, t, e, r, n); t[i] = a, ot(e, !0); let c = e.type === 2; return c ? (wv(t[w], a, e), (Mh() === 0 || Hn(e)) && Ve(a, t), wh()) : Ve(a, t), ho() && (!c || !Rr(e)) && tf(s, t, a, e), e; }
function Oa(e) { let t = e; return yl() ? El() : (t = t.parent, ot(t, !1)), t; }
function sy(e, t, n) { return (e === null || we(e)) && (n = co(n[t.index])), n[w]; }
function af(e, t) { let n = e[k]; if (!n)
    return; let r; try {
    r = n.get(ct, null);
}
catch {
    r = null;
} r?.(t); }
function xa(e, t, n, r, o) { let i = e.inputs?.[r], s = e.hostDirectiveInputs?.[r], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        ko(d, n[l], u, o), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        ko(u, l, r, o), a = !0;
    } return a; }
function aS(e, t, n, r, o, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(r.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(o)) {
    let d = e.hostDirectiveInputs[o];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], v = d[f + 1];
            ko(h, n[p], v, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && r.inputs.hasOwnProperty(o) && (ko(r, n[s], o, i), l = !0), l; }
function cS(e, t) { let n = me(t, e), r = n[m]; lS(r, n); let o = n[$]; o !== null && n[ue] === null && (n[ue] = ev(o, n[k])), V(18), ka(r, n, n[H]), V(19, n[H]); }
function lS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function ka(e, t, n) { Ji(t); try {
    let r = e.viewQuery;
    r !== null && hu(1, r, n);
    let o = e.template;
    o !== null && ny(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[tt]?.finishViewCreation(e), e.staticContentQueries && dv(e, t), e.staticViewQueries && hu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && uS(t, i);
}
catch (r) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r;
}
finally {
    t[N] &= -5, Xi();
} }
function uS(e, t) { for (let n = 0; n < t.length; n++)
    cS(e, t[n]); }
function Pr(e, t, n, r) { let o = A(null); try {
    let i = t.tView, a = e[N] & 4096 ? 4096 : 16, c = Da(e, i, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null), l = e[t.index];
    c[gt] = l;
    let u = e[tt];
    return u !== null && (c[tt] = u.createEmbeddedView(i)), ka(i, c, n), c;
}
finally {
    A(o);
} }
function Dn(e, t) { return !t || t.firstChild === null || Oo(e); }
function fr(e, t, n, r, o = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = o ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && r.push(P(i)), Y(i) && Pa(i, r);
    let s = n.type;
    if (s & 8)
        fr(e, t, n.child, r);
    else if (s & 32) {
        let a = Wd(n, t), c;
        for (; c = a();)
            r.push(c);
    }
    else if (s & 16) {
        let a = ey(t, n);
        if (Array.isArray(a))
            r.push(...a);
        else {
            let c = ht(t[X]);
            fr(c[m], c, a, r, !0);
        }
    }
    n = o ? n.projectionNext : n.next;
} return r; }
function Pa(e, t) { for (let n = U; n < e.length; n++) {
    let r = e[n], o = r[m].firstChild;
    o !== null && fr(r[m], r, o, t);
} e[ze] !== e[$] && t.push(e[ze]); }
function ay(e) { if (e[cn] !== null) {
    for (let t of e[cn])
        t.impl.addSequence(t);
    e[cn].length = 0;
} }
var cy = [];
function dS(e) { return e[Oe] ?? fS(e); }
function fS(e) { let t = cy.pop() ?? Object.create(hS); return t.lView = e, t; }
function pS(e) { e.lView[Oe] !== e && (e.lView = null, cy.push(e)); }
var hS = Ce(q({}, bc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Bt(e.lView); }, consumerOnSignalRead() { this.lView[Oe] = this; } });
function gS(e) { let t = e[Oe] ?? Object.create(mS); return t.lView = e, t; }
var mS = Ce(q({}, bc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = ht(e.lView); for (; t && !ly(t[m]);)
        t = ht(t); t && qi(t); }, consumerOnSignalRead() { this.lView[Oe] = this; } });
function ly(e) { return e.type !== 2; }
function uy(e) { if (e[mt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let r of e[mt])
        r.dirty && (n = !0, r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run(() => r.run()));
    t = n && !!(e[N] & 8192);
} }
var vS = 100;
function dy(e, t = 0) { let r = e[We].rendererFactory, o = !1; o || r.begin?.(); try {
    yS(e, t);
}
finally {
    o || r.end?.();
} }
function yS(e, t) { let n = Dl(); try {
    Un(!0), Ru(e, t);
    let r = 0;
    for (; Bn(e);) {
        if (r === vS)
            throw new T(103, !1);
        r++, Ru(e, 1);
    }
}
finally {
    Un(n);
} }
function fy(e, t, n, r) { if (rt(t))
    return; let o = t[N], i = !1, s = !1; Ji(t); let a = !0, c = null, l = null; i || (ly(e) ? (l = dS(t), c = Gr(l)) : Ti() === null ? (a = !1, l = gS(t), c = Gr(l)) : t[Oe] && (Lt(t[Oe]), t[Oe] = null)); try {
    sl(t), Tl(e.bindingStartIndex), n !== null && ny(e, t, n, 2, r);
    let u = (o & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && ps(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && hs(t, p, 0, null), Pl(t, 0);
        }
    if (s || ES(t), uy(t), py(t, 0), e.contentQueries !== null && dv(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && ps(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && hs(t, p, 1), Pl(t, 1);
        }
    DS(e, t);
    let d = e.components;
    d !== null && gy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && hu(2, f, r), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && ps(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && hs(t, p, 2), Pl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Bi]) {
        for (let p of t[Bi])
            p();
        t[Bi] = null;
    }
    i || (ay(t), t[N] &= -73);
}
catch (u) {
    throw i || Bt(t), u;
}
finally {
    l !== null && (Ni(l, c), a && pS(l)), Xi();
} }
function py(e, t) { for (let n = Am(e); n !== null; n = Om(n))
    for (let r = U; r < n.length; r++) {
        let o = n[r];
        hy(o, t);
    } }
function ES(e) { for (let t = Am(e); t !== null; t = Om(t)) {
    if (!(t[N] & 2))
        continue;
    let n = t[ln];
    for (let r = 0; r < n.length; r++) {
        let o = n[r];
        qi(o);
    }
} }
function IS(e, t, n) { V(18); let r = me(t, e); hy(r, n), V(19, r[H]); }
function hy(e, t) { Gi(e) && Ru(e, t); }
function Ru(e, t) { let r = e[m], o = e[N], i = e[Oe], s = !!(t === 0 && o & 16); if (s ||= !!(o & 64 && t === 0), s ||= !!(o & 1024), s ||= !!(i?.dirty && Mi(i)), s ||= !1, i && (i.dirty = !1), e[N] &= -9217, s)
    fy(r, e, r.template, e[H]);
else if (o & 8192) {
    let a = A(null);
    try {
        uy(e), py(e, 1);
        let c = r.components;
        c !== null && gy(e, c, 1), ay(e);
    }
    finally {
        A(a);
    }
} }
function gy(e, t, n) { for (let r = 0; r < t.length; r++)
    IS(e, t[r], n); }
function DS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if (o < 0)
                at(~o);
            else {
                let i = o, s = n[++r], a = n[++r];
                bh(s, i);
                let c = t[i];
                V(24, c), a(2, c), V(25, c);
            }
        }
    }
    finally {
        at(-1);
    } }
function si(e, t) { let n = Dl() ? 64 : 1088; for (e[We].changeDetectionScheduler?.notify(t); e;) {
    e[N] |= n;
    let r = ht(e);
    if (nt(e) && !r)
        return e;
    e = r;
} return null; }
function my(e, t, n, r) { return [e, !0, 0, t, null, r, null, n, null, null]; }
function vy(e, t) { let n = U + t; if (n < e.length)
    return e[n]; }
function Lr(e, t, n, r = !0) { let o = t[m]; if (TS(o, t, e, n), r) {
    let s = js(n, e), a = t[w], c = a.parentNode(e[ze]);
    c !== null && G_(o, e[le], a, t, c, s);
} let i = t[ue]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function cf(e, t) { let n = Lo(e, t); return n !== void 0 && ii(n[m], n), n; }
function Lo(e, t) { if (e.length <= U)
    return; let n = U + t, r = e[n]; if (r) {
    let o = r[gt];
    o !== null && o !== e && Xd(o, r), t > 0 && (e[n - 1][pe] = r[pe]);
    let i = no(e, U + t);
    zv(r[m], r);
    let s = i[tt];
    s !== null && s.detachView(i[m]), r[z] = null, r[pe] = null, r[N] &= -129;
} return r; }
function TS(e, t, n, r) { let o = U + r, i = n.length; r > 0 && (n[o - 1][pe] = t), r < i - U ? (t[pe] = n[o], Qc(n, U + r, t)) : (n.push(t), t[pe] = null), t[z] = n; let s = t[gt]; s !== null && n !== s && yy(s, t); let a = t[tt]; a !== null && a.insertView(e), Wi(t), t[N] |= 128; }
function yy(e, t) { let n = e[ln], r = t[z]; if (ee(r))
    e[N] |= 2;
else {
    let o = r[z][X];
    t[X] !== o && (e[N] |= 2);
} n === null ? e[ln] = [t] : n.push(t); }
var zt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return fr(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[H]; }
    set context(t) { this._lView[H] = t; }
    get destroyed() { return rt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[z];
        if (Y(t)) {
            let n = t[ao], r = n ? n.indexOf(this) : -1;
            r > -1 && (Lo(t, r), no(n, r));
        }
        this._attachedToViewContainer = !1;
    } ii(this._lView[m], this._lView); }
    onDestroy(t) { uo(this._lView, t); }
    markForCheck() { si(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[N] &= -129; }
    reattach() { Wi(this._lView), this._lView[N] |= 128; }
    detectChanges() { this._lView[N] |= 1024, dy(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new T(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = nt(this._lView), n = this._lView[gt]; n !== null && !t && Xd(n, this._lView), Qv(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new T(902, !1); this._appRef = t; let n = nt(this._lView), r = this._lView[gt]; r !== null && !n && yy(r, this._lView), Wi(this._lView); }
};
function CS(e) { return Bn(e._lView) || !!(e._lView[N] & 64); }
function NS(e) { qi(e._lView); }
var Fo = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = MS;
    constructor(n, r, o) { this._declarationLView = n, this._declarationTContainer = r, this.elementRef = o; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, r) { return this.createEmbeddedViewImpl(n, r); }
    createEmbeddedViewImpl(n, r, o) { let i = Pr(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: r, dehydratedView: o }); return new zt(i); }
} return e; })();
function MS() { return La(_(), g()); }
function La(e, t) { return e.type & 4 ? new Fo(t, e, Nr(e, t)) : null; }
var Au = "<-- AT THIS LOCATION";
function wS(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function _S(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, r = `${AS(e, t, !1)}

`, o = xS();
    throw new T(-502, n + r + o);
}
function Ey(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${OS(e)}

`, r = t + n + kS();
    return new T(-503, r);
}
function SS(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let r = e.attrs[n++];
        if (typeof r == "number")
            break;
        let o = e.attrs[n++];
        t.push(`${r}="${Vs(o)}"`);
    } return t.join(" "); }
var bS = new Set(["ngh", "ng-version", "ng-server-context"]);
function RS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let r = e.attributes[n];
    bS.has(r.name) || t.push(`${r.name}="${Vs(r.value)}"`);
} return t.join(" "); }
function Ul(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let r = SS(e), o = e.value.toLowerCase();
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${wS(e.type)})`;
} }
function ys(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let r = n.tagName.toLowerCase(), o = RS(n);
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Vs(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Vs(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function AS(e, t, n) {
    let o = "";
    t.prev ? (o += `  \u2026
`, o += "  " + Ul(t.prev) + `
`) : t.type && t.type & 12 && (o += `  \u2026
`), n ? (o += "  " + Ul(t) + `
`, o += `  <!-- container -->  ${Au}
`) : o += "  " + Ul(t) + `  ${Au}
`, o += `  \u2026
`;
    let i = t.type ? ef(e[m], t, e) : null;
    return i && (o = ys(i, `
` + o)), o;
}
function OS(e) {
    let n = "", r = e;
    return r.previousSibling && (n += `  \u2026
`, n += "  " + ys(r.previousSibling) + `
`), n += "  " + ys(r) + `  ${Au}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = ys(r.parentNode, `
` + n)), n;
}
function xS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function kS() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function PS(e) { return e.replace(/\s+/gm, ""); }
function Vs(e, t = 50) { return e ? (e = PS(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Iy(e, t, n) { let r = t.insertBeforeIndex, o = Array.isArray(r) ? r[0] : r; return o === null ? Kv(e, t, n) : P(n[o]); }
function Dy(e, t, n, r, o) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = r, a = null;
    if (t.type & 3 || (a = s, s = o), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            En(e, s, l, a, !1);
        }
} }
function bn(e, t, n, r, o) { let i = e.data[t]; if (i === null)
    i = lf(e, t, n, r, o), Sh() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = r, i.attrs = o;
    let s = $n();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ot(i, !0), i; }
function lf(e, t, n, r, o) { let i = vl(), s = yl(), a = s ? i : i && i.parent, c = e.data[t] = FS(e, a, n, t, r, o); return LS(e, c, i, s), c; }
function LS(e, t, n, r) { e.firstChild === null && (e.firstChild = t), n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function FS(e, t, n, r, o, i) { let s = t ? t.injectorIndex : -1, a = 0; return fo() && (a |= 128), { type: n, index: r, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: o, namespace: es(), attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Ty(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let r = e[n];
        Cy(r) || jS(r, t) && VS(r) === null && HS(r, t.index);
    } }
function Cy(e) { return !(e.type & 64); }
function jS(e, t) { return Cy(t) || e.index > t.index; }
function VS(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function HS(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Xv(Iy, Dy), e.insertBeforeIndex = t); }
function Io(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function BS(e, t, n) { let r = e.data[t]; r === null ? e.data[t] = n : r.value = n; }
function $S(e, t) { let n = e.insertBeforeIndex; n === null ? (Xv(Iy, Dy), n = e.insertBeforeIndex = [null, t]) : (uh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function US(e, t, n) { let r = lf(e, n, 64, null, null); return Ty(t, r), r; }
function Fa(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function GS(e) { return e >>> 17; }
function qS(e) { return (e & 131070) >>> 1; }
function WS(e, t, n) { return e | t << 17 | n << 1; }
function Ny(e) { return e === -1; }
function uf(e, t, n) { e.index = 0; let r = Fa(t, n); r !== null ? e.removes = t.remove[r] : e.removes = L; }
function Hs(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, r = e.lView[m].data[n];
        return uf(e, r, e.lView), Hs(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Hs(e)); }
function zS() { let e = { stack: [], index: -1 }; function t(n, r) { for (e.lView = r; e.stack.length;)
    e.stack.pop(); return uf(e, n.value, r), Hs.bind(null, e); } return t; }
function QS(e, t) { let n = { stack: [], index: -1, lView: t }; return uf(n, e, t), Hs.bind(null, n); }
var ZS = new RegExp(`^(\\d+)*(${yd}|${vd})*(.*)`);
function YS(e, t) { let n = [e]; for (let r of t) {
    let o = n.length - 1;
    if (o > 0 && n[o - 1] === r) {
        let i = n[o] || 1;
        n[o] = i + 1;
    }
    else
        n.push(r, "");
} return n.join(""); }
function KS(e) { let t = e.match(ZS), [n, r, o, i] = t, s = r ? parseInt(r, 10) : o, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function JS(e) { return !e.prev && e.parent?.type === 8; }
function Gl(e) { return e.index - I; }
function Fr(e, t) { return !(e.type & 144) && !!t[e.index] && My(P(t[e.index])); }
function My(e) { return !!e && !e.isConnected; }
function wy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function XS(e, t, n) { let o = e.data[Ko]?.[n]; return o ? _y(o, t) : null; }
function ai(e, t, n, r) { let o = Gl(r), i = wy(e, o); if (i === void 0) {
    let s = e.data[Ko];
    if (s?.[o])
        i = _y(s[o], n);
    else if (t.firstChild === r)
        i = e.firstChild;
    else {
        let a = r.prev === null, c = r.prev ?? r.parent;
        if (JS(r)) {
            let l = Gl(r.parent);
            i = pu(e, l);
        }
        else {
            let l = ie(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Gl(c), d = pu(e, u);
                if (c.type === 2 && d) {
                    let p = Rd(e, u) + 1;
                    i = ja(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function ja(e, t) { let n = t; for (let r = 0; r < e; r++)
    n = n.nextSibling; return n; }
function eb(e, t) { let n = e; for (let r = 0; r < t.length; r += 2) {
    let o = t[r], i = t[r + 1];
    for (let s = 0; s < i; s++)
        switch (o) {
            case Vm:
                n = n.firstChild;
                break;
            case Hm:
                n = n.nextSibling;
                break;
        }
} return n; }
function _y(e, t) { let [n, ...r] = KS(e), o; if (n === vd)
    o = t[X][$];
else if (n === yd)
    o = Bd(t[X][$]);
else {
    let i = Number(n);
    o = P(t[i + I]);
} return eb(o, r); }
function Ou(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return tb(e, t); {
    let n = t.parentElement, r = Ou(e, n), o = Ou(n.firstChild, t);
    return !r || !o ? null : [...r, Vm, ...o];
} }
function tb(e, t) { let n = [], r = null; for (r = e; r != null && r !== t; r = r.nextSibling)
    n.push(Hm); return r == null ? null : n; }
function fg(e, t, n) { let r = Ou(e, t); return r === null ? null : YS(n, r); }
function Sy(e, t, n) { let r = e.parent, o, i, s; for (; r !== null && (Fr(r, t) || n?.has(r.index));)
    r = r.parent; r === null || !(r.type & 3) ? (o = s = vd, i = t[X][$]) : (o = r.index, i = P(t[o]), s = b(o - I)); let a = P(t[e.index]); if (e.type & 44) {
    let l = mn(t, e);
    l && (a = l);
} let c = fg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = fg(l, a, yd), c === null)
        throw _S(t, e);
} return c; }
function by(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: nb }), r, o = new Map; for (; r = n.nextNode();) {
    let i = "ngh=", s = r?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        o.set(c, r);
    }
} return o; }
function nb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Ry = !1, Ay = () => { };
function df(e) { Ry = e; }
function Va() { return Ry; }
function rb(e, t, n, r) { Ay(e, t, n, r); }
function Oy() { Ay = cb; }
function xy(e) { return e = e ?? E(ce), e.get(Dd, !1); }
function ky(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = ob(e), t.i18nChildren.set(e, n)), n; }
function ob(e) { let t = new Set; function n(r) { switch (t.add(r.index), r.kind) {
    case 1:
    case 2: {
        for (let o of r.children)
            n(o);
        break;
    }
    case 3: {
        for (let o of r.cases)
            for (let i of o)
                n(i);
        break;
    }
} } for (let r = I; r < e.bindingStartIndex; r++) {
    let o = e.data[r];
    if (!(!o || !o.ast))
        for (let i of o.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Py(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let r = e[m], o = r.data[t]; if (!o || !o.ast)
    return null; let i = r.data[o.parentTNodeIndex]; if (i && wm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return xu(e, s, n, o.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function xu(e, t, n, r) { let o = null; for (let i of r) {
    let s = sb(e, t, n, i);
    s && (ib(o, s) && t.disjointNodes.add(i.index - I), o = s);
} return o; }
function ib(e, t) { return e && e.nextSibling !== t; }
function sb(e, t, n, r) { let o = P(e[r.index]); if (!o || My(o))
    return t.disconnectedNodes.add(r.index - I), null; let i = o; switch (r.kind) {
    case 0: {
        Ad(n, i);
        break;
    }
    case 1:
    case 2: {
        xu(e, t, n, r.children);
        break;
    }
    case 3: {
        let s = e[r.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), xu(e, t, n, r.cases[a]);
        }
        break;
    }
} return ab(e, r); }
function ab(e, t) { let r = e[m].data[t.index]; return na(r) ? mn(e, r) : t.kind === 3 ? QS(r, e)() ?? P(e[t.index]) : P(e[t.index]) ?? null; }
function pn(e, t) { e.currentNode = t; }
function vo(e, t, n) { let r = n.index - I, { disconnectedNodes: o } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(r, i), o.delete(r)) : o.add(r), i; }
function ql(e, t) { let n = e.currentNode; for (let r = 0; r < t && n; r++)
    n = n?.nextSibling ?? null; return n; }
function Wl(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function cb(e, t, n, r) { let o = e[ue]; if (!o || !Va() || n && (wm(n) || ma(o, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (Ny(r)) {
    let p = ai(o, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return o?.firstChild; } let c = a(), l = ov(o) ?? new Set, u = o.i18nNodes ??= new Map, d = o.data[la]?.[t - I] ?? [], f = o.dehydratedIcuData ??= new Map; Qn({ hydrationInfo: o, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), o.disconnectedNodes = l.size === 0 ? null : l; }
function Qn(e, t, n) { if (Array.isArray(n)) {
    let r = t;
    for (let o of n) {
        let i = XS(e.hydrationInfo, e.lView, o.index - I);
        i && (r = Wl(t, i)), Qn(e, r, o);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let r = vo(e, t, n);
            pn(t, r?.nextSibling ?? null);
            break;
        }
        case 1: {
            Qn(e, Wl(t, t.currentNode?.firstChild ?? null), n.children);
            let r = vo(e, t, n);
            pn(t, r?.nextSibling ?? null);
            break;
        }
        case 2: {
            let r = n.index - I, { hydrationInfo: o } = e, i = nv(o, r);
            switch (n.type) {
                case 0: {
                    let s = vo(e, t, n);
                    if (Iw(o, r)) {
                        Qn(e, t, n.children);
                        let a = ql(t, 1);
                        pn(t, a);
                    }
                    else if (Qn(e, Wl(t, t.currentNode?.firstChild ?? null), n.children), pn(t, s?.nextSibling ?? null), i !== null) {
                        let a = ql(t, i + 1);
                        pn(t, a);
                    }
                    break;
                }
                case 1: {
                    vo(e, t, n);
                    let s = ql(t, i + 1);
                    pn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let r = t.isConnected ? e.caseQueue.shift() : null, o = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Qn(e, s === r ? t : o, n.cases[s]);
            r !== null && e.dehydratedIcuData.set(n.index, { case: r, node: n });
            let i = vo(e, t, n);
            pn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Ly = () => { };
function lb(e, t, n) { Ly(e, t, n); }
function Fy() { Ly = ub; }
function ub(e, t, n) { let r = e[ue]?.dehydratedIcuData; r && r.get(t)?.case === n && r.delete(t); }
function db(e) { let t = e[ue]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
        let o = e[w];
        for (let i of r.values())
            fb(o, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function fb(e, t, n) { for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - I);
    o && ni(e, o, !1);
} }
function Ha(e) { let t = e[xe] ?? [], r = e[z][w], o = []; for (let i of t)
    i.data[ua] !== void 0 ? o.push(i) : jy(i, r); e[xe] = o; }
function pb(e) { let { lContainer: t } = e, n = t[xe]; if (n === null)
    return; let o = t[z][w]; for (let i of n)
    jy(i, o); }
function jy(e, t) { let n = 0, r = e.firstChild; if (r) {
    let o = e.data[Ct];
    for (; n < o;) {
        let i = r.nextSibling;
        ni(t, r, !1), r = i, n++;
    }
} }
function Ba(e) { Ha(e); let t = e[$]; ee(t) && Bs(t); for (let n = U; n < e.length; n++)
    Bs(e[n]); }
function Bs(e) { db(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (Y(e[n])) {
        let r = e[n];
        Ba(r);
    }
    else
        ee(e[n]) && Bs(e[n]); }
function ff(e) { let t = e._views; for (let n of t) {
    let r = bd(n);
    r !== null && r[$] !== null && (ee(r) ? Bs(r) : Ba(r));
} }
function hb(e, t, n, r) { e !== null && (n.cleanup(t), Ba(e.lContainer), ff(r)); }
function gb(e, t) { let n = []; for (let r of t)
    for (let o = 0; o < (r[Yo] ?? 1); o++) {
        let i = { data: r, firstChild: null };
        r[Ct] > 0 && (i.firstChild = e, e = ja(r[Ct], e)), n.push(i);
    } return [e, n]; }
var Vy = () => null, Hy = () => null;
function By() { Vy = mb, Hy = vb; }
function mb(e, t) { return Uy(e, t) ? e[xe].shift() : (Ha(e), null); }
function jo(e, t) { return Vy(e, t); }
function vb(e, t, n) { if (t.tView.ssrId === null)
    return null; let r = jo(e, t.tView.ssrId); return n[m].firstUpdatePass && r === null && yb(n, t), r; }
function $y(e, t, n) { return Hy(e, t, n); }
function yb(e, t) { let n = t; for (; n;) {
    if (pg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (pg(e, n))
        return;
    n = n.next;
} }
function Uy(e, t) { let n = e[xe]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ca] === t; }
function pg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let r = e[t.index]; return Y(r) && Uy(r, n) ? (Ha(r), !0) : !1; }
var Gy = class {
}, $a = class {
}, ku = class {
    resolveComponentFactory(t) { throw new T(917, !1); }
}, ci = class {
    static NULL = new ku;
}, Vo = class {
}, Eb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Ib();
} return e; })();
function Ib() { let e = g(), t = _(), n = me(t.index, e); return (ee(n) ? n : e)[w]; }
var qy = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function pf(e) { return e.ngModule !== void 0; }
function hn(e) { return !!on(e); }
function as(e) { return !!Ge(e); }
function hg(e) { return !!Ae(e); }
function Do(e) { return !!W(e); }
function Db(e) { return W(e) ? "component" : Ae(e) ? "directive" : Ge(e) ? "pipe" : "type"; }
function Tb(e, t) { if (Kr(e) && (e = x(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Re(t)}", to return a standalone entity or NgModule but got "${Re(e) || e}".`); if (on(e) == null) {
    let n = W(e) || Ae(e) || Ge(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Re(e)}" ${Db(e)}, imported from "${Re(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw pf(e) ? new Error(`A module with providers was imported from "${Re(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Re(e)}" type, imported from "${Re(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Pu = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = on(t);
            if (n?.declarations)
                for (let r of Xn(n.declarations))
                    Do(r) && this.ownerNgModule.set(r, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let r = W(t); if (r === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (r.standalone) {
        let o = this.getStandaloneComponentScope(t, n);
        return o.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...o.compilation.directives, ...o.compilation.pipes, ...o.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let o = this.getNgModuleScope(this.ownerNgModule.get(t));
        return o.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...o.compilation.directives, ...o.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!hn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Fi(t), r = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let o of Xn(n.imports))
        if (hn(o)) {
            let i = this.getNgModuleScope(o);
            Gt(i.exported.directives, r.compilation.directives), Gt(i.exported.pipes, r.compilation.pipes);
        }
        else if (io(o))
            if (hg(o) || Do(o))
                r.compilation.directives.add(o);
            else if (as(o))
                r.compilation.pipes.add(o);
            else
                throw new T(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            r.compilation.isPoisoned = !0;
            break;
        } if (!r.compilation.isPoisoned)
        for (let o of Xn(n.declarations)) {
            if (hn(o) || io(o)) {
                r.compilation.isPoisoned = !0;
                break;
            }
            as(o) ? r.compilation.pipes.add(o) : r.compilation.directives.add(o);
        } for (let o of Xn(n.exports))
        if (hn(o)) {
            let i = this.getNgModuleScope(o);
            Gt(i.exported.directives, r.exported.directives), Gt(i.exported.pipes, r.exported.pipes), Gt(i.exported.directives, r.compilation.directives), Gt(i.exported.pipes, r.compilation.pipes);
        }
        else
            as(o) ? r.exported.pipes.add(o) : r.exported.directives.add(o); return r; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let r = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, r), r; }
    computeStandaloneComponentScope(t, n) { let r = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let o of Ue(n ?? [])) {
        let i = x(o);
        try {
            Tb(i, t);
        }
        catch {
            return r.compilation.isPoisoned = !0, r;
        }
        if (hn(i)) {
            r.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return r.compilation.isPoisoned = !0, r;
            Gt(s.exported.directives, r.compilation.directives), Gt(s.exported.pipes, r.compilation.pipes);
        }
        else if (as(i))
            r.compilation.pipes.add(i);
        else if (hg(i) || Do(i))
            r.compilation.directives.add(i);
        else
            return r.compilation.isPoisoned = !0, r;
    } return r; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Gt(e, t) { for (let n of e)
    t.add(n); }
var pr = new Pu, Es = {}, ir = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, r) { let o = this.injector.get(t, Es, r); return o !== Es || n === Es ? o : this.parentInjector.get(t, n, r); }
};
function $s(e, t, n) { let r = n ? e.styles : null, o = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            o = Ai(o, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            r = Ai(r, c + ": " + l + ";");
        }
    } n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o; }
function jr(e, t = 0) { let n = g(); if (n === null)
    return fe(e, t); let r = _(); return ym(r, n, x(e), t); }
function Wy() { let e = "invalid"; throw new Error(e); }
function zy(e, t, n, r, o) { let i = r === null ? null : { "": -1 }, s = o(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Mb(e, t, n, a, i, c, l);
} i !== null && r !== null && Cb(n, r, i); }
function Cb(e, t, n) { let r = e.localNames = []; for (let o = 0; o < t.length; o += 2) {
    let i = n[t[o + 1]];
    if (i == null)
        throw new T(-301, !1);
    r.push(t[o], i);
} }
function Nb(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Mb(e, t, n, r, o, i, s) { let a = r.length, c = !1; for (let f = 0; f < a; f++) {
    let p = r[f];
    !c && we(p) && (c = !0, Nb(e, n, f)), au(bs(n, t), e, p.type);
} Ab(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = r[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = oi(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = r[f];
    if (n.mergedAttrs = ur(n.mergedAttrs, p.hostAttrs), _b(e, n, t, d, p), Rb(d, p, o), s !== null && s.has(p)) {
        let [v, y] = s.get(p);
        n.directiveToIndex.set(p.type, [d, v + n.directiveStart, y + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} wb(e, n, i); }
function wb(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++) {
    let o = e.data[r];
    if (n === null || !n.has(o))
        gg(0, t, o, r), gg(1, t, o, r), vg(t, r, !1);
    else {
        let i = n.get(o);
        mg(0, t, i, r), mg(1, t, i, r), vg(t, r, !0);
    }
} }
function gg(e, t, n, r) { let o = e === 0 ? n.inputs : n.outputs; for (let i in o)
    if (o.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(r), Qy(t, i);
    } }
function mg(e, t, n, r) { let o = e === 0 ? n.inputs : n.outputs; for (let i in o)
    if (o.hasOwnProperty(i)) {
        let s = o[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(r, i), Qy(t, s);
    } }
function Qy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function vg(e, t, n) { let { attrs: r, inputs: o, hostDirectiveInputs: i } = e; if (r === null || !n && o === null || n && i === null || $d(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < r.length;) {
    let c = r[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && o.hasOwnProperty(c)) {
        let l = o[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, r[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], r[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function _b(e, t, n, r, o) { e.data[r] = o; let i = o.factory || (o.factory = Ft(o.type, !0)), s = new yn(i, we(o), jr, null); e.blueprint[r] = s, n[r] = s, Sb(e, t, r, oi(e, n, o.hostVars, B), o); }
function Sb(e, t, n, r, o) { let i = o.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    bb(s) != a && s.push(a), s.push(n, r, i);
} }
function bb(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function Rb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let r = 0; r < t.exportAs.length; r++)
            n[t.exportAs[r]] = e;
    we(t) && (n[""] = e);
} }
function Ab(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function hf(e, t, n, r, o, i, s, a) { let c = t[m], l = c.consts, u = he(l, s), d = bn(c, e, n, r, u); return i && zy(c, t, d, he(l, a), o), d.mergedAttrs = ur(d.mergedAttrs, d.attrs), d.attrs !== null && $s(d, d.attrs, !1), d.mergedAttrs !== null && $s(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function gf(e, t) { cm(e, t), ol(t) && e.queries.elementEnd(t); }
function Zy(e, t, n, r, o, i) { let s = t.consts, a = he(s, o), c = bn(t, e, n, r, a); if (c.mergedAttrs = ur(c.mergedAttrs, c.attrs), i != null) {
    let l = he(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && $s(c, c.attrs, !1), c.mergedAttrs !== null && $s(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Ho(e) { return Ua(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Ob(e, t, n) { let r = e[Symbol.iterator](), o = t[Symbol.iterator](); for (;;) {
    let i = r.next(), s = o.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Yy(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), r;
    for (; !(r = n.next()).done;)
        t(r.value);
} }
function Ua(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Ky(e, t) { let n = Ho(e), r = Ho(t); return n && r ? Ob(e, t, Ky) : !n && (e && (typeof e == "object" || typeof e == "function")) && !r && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function dt(e, t, n) { return e[t] = n; }
function li(e, t) { return e[t]; }
function Z(e, t, n) { if (n === B)
    return !1; let r = e[t]; return Object.is(r, n) ? !1 : (e[t] = n, !0); }
function Tn(e, t, n, r) { let o = Z(e, t, n); return Z(e, t + 1, r) || o; }
function Ga(e, t, n, r, o) { let i = Tn(e, t, n, r); return Z(e, t + 2, o) || i; }
function He(e, t, n, r, o, i) { let s = Tn(e, t, n, r); return Tn(e, t + 2, o, i) || s; }
function To(e, t, n) { return function r(o) { let i = Me(e) ? me(e.index, t) : t; si(i, 5); let s = t[H], a = yg(t, s, n, o), c = r.__ngNextListenerFn__; for (; c;)
    a = yg(t, s, c, o) && a, c = c.__ngNextListenerFn__; return a; }; }
function yg(e, t, n, r) { let o = Fh(null); try {
    return V(6, t, n), n(r) !== !1;
}
catch (i) {
    return af(e, i), !1;
}
finally {
    V(7, t, n), Fh(o);
} }
function Jy(e, t, n, r, o, i, s, a) { let c = Hn(e), l = !1, u = null; if (!r && c && (u = kb(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ie(e, n), f = r ? r(d) : d;
    dw(n, f, i, a);
    let p = o.listen(f, i, a);
    if (!xb(i)) {
        let h = r ? v => r(P(v[e.index])) : e.index;
        Xy(h, t, n, i, a, p, !1);
    }
} return l; }
function xb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function kb(e, t, n, r) { let o = e.cleanup; if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
        let s = o[i];
        if (s === n && o[i + 1] === r) {
            let a = t[jt], c = o[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Xy(e, t, n, r, o, i, s) { let a = t.firstCreatePass ? ll(t) : null, c = cl(n), l = c.length; c.push(o, i), a && a.push(r, e, l, (l + 1) * (s ? -1 : 1)); }
function Pb(e, t, n, r, o) { let i = To(e, t, n), s = Lb(e, t, r, o, i); }
function Lb(e, t, n, r, o) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(r)) {
    let u = e.hostDirectiveOutputs[r];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Us(e, t, f, u[d + 1], r, o);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(r) && (c = !0, Us(e, t, i, r, r, o)), c; }
function Us(e, t, n, r, o, i) { let s = t[n], a = t[m], l = a.data[n].outputs[r], d = s[l].subscribe(i); Xy(e.index, a, t, o, i, d, !0); }
var Wt = Symbol("BINDING"), Fb = { kind: "input", requiredVars: 1 }, jb = { kind: "output", requiredVars: 0 };
function Vb(e, t, n) { let r = g(), o = ye(); if (Z(r, o, n)) {
    let i = r[m], s = Fe(), a = me(s.index, r);
    si(a, 1);
    let c = i.directiveRegistry[e], l = aS(s, i, r, c, t, n);
} }
function eE(e, t) { let n = { [Wt]: Fb, update: () => Vb(n.targetIdx, e, t()) }; return n; }
function tE(e, t) { let n = { [Wt]: jb, create: () => { let r = g(), o = _(), s = r[m].directiveRegistry[n.targetIdx]; Pb(o, r, t, s, e); } }; return n; }
function Hb(e, t) { let n = eE(e, t), r = tE(e + "Change", i => t.set(i)); return { [Wt]: { kind: "twoWay", requiredVars: n[Wt].requiredVars + r[Wt].requiredVars }, set targetIdx(i) { n.targetIdx = i, r.targetIdx = i; }, create: r.create, update: n.update }; }
var Gs = class extends ci {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Qt(n, this.ngModule); }
};
function Bb(e) { return Object.keys(e).map(t => { let [n, r, o] = e[t], i = { propName: n, templateName: t, isSignal: (r & Ta.SignalBased) !== 0 }; return o && (i.transform = o), i; }); }
function $b(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function Ub(e, t, n) { let r = t instanceof Se ? t : t?.injector; return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r), r ? new ir(n, r) : n; }
function Gb(e) { let t = e.get(Vo, null); if (t === null)
    throw new T(407, !1); let n = e.get(qy, null), r = e.get(Ne, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: r, ngReflect: !1 }; }
function qb(e, t) { let n = nE(e); return Ea(t, n, n === "svg" ? $i : n === "math" ? Ui : null); }
function nE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Qt = class extends $a {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Bb(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= $b(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = w_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, r, o, i, s) { V(22); let a = A(null); try {
        let c = this.componentDef, l = Wb(r, c, s, i), u = Ub(c, o || this.ngModule, t), d = Gb(u), f = d.rendererFactory.createRenderer(null, c), p = r ? J_(f, r, c.encapsulation, u) : qb(c, f), h = s?.some(Eg) || i?.some(D => typeof D != "function" && D.bindings.some(Eg)), v = Da(null, l, null, 512 | Gd(c), null, null, d, f, u, null, ev(p, u, !0));
        v[I] = p, Ji(v);
        let y = null;
        try {
            let D = hf(I, v, 2, "#host", () => l.directiveRegistry, !0, 0);
            wv(f, p, D), Ve(p, v), ba(l, v, D), Od(l, D, v), gf(l, D), n !== void 0 && Qb(D, this.ngContentSelectors, n), y = me(D.index, v), v[H] = y[H], ka(l, v, null);
        }
        catch (D) {
            throw y !== null && lu(y), lu(v), D;
        }
        finally {
            V(23), Xi();
        }
        return new qs(this.componentType, v, !!h);
    }
    finally {
        A(a);
    } }
};
function Wb(e, t, n, r) { let o = e ? ["ng-version", "20.3.25"] : __(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Wt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (r)
    for (let u = 0; u < r.length; u++) {
        let d = r[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Wt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (r)
    for (let u of r) {
        let d = typeof u == "function" ? u : u.type, f = Ae(d);
        c.push(f);
    } return Ud(0, null, zb(i, s), 1, a, c, null, null, null, [o], null); }
function zb(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let r of e)
        r.create(); if (n & 2 && t)
    for (let r of t)
        r.update(); }; }
function Eg(e) { let t = e[Wt].kind; return t === "input" || t === "twoWay"; }
var qs = class extends Gy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, r) { super(), this._rootLView = n, this._hasInputBindings = r, this._tNode = yt(n[m], I), this.location = Nr(this._tNode, n), this.instance = me(this._tNode.index, n)[H], this.hostView = this.changeDetectorRef = new zt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let r = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let o = this._rootLView, i = xa(r, o[m], o, t, n); this.previousInputValues.set(t, n); let s = me(r.index, o); si(s, 1); }
    get injector() { return new qt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function Qb(e, t, n) { let r = e.projection = []; for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
} }
var qa = (() => { class e {
    static __NG_ELEMENT_ID__ = Zb;
} return e; })();
function Zb() { let e = _(); return oE(e, g()); }
var Yb = qa, rE = class extends Yb {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r; }
    get element() { return Nr(this._hostTNode, this._hostLView); }
    get injector() { return new qt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = pd(this._hostTNode, this._hostLView); if (fm(t)) {
        let n = _s(t, this._hostLView), r = ws(t), o = n[m].data[r + 8];
        return new qt(o, n);
    }
    else
        return new qt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Ig(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - U; }
    createEmbeddedView(t, n, r) { let o, i; typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector); let s = jo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, o, Dn(this._hostTNode, s)), a; }
    createComponent(t, n, r, o, i, s, a) { let c = t && !yo(t), l; if (c)
        l = n;
    else {
        let y = n || {};
        l = y.index, r = y.injector, o = y.projectableNodes, i = y.environmentInjector || y.ngModuleRef, s = y.directives, a = y.bindings;
    } let u = c ? t : new Qt(W(t)), d = r || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(Se, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = jo(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, v = u.create(d, o, h, i, s, a); return this.insertImpl(v.hostView, l, Dn(this._hostTNode, p)), v; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, r) { let o = t._lView; if (Ch(o)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = o[z], l = new rE(c, c[le], c[z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Lr(s, o, i, r), t.attachToViewContainerRef(), Qc(zl(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Ig(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), r = Lo(this._lContainer, n); r && (no(zl(this._lContainer), n), ii(r[m], r)); }
    detach(t) { let n = this._adjustIndex(t, -1), r = Lo(this._lContainer, n); return r && no(zl(this._lContainer), n) != null ? new zt(r) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Ig(e) { return e[ao]; }
function zl(e) { return e[ao] || (e[ao] = []); }
function oE(e, t) { let n, r = t[e.index]; return Y(r) ? n = r : (n = my(r, t, null, e), t[e.index] = n, qd(t, n)), iE(n, t, e, r), new rE(n, e, t); }
function Kb(e, t) { let n = e[w], r = n.createComment(""), o = ie(t, e), i = n.parentNode(o); return En(n, i, r, n.nextSibling(o), !1), r; }
var iE = aE, mf = () => !1;
function sE(e, t, n) { return mf(e, t, n); }
function aE(e, t, n, r) { if (e[ze])
    return; let o; n.type & 8 ? o = P(r) : o = Kb(t, n), e[ze] = o; }
function Jb(e, t, n) { if (e[ze] && e[xe])
    return !0; let r = n[ue], o = t.index - I; if (!r || wr(t) || ma(r, o))
    return !1; let s = pu(r, o), a = r.data[_r]?.[o], [c, l] = gb(s, a); return e[ze] = c, e[xe] = l, !0; }
function Xb(e, t, n, r) { mf(e, n, t) || aE(e, t, n, r); }
function cE() { iE = Xb, mf = Jb; }
var Lu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Fu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length, o = [];
        for (let i = 0; i < r; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            o.push(a.clone());
        }
        return new e(o);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        yf(t, n).matches !== null && this.queries[n].setDirty(); }
}, Ws = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) { this.flags = n, this.read = r, typeof t == "string" ? this.predicate = oR(t) : this.predicate = t; }
}, ju = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0, i = this.getByIndex(r).embeddedTView(t, o);
        i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Vu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n;)
            r = r.parent;
        return n === (r !== null ? r.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let r = this.metadata.predicate; if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
            let i = r[o];
            this.matchTNodeWithReadOption(t, n, eR(n, i)), this.matchTNodeWithReadOption(t, n, gs(n, t, i, !1, !1));
        }
    else
        r === Fo ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, gs(n, t, r, !1, !1)); }
    matchTNodeWithReadOption(t, n, r) { if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
            if (o === Qo || o === qa || o === Fo && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = gs(n, t, o, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, r);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function eR(e, t) { let n = e.localNames; if (n !== null) {
    for (let r = 0; r < n.length; r += 2)
        if (n[r] === t)
            return n[r + 1];
} return null; }
function tR(e, t) { return e.type & 11 ? Nr(e, t) : e.type & 4 ? La(e, t) : null; }
function nR(e, t, n, r) { return n === -1 ? tR(t, e) : n === -2 ? rR(e, t, r) : Ao(e, e[m], n, t); }
function rR(e, t, n) { if (n === Qo)
    return Nr(t, e); if (n === Fo)
    return La(t, e); if (n === qa)
    return oE(t, e); }
function lE(e, t, n, r) { let o = t[tt].queries[r]; if (o.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(nR(t, u, s[c + 1], n.metadata.read));
        }
    }
    o.matches = a;
} return o.matches; }
function Hu(e, t, n, r) { let o = e.queries.getByIndex(n), i = o.matches; if (i !== null) {
    let s = lE(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            r.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = U; d < u.length; d++) {
                let f = u[d];
                f[gt] === f[z] && Hu(f[m], f, l, r);
            }
            if (u[ln] !== null) {
                let d = u[ln];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Hu(p[m], p, l, r);
                }
            }
        }
    }
} return r; }
function vf(e, t) { return e[tt].queries[t].queryList; }
function uE(e, t, n) { let r = new Rs((n & 4) === 4); return Nh(e, t, r, r.destroy), (t[tt] ??= new Fu).queries.push(new Lu(r)) - 1; }
function dE(e, t, n) { let r = R(); return r.firstCreatePass && (pE(r, new Ws(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)), uE(r, g(), t); }
function fE(e, t, n, r) { let o = R(); if (o.firstCreatePass) {
    let i = _();
    pE(o, new Ws(t, n, r), i.index), iR(o, e), (n & 2) === 2 && (o.staticContentQueries = !0);
} return uE(o, g(), n); }
function oR(e) { return e.split(",").map(t => t.trim()); }
function pE(e, t, n) { e.queries === null && (e.queries = new ju), e.queries.track(new Vu(t, n)); }
function iR(e, t) { let n = e.contentQueries || (e.contentQueries = []), r = n.length ? n[n.length - 1] : -1; t !== r && n.push(e.queries.length - 1, t); }
function yf(e, t) { return e.queries.getByIndex(t); }
function hE(e, t) { let n = e[m], r = yf(n, t); return r.crossesNgTemplate ? Hu(n, e, t, []) : lE(n, e, r, t); }
function Ef(e, t, n) { let r, o = wi(() => { r._dirtyCounter(); let i = sR(r, e); if (t && i === void 0)
    throw new T(-951, !1); return i; }); return r = o[ae], r._dirtyCounter = $t(0), r._flatValue = void 0, o; }
function If(e) { return Ef(!0, !1, e); }
function Df(e) { return Ef(!0, !0, e); }
function Tf(e) { return Ef(!1, !1, e); }
function gE(e, t) { let n = e[ae]; n._lView = g(), n._queryIndex = t, n._queryList = vf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(r => r + 1)); }
function sR(e, t) { let n = e._lView, r = e._queryIndex; if (n === void 0 || r === void 0 || n[N] & 4)
    return t ? void 0 : L; let o = vf(n, r), i = hE(n, r); return o.reset(i, Nm), t ? o.first : o._changesDetected || e._flatValue === void 0 ? e._flatValue = o.toArray() : e._flatValue; }
function mE(e) { let t = [], n = new Map; function r(o) { let i = n.get(o); if (!i) {
    let s = e(o);
    n.set(o, i = s.then(a => uR(o, a)));
} return i; } return hr.forEach((o, i) => { let s = []; o.templateUrl && s.push(r(o.templateUrl).then(l => { o.template = l; })); let a = typeof o.styles == "string" ? [o.styles] : o.styles || []; if (o.styles = a, o.styleUrl && o.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (o.styleUrls?.length) {
    let l = o.styles.length, u = o.styleUrls;
    o.styleUrls.forEach((d, f) => { a.push(""), s.push(r(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (o.styleUrls = void 0); })); });
}
else
    o.styleUrl && s.push(r(o.styleUrl).then(l => { a.push(l), o.styleUrl = void 0; })); let c = Promise.all(s).then(() => dR(i)); t.push(c); }), yE(), Promise.all(t).then(() => { }); }
var hr = new Map, Bo = new Set;
function aR(e, t) { vE(t) && (hr.set(e, t), Bo.add(e)); }
function cR(e) { return Bo.has(e); }
function vE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function yE() { let e = hr; return hr = new Map, e; }
function lR(e) { Bo.clear(), e.forEach((t, n) => Bo.add(n)), hr = e; }
function EE() { return hr.size === 0; }
function uR(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new T(918, !1)) : t.text(); }
function dR(e) { Bo.delete(e); }
var Bu = new Map, IE = !0;
function fR(e, t, n) { if (t && t !== n && IE)
    throw new Error(`Duplicate module registered for ${e} - ${$e(t)} vs ${$e(t.name)}`); }
function Cf(e, t) { let n = Bu.get(t) || null; fR(t, n, e), Bu.set(t, e); }
function Nf(e) { return Bu.get(e); }
function pR(e) { IE = !e; }
var gr = class {
}, DE = class {
};
function TE(e, t) { return new mr(e, t ?? null, []); }
var hR = TE, mr = class extends gr {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Gs(this);
    constructor(t, n, r, o = !0) { super(), this.ngModuleType = t, this._parent = n; let i = on(t); this._bootstrapComponents = Xn(i.bootstrap), this._r3Injector = bl(t, n, [{ provide: gr, useValue: this }, { provide: ci, useValue: this.componentFactoryResolver }, ...r], $e(t), new Set(["environment"])), o && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, vr = class extends DE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new mr(this.moduleType, t, []); }
};
function CE(e, t, n) { return new mr(e, t, n, !1); }
var $o = class extends gr {
    injector;
    componentFactoryResolver = new Gs(this);
    instance = null;
    constructor(t) { super(); let n = new tn([...t.providers, { provide: gr, useValue: this }, { provide: ci, useValue: this.componentFactoryResolver }], t.parent || jn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Mf(e, t, n = null) { return new $o({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var gR = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let r = ji(!1, n.type), o = r.length > 0 ? Mf([r], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, o);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e(fe(Se)) });
} return e; })();
function NE(e) { return ut(() => { let t = SE(e), n = Ce(q({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === ia.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? o => o.get(gR).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Nt.Emulated, styles: e.styles || L, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && te("NgStandalone"), bE(n); let r = e.dependencies; return n.directiveDefs = zs(r, ME), n.pipeDefs = zs(r, Ge), n.id = ER(n), n; }); }
function ME(e) { return W(e) || Ae(e); }
function wf(e) { return ut(() => ({ type: e.type, bootstrap: e.bootstrap || L, declarations: e.declarations || L, imports: e.imports || L, exports: e.exports || L, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function mR(e, t) { if (e == null)
    return Pe; let n = {}; for (let r in e)
    if (e.hasOwnProperty(r)) {
        let o = e[r], i, s, a, c;
        Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ?? i, c = o[3] || null) : (i = o, s = o, a = Ta.None, c = null), n[i] = [r, a, c], t[i] = s;
    } return n; }
function vR(e) { if (e == null)
    return Pe; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function wE(e) { return ut(() => { let t = SE(e); return bE(t), t; }); }
function _E(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function SE(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Pe, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || L, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: mR(e.inputs, t), outputs: vR(e.outputs), debugInfo: null }; }
function bE(e) { e.features?.forEach(t => t(e)); }
function zs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, r = []; for (let o of n) {
    let i = t(o);
    i !== null && r.push(i);
} return r; } : null; }
var yR = new Map;
function ER(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of r.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function RE(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function _f(e) { let t = RE(e.type), n = !0, r = [e]; for (; t;) {
    let o;
    if (we(e))
        o = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new T(903, !1);
        o = t.\u0275dir;
    }
    if (o) {
        if (n) {
            r.push(o);
            let s = e;
            s.inputs = Ql(e.inputs), s.declaredInputs = Ql(e.declaredInputs), s.outputs = Ql(e.outputs);
            let a = o.hostBindings;
            a && NR(e, a);
            let c = o.viewQuery, l = o.contentQueries;
            if (c && TR(e, c), l && CR(e, l), IR(e, o), lh(e.outputs, o.outputs), we(o) && o.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(o.data.animation);
            }
        }
        let i = o.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === _f && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} DR(r); }
function IR(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let r = t.inputs[n];
    r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function DR(e) { let t = 0, n = null; for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    o.hostVars = t += o.hostVars, o.hostAttrs = ur(o.hostAttrs, n = ur(n, o.hostAttrs));
} }
function Ql(e) { return e === Pe ? {} : e === L ? [] : e; }
function TR(e, t) { let n = e.viewQuery; n ? e.viewQuery = (r, o) => { t(r, o), n(r, o); } : e.viewQuery = t; }
function CR(e, t) { let n = e.contentQueries; n ? e.contentQueries = (r, o, i) => { t(r, o, i), n(r, o, i); } : e.contentQueries = t; }
function NR(e, t) { let n = e.hostBindings; n ? e.hostBindings = (r, o) => { t(r, o), n(r, o); } : e.hostBindings = t; }
var MR = ["providersResolver"], wR = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function AE(e) { let t = RE(e.type), n; we(e) ? n = t.\u0275cmp : n = t.\u0275dir; let r = e; for (let o of MR)
    r[o] = n[o]; if (we(n))
    for (let o of wR)
        r[o] = n[o]; }
function OE(e) { let t = n => { let r = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = _R, n.hostDirectives = r ? e.map($u) : [e]) : r ? n.hostDirectives.unshift(...e.map($u)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function _R(e) { let t = [], n = !1, r = null, o = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        r ??= new Map, o ??= new Map, xE(s, t, r), o.set(s, [a, t.length - 1]);
    }
    i === 0 && we(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, r, o]; }
function xE(e, t, n) { if (e.hostDirectives !== null)
    for (let r of e.hostDirectives)
        if (typeof r == "function") {
            let o = r();
            for (let i of o)
                Dg($u(i), t, n);
        }
        else
            Dg(r, t, n); }
function Dg(e, t, n) { let r = Ae(e.directive); SR(r.declaredInputs, e.inputs), xE(r, t, n), n.set(r, e), t.push(r); }
function $u(e) { return typeof e == "function" ? { directive: x(e), inputs: Pe, outputs: Pe } : { directive: x(e.directive), inputs: Tg(e.inputs), outputs: Tg(e.outputs) }; }
function Tg(e) { if (e === void 0 || e.length === 0)
    return Pe; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function SR(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let r = t[n], o = e[n];
        e[r] = o;
    } }
function kE(e, t, n, r, o, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = ur(e.mergedAttrs, e.attrs);
    let u = e.tView = Ud(2, e, o, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ot(e, !1); let c = PE(n, t, e, r); ho() && tf(n, t, c, e), Ve(c, t); let l = my(c, t, c, e); t[r + I] = l, qd(t, l), sE(l, e, t); }
function bR(e, t, n, r, o, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = bn(t, d, 4, s || null, a || null), Qi() && zy(t, e, f, he(t.consts, l), sf), cm(t, f)) : f = t.data[d], kE(f, e, t, n, r, o, i, c), Hn(f) && ba(t, e, f), l != null && kr(e, f, u), f; }
function Cn(e, t, n, r, o, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = bn(t, d, 4, s || null, a || null), l != null) {
        let p = he(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return kE(f, e, t, n, r, o, i, c), l != null && kr(e, f, u), f; }
function Sf(e, t, n, r, o, i, s, a) { let c = g(), l = R(), u = he(l.consts, i); return bR(c, l, e, t, n, r, o, u, void 0, s, a), Sf; }
function bf(e, t, n, r, o, i, s, a) { let c = g(), l = R(), u = he(l.consts, i); return Cn(c, l, e, t, n, r, o, u, void 0, s, a), bf; }
var PE = LE;
function LE(e, t, n, r) { return Qe(!0), t[w].createComment(""); }
function RR(e, t, n, r) { let o = !va(t, n); Qe(o); let i = t[ue]?.data[aa]?.[r] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), o)
    return LE(e, t); let s = t[ue], a = ai(s, e, t, n); ga(s, r, a); let c = Rd(s, r); return ja(c, a); }
function FE() { PE = RR; }
var re = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(re || {}), Cg = 0, AR = 1, Q = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Q || {}), Uo = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Uo || {}), sr = 0, Ot = 1, Eo = 2, cs = 3, OR = 4, xR = 5, Wa = 6, kR = 7, ar = 8, PR = 9, Rf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Rf || {});
function ui(e, t, n) { let r = VE(e); t[r] === null && (t[r] = []), t[r].push(n); }
function Is(e, t) { let n = VE(e), r = t[n]; if (r !== null) {
    for (let o of r)
        o();
    t[n] = null;
} }
function jE(e) { Is(1, e), Is(0, e), Is(2, e); }
function VE(e) { let t = OR; return e === 1 ? t = xR : e === 2 && (t = PR), t; }
function di(e) { return e + 1; }
function De(e, t) { let n = e[m], r = di(t.index); return e[r]; }
function LR(e, t, n) { let r = e[m], o = di(t); e[o] = n; }
function de(e, t) { let n = di(t.index); return e.data[n]; }
function FR(e, t, n) { let r = di(t); e.data[r] = n; }
function jR(e, t, n) { let r = t[m], o = de(r, n); switch (e) {
    case Q.Complete: return o.primaryTmplIndex;
    case Q.Loading: return o.loadingTmplIndex;
    case Q.Error: return o.errorTmplIndex;
    case Q.Placeholder: return o.placeholderTmplIndex;
    default: return null;
} }
function Uu(e, t) { return t === Q.Placeholder ? e.placeholderBlockConfig?.[Cg] ?? null : t === Q.Loading ? e.loadingBlockConfig?.[Cg] ?? null : null; }
function HE(e) { return e.loadingBlockConfig?.[AR] ?? null; }
function Ng(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let r of t)
    n.add(r); return e.length === n.size ? e : Array.from(n); }
function VR(e, t) { let n = t.primaryTmplIndex + I; return yt(e, n); }
function BE(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function $E(e, t) { let n = null, r = di(t.index); return I < r && r < e.bindingStartIndex && (n = de(e, t)), !!n && BE(n); }
function Af(e, t, n) { let r = n.get(G); return lw(e, () => r.run(t), () => r.runOutsideAngular(() => cw())); }
function HR(e, t, n) { return n == null ? e : n >= 0 ? al(n, e) : e[t.index][U] ?? null; }
function BR(e, t) { return un(I + t, e); }
function Vr(e, t, n, r, o, i, s) { let a = e[k], c = a.get(G), l; function u() { if (rt(e)) {
    l.destroy();
    return;
} let d = De(e, t), f = d[Ot]; if (f !== Uo.Initial && f !== Q.Placeholder) {
    l.destroy();
    return;
} let p = HR(e, t, r); if (!p || (l.destroy(), rt(p)))
    return; let h = BR(p, n), v = o(h, () => { c.run(() => { e !== p && zi(p, v), i(); }); }, a); e !== p && uo(p, v), ui(s, d, v); } l = Gv({ read: u }, { injector: a }); }
function za(e, t) { let n = t.get(GR), r = () => n.remove(e); return n.add(e), r; }
var $R = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, UR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, GR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(G);
    requestIdleCallbackFn = $R().bind(globalThis);
    cancelIdleCallbackFn = UR().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: r, deferred: o } = this; r.delete(n), o.delete(n), r.size === 0 && o.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let r of this.current)
        r(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let r of this.deferred)
            this.current.add(r);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Qa(e) { return (t, n) => UE(e, t, n); }
function UE(e, t, n) { let r = n.get(GE), o = n.get(G), i = () => r.remove(t); return r.add(e, t, o), i; }
var GE = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, r, o) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, r), this.scheduleTimer(o); }
    remove(n) { let { current: r, deferred: o } = this; this.removeFromQueue(r, n) === -1 && this.removeFromQueue(o, n), r.length === 0 && o.length === 0 && this.clearTimeout(); }
    addToQueue(n, r, o) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > r) {
            i = s;
            break;
        } Yc(n, i, r, o); }
    removeFromQueue(n, r) { let o = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === r) {
            o = i;
            break;
        } return o > -1 && Zc(n, o, 2), o; }
    scheduleTimer(n) { let r = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Zc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(r), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = j({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), qR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, r, o, i) { if (!this.cachedInjectors.has(n)) {
        let s = o.length > 0 ? Mf(o, r, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = j({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), WR = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), qE = new C("");
function Zl(e, t, n) { return e.get(qR).getOrCreateInjector(t, e, n, ""); }
function zR(e, t, n) { if (e instanceof ir) {
    let o = e.injector, i = e.parentInjector, s = Zl(i, t, n);
    return new ir(o, s);
} let r = e.get(Se); if (r !== e) {
    let o = Zl(r, t, n);
    return new ir(e, o);
} return Zl(e, t, n); }
function Tt(e, t, n, r = !1) { let o = n[z], i = o[m]; if (rt(o))
    return; let s = De(o, t), a = s[Ot], c = s[kR]; if (!(c !== null && e < c) && wg(a, e) && wg(s[sr] ?? -1, e)) {
    let l = de(i, t), d = !r && (typeof ngServerMode > "u" || !ngServerMode) && (HE(l) !== null || Uu(l, Q.Loading) !== null || Uu(l, Q.Placeholder)) ? Gu : WE;
    try {
        d(e, s, n, t, o);
    }
    catch (f) {
        af(o, f);
    }
} }
function QR(e, t) { let n = e[xe]?.findIndex(o => o.data[Jo] === t[Ot]) ?? -1; return { dehydratedView: n > -1 ? e[xe][n] : null, dehydratedViewIx: n }; }
function WE(e, t, n, r, o) { V(20); let i = jR(e, o, r); if (i !== null) {
    t[Ot] = e;
    let s = o[m], a = i + I, c = yt(s, a), l = 0;
    cf(n, l);
    let u;
    if (e === Q.Complete) {
        let h = de(s, r), v = h.providers;
        v && v.length > 0 && (u = zR(o[k], h, v));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = QR(n, t), p = Pr(o, c, null, { injector: u, dehydratedView: d });
    if (Lr(n, p, l, Dn(c, d)), si(p, 2), f > -1 && n[xe]?.splice(f, 1), (e === Q.Complete || e === Q.Error) && Array.isArray(t[ar])) {
        for (let h of t[ar])
            h();
        t[ar] = null;
    }
} V(21); }
function ZR(e, t, n, r, o) { let i = Date.now(), s = o[m], a = de(s, r); if (t[Eo] === null || t[Eo] <= i) {
    t[Eo] = null;
    let c = HE(a), l = t[cs] !== null;
    if (e === Q.Loading && c !== null && !l) {
        t[sr] = e;
        let u = Mg(c, t, r, n, o);
        t[cs] = u;
    }
    else {
        e > Q.Loading && l && (t[cs](), t[cs] = null, t[sr] = null), WE(e, t, n, r, o);
        let u = Uu(a, e);
        u !== null && (t[Eo] = i + u, Mg(u, t, r, n, o));
    }
}
else
    t[sr] = e; }
function Mg(e, t, n, r, o) { return UE(e, () => { let s = t[sr]; t[Eo] = null, t[sr] = null, s !== null && Tt(s, n, r); }, o[k]); }
function wg(e, t) { return e < t; }
function Hr(e, t) { let n = e[t.index]; Tt(Q.Placeholder, t, n); }
function _g(e, t, n) { e.loadingPromise.then(() => { e.loadingState === re.COMPLETE ? Tt(Q.Complete, t, n) : e.loadingState === re.FAILED && Tt(Q.Error, t, n); }); }
var Gu = null;
function zE(e, t, n, r) { let o = e.consts; n != null && (t.placeholderBlockConfig = he(o, n)), r != null && (t.loadingBlockConfig = he(o, r)), Gu === null && (Gu = ZR); }
var Ds = "__ngAsyncComponentMetadataFn__";
function YR(e) { return e[Ds] ?? null; }
function QE(e, t, n) { let r = e; return r[Ds] = () => Promise.all(t()).then(o => (n(...o), r[Ds] = null, o)), r[Ds]; }
function Of(e, t, n, r) { return ut(() => { let o = e; t !== null && (o.hasOwnProperty("decorators") && o.decorators !== void 0 ? o.decorators.push(...t) : o.decorators = t), n !== null && (o.ctorParameters = n), r !== null && (o.hasOwnProperty("propDecorators") && o.propDecorators !== void 0 ? o.propDecorators = q(q({}, o.propDecorators), r) : o.propDecorators = r); }); }
var KR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Ts(e, t) { let n = e[m]; for (let r = I; r < n.bindingStartIndex; r++)
    if (Y(e[r])) {
        let o = e[r];
        if (!(r === n.bindingStartIndex - 1)) {
            let s = n.data[r], a = de(n, s);
            if (BE(a)) {
                t.push({ lContainer: o, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ee(o[$]) && Ts(o[$], t);
        for (let s = U; s < o.length; s++)
            Ts(o[s], t);
    }
    else
        ee(e[r]) && Ts(e[r], t); }
function JR() { return te("Chrome DevTools profiling"), () => { }; }
function XR(e) { let t = _t(), n = e.get(St), r = jm(t, n), o = {}; for (let [i, s] of Object.entries(r))
    fw(i) || (o[i] = s); return o; }
var Sg = "ng";
function eA(e, t) { tA(e, t); }
function tA(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = be;
    n[Sg] ??= {}, n[Sg][e] = t;
} }
var ZE = new C(""), YE = new C(""), nA = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, r, o) { this._ngZone = n, this.registry = r, Hi() && (this._destroyRef = E(je, { optional: !0 }) ?? void 0), xf || (JE(o), o.addToWindow(r)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), r = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { G.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), r.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(r => r.updateCb && r.updateCb(n) ? (clearTimeout(r.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, r, o) { let i = -1; r && r > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, r)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o }); }
    whenStable(n, r, o) { if (o && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, r, o), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, r, o) { return []; }
    static \u0275fac = function (r) { return new (r || e)(fe(G), fe(KE), fe(YE)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac });
} return e; })(), KE = (() => { class e {
    _applications = new Map;
    registerApplication(n, r) { this._applications.set(n, r); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, r = !0) { return xf?.findTestabilityInTree(this, n, r) ?? null; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function JE(e) { xf = e; }
var xf;
function kf(e) { return !!e && typeof e.then == "function"; }
function XE(e) { return !!e && typeof e.subscribe == "function"; }
var Pf = new C("");
function rA(e) { return qe([{ provide: Pf, multi: !0, useValue: e }]); }
var Lf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, r) => { this.resolve = n, this.reject = r; });
    appInits = E(Pf, { optional: !0 }) ?? [];
    injector = E(ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let o of this.appInits) {
        let i = Vi(this.injector, o);
        if (kf(i))
            n.push(i);
        else if (XE(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let r = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { r(); }).catch(o => { this.reject(o); }), n.length === 0 && r(), this.initialized = !0; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), fi = new C("");
function Ff() { Xp(() => { let e = ""; throw new T(600, e); }); }
function eI(e) { return e.isBoundToModule; }
var qu = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, oA = 10;
function jf(e, t) { return Array.isArray(t) ? t.reduce(jf, e) : q(q({}, e), t); }
var Ye = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(ct);
    afterRenderManager = E(Na);
    zonelessEnabled = E(qn);
    rootEffectScheduler = E(mo);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new ud;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(Et);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(KN(n => !n)); }
    constructor() { E(xr, { optional: !0 }); }
    whenStable() { let n; return new Promise(r => { n = this.isStable.subscribe({ next: o => { o && r(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(Se);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, r) { return this.bootstrapImpl(n, r); }
    bootstrapImpl(n, r, o = ce.NULL) { return this._injector.get(G).run(() => { V(10); let s = n instanceof $a; if (!this._injector.get(Lf).done) {
        let h = "";
        throw new T(405, h);
    } let c; s ? c = n : c = this._injector.get(ci).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = eI(c) ? void 0 : this._injector.get(gr), u = r || c.selector, d = c.create(o, [], u, l), f = d.location.nativeElement, p = d.injector.get(ZE, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Co(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ca.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new T(101, !1); let n = A(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, A(n), this.afterTick.next(), V(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Vo, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < oA;)
        V(14), this.synchronizeOnce(), V(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let r = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: o } of this.allViews) {
            if (!r && !Bn(o))
                continue;
            let i = r && !this.zonelessEnabled ? 0 : 1;
            dy(o, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Bn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let r = n; this._views.push(r), r.attachToAppRef(this); }
    detachView(n) { let r = n; Co(this._views, r), r.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (o) {
        this.internalErrorHandler(o);
    } this.components.push(n), this._injector.get(fi, []).forEach(o => o(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Co(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new T(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Co(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Vf() { let e, t; return { promise: new Promise((r, o) => { e = r, t = o; }), resolve: e, reject: t }; }
function tI(e) { let t = g(), n = _(); if (Hr(t, n), !oI(0, t))
    return; let r = t[k], o = De(t, n), i = e(() => Te(0, t, n), r); ui(0, o, i); }
function nI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[k], r = _(), o = t[m], i = de(o, r); if (i.loadingState === re.NOT_STARTED) {
    let s = De(t, r), c = e(() => pi(i, t, r), n);
    ui(1, s, c);
} }
function rI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let r = t[k], o = De(t, n), i = o[Wa], s = e(() => xt(r, i), r); ui(2, o, s); }
function pi(e, t, n) { Za(e, t, n); }
function Za(e, t, n) { let r = t[k], o = t[m]; if (e.loadingState !== re.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = De(t, n), s = VR(o, e); e.loadingState = re.IN_PROGRESS, Is(1, i); let a = e.dependencyResolverFn, c = r.get(go).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, v = W(h) || Ae(h);
        if (v)
            d.push(v);
        else {
            let y = Ge(h);
            y && f.push(y);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = re.FAILED, e.errorTmplIndex === null) {
        let h = new T(-750, !1);
        af(t, h);
    }
}
else {
    e.loadingState = re.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Ng(p.directiveRegistry, d);
        let h = d.map(y => y.type), v = ji(!1, ...h);
        e.providers = v;
    }
    f.length > 0 && (p.pipeRegistry = Ng(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = re.COMPLETE, c(); }), e.loadingPromise); }
function oI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[k].get(qE, null, { optional: !0 })?.behavior === Rf.Manual); }
function Te(e, t, n) { let r = t[m], o = t[n.index]; if (!oI(e, t))
    return; let i = De(t, n), s = de(r, n); switch (jE(i), s.loadingState) {
    case re.NOT_STARTED:
        Tt(Q.Loading, n, o), Za(s, t, n), s.loadingState === re.IN_PROGRESS && _g(s, n, o);
        break;
    case re.IN_PROGRESS:
        Tt(Q.Loading, n, o), _g(s, n, o);
        break;
    case re.COMPLETE:
        Tt(Q.Complete, n, o);
        break;
    case re.FAILED:
        Tt(Q.Error, n, o);
        break;
    default:
} }
function xt(e, t, n) { return Pt(this, null, function* () { let r = e.get(bt); if (r.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = Dw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), aA(r, s), i !== null && (yield i); let a = s[0]; r.has(a) ? yield bg(e, s, n) : r.awaitParentBlock(a, () => Pt(null, null, function* () { return yield bg(e, s, n); })); }); }
function bg(e, t, n) { return Pt(this, null, function* () { let r = e.get(bt), o = r.hydrating, i = e.get(Et), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = r.get(l);
    if (u != null) {
        if (yield lA(u), yield cA(e), iA(u)) {
            pb(u), Rg(t.slice(c), r);
            break;
        }
        o.get(l).resolve();
    }
    else {
        sA(c, t, r), Rg(t.slice(c), r);
        break;
    }
} let a = t[t.length - 1]; yield o.get(a)?.promise, i.remove(s), n && n(t), hb(r.get(a), t, r, e.get(Ye)); }); }
function iA(e) { return De(e.lView, e.tNode)[Ot] === Q.Error; }
function sA(e, t, n) { let r = e - 1, o = r > -1 ? n.get(t[r]) : null; o && Ba(o.lContainer); }
function Rg(e, t) { let n = t.hydrating; for (let r in e)
    n.get(r)?.reject(); t.cleanup(e); }
function aA(e, t) { for (let n of t)
    e.hydrating.set(n, Vf()); }
function cA(e) { return new Promise(t => Kd(t, { injector: e })); }
function lA(e) { return Pt(this, null, function* () { let { tNode: t, lView: n } = e, r = De(n, t); return new Promise(o => { uA(r, o), Te(2, n, t); }); }); }
function uA(e, t) { Array.isArray(e[ar]) || (e[ar] = []), e[ar].push(t); }
function J(e, t, n) { return e === 0 ? Ag(t, n) : e === 2 ? !Ag(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function dA(e) { return e != null && (e & 1) === 1; }
function Ag(e, t) { let n = e[k], r = de(e[m], t), o = ei(n), i = dA(r.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !o || !i; let a = De(e, t)[Wa] !== null; return !(i && a && o); }
function Zt(e, t) { let n = de(e, t); return n.hydrateTriggers ??= new Map; }
function iI(e, t, n) { let r = [], o = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Ct], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && r.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, o.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} fA(e, r), gA(e, s), pA(e, i), hA(e, o); }
function fA(e, t) { for (let n of t) {
    let r = e.get(bt), i = za(() => xt(e, n.blockName), e);
    r.addCleanupFn(n.blockName, i);
} }
function pA(e, t) { if (t.length > 0) {
    let n = e.get(bt);
    for (let r of t) {
        let o = Af(r.el, () => xt(e, r.blockName), e);
        n.addCleanupFn(r.blockName, o);
    }
} }
function hA(e, t) { for (let n of t) {
    let r = e.get(bt), o = () => xt(e, n.blockName), s = Qa(n.delay)(o, e);
    r.addCleanupFn(n.blockName, s);
} }
function gA(e, t) { for (let n of t)
    xt(e, n.blockName); }
function sI(e, t, n, r, o, i, s, a, c, l) { let u = g(), d = R(), f = e + I, p = Cn(u, d, e, null, 0, 0), h = u[k], v = ei(h); if (d.firstCreatePass) {
    te("NgDefer");
    let ft = { primaryTmplIndex: t, loadingTmplIndex: r ?? null, placeholderTmplIndex: o ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: re.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ft, a, s), FR(d, f, ft);
} let y = u[f]; sE(y, p, u); let D = null, O = null; if (y[xe]?.length > 0) {
    let ft = y[xe][0].data;
    O = ft[ua] ?? null, D = ft[Jo];
} let ge = [null, Uo.Initial, null, null, null, null, O, D, null, null]; LR(u, f, ge); let Be = null; O !== null && v && (Be = h.get(bt), Be.add(O, { lView: u, tNode: p, lContainer: y })); let ke = () => { jE(ge), O !== null && Be?.cleanup([O]); }; ui(0, ge, () => zi(u, ke)), uo(u, ke); }
function aI(e) { let t = g(), n = Fe(); if (!J(0, t, n))
    return; let r = ye(); if (Z(t, r, e)) {
    let o = A(null);
    try {
        let i = !!e, a = De(t, n)[Ot];
        i === !1 && a === Uo.Initial ? Hr(t, n) : i === !0 && (a === Uo.Initial || a === Q.Placeholder) && Te(0, t, n);
    }
    finally {
        A(o);
    }
} }
function cI(e) { let t = g(), n = Fe(); if (!J(1, t, n))
    return; let r = ye(); if (Z(t, r, e)) {
    let o = A(null);
    try {
        let i = !!e, s = t[m], a = de(s, n);
        i === !0 && a.loadingState === re.NOT_STARTED && pi(a, t, n);
    }
    finally {
        A(o);
    }
} }
function lI(e) { let t = g(), n = Fe(); if (!J(2, t, n))
    return; let r = ye(), o = R(); if (Zt(o, n).set(6, null), Z(t, r, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Te(2, t, n);
    else {
        let s = t[k], a = A(null);
        try {
            if (!!e === !0) {
                let u = De(t, n)[Wa];
                xt(s, u);
            }
        }
        finally {
            A(a);
        }
    } }
function uI() { let e = g(), t = _(); if (!J(2, e, t))
    return; Zt(R(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function dI() { let e = g(), t = _(); J(0, e, t) && tI(za); }
function fI() { let e = g(), t = _(); J(1, e, t) && nI(za); }
function pI() { let e = g(), t = _(); if (!J(2, e, t))
    return; Zt(R(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Te(2, e, t) : rI(za, e, t); }
function hI() { let e = g(), t = _(); if (!J(0, e, t))
    return; de(e[m], t).loadingTmplIndex === null && Hr(e, t), Te(0, e, t); }
function gI() { let e = g(), t = _(); if (!J(1, e, t))
    return; let n = e[m], r = de(n, t); r.loadingState === re.NOT_STARTED && Za(r, e, t); }
function mI() { let e = g(), t = _(); if (!J(2, e, t))
    return; if (Zt(R(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Te(2, e, t);
else {
    let r = e[k], i = De(e, t)[Wa];
    xt(r, i);
} }
function vI(e) { let t = g(), n = _(); J(0, t, n) && tI(Qa(e)); }
function yI(e) { let t = g(), n = _(); J(1, t, n) && nI(Qa(e)); }
function EI(e) { let t = g(), n = _(); if (!J(2, t, n))
    return; Zt(R(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? Te(2, t, n) : rI(Qa(e), t, n); }
function II(e, t) { let n = g(), r = _(); J(0, n, r) && (Hr(n, r), typeof ngServerMode < "u" && ngServerMode || Vr(n, r, e, t, Um, () => Te(0, n, r), 0)); }
function DI(e, t) { let n = g(), r = _(); if (!J(1, n, r))
    return; let o = n[m], i = de(o, r); i.loadingState === re.NOT_STARTED && Vr(n, r, e, t, Um, () => pi(i, n, r), 1); }
function TI() { let e = g(), t = _(); if (!J(2, e, t))
    return; Zt(R(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function CI(e, t) { let n = g(), r = _(); J(0, n, r) && (Hr(n, r), typeof ngServerMode < "u" && ngServerMode || Vr(n, r, e, t, $m, () => Te(0, n, r), 0)); }
function NI(e, t) { let n = g(), r = _(); if (!J(1, n, r))
    return; let o = n[m], i = de(o, r); i.loadingState === re.NOT_STARTED && Vr(n, r, e, t, $m, () => pi(i, n, r), 1); }
function MI() { let e = g(), t = _(); if (!J(2, e, t))
    return; Zt(R(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function wI(e, t) { let n = g(), r = _(); J(0, n, r) && (Hr(n, r), typeof ngServerMode < "u" && ngServerMode || Vr(n, r, e, t, Af, () => Te(0, n, r), 0)); }
function _I(e, t) { let n = g(), r = _(); if (!J(1, n, r))
    return; let o = n[m], i = de(o, r); i.loadingState === re.NOT_STARTED && Vr(n, r, e, t, Af, () => pi(i, n, r), 1); }
function SI() { let e = g(), t = _(); if (!J(2, e, t))
    return; Zt(R(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function Hf(e, t) { let n = g(), r = ye(); if (Z(n, r, t)) {
    let o = R(), i = Fe();
    if (xa(i, o, n, e, t))
        Me(i) && iy(n, i.index);
    else {
        let a = ie(i, n);
        Ra(n[w], a, null, i.value, e, t, null);
    }
} return Hf; }
function Bf(e, t, n, r) { let o = g(), i = ye(); if (Z(o, i, t)) {
    let s = R(), a = Fe();
    iS(a, o, e, t, n, r);
} return Bf; }
var bI = new C("", { providedIn: "root", factory: () => !1 }), RI = new C("", { providedIn: "root", factory: () => mA }), mA = 4e3, vA = !1, Rn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ya(e) { return e[k].get(bI, vA); }
function yA(e, t, n) { let r = yr.get(e); if (r) {
    for (let o of t)
        r.classList.push(o);
    for (let o of n)
        r.cleanupFns.push(o);
}
else
    yr.set(e, { classList: t, cleanupFns: n }); }
function $f(e) { let t = yr.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    yr.delete(e);
} vn.delete(e); }
var EA = () => { }, yr = new WeakMap, vn = new WeakMap, cr = new WeakMap;
function Wu(e, t) { let n = cr.get(e); if (n && n.length > 0) {
    let r = n.findIndex(o => o === t);
    r > -1 && n.splice(r, 1);
} n?.length === 0 && cr.delete(e); }
function Ka(e, t) { let n = cr.get(e)?.shift(), r = t[gt]; if (r) {
    let i = js(e.index, r)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function AI(e, t) { cr.has(e) ? cr.get(e)?.push(t) : cr.set(e, [t]); }
function Qs(e) { let t = e[vt] ??= {}; return t.enter ??= new Map; }
function Nn(e) { let t = e[vt] ??= {}; return t.leave ??= new Map; }
function OI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(r => r)), n; }
function IA(e, t) { if (!Rn)
    return; let n = yr.get(e); if (n && n.classList.length > 0 && DA(e, n.classList))
    for (let r of n.classList)
        t.removeClass(e, r); $f(e); }
function DA(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function xI(e, t) { let n = vn.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function Ja(e, t, n) { let r = e.get(t.index) ?? { animateFns: [] }; r.animateFns.push(n), e.set(t.index, r); }
function zu(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Qu(e, t) { let n = Nn(e).get(t.index); n && (n.resolvers = void 0); }
function ls(e, t, n, r, o) { Wu(t, n), zu(r, o), Qu(e, t); }
function No(e) { if (te("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return No; let t = g(); if (Ya(t))
    return No; let n = _(); return Ka(n, t), Ja(Qs(t), n, () => TA(t, n, e)), _a(t[k]), Jd(t[k], Qs(t)), No; }
function TA(e, t, n) { let r = ie(t, e), o = e[w], i = e[k].get(G), s = OI(n), a = [], c = u => { if (u.target !== r)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { o.listen(r, d, l); }); }, l = u => { u.target === r && CA(u, r, o); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(o.listen(r, "animationstart", c)), a.push(o.listen(r, "transitionstart", c)); }), yA(r, s, a);
    for (let u of s)
        o.addClass(r, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (Vv(r, vn, Rn), !vn.has(r)) {
        for (let u of s)
            o.removeClass(r, u);
        $f(r);
    } }); });
} }
function CA(e, t, n) { let r = yr.get(t); if (!(e.target !== t || !r) && xI(e, t)) {
    e.stopImmediatePropagation();
    for (let o of r.classList)
        n.removeClass(t, o);
    $f(t);
} }
function Mo(e) { if (te("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return Mo; let t = g(); if (Ya(t))
    return Mo; let n = _(); return Ka(n, t), Ja(Qs(t), n, () => NA(t, n, e)), _a(t[k]), Jd(t[k], Qs(t)), Mo; }
function NA(e, t, n) { let r = ie(t, e); n.call(e[H], { target: r, animationComplete: EA }); }
function wo(e) { if (te("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return wo; let t = g(); if (Ya(t))
    return wo; let r = _(); return Ka(r, t), Ja(Nn(t), r, () => MA(t, r, e)), _a(t[k]), wo; }
function MA(e, t, n) { let { promise: r, resolve: o } = Vf(), i = ie(t, e), s = e[w], a = e[k].get(G); In.add(e), (Nn(e).get(t.index).resolvers ??= []).push(o); let c = OI(n); return c && c.length > 0 ? wA(i, t, e, c, s, a) : o(), { promise: r, resolve: o }; }
function wA(e, t, n, r, o, i) { IA(e, o); let s = [], a = Nn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || xI(l, e))) {
    if (l.stopImmediatePropagation(), vn.delete(e), Wu(t, e), Array.isArray(t.projection))
        for (let u of r)
            o.removeClass(e, u);
    zu(a, s), Qu(n, t);
} }; i.runOutsideAngular(() => { s.push(o.listen(e, "animationend", c)), s.push(o.listen(e, "transitionend", c)); }), AI(t, e); for (let l of r)
    o.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { Vv(e, vn, Rn), vn.has(e) || (Wu(t, e), zu(a, s), Qu(n, t)); }); }); }
function Zs(e) { if (te("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Rn)
    return Zs; let t = g(), n = _(); return Ka(n, t), In.add(t), Ja(Nn(t), n, () => _A(t, n, e)), _a(t[k]), Zs; }
function _A(e, t, n) { let { promise: r, resolve: o } = Vf(), i = ie(t, e), s = [], a = e[w], c = Ya(e), l = e[k].get(G), u = e[k].get(RI); (Nn(e).get(t.index).resolvers ??= []).push(o); let d = Nn(e).get(t.index)?.resolvers; if (c)
    ls(e, t, i, d, s);
else {
    let f = setTimeout(() => ls(e, t, i, d, s), u), p = { target: i, animationComplete: () => { ls(e, t, i, d, s), clearTimeout(f); } };
    AI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { ls(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[H], p);
} return { promise: r, resolve: o }; }
function kI() { return g()[X][H]; }
var Zu = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let r = Math.min(t, n), o = Math.max(t, n), i = this.detach(o); if (o - r > 1) {
        let s = this.detach(r);
        this.attach(r, i), this.attach(o, s);
    }
    else
        this.attach(r, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Yl(e, t, n, r, o) { return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0; }
function SA(e, t, n) { let r, o, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Yl(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Yl(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let v = n(i, l), y = n(s, f), D = n(i, u);
        if (Object.is(D, y)) {
            let O = n(c, p);
            Object.is(O, v) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (r ??= new Ys, o ??= xg(e, i, s, n), Yu(e, r, i, D))
            e.updateValue(i, u), i++, s++;
        else if (o.has(D))
            r.set(v, e.detach(i)), s--;
        else {
            let O = e.create(i, t[i]);
            e.attach(i, O), i++, s++;
        }
    }
    for (; i <= c;)
        Og(e, r, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Yl(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            r ??= new Ys, o ??= xg(e, i, s, n);
            let p = n(i, d);
            if (Yu(e, r, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!o.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                r.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        Og(e, r, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); r?.forEach(c => { e.destroy(c); }); }
function Yu(e, t, n, r) { return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)), t.delete(r), !0) : !1; }
function Og(e, t, n, r, o) { if (Yu(e, t, r, n(r, o)))
    e.updateValue(r, o);
else {
    let i = e.create(r, o);
    e.attach(r, i);
} }
function xg(e, t, n, r) { let o = new Set; for (let i = t; i <= n; i++)
    o.add(r(i, e.at(i))); return o; }
var Ys = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let r = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let o = this._vMap;
        for (; o.has(r);)
            r = o.get(r);
        o.set(r, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, r] of this.kvMap)
        if (t(r, n), this._vMap !== void 0) {
            let o = this._vMap;
            for (; o.has(r);)
                r = o.get(r), t(r, n);
        } }
};
function PI(e, t, n, r, o, i, s, a) { te("NgControlFlow"); let c = g(), l = R(), u = he(l.consts, i); return Cn(c, l, e, t, n, r, o, u, 256, s, a), Xa; }
function Xa(e, t, n, r, o, i, s, a) { te("NgControlFlow"); let c = g(), l = R(), u = he(l.consts, i); return Cn(c, l, e, t, n, r, o, u, 512, s, a), Xa; }
function LI(e, t) { te("NgControlFlow"); let n = g(), r = ye(), o = n[r] !== B ? n[r] : -1, i = o !== -1 ? Ks(n, I + o) : void 0, s = 0; if (Z(n, r, e)) {
    let a = A(null);
    try {
        if (i !== void 0 && cf(i, s), e !== -1) {
            let c = I + e, l = Ks(n, c), u = ed(n[m], c), d = $y(l, u, n), f = Pr(n, u, t, { dehydratedView: d });
            Lr(l, f, s, Dn(u, d));
        }
    }
    finally {
        A(a);
    }
}
else if (i !== void 0) {
    let a = vy(i, s);
    a !== void 0 && (a[H] = t);
} }
var Ku = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) { this.lContainer = t, this.$implicit = n, this.$index = r; }
    get $count() { return this.lContainer.length - U; }
};
function FI(e) { return e; }
function jI(e, t) { return t; }
var Ju = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = r; }
};
function VI(e, t, n, r, o, i, s, a, c, l, u, d, f) { te("NgControlFlow"); let p = g(), h = R(), v = c !== void 0, y = g(), D = a ? s.bind(y[X][H]) : s, O = new Ju(v, D); y[I + e] = O, Cn(p, h, e + 1, t, n, r, o, he(h.consts, i), 256), v && Cn(p, h, e + 2, c, l, u, d, he(h.consts, f), 512); }
var Xu = class extends Zu {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = r; }
    get length() { return this.lContainer.length - U; }
    at(t) { return this.getLView(t)[H].$implicit; }
    attach(t, n) { let r = n[ue]; this.needsIndexUpdate ||= t !== this.length, Lr(this.lContainer, n, t, Dn(this.templateTNode, r)), bA(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, RA(this.lContainer, t), AA(this.lContainer, t); }
    create(t, n) { let r = jo(this.lContainer, this.templateTNode.tView.ssrId), o = Pr(this.hostLView, this.templateTNode, new Ku(this.lContainer, n, t), { dehydratedView: r }); return this.operationsCounter?.recordCreate(), o; }
    destroy(t) { ii(t[m], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[H].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[H].$index = t; }
    getLView(t) { return OA(this.lContainer, t); }
};
function HI(e) { let t = A(null), n = ne(); try {
    let r = g(), o = r[m], i = r[n], s = n + 1, a = Ks(r, s);
    if (i.liveCollection === void 0) {
        let l = ed(o, s);
        i.liveCollection = new Xu(a, r, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (SA(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = ye(), u = c.length === 0;
        if (Z(r, l, u)) {
            let d = n + 2, f = Ks(r, d);
            if (u) {
                let p = ed(o, d), h = $y(f, p, r), v = Pr(r, p, void 0, { dehydratedView: h });
                Lr(f, v, 0, Dn(p, h));
            }
            else
                o.firstUpdatePass && Ha(f), cf(f, 0);
        }
    }
}
finally {
    A(t);
} }
function Ks(e, t) { return e[t]; }
function bA(e, t) { if (e.length <= U)
    return; let n = U + t, r = e[n], o = r ? r[vt] : void 0; if (r && o && o.detachedLeaveAnimationFns && o.detachedLeaveAnimationFns.length > 0) {
    let i = r[k];
    $_(i, o), In.delete(r), o.detachedLeaveAnimationFns = void 0;
} }
function RA(e, t) { if (e.length <= U)
    return; let n = U + t, r = e[n], o = r ? r[vt] : void 0; o && o.leave && o.leave.size > 0 && (o.detachedLeaveAnimationFns = []); }
function AA(e, t) { return Lo(e, t); }
function OA(e, t) { return vy(e, t); }
function ed(e, t) { return yt(e, t); }
function Uf(e, t, n) { let r = g(), o = ye(); if (Z(r, o, t)) {
    let i = R(), s = Fe();
    rf(s, r, e, t, r[w], n);
} return Uf; }
function td(e, t, n, r, o) { xa(t, e, n, o ? "class" : "style", r); }
function ec(e, t, n, r) { let o = g(), i = o[m], s = e + I, a = i.firstCreatePass ? hf(s, o, 2, t, sf, Qi(), n, r) : i.data[s]; if (Aa(a, o, e, t, Wf), Hn(a)) {
    let c = o[m];
    ba(c, o, a), Od(c, a, o);
} return r != null && kr(o, a), ec; }
function tc() { let e = R(), t = _(), n = Oa(t); return e.firstCreatePass && gf(e, n), dl(n) && hl(), ul(), n.classesWithoutHost != null && cM(n) && td(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && lM(n) && td(e, n, g(), n.stylesWithoutHost, !1), tc; }
function Gf(e, t, n, r) { return ec(e, t, n, r), tc(), Gf; }
function nc(e, t, n, r) { let o = g(), i = o[m], s = e + I, a = i.firstCreatePass ? Zy(s, i, 2, t, n, r) : i.data[s]; return Aa(a, o, e, t, Wf), r != null && kr(o, a), nc; }
function rc() { let e = _(), t = Oa(e); return dl(t) && hl(), ul(), rc; }
function qf(e, t, n, r) { return nc(e, t, n, r), rc(), qf; }
var Wf = (e, t, n, r, o) => (Qe(!0), Ea(t[w], r, es()));
function xA(e, t, n, r, o) { let i = !va(t, n); if (Qe(i), i)
    return Ea(t[w], r, es()); let s = t[ue], a = ai(s, e, t, n); return rv(s, o) && ga(s, o, a.nextSibling), s && (gd(n) || Mm(a)) && Me(n) && (_h(n), Mv(a)), a; }
function BI() { Wf = xA; }
function oc(e, t, n) { let r = g(), o = r[m], i = e + I, s = o.firstCreatePass ? hf(i, r, 8, "ng-container", sf, Qi(), t, n) : o.data[i]; if (Aa(s, r, e, "ng-container", Yf), Hn(s)) {
    let a = r[m];
    ba(a, r, s), Od(a, s, r);
} return n != null && kr(r, s), oc; }
function hi() { let e = R(), t = _(), n = Oa(t); return e.firstCreatePass && gf(e, n), hi; }
function zf(e, t, n) { return oc(e, t, n), hi(), zf; }
function ic(e, t, n) { let r = g(), o = r[m], i = e + I, s = o.firstCreatePass ? Zy(i, o, 8, "ng-container", t, n) : o.data[i]; return Aa(s, r, e, "ng-container", Yf), n != null && kr(r, s), ic; }
function Qf() { let e = _(), t = Oa(e); return hi; }
function Zf(e, t, n) { return ic(e, t, n), Qf(), Zf; }
var Yf = (e, t, n, r, o) => (Qe(!0), Pd(t[w], ""));
function kA(e, t, n, r, o) { let i, s = !va(t, n); if (Qe(s), s)
    return Pd(t[w], ""); let a = t[ue], c = ai(a, e, t, n), l = nv(a, o); return ga(a, o, c), i = ja(l, c), i; }
function $I() { Yf = kA; }
function UI() { return g(); }
function Kf(e, t, n) { let r = g(), o = ye(); if (Z(r, o, t)) {
    let i = R(), s = Fe();
    of(s, r, e, t, r[w], n);
} return Kf; }
function Jf(e, t, n) { let r = g(), o = ye(); if (Z(r, o, t)) {
    let i = R(), s = Fe(), a = Yi(i.data), c = sy(a, s, r);
    of(s, r, e, t, c, n);
} return Jf; }
var us = void 0;
function PA(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var LA = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], us, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], us, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", us, "{1} 'at' {0}", us], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", PA], lr = {};
function FA(e, t, n) { typeof t != "string" && (n = t, t = e[Er.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), lr[t] = e, n && (lr[t][Er.ExtraData] = n); }
function Xf(e) { let t = HA(e), n = kg(t); if (n)
    return n; let r = t.split("-")[0]; if (n = kg(r), n)
    return n; if (r === "en")
    return LA; throw new T(701, !1); }
function jA(e) { return Xf(e)[Er.CurrencyCode] || null; }
function GI(e) { return Xf(e)[Er.PluralCase]; }
function kg(e) { return e in lr || (lr[e] = be.ng && be.ng.common && be.ng.common.locales && be.ng.common.locales[e]), lr[e]; }
function VA() { lr = {}; }
var Er = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Er || {});
function HA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var BA = ["zero", "one", "two", "few", "many"];
function $A(e, t) { let n = GI(t)(parseInt(e, 10)), r = BA[n]; return r !== void 0 ? r : "other"; }
var gi = "en-US", UA = "USD", qI = { marker: "element" }, WI = { marker: "ICU" }, It = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(It || {}), zI = gi;
function QI(e) { typeof e == "string" && (zI = e.toLowerCase().replace(/_/g, "-")); }
function GA() { return zI; }
var Go = 0, _o = 0;
function qA(e) { e && (Go = Go | 1 << Math.min(_o, 31)), _o++; }
function WA(e, t, n) { if (_o > 0) {
    let r = e.data[n], o = Array.isArray(r) ? r : r.update, i = it() - _o - 1;
    JI(e, t, o, i, Go);
} Go = 0, _o = 0; }
function ZI(e, t, n) { let r = e[w]; switch (n) {
    case Node.COMMENT_NODE: return Pd(r, t);
    case Node.TEXT_NODE: return kd(r, t);
    case Node.ELEMENT_NODE: return Ea(r, t, null);
} }
var So = (e, t, n, r) => (Qe(!0), ZI(e, n, r));
function zA(e, t, n, r) { let o = e[ue], i = t - I, s = !Va() || !o || fo() || ma(o, i); return Qe(s), s ? ZI(e, n, r) : wy(o, i); }
function YI() { So = zA; }
function QA(e, t, n, r) { let o = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & It.COMMENT) === It.COMMENT, l = (s & It.APPEND_EAGERLY) === It.APPEND_EAGERLY, u = s >>> It.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = So(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = ho()), l && n !== null && f && En(o, n, d, r, !1);
} }
function KI(e, t, n, r) { let o = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = So(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = GS(c);
                i === null && (i = l, s = o.parentNode(r));
                let u, d;
                if (l === i ? (u = r, d = s) : (u = null, d = P(n[l])), d !== null) {
                    let v = qS(c), y = n[v];
                    En(o, d, y, u, !1);
                    let D = Io(e, v);
                    if (D !== null && typeof D == "object") {
                        let O = Fa(D, n);
                        O !== null && KI(e, D.create[O], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ra(o, un(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case WI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = So(n, u, l, Node.COMMENT_NODE);
                    Ve(p, n);
                }
                break;
            case qI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = So(n, f, d, Node.ELEMENT_NODE);
                    Ve(p, n);
                }
                break;
            default:
        }
} }
function JI(e, t, n, r, o) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & o) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += b(t[r - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            if (typeof h == "string")
                                Ra(t[w], t[d], null, h, f, c, p);
                            else {
                                let y = ne();
                                at(d);
                                try {
                                    rf(h, t, f, c, t[w], p);
                                }
                                finally {
                                    at(y);
                                }
                            }
                            break;
                        case 0:
                            let v = t[d];
                            v !== null && Cv(t[w], v, c);
                            break;
                        case 2:
                            ZA(e, Io(e, d), t, c);
                            break;
                        case 3:
                            Pg(e, Io(e, d), r, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Io(e, l);
            t[u.currentCaseLViewIndex] < 0 && Pg(e, u, r, t);
        }
    }
    i += a;
} }
function Pg(e, t, n, r) { let o = r[t.currentCaseLViewIndex]; if (o !== null) {
    let i = Go;
    o < 0 && (o = r[t.currentCaseLViewIndex] = ~o, i = -1), JI(e, r, t.update[o], n, i);
} }
function ZA(e, t, n, r) { let o = YA(t, r); if (Fa(t, n) !== o && (XI(e, t, n), n[t.currentCaseLViewIndex] = o === null ? null : ~o, o !== null)) {
    let s = n[t.anchorIdx];
    s && KI(e, t.create[o], n, s), lb(n, t.anchorIdx, o);
} }
function XI(e, t, n) { let r = Fa(t, n); if (r !== null) {
    let o = t.remove[r];
    for (let i = 0; i < o.length; i++) {
        let s = o[i];
        if (s > 0) {
            let a = un(s, n);
            a !== null && ni(n[w], a);
        }
        else
            XI(e, Io(e, ~s), n);
    }
} }
function YA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let r = $A(t, GA());
            n = e.cases.indexOf(r), n === -1 && r !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var Js = /�(\d+):?\d*�/gi, KA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, JA = /�(\d+)�/, eD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, bo = "\uFFFD", XA = /�\/?\*(\d+:\d+)�/gi, eO = /�(\/?[#*]\d+):?\d*�/gi, tO = /\uE500/g;
function nO(e) { return e.replace(tO, " "); }
function rO(e, t, n, r, o, i) { let s = $n(), a = [], c = [], l = [[]], u = [[]]; o = aO(o, i); let d = nO(o).split(eO); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = nd(p);
        for (let v = 0; v < h.length; v++) {
            let y = h[v];
            if ((v & 1) === 0) {
                let D = y;
                D !== "" && oO(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = y;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${o}" message.`);
                let ge = tD(e, s, l[0], n, a, "", !0).index;
                rD(u[0], e, n, c, t, D, ge);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, v = p.charCodeAt(h ? 1 : 0), y = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), ot($n(), !1);
        else {
            let D = US(e, l[0], y);
            l.unshift([]), ot(D, !0);
            let O = { kind: 2, index: y, children: [], type: v === 35 ? 0 : 1 };
            u[0].push(O), u.unshift(O.children);
        }
    }
} e.data[r] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function tD(e, t, n, r, o, i, s) { let a = oi(e, r, 1, null), c = a << It.SHIFT, l = $n(); t === l && (l = null), l === null && (c |= It.APPEND_EAGERLY), s && (c |= It.COMMENT, R_(zS)), o.push(c, i === null ? "" : i); let u = lf(e, a, s ? 32 : 1, i === null ? "" : i, null); Ty(n, u); let d = u.index; return ot(u, !1), l !== null && t !== l && $S(l, d), u; }
function oO(e, t, n, r, o, i, s, a) { let c = a.match(Js), u = tD(t, n, r, s, o, c ? null : a, !1).index; c && Xs(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function iO(e, t, n) { let r = _(), o = r.index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (KA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            let l = r.namespace ? `:${r.namespace}:${r.value}` : r.value;
            Xs(i, c, o, a, sO(i), rd(a, l));
        }
    }
    e.data[t] = i;
} }
function Xs(e, t, n, r, o, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(Js), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = o + parseInt(f, 10);
        e.push(-1 - p), u = u | nD(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (r ? 1 : 0)), r && e.push(r, i), e[s] = u, e[a] = e.length - c, u; }
function sO(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let r = e[n];
    typeof r == "number" && r < 0 && t++;
} return t; }
function nD(e) { return 1 << Math.min(e, 31); }
function Lg(e) { let t, n = "", r = 0, o = !1, i; for (; (t = XA.exec(e)) !== null;)
    o ? t[0] === `${bo}/*${i}${bo}` && (r = t.index, o = !1) : (n += e.substring(r, t.index + t[0].length), i = t[1], o = !0); return n += e.slice(r), n; }
function aO(e, t) { if (Ny(t))
    return Lg(e); {
    let n = e.indexOf(`:${t}${bo}`) + 2 + t.toString().length, r = e.search(new RegExp(`${bo}\\/\\*\\d+:${t}${bo}`));
    return Lg(e.substring(n, r));
} }
function rD(e, t, n, r, o, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: oi(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; dO(r, i, s), BS(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let v = 0; v < f.length; v++) {
        let y = f[v];
        if (typeof y != "string") {
            let D = p.push(y) - 1;
            f[v] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = lO(h, t, c, n, r, o, i.cases[d], f.join(""), p) | a;
} a && fO(r, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function cO(e) { let t = [], n = [], r = 1, o = 0; e = e.replace(eD, function (s, a, c) { return c === "select" ? r = 0 : r = 1, o = parseInt(a.slice(1), 10), ""; }); let i = nd(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    r === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = nd(i[s++]);
    t.length > n.length && n.push(c);
} return { type: r, mainBinding: o, cases: t, values: n }; }
function nd(e) { if (!e)
    return []; let t = 0, n = [], r = [], o = /[{}]/g; o.lastIndex = 0; let i; for (; i = o.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            eD.test(c) ? r.push(cO(c)) : r.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            r.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return r.push(s), r; }
function lO(e, t, n, r, o, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = mv(_t()).getInertBodyElement(a), h = Mu(p) || p; return h ? oD(e, t, n, r, o, l, u, d, h, i, c, 0) : 0; }
function oD(e, t, n, r, o, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = oi(t, r, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let v = p, y = v.tagName.toLowerCase();
            if (Tu.hasOwnProperty(y)) {
                Kl(i, qI, y, l, h), t.data[h] = y;
                let Be = v.attributes;
                for (let ft = 0; ft < Be.length; ft++) {
                    let Kt = Be.item(ft), Di = Kt.name.toLowerCase(), dN = !!Kt.value.match(Js), Kp = v.namespaceURI, Jp = Kp === "http://www.w3.org/2000/svg" ? `:svg:${y}` : Kp === "http://www.w3.org/1998/Math/MathML" ? `:math:${y}` : y;
                    if (dN)
                        Cu.hasOwnProperty(Di) && Xs(a, Kt.value, h, Kt.name, 0, rd(Di, Jp));
                    else if (Cu[Di]) {
                        let fN = Kt.value;
                        rd(Di, Jp) ? jg(i, h, Kt.name, "unsafe:blocked") : jg(i, h, Kt.name, fN);
                    }
                }
                let ke = { kind: 1, index: h, children: [] };
                e.push(ke), f = oD(ke.children, t, n, r, o, i, s, a, p, h, u, d + 1) | f, Fg(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", O = D.match(Js);
            Kl(i, null, O ? "" : D, l, h), Fg(s, h, d), O && (f = Xs(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ge = JA.exec(p.textContent || "");
            if (ge) {
                let Be = parseInt(ge[1], 10), ke = u[Be];
                Kl(i, WI, "", l, h), rD(e, t, r, o, l, ke, h), uO(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Fg(e, t, n) { n === 0 && e.push(t); }
function uO(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function dO(e, t, n) { e.push(nD(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function fO(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Kl(e, t, n, r, o) { t !== null && e.push(t), e.push(n, o, WS(0, r, o)); }
function jg(e, t, n, r) { e.push(t << 1 | 1, n, r); }
function pO(e, t = !0) { if (e[0] != ":")
    return [null, e]; let n = e.indexOf(":", 1); if (n === -1) {
    if (t)
        throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
} return [e.slice(1, n), e.slice(n + 1)]; }
function hO(e) { let t = e.toLowerCase(), [n, r] = pO(t, !1); return n === $i || n === Ui ? `:${n}:${r}` : r; }
function rd(e, t) { let n = e.toLowerCase(), r = t ? hO(t) : "*", o = c_(); switch (o[`${r}|${n}`] || o[`*|${n}`] || K.NONE) {
    case K.HTML: return Ld;
    case K.STYLE: return Fd;
    case K.SCRIPT: return Vd;
    case K.URL: return ya;
    case K.RESOURCE_URL: return Ia;
    case K.ATTRIBUTE_NO_BINDING: return Hd;
    default: return null;
} }
var Vg = 0, gO = /\[(�.+?�?)\]/, mO = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, vO = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, yO = /{([A-Z0-9_]+)}/g, EO = /�I18N_EXP_(ICU(_\d+)?)�/g, IO = /\/\*/, DO = /\d+\:(\d+)/;
function TO(e, t = {}) { let n = e; if (gO.test(e)) {
    let r = {}, o = [Vg];
    n = n.replace(mO, (i, s, a) => { let c = s || a, l = r[c] || []; if (l.length || (c.split("|").forEach(v => { let y = v.match(DO), D = y ? parseInt(y[1], 10) : Vg, O = IO.test(v); l.push([D, O, v]); }), r[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = o[o.length - 1], d = 0; for (let v = 0; v < l.length; v++)
        if (l[v][0] === u) {
            d = v;
            break;
        } let [f, p, h] = l[d]; return p ? o.pop() : u !== f && o.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(vO, (r, o, i, s, a, c) => t.hasOwnProperty(i) ? `${o}${t[i]}${c}` : r), n = n.replace(yO, (r, o) => t.hasOwnProperty(o) ? t[o] : r), n = n.replace(EO, (r, o) => { if (t.hasOwnProperty(o)) {
    let i = t[o];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${o}`);
    return i.shift();
} return r; })), n; }
function ep(e, t, n = -1) { let r = R(), o = g(), i = I + e, s = he(r.consts, t), a = $n(); if (r.firstCreatePass && rO(r, a === null ? 0 : a.index, o, i, s, n), r.type === 2) {
    let f = o[X];
    f[N] |= 32;
}
else
    o[N] |= 32; let c = r.data[i], l = a === o[le] ? null : a, u = Zv(r, l, o), d = a && a.type & 8 ? o[a.index] : null; rb(o, i, a, n), QA(o, c.create, u, d), Cl(!0); }
function tp() { Cl(!1); }
function iD(e, t, n) { ep(e, t, n), tp(); }
function sD(e, t) { let n = R(), r = he(n.consts, t); iO(n, e + I, r); }
function np(e) { let t = g(); return qA(Z(t, ye(), e)), np; }
function aD(e) { WA(R(), g(), e + I); }
function cD(e, t = {}) { return TO(e, t); }
function rp(e, t, n) { let r = g(), o = R(), i = _(); return sp(o, r, r[w], i, e, t, n), rp; }
function op(e, t) { let n = _(), r = g(), o = R(), i = Yi(o.data), s = sy(i, n, r); return sp(o, r, s, n, e, t), op; }
function ip(e, t, n) { let r = g(), o = R(), i = _(); return (i.type & 3 || n) && Jy(i, o, r, n, r[w], e, t, To(i, r, t)), ip; }
function sp(e, t, n, r, o, i, s) { let a = !0, c = null; if ((r.type & 3 || s) && (c ??= To(r, t, i), Jy(r, e, t, s, n, o, i, c) && (a = !1)), a) {
    let l = r.outputs?.[o], u = r.hostDirectiveOutputs?.[o];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= To(r, t, i), Us(r, t, f, p, o, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= To(r, t, i), Us(r, t, d, o, o, c);
} }
function lD(e = 1) { return kh(e); }
function CO(e, t) { let n = null, r = D_(e); for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
        n = o;
        continue;
    }
    if (r === null ? xv(e, i, !0) : N_(r, i))
        return o;
} return n; }
function uD(e) { let t = g()[X][le]; if (!t.projection) {
    let n = e ? e.length : 1, r = t.projection = ro(n, null), o = r.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? CO(i, e) : 0;
            s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i);
        }
        i = i.next;
    }
} }
function dD(e, t = 0, n, r, o, i) { let s = g(), a = R(), c = r ? e + 1 : null; c !== null && Cn(s, a, c, r, o, i, null, n); let l = bn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), El(); let d = !s[ue] || fo(); s[X][le].projection[l.projection] === null && c !== null ? NO(s, a, c) : d && !Rr(l) && Z_(a, s, l); }
function NO(e, t, n) { let r = I + n, o = t.data[r], i = e[r], s = jo(i, o.tView.ssrId), a = Pr(e, o, void 0, { dehydratedView: s }); Lr(i, a, 0, Dn(o, s)); }
function fD(e, t, n, r) { fE(e, t, n, r); }
function pD(e, t, n) { dE(e, t, n); }
function hD(e) { let t = g(), n = R(), r = Ki(); po(r + 1); let o = yf(n, r); if (e.dirty && Th(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null)
        e.reset([]);
    else {
        let i = hE(t, r);
        e.reset(i, Nm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function gD() { return vf(g(), Ki()); }
function mD(e, t, n, r, o) { gE(t, fE(e, n, r, o)); }
function vD(e, t, n, r) { gE(e, dE(t, n, r)); }
function yD(e = 1) { po(Ki() + e); }
function ED(e) { let t = Il(); return Ht(t, I + e); }
function ds(e, t) { return e << 17 | t << 2; }
function Mn(e) { return e >> 17 & 32767; }
function MO(e) { return (e & 2) == 2; }
function wO(e, t) { return e & 131071 | t << 17; }
function od(e) { return e | 2; }
function Ir(e) { return (e & 131068) >> 2; }
function Jl(e, t) { return e & -131069 | t << 2; }
function _O(e) { return (e & 1) === 1; }
function id(e) { return e | 1; }
function SO(e, t, n, r, o, i) { let s = i ? t.classBindings : t.styleBindings, a = Mn(s), c = Ir(s); e[r] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Fn(d, u) > 0) && (l = !0);
}
else
    u = n; if (o)
    if (c !== 0) {
        let f = Mn(e[a + 1]);
        e[r + 1] = ds(f, a), f !== 0 && (e[f + 1] = Jl(e[f + 1], r)), e[a + 1] = wO(e[a + 1], r);
    }
    else
        e[r + 1] = ds(a, 0), a !== 0 && (e[a + 1] = Jl(e[a + 1], r)), a = r;
else
    e[r + 1] = ds(c, 0), a === 0 ? a = r : e[c + 1] = Jl(e[c + 1], r), c = r; l && (e[r + 1] = od(e[r + 1])), Hg(e, u, r, !0), Hg(e, u, r, !1), bO(t, u, e, r, i), s = ds(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function bO(e, t, n, r, o) { let i = o ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Fn(i, t) >= 0 && (n[r + 1] = id(n[r + 1])); }
function Hg(e, t, n, r) { let o = e[n + 1], i = t === null, s = r ? Mn(o) : Ir(o), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    RO(c, t) && (a = !0, e[s + 1] = r ? id(l) : od(l)), s = r ? Mn(l) : Ir(l);
} a && (e[n + 1] = r ? od(o) : id(o)); }
function RO(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Fn(e, t) >= 0 : !1; }
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function ID(e) { return e.substring(se.key, se.keyEnd); }
function AO(e) { return e.substring(se.value, se.valueEnd); }
function OO(e) { return CD(e), DD(e, Dr(e, 0, se.textEnd)); }
function DD(e, t) { let n = se.textEnd; return n === t ? -1 : (t = se.keyEnd = kO(e, se.key = t, n), Dr(e, t, n)); }
function xO(e) { return CD(e), TD(e, Dr(e, 0, se.textEnd)); }
function TD(e, t) { let n = se.textEnd, r = se.key = Dr(e, t, n); return n === r ? -1 : (r = se.keyEnd = PO(e, r, n), r = Bg(e, r, n, 58), r = se.value = Dr(e, r, n), r = se.valueEnd = LO(e, r, n), Bg(e, r, n, 59)); }
function CD(e) { se.key = 0, se.keyEnd = 0, se.value = 0, se.valueEnd = 0, se.textEnd = e.length; }
function Dr(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function kO(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function PO(e, t, n) { let r; for (; t < n && ((r = e.charCodeAt(t)) === 45 || r === 95 || (r & -33) >= 65 && (r & -33) <= 90 || r >= 48 && r <= 57);)
    t++; return t; }
function Bg(e, t, n, r) { return t = Dr(e, t, n), t < n && t++, t; }
function LO(e, t, n) { let r = -1, o = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = $g(e, c, s, n) : t === s - 4 && i === 85 && o === 82 && r === 76 && c === 40 ? a = s = $g(e, 41, s, n) : c > 32 && (a = s), i = o, o = r, r = c & -33;
} return a; }
function $g(e, t, n, r) { let o = -1, i = n; for (; i < r;) {
    let s = e.charCodeAt(i++);
    if (s == t && o !== 92)
        return i;
    s == 92 && o === 92 ? o = 0 : o = s;
} throw new Error; }
function ap(e, t, n) { return wD(e, t, n, !1), ap; }
function cp(e, t) { return wD(e, t, null, !0), cp; }
function ND(e) { _D(RD, FO, e, !1); }
function FO(e, t) { for (let n = xO(t); n >= 0; n = TD(t, n))
    RD(e, ID(t), AO(t)); }
function MD(e) { _D(GO, jO, e, !0); }
function jO(e, t) { for (let n = OO(t); n >= 0; n = DD(t, n))
    oo(e, ID(t), !0); }
function wD(e, t, n, r) { let o = g(), i = R(), s = st(2); if (i.firstUpdatePass && bD(i, e, s, r), t !== B && Z(o, s, t)) {
    let a = i.data[ne()];
    AD(i, a, o, o[w], e, o[s + 1] = WO(t, n), r, s);
} }
function _D(e, t, n, r) { let o = R(), i = st(2); o.firstUpdatePass && bD(o, null, i, r); let s = g(); if (n !== B && Z(s, i, n)) {
    let a = o.data[ne()];
    if (OD(a, r) && !SD(o, i)) {
        let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Ai(c, n || "")), td(o, a, s, n, r);
    }
    else
        qO(o, a, s, s[w], s[i + 1], s[i + 1] = UO(e, t, n), r, i);
} }
function SD(e, t) { return t >= e.expandoStartIndex; }
function bD(e, t, n, r) { let o = e.data; if (o[n + 1] === null) {
    let i = o[ne()], s = SD(e, n);
    OD(i, r) && t === null && !s && (t = !1), t = VO(o, i, t, r), SO(o, i, t, n, s, r);
} }
function VO(e, t, n, r) { let o = Yi(e), i = r ? t.residualClasses : t.residualStyles; if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 && (n = Xl(null, e, t, n, r), n = qo(n, t.attrs, r), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
        if (n = Xl(o, e, t, n, r), i === null) {
            let c = HO(e, t, r);
            c !== void 0 && Array.isArray(c) && (c = Xl(null, e, t, c[1], r), c = qo(c, t.attrs, r), BO(e, t, r, c));
        }
        else
            i = $O(e, t, r);
} return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n; }
function HO(e, t, n) { let r = n ? t.classBindings : t.styleBindings; if (Ir(r) !== 0)
    return e[Mn(r)]; }
function BO(e, t, n, r) { let o = n ? t.classBindings : t.styleBindings; e[Mn(o)] = r; }
function $O(e, t, n) { let r, o = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = qo(r, s, n);
} return qo(r, t.attrs, n); }
function Xl(e, t, n, r, o) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], r = qo(r, i.hostAttrs, o), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), r; }
function qo(e, t, n) { let r = n ? 1 : 2, o = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), oo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function UO(e, t, n) { if (n == null || n === "")
    return L; let r = [], o = Rt(n); if (Array.isArray(o))
    for (let i = 0; i < o.length; i++)
        e(r, o[i], !0);
else if (typeof o == "object")
    for (let i in o)
        o.hasOwnProperty(i) && e(r, i, o[i]);
else
    typeof o == "string" && t(r, o); return r; }
function RD(e, t, n) { oo(e, t, Rt(n)); }
function GO(e, t, n) { let r = String(t); r !== "" && !r.includes(" ") && oo(e, r, n); }
function qO(e, t, n, r, o, i, s, a) { o === B && (o = L); let c = 0, l = 0, u = 0 < o.length ? o[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < o.length ? o[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, v;
    u === d ? (c += 2, l += 2, f !== p && (h = d, v = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, v = p), h !== null && AD(e, t, n, r, h, v, s, a), u = c < o.length ? o[c] : null, d = l < i.length ? i[l] : null;
} }
function AD(e, t, n, r, o, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = _O(l) ? Ug(c, t, n, o, Ir(l), s) : void 0; if (!ea(u)) {
    ea(i) || MO(l) && (i = Ug(c, null, n, o, a, s));
    let d = un(ne(), n);
    K_(r, s, d, o, i);
} }
function Ug(e, t, n, r, o, i) { let s = t === null, a; for (; o > 0;) {
    let c = e[o], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[o + 1];
    f === B && (f = d ? L : void 0);
    let p = d ? Li(f, r) : u === r ? f : void 0;
    if (l && !ea(p) && (p = Li(c, r)), ea(p) && (a = p, s))
        return a;
    let h = e[o + 1];
    o = s ? Mn(h) : Ir(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Li(c, r));
} return a; }
function ea(e) { return e !== void 0; }
function WO(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = $e(Rt(e)))), e; }
function OD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function xD(e, t = "") { let n = g(), r = R(), o = e + I, i = r.firstCreatePass ? bn(r, o, 1, t, null) : r.data[o], s = kD(r, n, i, t, e); n[o] = s, ho() && tf(r, n, s, i), ot(i, !1); }
var kD = (e, t, n, r, o) => (Qe(!0), kd(t[w], r));
function zO(e, t, n, r, o) { let i = !va(t, n); if (Qe(i), i)
    return kd(t[w], r); let s = t[ue]; return ai(s, e, t, n); }
function PD() { kD = zO; }
function LD(e, t) { let n = !1, r = it(); for (let i = 1; i < t.length; i += 2)
    n = Z(e, r++, t[i]) || n; if (Tl(r), !n)
    return B; let o = t[0]; for (let i = 1; i < t.length; i += 2)
    o += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return o; }
function FD(e, t, n, r = "") { return Z(e, ye(), n) ? t + b(n) + r : B; }
function jD(e, t, n, r, o, i = "") { let s = it(), a = Tn(e, s, n, o); return st(2), a ? t + b(n) + r + b(o) + i : B; }
function VD(e, t, n, r, o, i, s, a = "") { let c = it(), l = Ga(e, c, n, o, s); return st(3), l ? t + b(n) + r + b(o) + i + b(s) + a : B; }
function HD(e, t, n, r, o, i, s, a, c, l = "") { let u = it(), d = He(e, u, n, o, s, c); return st(4), d ? t + b(n) + r + b(o) + i + b(s) + a + b(c) + l : B; }
function BD(e, t, n, r, o, i, s, a, c, l, u, d = "") { let f = it(), p = He(e, f, n, o, s, c); return p = Z(e, f + 4, u) || p, st(5), p ? t + b(n) + r + b(o) + i + b(s) + a + b(c) + l + b(u) + d : B; }
function $D(e, t, n, r, o, i, s, a, c, l, u, d, f, p = "") { let h = it(), v = He(e, h, n, o, s, c); return v = Tn(e, h + 4, u, f) || v, st(6), v ? t + b(n) + r + b(o) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : B; }
function UD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v = "") { let y = it(), D = He(e, y, n, o, s, c); return D = Ga(e, y + 4, u, f, h) || D, st(7), D ? t + b(n) + r + b(o) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v : B; }
function GD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v, y, D = "") { let O = it(), ge = He(e, O, n, o, s, c); return ge = He(e, O + 4, u, f, h, y) || ge, st(8), ge ? t + b(n) + r + b(o) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v + b(y) + D : B; }
function lp(e) { return sc("", e), lp; }
function sc(e, t, n) { let r = g(), o = FD(r, e, t, n); return o !== B && kt(r, ne(), o), sc; }
function up(e, t, n, r, o) { let i = g(), s = jD(i, e, t, n, r, o); return s !== B && kt(i, ne(), s), up; }
function dp(e, t, n, r, o, i, s) { let a = g(), c = VD(a, e, t, n, r, o, i, s); return c !== B && kt(a, ne(), c), dp; }
function fp(e, t, n, r, o, i, s, a, c) { let l = g(), u = HD(l, e, t, n, r, o, i, s, a, c); return u !== B && kt(l, ne(), u), fp; }
function pp(e, t, n, r, o, i, s, a, c, l, u) { let d = g(), f = BD(d, e, t, n, r, o, i, s, a, c, l, u); return f !== B && kt(d, ne(), f), pp; }
function hp(e, t, n, r, o, i, s, a, c, l, u, d, f) { let p = g(), h = $D(p, e, t, n, r, o, i, s, a, c, l, u, d, f); return h !== B && kt(p, ne(), h), hp; }
function gp(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h) { let v = g(), y = UD(v, e, t, n, r, o, i, s, a, c, l, u, d, f, p, h); return y !== B && kt(v, ne(), y), gp; }
function mp(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v, y) { let D = g(), O = GD(D, e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v, y); return O !== B && kt(D, ne(), O), mp; }
function vp(e) { let t = g(), n = LD(t, e); return n !== B && kt(t, ne(), n), vp; }
function kt(e, t, n) { let r = un(t, e); Cv(e[w], r, n); }
function yp(e, t, n) { Ol(t) && (t = t()); let r = g(), o = ye(); if (Z(r, o, t)) {
    let i = R(), s = Fe();
    rf(s, r, e, t, r[w], n);
} return yp; }
function qD(e, t) { let n = Ol(e); return n && e.set(t), n; }
function Ep(e, t) { let n = g(), r = R(), o = _(); return sp(r, n, n[w], o, e, t), Ep; }
var WD = {};
function Ip(e) { let t = R(), n = g(), r = e + I, o = bn(t, r, 128, null, null); return ot(o, !1), lo(t, n, r, WD), Ip; }
function zD(e) { te("NgLet"); let t = R(), n = g(), r = ne(); return lo(t, n, r, e), e; }
function QD(e) { let t = Il(), n = Ht(t, I + e); if (n === WD)
    throw new T(314, !1); return n; }
function ZD(e, t) { let n = R(), r = g(), o = r[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = yt(n, s + I), d = un(s + I, r);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        o.setAttribute(d, i, f);
    }
} }
function YD(e) { return Z(g(), ye(), e) ? b(e) : B; }
function KD(e, t, n = "") { return FD(g(), e, t, n); }
function JD(e, t, n, r, o = "") { return jD(g(), e, t, n, r, o); }
function XD(e, t, n, r, o, i, s = "") { return VD(g(), e, t, n, r, o, i, s); }
function eT(e, t, n, r, o, i, s, a, c = "") { return HD(g(), e, t, n, r, o, i, s, a, c); }
function tT(e, t, n, r, o, i, s, a, c, l, u = "") { return BD(g(), e, t, n, r, o, i, s, a, c, l, u); }
function nT(e, t, n, r, o, i, s, a, c, l, u, d, f = "") { return $D(g(), e, t, n, r, o, i, s, a, c, l, u, d, f); }
function rT(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h = "") { return UD(g(), e, t, n, r, o, i, s, a, c, l, u, d, f, p, h); }
function oT(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v, y = "") { return GD(g(), e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, v, y); }
function iT(e) { return LD(g(), e); }
function QO(e, t, n) { let r = R(); if (r.firstCreatePass) {
    let o = we(e);
    sd(n, r.data, r.blueprint, o, !0), sd(t, r.data, r.blueprint, o, !1);
} }
function sd(e, t, n, r, o) { if (e = x(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        sd(e[i], t, n, r, o);
else {
    let i = R(), s = g(), a = _(), c = en(e) ? e : x(e.provide), l = tl(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (en(e) || !e.multi) {
        let p = new yn(l, o, jr, null), h = tu(c, t, o ? u : u + f, d);
        h === -1 ? (au(bs(a, s), i, c), eu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = tu(c, t, u + f, d), h = tu(c, t, u, u + f), v = p >= 0 && n[p], y = h >= 0 && n[h];
        if (o && !y || !o && !v) {
            au(bs(a, s), i, c);
            let D = KO(o ? YO : ZO, n.length, o, r, l, e);
            !o && y && (n[h].providerFactory = D), eu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = sT(n[o ? h : p], l, !o && r);
            eu(i, e, p > -1 ? p : h, D);
        }
        !o && r && y && n[h].componentProviders++;
    }
} }
function eu(e, t, n, r) { let o = en(t), i = Eh(t); if (o || i) {
    let c = (i ? x(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!o && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [r, c]) : l[u + 1].push(r, c);
        }
        else
            l.push(n, c);
    }
} }
function sT(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function tu(e, t, n, r) { for (let o = n; o < r; o++)
    if (t[o] === e)
        return o; return -1; }
function ZO(e, t, n, r, o) { return ad(this.multi, []); }
function YO(e, t, n, r, o) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Ao(r, r[m], this.providerFactory.index, o);
    s = c.slice(0, a), ad(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], ad(i, s); return s; }
function ad(e, t) { for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
} return t; }
function KO(e, t, n, r, o, i) { let s = new yn(e, n, jr, null); return s.multi = [], s.index = t, s.componentProviders = 0, sT(s, o, r && !n), s; }
function aT(e, t = []) { return n => { n.providersResolver = (r, o) => QO(r, o ? o(e) : e, t); }; }
function cT(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(o => o + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function lT(e, t, n) { let r = e.\u0275cmp; r.directiveDefs = zs(t, ME), r.pipeDefs = zs(n, Ge); }
function uT(e, t) { return ut(() => { let n = Fi(e); n.declarations = fs(t.declarations || L), n.imports = fs(t.imports || L), n.exports = fs(t.exports || L), t.bootstrap && (n.bootstrap = fs(t.bootstrap)), pr.registerNgModule(e, t); }); }
function fs(e) { if (typeof e == "function")
    return e; let t = Ue(e); return t.some(Kr) ? () => t.map(x).map(Gg) : t.map(Gg); }
function Gg(e) { return pf(e) ? e.ngModule : e; }
function dT(e, t, n) { let r = ve() + e, o = g(); return o[r] === B ? dt(o, r, n ? t.call(n) : t()) : li(o, r); }
function fT(e, t, n, r) { return DT(g(), ve(), e, t, n, r); }
function pT(e, t, n, r, o) { return TT(g(), ve(), e, t, n, r, o); }
function hT(e, t, n, r, o, i) { return CT(g(), ve(), e, t, n, r, o, i); }
function gT(e, t, n, r, o, i, s) { return NT(g(), ve(), e, t, n, r, o, i, s); }
function mT(e, t, n, r, o, i, s, a) { let c = ve() + e, l = g(), u = He(l, c, n, r, o, i); return Z(l, c + 4, s) || u ? dt(l, c + 5, a ? t.call(a, n, r, o, i, s) : t(n, r, o, i, s)) : li(l, c + 5); }
function vT(e, t, n, r, o, i, s, a, c) { let l = ve() + e, u = g(), d = He(u, l, n, r, o, i); return Tn(u, l + 4, s, a) || d ? dt(u, l + 6, c ? t.call(c, n, r, o, i, s, a) : t(n, r, o, i, s, a)) : li(u, l + 6); }
function yT(e, t, n, r, o, i, s, a, c, l) { let u = ve() + e, d = g(), f = He(d, u, n, r, o, i); return Ga(d, u + 4, s, a, c) || f ? dt(d, u + 7, l ? t.call(l, n, r, o, i, s, a, c) : t(n, r, o, i, s, a, c)) : li(d, u + 7); }
function ET(e, t, n, r, o, i, s, a, c, l, u) { let d = ve() + e, f = g(), p = He(f, d, n, r, o, i); return He(f, d + 4, s, a, c, l) || p ? dt(f, d + 8, u ? t.call(u, n, r, o, i, s, a, c, l) : t(n, r, o, i, s, a, c, l)) : li(f, d + 8); }
function IT(e, t, n, r) { return MT(g(), ve(), e, t, n, r); }
function mi(e, t) { let n = e[t]; return n === B ? void 0 : n; }
function DT(e, t, n, r, o, i) { let s = t + n; return Z(e, s, o) ? dt(e, s + 1, i ? r.call(i, o) : r(o)) : mi(e, s + 1); }
function TT(e, t, n, r, o, i, s) { let a = t + n; return Tn(e, a, o, i) ? dt(e, a + 2, s ? r.call(s, o, i) : r(o, i)) : mi(e, a + 2); }
function CT(e, t, n, r, o, i, s, a) { let c = t + n; return Ga(e, c, o, i, s) ? dt(e, c + 3, a ? r.call(a, o, i, s) : r(o, i, s)) : mi(e, c + 3); }
function NT(e, t, n, r, o, i, s, a, c) { let l = t + n; return He(e, l, o, i, s, a) ? dt(e, l + 4, c ? r.call(c, o, i, s, a) : r(o, i, s, a)) : mi(e, l + 4); }
function MT(e, t, n, r, o, i) { let s = t + n, a = !1; for (let c = 0; c < o.length; c++)
    Z(e, s++, o[c]) && (a = !0); return a ? dt(e, s, r.apply(i, o)) : mi(e, s); }
function wT(e, t) { let n = R(), r, o = e + I; n.firstCreatePass ? (r = JO(t, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy)) : r = n.data[o]; let i = r.factory || (r.factory = Ft(r.type, !0)), s, a = Ie(jr); try {
    let c = Ss(!1), l = i();
    return Ss(c), lo(n, g(), o, l), l;
}
finally {
    Ie(a);
} }
function JO(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (e === r.name)
            return r;
    } }
function _T(e, t, n) { let r = e + I, o = g(), i = Ht(o, r); return vi(o, r) ? DT(o, ve(), t, i.transform, n, i) : i.transform(n); }
function ST(e, t, n, r) { let o = e + I, i = g(), s = Ht(i, o); return vi(i, o) ? TT(i, ve(), t, s.transform, n, r, s) : s.transform(n, r); }
function bT(e, t, n, r, o) { let i = e + I, s = g(), a = Ht(s, i); return vi(s, i) ? CT(s, ve(), t, a.transform, n, r, o, a) : a.transform(n, r, o); }
function RT(e, t, n, r, o, i) { let s = e + I, a = g(), c = Ht(a, s); return vi(a, s) ? NT(a, ve(), t, c.transform, n, r, o, i, c) : c.transform(n, r, o, i); }
function AT(e, t, n) { let r = e + I, o = g(), i = Ht(o, r); return vi(o, r) ? MT(o, ve(), t, i.transform, n, i) : i.transform.apply(i, n); }
function vi(e, t) { return e[m].data[t].pure; }
function OT(e, t) { return La(e, t); }
function xT(e, t) { return () => { try {
    return pr.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function kT(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function PT(e, t, n) { let r = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(r, n).href; }
function LT(e, t, n, r, o = null, i = null) { let s = W(e); t.apply(null, [e, n, ...r]); let { newDef: a, oldDef: c } = XO(s, W(e)); if (e[nn] = a, c.tView) {
    let l = kM().values();
    for (let u of l)
        nt(u) && u[z] === null && Cs(o, i, a, c, u);
} }
function XO(e, t) { let n = q({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Cs(e, t, n, r, o) { let i = o[m]; if (i === r.tView) {
    tx(e, t, n, r, o);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = o[s];
    if (Y(a)) {
        ee(a[$]) && Cs(e, t, n, r, a[$]);
        for (let c = U; c < a.length; c++)
            Cs(e, t, n, r, a[c]);
    }
    else
        ee(a) && Cs(e, t, n, r, a);
} }
function ex(e, t) { e.componentReplaced?.(t.id); }
function tx(e, t, n, r, o) { let i = o[H], s = o[$], a = o[z], c = o[le], l = o[k].get(G, null), u = () => { if (r.encapsulation === Nt.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = kv(n), f = Da(a, d, i, Gd(n), s, c, null, null, null, null, null); nx(a, o, f, c.index), ii(o[m], o); let p = o[We].rendererFactory; ex(p, r), f[w] = p.createRenderer(s, n), zv(o[m], o), rx(c), ka(d, f, i), fy(d, f, d.template, i); }; l === null ? qg(e, t, u) : l.run(() => qg(e, t, u)); }
function qg(e, t, n) {
    try {
        n();
    }
    catch (r) {
        let o = r;
        if (t !== null && o.message) {
            let i = o.message + (o.stack ? `
` + o.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw r;
    }
}
function nx(e, t, n, r) { for (let o = I; o < e[m].bindingStartIndex; o++) {
    let i = e[o];
    if ((ee(i) || Y(i)) && i[pe] === t) {
        i[pe] = n;
        break;
    }
} e[Vt] === t && (e[Vt] = n), e[so] === t && (e[so] = n), n[pe] = t[pe], t[pe] = null, e[r] = n; }
function rx(e) { if (e.projection !== null) {
    for (let t of e.projection)
        na(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ee = { \u0275\u0275animateEnter: No, \u0275\u0275animateEnterListener: Mo, \u0275\u0275animateLeave: wo, \u0275\u0275animateLeaveListener: Zs, \u0275\u0275attribute: Bf, \u0275\u0275defineComponent: NE, \u0275\u0275defineDirective: wE, \u0275\u0275defineInjectable: j, \u0275\u0275defineInjector: Jr, \u0275\u0275defineNgModule: wf, \u0275\u0275definePipe: _E, \u0275\u0275directiveInject: jr, \u0275\u0275getInheritedFactory: Im, \u0275\u0275inject: fe, \u0275\u0275injectAttribute: ra, \u0275\u0275invalidFactory: Wy, \u0275\u0275invalidFactoryDep: ki, \u0275\u0275templateRefExtractor: OT, \u0275\u0275resetView: ml, \u0275\u0275HostDirectivesFeature: OE, \u0275\u0275NgOnChangesFeature: om, \u0275\u0275ProvidersFeature: aT, \u0275\u0275CopyDefinitionFeature: AE, \u0275\u0275InheritDefinitionFeature: _f, \u0275\u0275ExternalStylesFeature: cT, \u0275\u0275nextContext: lD, \u0275\u0275namespaceHTML: Sl, \u0275\u0275namespaceMathML: _l, \u0275\u0275namespaceSVG: wl, \u0275\u0275enableBindings: fl, \u0275\u0275disableBindings: pl, \u0275\u0275elementStart: ec, \u0275\u0275elementEnd: tc, \u0275\u0275element: Gf, \u0275\u0275elementContainerStart: oc, \u0275\u0275elementContainerEnd: hi, \u0275\u0275domElement: qf, \u0275\u0275domElementStart: nc, \u0275\u0275domElementEnd: rc, \u0275\u0275domElementContainer: Zf, \u0275\u0275domElementContainerStart: ic, \u0275\u0275domElementContainerEnd: Qf, \u0275\u0275domTemplate: bf, \u0275\u0275domListener: ip, \u0275\u0275elementContainer: zf, \u0275\u0275pureFunction0: dT, \u0275\u0275pureFunction1: fT, \u0275\u0275pureFunction2: pT, \u0275\u0275pureFunction3: hT, \u0275\u0275pureFunction4: gT, \u0275\u0275pureFunction5: mT, \u0275\u0275pureFunction6: vT, \u0275\u0275pureFunction7: yT, \u0275\u0275pureFunction8: ET, \u0275\u0275pureFunctionV: IT, \u0275\u0275getCurrentView: UI, \u0275\u0275restoreView: gl, \u0275\u0275listener: rp, \u0275\u0275projection: dD, \u0275\u0275syntheticHostProperty: Jf, \u0275\u0275syntheticHostListener: op, \u0275\u0275pipeBind1: _T, \u0275\u0275pipeBind2: ST, \u0275\u0275pipeBind3: bT, \u0275\u0275pipeBind4: RT, \u0275\u0275pipeBindV: AT, \u0275\u0275projectionDef: uD, \u0275\u0275domProperty: Kf, \u0275\u0275ariaProperty: Hf, \u0275\u0275property: Uf, \u0275\u0275pipe: wT, \u0275\u0275queryRefresh: hD, \u0275\u0275queryAdvance: yD, \u0275\u0275viewQuery: pD, \u0275\u0275viewQuerySignal: vD, \u0275\u0275loadQuery: gD, \u0275\u0275contentQuery: fD, \u0275\u0275contentQuerySignal: mD, \u0275\u0275reference: ED, \u0275\u0275classMap: MD, \u0275\u0275styleMap: ND, \u0275\u0275styleProp: ap, \u0275\u0275classProp: cp, \u0275\u0275advance: Pv, \u0275\u0275template: Sf, \u0275\u0275conditional: LI, \u0275\u0275conditionalCreate: PI, \u0275\u0275conditionalBranchCreate: Xa, \u0275\u0275defer: sI, \u0275\u0275deferWhen: aI, \u0275\u0275deferOnIdle: dI, \u0275\u0275deferOnImmediate: hI, \u0275\u0275deferOnTimer: vI, \u0275\u0275deferOnHover: II, \u0275\u0275deferOnInteraction: CI, \u0275\u0275deferOnViewport: wI, \u0275\u0275deferPrefetchWhen: cI, \u0275\u0275deferPrefetchOnIdle: fI, \u0275\u0275deferPrefetchOnImmediate: gI, \u0275\u0275deferPrefetchOnTimer: yI, \u0275\u0275deferPrefetchOnHover: DI, \u0275\u0275deferPrefetchOnInteraction: NI, \u0275\u0275deferPrefetchOnViewport: _I, \u0275\u0275deferHydrateWhen: lI, \u0275\u0275deferHydrateNever: uI, \u0275\u0275deferHydrateOnIdle: pI, \u0275\u0275deferHydrateOnImmediate: mI, \u0275\u0275deferHydrateOnTimer: EI, \u0275\u0275deferHydrateOnHover: TI, \u0275\u0275deferHydrateOnInteraction: MI, \u0275\u0275deferHydrateOnViewport: SI, \u0275\u0275deferEnableTimerScheduling: zE, \u0275\u0275repeater: HI, \u0275\u0275repeaterCreate: VI, \u0275\u0275repeaterTrackByIndex: FI, \u0275\u0275repeaterTrackByIdentity: jI, \u0275\u0275componentInstance: kI, \u0275\u0275text: xD, \u0275\u0275textInterpolate: lp, \u0275\u0275textInterpolate1: sc, \u0275\u0275textInterpolate2: up, \u0275\u0275textInterpolate3: dp, \u0275\u0275textInterpolate4: fp, \u0275\u0275textInterpolate5: pp, \u0275\u0275textInterpolate6: hp, \u0275\u0275textInterpolate7: gp, \u0275\u0275textInterpolate8: mp, \u0275\u0275textInterpolateV: vp, \u0275\u0275i18n: iD, \u0275\u0275i18nAttributes: sD, \u0275\u0275i18nExp: np, \u0275\u0275i18nStart: ep, \u0275\u0275i18nEnd: tp, \u0275\u0275i18nApply: aD, \u0275\u0275i18nPostprocess: cD, \u0275\u0275resolveWindow: Rv, \u0275\u0275resolveDocument: Av, \u0275\u0275resolveBody: Bd, \u0275\u0275setComponentScope: lT, \u0275\u0275setNgModuleScope: uT, \u0275\u0275registerNgModuleType: Cf, \u0275\u0275getComponentDepsFactory: xT, \u0275setClassDebugInfo: kT, \u0275\u0275declareLet: Ip, \u0275\u0275storeLet: zD, \u0275\u0275readContextLet: QD, \u0275\u0275attachSourceLocations: ZD, \u0275\u0275interpolate: YD, \u0275\u0275interpolate1: KD, \u0275\u0275interpolate2: JD, \u0275\u0275interpolate3: XD, \u0275\u0275interpolate4: eT, \u0275\u0275interpolate5: tT, \u0275\u0275interpolate6: nT, \u0275\u0275interpolate7: rT, \u0275\u0275interpolate8: oT, \u0275\u0275interpolateV: iT, \u0275\u0275sanitizeHtml: Ld, \u0275\u0275sanitizeStyle: Fd, \u0275\u0275sanitizeResourceUrl: Ia, \u0275\u0275sanitizeScript: Vd, \u0275\u0275validateAttribute: Hd, \u0275\u0275sanitizeUrl: jd, \u0275\u0275sanitizeUrlOrResourceUrl: bv, \u0275\u0275trustConstantHtml: _v, \u0275\u0275trustConstantResourceUrl: Sv, forwardRef: Yr, resolveForwardRef: x, \u0275\u0275twoWayProperty: yp, \u0275\u0275twoWayBindingSet: qD, \u0275\u0275twoWayListener: Ep, \u0275\u0275replaceMetadata: LT, \u0275\u0275getReplaceMetadataURL: PT }, tr = null;
function FT(e) { tr !== null && (e.defaultEncapsulation !== tr.defaultEncapsulation || e.preserveWhitespaces !== tr.preserveWhitespaces) || (tr = e); }
function ox() { return tr; }
function ix() { tr = null; }
var Ro = [];
function sx(e, t) { Ro.push({ moduleType: e, ngModule: t }); }
var nu = !1;
function jT() { if (!nu) {
    nu = !0;
    try {
        for (let e = Ro.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Ro[e];
            n.declarations && n.declarations.every(VT) && (Ro.splice(e, 1), dx(t, n));
        }
    }
    finally {
        nu = !1;
    }
} }
function VT(e) { return Array.isArray(e) ? e.every(VT) : !!x(e); }
function HT(e, t = {}) { BT(e, t), t.id !== void 0 && Cf(e, t.id), sx(e, t); }
function BT(e, t, n = !1) { let r = Ue(t.declarations || L), o = null; Object.defineProperty(e, Oi, { configurable: !0, get: () => (o === null && (o = oe({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ee, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ue(t.bootstrap || L).map(x), declarations: r.map(x), imports: Ue(t.imports || L).map(x).map(Wg), exports: Ue(t.exports || L).map(x).map(Wg), schemas: t.schemas ? Ue(t.schemas) : null, id: t.id || null }), o.schemas || (o.schemas = [])), o) }); let i = null; Object.defineProperty(e, Xe, { get: () => { if (i === null) {
        let a = oe({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: oa(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Wr, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || L, imports: [(t.imports || L).map(x), (t.exports || L).map(x)] };
        s = oe({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ee, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function ax(e, t) { let n = `Unexpected "${Re(e)}" found in the "declarations" array of the`, r = `"${Re(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${r}`; }
var cx = new WeakMap, lx = new WeakMap;
function ux() { cx = new WeakMap, lx = new WeakMap, Ro.length = 0, yR.clear(); }
function dx(e, t) { let n = Ue(t.declarations || L), r = Tp(e); n.forEach(o => { if (o = x(o), o.hasOwnProperty(nn)) {
    let s = W(o);
    Dp(s, r);
}
else
    !o.hasOwnProperty(eo) && !o.hasOwnProperty(to) && (o.ngSelectorScope = e); }); }
function Dp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(nn) ? W(n) : Ae(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Ge(n)), e.schemas = t.schemas, e.tView = null; }
function Tp(e) { if (hn(e)) {
    let t = pr.getNgModuleScope(e), n = Fi(e);
    return q({ schemas: n.schemas || null }, t);
}
else if (io(e)) {
    if ((W(e) || Ae(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Ge(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Wg(e) { return pf(e) ? e.ngModule : e; }
var ru = 0;
function $T(e, t) {
    let n = null;
    aR(e, t), GT(e, t), Object.defineProperty(e, nn, { get: () => {
            if (n === null) {
                let r = oe({ usage: 0, kind: "component", type: e });
                if (vE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let o = ox(), i = t.preserveWhitespaces;
                i === void 0 && (o !== null && o.preserveWhitespaces !== void 0 ? i = o.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (o !== null && o.defaultEncapsulation !== void 0 ? s = o.defaultEncapsulation : s = Nt.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = qT(e, t), l = Ce(q({}, c), { typeSourceSpan: r.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || L, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                ru++;
                try {
                    if (l.usesInheritance && WT(e), n = r.compileComponent(Ee, a, l), l.isStandalone) {
                        let u = Ue(t.imports || L), { directiveDefs: d, pipeDefs: f } = fx(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(x);
                    }
                }
                finally {
                    ru--;
                }
                if (ru === 0 && jT(), px(e)) {
                    let u = Tp(e.ngSelectorScope);
                    Dp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Re(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: r => { n = r; }, configurable: !1 });
}
function fx(e, t) { return { directiveDefs: () => Do(e) ? [...pr.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Ae(i)).filter(i => i !== null) : [], pipeDefs: () => Do(e) ? [...pr.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Ge(i)).filter(i => i !== null) : [] }; }
function px(e) { return e.ngSelectorScope !== void 0; }
function Cp(e, t) { let n = null; GT(e, t || {}), Object.defineProperty(e, eo, { get: () => { if (n === null) {
        let r = UT(e, t || {});
        n = oe({ usage: 0, kind: "directive", type: e }).compileDirective(Ee, r.sourceMapUrl, r.metadata);
    } return n; }, configurable: !1 }); }
function UT(e, t) { let n = e && e.name, r = `ng:///${n}/\u0275dir.js`, o = oe({ usage: 0, kind: "directive", type: e }), i = qT(e, t); return i.typeSourceSpan = o.createParseSourceSpan("Directive", n, r), i.usesInheritance && WT(e), { metadata: i, sourceMapUrl: r }; }
function GT(e, t) { let n = null; Object.defineProperty(e, Xe, { get: () => { if (n === null) {
        let r = UT(e, t), o = oe({ usage: 0, kind: "directive", type: e });
        n = o.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: r.metadata.name, type: r.metadata.type, typeArgumentCount: 0, deps: oa(e), target: o.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function hx(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function qT(e, t) { let n = hd(), r = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Pe, propMetadata: r, inputs: t.inputs || L, outputs: t.outputs || L, queries: zg(e, r, zT), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !hx(e), exportAs: vx(t.exportAs), providers: t.providers || null, viewQueries: zg(e, r, QT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(o => typeof o == "function" ? { directive: o } : o) || null }; }
function WT(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ae(n) && !W(n) && Ex(n) && Cp(n, null), n = Object.getPrototypeOf(n); }
function gx(e) { return typeof e == "string" ? YT(e) : x(e); }
function mx(e, t) { return { propertyName: e, predicate: gx(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function zg(e, t, n) { let r = []; for (let o in t)
    if (t.hasOwnProperty(o)) {
        let i = t[o];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${o}" of "${Re(e)}" since the query selector wasn't defined.`);
            if (i.some(ZT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            r.push(mx(o, s));
        } });
    } return r; }
function vx(e) { return e === void 0 ? null : YT(e); }
function zT(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function QT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function ZT(e) { return e.ngMetadataName === "Input"; }
function YT(e) { return e.split(",").map(t => t.trim()); }
var yx = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function Ex(e) { let t = hd(); if (yx.some(r => t.hasLifecycleHook(e, r)))
    return !0; let n = t.propMetadata(e); for (let r in n) {
    let o = n[r];
    for (let i = 0; i < o.length; i++) {
        let s = o[i], a = s.ngMetadataName;
        if (ZT(s) || zT(s) || QT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function KT(e, t) { let n = null, r = null; Object.defineProperty(e, Xe, { get: () => { if (r === null) {
        let o = Qg(e, t), i = oe({ usage: 0, kind: "pipe", type: o.type });
        r = i.compileFactory(Ee, `ng:///${o.name}/\u0275fac.js`, { name: o.name, type: o.type, typeArgumentCount: 0, deps: oa(e), target: i.FactoryTarget.Pipe });
    } return r; }, configurable: !1 }), Object.defineProperty(e, to, { get: () => { if (n === null) {
        let o = Qg(e, t);
        n = oe({ usage: 0, kind: "pipe", type: o.type }).compilePipe(Ee, `ng:///${o.name}/\u0275pipe.js`, o);
    } return n; }, configurable: !1 }); }
function Qg(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var JT = zo("Directive", (e = {}) => e, void 0, void 0, (e, t) => Cp(e, t)), Ix = zo("Component", (e = {}) => q({ changeDetection: ia.Default }, e), JT, void 0, (e, t) => $T(e, t)), Dx = zo("Pipe", e => q({ pure: !0 }, e), void 0, void 0, (e, t) => KT(e, t)), Tx = wt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), Cx = wt("Output", e => ({ alias: e })), Nx = wt("HostBinding", e => ({ hostPropertyName: e })), Mx = wt("HostListener", (e, t) => ({ eventName: e, args: t })), wx = zo("NgModule", e => e, void 0, void 0, (e, t) => HT(e, t)), ta = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, _x = (() => { class e {
    compileModuleSync(n) { return new vr(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let r = this.compileModuleSync(n), o = on(n), i = Xn(o.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Qt(c)), s; }, []); return new ta(r, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), XT = new C(""), cd = class {
}, Sx = (() => { class e {
    zone = E(G);
    changeDetectionScheduler = E(Ne);
    applicationRef = E(Ye);
    applicationErrorHandler = E(ct);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), eC = new C("", { factory: () => !1 });
function ac({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new G(Ce(q({}, cc()), { scheduleInRootZone: n })), [{ provide: G, useFactory: e }, { provide: Le, multi: !0, useFactory: () => { let r = E(Sx, { optional: !0 }); return () => r.initialize(); } }, { provide: Le, multi: !0, useFactory: () => { let r = E(Rx); return () => { r.initialize(); }; } }, t === !0 ? { provide: xl, useValue: !0 } : [], { provide: ts, useValue: n ?? Hv }, { provide: ct, useFactory: () => { let r = E(G), o = E(Se), i; return s => { r.runOutsideAngular(() => { o.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= o.get(et), i.handleError(s)); }); }; } }]; }
function bx(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, r = ac({ ngZoneFactory: () => { let o = cc(e); return o.scheduleInRootZone = n, o.shouldCoalesceEventChangeDetection && te("NgZone_CoalesceEvent"), new G(o); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return qe([{ provide: eC, useValue: !0 }, { provide: qn, useValue: !1 }, r]); }
function cc(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var Rx = (() => { class e {
    subscription = new dd;
    initialized = !1;
    zone = E(G);
    pendingTasks = E(Et);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { G.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { G.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var lc = (() => { class e {
    applicationErrorHandler = E(ct);
    appRef = E(Ye);
    taskService = E(Et);
    ngZone = E(G);
    zonelessEnabled = E(qn);
    tracing = E(xr, { optional: !0 });
    disableScheduling = E(xl, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new dd;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Fs) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(ts, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof dr || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let r = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, r = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, r = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, r = !0;
            break;
        }
        case 11: {
            r = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(r))
        return; let o = this.useMicrotaskScheduler ? ag : Bv; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Fs + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (r) {
        this.taskService.remove(n), this.applicationErrorHandler(r);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, ag(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Ax() { return te("NgZoneless"), qe([{ provide: Ne, useExisting: lc }, { provide: G, useClass: dr }, { provide: qn, useValue: !0 }, { provide: ts, useValue: !1 }, []]); }
function Ox() { return typeof $localize < "u" && $localize.locale || gi; }
var Np = new C("", { providedIn: "root", factory: () => E(Np, { optional: !0, skipSelf: !0 }) || Ox() }), xx = new C("", { providedIn: "root", factory: () => UA }), kx = new C(""), Px = new C(""), tC = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(tC || {}), ld = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function Lx(e) { return e.map(t => t.nativeElement); }
var Wo = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new wn(t) : null; }
    get injector() { return UM(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Zh(t) || $M(t)); }
    get context() { return Zh(this.nativeNode) || BM(this.nativeNode); }
    get listeners() { return QM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return WM(this.nativeNode); }
    get providerTokens() { return GM(this.nativeNode); }
}, wn = class extends Wo {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = _e(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = _e(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let r = n[m].data, o = r[t.nodeIndex], i = {}; return Fx(this.nativeElement, i), Vx(i, o, n, r), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let r = _e(n), o = r ? r.lView : null; if (o === null)
        return {}; let i = o[m].data[r.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, r = this.nativeElement.className; return (typeof r != "string" ? r.baseVal.split(" ") : r.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let r = 0; r < t.length; r++) {
        let o = t[r];
        n.push(Tr(o));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, r = []; for (let o = 0; o < n.length; o++) {
        let i = n[o];
        r.push(Tr(i));
    } return r; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Zg(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Zg(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let r = this.nativeNode, o = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(r, n), o.push(s);
    } }), typeof r.eventListeners == "function" && r.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return o.indexOf(s) === -1 && s.call(r, n);
    } }); }
};
function Fx(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), r = Node.prototype;
    for (; n !== null && n !== r;) {
        let o = Object.getOwnPropertyDescriptors(n);
        for (let i in o)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                jx(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function jx(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Zg(e, t, n, r) { let o = _e(e.nativeNode), i = o ? o.lView : null; if (i !== null) {
    let s = i[m].data[o.nodeIndex];
    gn(s, i, t, n, r, e.nativeNode);
}
else
    Mp(e.nativeNode, t, n, r); }
function gn(e, t, n, r, o, i) { let s = Dh(e, t); if (e.type & 11) {
    if (ou(s, n, r, o, i), Me(e)) {
        let c = me(e.index, t);
        c && c[m].firstChild && gn(c[m].firstChild, c, n, r, o, i);
    }
    else
        e.child && gn(e.child, t, n, r, o, i), s && Mp(s, n, r, o);
    let a = t[e.index];
    Y(a) && Yg(a, n, r, o, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    ou(a[ze], n, r, o, i), Yg(a, n, r, o, i);
}
else if (e.type & 16) {
    let a = t[X], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            ou(u, n, r, o, i);
    else if (l) {
        let u = a[z], d = u[m].data[l.index];
        gn(d, u, n, r, o, i);
    }
}
else
    e.child && gn(e.child, t, n, r, o, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && gn(a, t, n, r, o, i);
} }
function Yg(e, t, n, r, o) { for (let i = U; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && gn(a, s, t, n, r, o);
} }
function ou(e, t, n, r, o) { if (o !== e) {
    let i = Tr(e);
    if (!i)
        return;
    (r && i instanceof wn && t(i) && n.indexOf(i) === -1 || !r && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Mp(e, t, n, r) { let o = e.childNodes, i = o.length; for (let s = 0; s < i; s++) {
    let a = o[s], c = Tr(a);
    c && ((r && c instanceof wn && t(c) && n.indexOf(c) === -1 || !r && t(c) && n.indexOf(c) === -1) && n.push(c), Mp(a, t, n, r));
} }
function Vx(e, t, n, r) { let o = t.propertyBindings; if (o !== null)
    for (let i = 0; i < o.length; i++) {
        let s = o[i], c = r[s].split(g_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var iu = "__ng_debug__";
function Tr(e) { return e instanceof Node ? (e.hasOwnProperty(iu) || (e[iu] = e.nodeType == Node.ELEMENT_NODE ? new wn(e) : new Wo(e)), e[iu]) : null; }
var yi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = E(et, { optional: !0 });
    destroyRef = E(je);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new T(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Zr(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = A(null); try {
        for (let r of this.listeners)
            try {
                r(t);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        A(n);
    } }
};
function Hx(e) { return e.destroyRef; }
function Ke(e) { return rh(e); }
function An(e, t) { return wi(e, t?.equal); }
var wp = class {
    [ae];
    constructor(t) { this[ae] = t; }
    destroy() { this[ae].destroy(); }
};
function oC(e, t) { let n = t?.injector ?? E(ce), r = t?.manualCleanup !== !0 ? n.get(je) : null, o, i = n.get(dn, null, { optional: !0 }), s = n.get(Ne); return i !== null ? (o = Ux(i.view, s, e), r instanceof Qr && r._lView === i.view && (r = null)) : o = Gx(e, n.get(mo), s), o.injector = n, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new wp(o); }
var iC = Ce(q({}, oh), { cleanupFns: void 0, zone: null, onDestroyFn: fn, run() { let e = Un(!1); try {
        ih(this);
    }
    finally {
        Un(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = A(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], A(e);
    } } }), Bx = Ce(q({}, iC), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { Lt(this), this.onDestroyFn(), this.cleanup(), this.scheduler.remove(this); } }), $x = Ce(q({}, iC), { consumerMarkedDirty() { this.view[N] |= 8192, Bt(this.view), this.notifier.notify(13); }, destroy() { Lt(this), this.onDestroyFn(), this.cleanup(), this.view[mt]?.delete(this); } });
function Ux(e, t, n) { let r = Object.create($x); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = t, r.fn = sC(r, n), e[mt] ??= new Set, e[mt].add(r), r.consumerMarkedDirty(r), r; }
function Gx(e, t, n) { let r = Object.create(Bx); return r.fn = sC(r, e), r.scheduler = t, r.notifier = n, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function sC(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
var qx = e => e;
function _p(e, t) { if (typeof e == "function") {
    let n = Oc(e, qx, t?.equal);
    return nC(n, t?.debugName);
}
else {
    let n = Oc(e.source, e.computation, e.equal);
    return nC(n, e.debugName);
} }
function nC(e, t) { let n = e[ae], r = e; return r.set = o => th(n, o), r.update = o => nh(n, o), r.asReadonly = Gn.bind(e), r; }
function Wx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new uc(n, Qx(e), e.defaultValue, e.equal ? zx(e.equal) : void 0, e.injector ?? E(ce)); }
var Sp = class {
    value;
    constructor(t) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Gn; }
    isError = An(() => this.status() === "error");
    update(t) { this.set(t(Ke(this.value))); }
    isLoading = An(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = An(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, uc = class extends Sp {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(t, n, r, o, i) { super(An(() => { let s = this.state().stream?.(); if (!s || this.state().status === "loading" && this.error())
        return r; if (!bp(s))
        throw new Rp(this.error()); return s.value; }, { equal: o })), this.loaderFn = n, this.equal = o, this.extRequest = _p({ source: t, computation: s => ({ request: s, reload: 0 }) }), this.state = _p({ source: this.extRequest, computation: (s, a) => { let c = s.request === void 0 ? "idle" : "loading"; return a ? { extRequest: s, status: c, previousStatus: rC(a.value), stream: a.value.extRequest.request === s.request ? a.value.stream : void 0 } : { extRequest: s, status: c, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = oC(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(go), this.unregisterOnDestroy = i.get(je).onDestroy(() => this.destroy()); }
    status = An(() => rC(this.state()));
    error = An(() => { let t = this.state().stream?.(); return t && !bp(t) ? t.error : void 0; });
    set(t) { if (this.destroyed)
        return; let n = Ke(this.error), r = Ke(this.state); if (!n) {
        let o = Ke(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, t) : o === t))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: $t({ value: t }) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Ke(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: r }) => ({ request: n, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return Pt(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: r } = Ke(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Ke(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || Ke(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Ke(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: $t({ error: Op(s) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { Ke(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function zx(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function Qx(e) { return Zx(e) ? e.stream : t => Pt(null, null, function* () { try {
    return $t({ value: yield e.loader(t) });
}
catch (n) {
    return $t({ error: Op(n) });
} }); }
function Zx(e) { return !!e.stream; }
function rC(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return bp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function bp(e) { return e.error === void 0; }
function Op(e) { return e instanceof Error ? e : new Ap(e); }
var Rp = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Ap = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var Fp = { JSACTION: "__jsaction", OWNER: "__owner" }, uC = {};
function Yx(e) { return e[Fp.JSACTION]; }
function aC(e, t) { e[Fp.JSACTION] = t; }
function Kx(e) { return uC[e]; }
function Jx(e, t) { uC[e] = t; }
var M = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, Xx = [M.MOUSEENTER, M.MOUSELEAVE, "pointerenter", "pointerleave"], ek = [M.CLICK, M.DBLCLICK, M.FOCUSIN, M.FOCUSOUT, M.KEYDOWN, M.KEYUP, M.KEYPRESS, M.MOUSEOVER, M.MOUSEOUT, M.SUBMIT, M.TOUCHSTART, M.TOUCHEND, M.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], dC = [M.FOCUS, M.BLUR, M.ERROR, M.LOAD, M.TOGGLE], mc = e => dC.indexOf(e) >= 0, tk = ek.concat(dC), fC = e => tk.indexOf(e) >= 0;
function nk(e) { return e === M.MOUSEENTER ? M.MOUSEOVER : e === M.MOUSELEAVE ? M.MOUSEOUT : e === M.POINTERENTER ? M.POINTEROVER : e === M.POINTERLEAVE ? M.POINTEROUT : e; }
function rk(e, t, n, r) { let o = !1; mc(t) && (o = !0); let i = typeof r == "boolean" ? { capture: o, passive: r } : o; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: o, passive: r }; }
function ok(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function ik(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var cC = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function sk(e) { return e.which === 2 || e.which == null && e.button === 4; }
function ak(e) { return cC && e.metaKey || !cC && e.ctrlKey || sk(e) || e.shiftKey; }
function ck(e, t, n) { let r = e.relatedTarget; return (e.type === M.MOUSEOVER && t === M.MOUSEENTER || e.type === M.MOUSEOUT && t === M.MOUSELEAVE || e.type === M.POINTEROVER && t === M.POINTERENTER || e.type === M.POINTEROUT && t === M.POINTERLEAVE) && (!r || r !== n && !n.contains(r)); }
function lk(e, t) { let n = {}; for (let r in e) {
    if (r === "srcElement" || r === "target")
        continue;
    let o = r, i = e[o];
    typeof i != "function" && (n[o] = i);
} return e.type === M.MOUSEOVER ? n.type = M.MOUSEENTER : e.type === M.MOUSEOUT ? n.type = M.MOUSELEAVE : e.type === M.POINTEROVER ? n.type = M.POINTERENTER : n.type = M.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var uk = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), hc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, r) { uk && (this.element.style.cursor = "pointer"), this.handlerInfos.push(rk(this.element, t, n(this.element), r)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        ok(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, dk = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Yt(e) { return e.eventType; }
function jp(e, t) { e.eventType = t; }
function fc(e) { return e.event; }
function pC(e, t) { e.event = t; }
function hC(e) { return e.targetElement; }
function gC(e, t) { e.targetElement = t; }
function mC(e) { return e.eic; }
function fk(e, t) { e.eic = t; }
function pk(e) { return e.timeStamp; }
function hk(e, t) { e.timeStamp = t; }
function pc(e) { return e.eia; }
function vC(e, t, n) { e.eia = [t, n]; }
function xp(e) { e.eia = void 0; }
function dc(e) { return e[1]; }
function gk(e) { return e.eirp; }
function yC(e, t) { e.eirp = t; }
function EC(e) { return e.eir; }
function IC(e, t) { e.eir = t; }
function DC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function mk(e, t, n, r, o, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: r, timeStamp: o, eia: i, eirp: s, eiack: a }; }
var kp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Yt(this.eventInfo); }
    setEventType(t) { jp(this.eventInfo, t); }
    getEvent() { return fc(this.eventInfo); }
    setEvent(t) { pC(this.eventInfo, t); }
    getTargetElement() { return hC(this.eventInfo); }
    setTargetElement(t) { gC(this.eventInfo, t); }
    getContainer() { return mC(this.eventInfo); }
    setContainer(t) { fk(this.eventInfo, t); }
    getTimestamp() { return pk(this.eventInfo); }
    setTimestamp(t) { hk(this.eventInfo, t); }
    getAction() { let t = pc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        xp(this.eventInfo);
        return;
    } vC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return gk(this.eventInfo); }
    setIsReplay(t) { yC(this.eventInfo, t); }
    getResolved() { return EC(this.eventInfo); }
    setResolved(t) { IC(this.eventInfo, t); }
    clone() { return new e(DC(this.eventInfo)); }
}, vk = {}, yk = /\s*;\s*/, Ek = M.CLICK, Pp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Yt(t) === M.CLICK && ak(fc(t)) ? jp(t, M.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { EC(t) || (this.populateAction(t, hC(t)), IC(t, !0)); }
    resolveParentAction(t) { let n = pc(t), r = n && dc(n); xp(t); let o = r && this.getParentNode(r); o && this.populateAction(t, o); }
    populateAction(t, n) { let r = n; for (; r && r !== mC(t) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, t), !pc(t));)
        r = this.getParentNode(r); let o = pc(t); if (o && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Yt(t) === M.MOUSEENTER || Yt(t) === M.MOUSELEAVE || Yt(t) === M.POINTERENTER || Yt(t) === M.POINTERLEAVE)))
        if (ck(fc(t), Yt(t), dc(o))) {
            let i = lk(fc(t), dc(o));
            pC(t, i), gC(t, dc(o));
        }
        else
            xp(t); }
    getParentNode(t) { let n = t[Fp.OWNER]; if (n)
        return n; let r = t.parentNode; return r?.nodeName === "#document-fragment" ? r?.host ?? null : r; }
    populateActionOnElement(t, n) { let r = this.parseActions(t), o = r[Yt(n)]; o !== void 0 && vC(n, o, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, r); }
    parseActions(t) { let n = Yx(t); if (!n) {
        let r = t.getAttribute(Wn.JSACTION);
        if (!r)
            n = vk, aC(t, n);
        else {
            if (n = Kx(r), !n) {
                n = {};
                let o = r.split(yk);
                for (let i = 0; i < o.length; i++) {
                    let s = o[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(dk.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Ek, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                Jx(r, n);
            }
            aC(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, r) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r; }
}, TC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(TC || {}), Lp = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: r } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = r; }
    dispatch(t) { let n = new kp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let r = n.getAction(); if (r && Ik(r.element, n) && ik(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Ik(e, t) { return e.tagName === "A" && (t.getEventType() === M.CLICK || t.getEventType() === M.CLICKMOD); }
var CC = Symbol.for("propagationStopped"), Vp = { REPLAY: 101 };
var Dk = "`preventDefault` called during event replay.";
var Tk = "`composedPath` called during event replay.", gc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Pp({ clickModSupport: n }), this.dispatcher = new Lp(r => { this.dispatchToDelegate(r); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && Mk(t), Ck(t); t.getAction();) {
        if (wk(t), mc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Nk(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function Ck(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), r = () => { t[CC] = !0, n(); }; On(t, "stopPropagation", r), On(t, "stopImmediatePropagation", r); }
function Nk(e) { return !!e.getEvent()[CC]; }
function Mk(e) { let t = e.getEvent(), n = e.getTargetElement(), r = t.preventDefault.bind(t); On(t, "target", n), On(t, "eventPhase", Vp.REPLAY), On(t, "preventDefault", () => { throw r(), new Error(Dk + ""); }), On(t, "composedPath", () => { throw new Error(Tk + ""); }); }
function wk(e) { let t = e.getEvent(), n = e.getAction()?.element; n && On(t, "currentTarget", n, { configurable: !0 }); }
function On(e, t, n, { configurable: r = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: r }); }
function NC(e, t) { e.ecrd(n => { t.dispatch(n); }, TC.I_AM_THE_JSACTION_FRAMEWORK); }
function _k(e) { return e?.q ?? []; }
function Sk(e) { e && (lC(e.c, e.et, e.h), lC(e.c, e.etc, e.h, !0)); }
function lC(e, t, n, r) { for (let o = 0; o < t.length; o++)
    e.removeEventListener(t[o], n, r); }
var bk = !1, MC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = bk;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, r, o) { let i = mk(n, r, r.target, o, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        yC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, r, o) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && Xx.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = nk(r || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, o); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), Sk(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let r = 0; r < n.length; r++) {
        let o = n[r], i = this.getEventTypesForBrowserEventType(o.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = DC(o);
            jp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let r = []; return this.eventHandlers[n] && r.push(n), this.browserEventTypeToExtraEventTypes[n] && r.push(...this.browserEventTypeToExtraEventTypes[n]), r; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, r) { this.ecrd(n, r); }
    ecrd(n, r) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let o = 0; o < this.queuedEventInfos.length; o++)
            this.handleEventInfo(this.queuedEventInfos[o]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function wC(e, t = window) { return _k(t._ejsas?.[e]); }
function Hp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Nc = Symbol("InputSignalNode#UNSET"), WC = Ce(q({}, Ac), { transformFn: void 0, applyValueToInputSignal(e, t) { Rc(e, t); } }), vF = Symbol();
function zC(e, t) { let n = Object.create(WC); n.value = e, n.transformFn = t?.transform; function r() { if (Ci(n), n.value === Nc) {
    let o = null;
    throw new T(-950, o);
} return n.value; } return r[ae] = n, r; }
var Br = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(Br || {});
var _C = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ra(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, Rk = new C("");
Rk.__NG_ELEMENT_ID__ = e => { let t = _(); if (t === null)
    throw new T(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new T(204, !1); };
function yF(e) { return new yi; }
function SC(e, t) { return zC(e, t); }
function Ak(e) { return zC(Nc, e); }
var EF = (SC.required = Ak, SC);
function bC(e, t) { return If(t); }
function Ok(e, t) { return Df(t); }
var IF = (bC.required = Ok, bC);
function DF(e, t) { return Tf(t); }
function RC(e, t) { return If(t); }
function xk(e, t) { return Df(t); }
var TF = (RC.required = xk, RC);
function CF(e, t) { return Tf(t); }
function QC(e, t) { let n = Object.create(WC), r = new yi; n.value = e; function o() { return Ci(n), AC(n.value), n.value; } return o[ae] = n, o.asReadonly = Gn.bind(o), o.set = i => { n.equal(n.value, i) || (Rc(n, i), r.emit(i)); }, o.update = i => { AC(n.value), o.set(i(n.value)); }, o.subscribe = r.subscribe.bind(r), o.destroyRef = r.destroyRef, o; }
function AC(e) { if (e === Nc)
    throw new T(952, !1); }
function OC(e, t) { return QC(e, t); }
function kk(e) { return QC(Nc, e); }
var NF = (OC.required = kk, OC), ZC = !0, Ur = class {
}, MF = wt("ContentChildren", (e, t = {}) => q({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: ZC }, t), Ur), wF = wt("ContentChild", (e, t = {}) => q({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), Ur), _F = wt("ViewChildren", (e, t = {}) => q({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: ZC }, t), Ur), SF = wt("ViewChild", (e, t) => q({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), Ur);
function Pk(e, t, n) { let r = new vr(n); return Promise.resolve(r); }
function xC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Ec = new C(""), Lk = new C("");
function Ei(e) { return !e.moduleRef; }
function YC(e) { let t = Ei(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(G); return n.run(() => { Ei(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let r = t.get(ct), o; if (n.runOutsideAngular(() => { o = n.onError.subscribe({ next: r }); }), Ei(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ec);
    s.add(i), t.onDestroy(() => { o.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ec);
    s.add(i), e.moduleRef.onDestroy(() => { Co(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i); });
} return jk(r, n, () => { let i = t.get(Et), s = i.add(), a = t.get(Lf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(Np, gi); if (QI(c || gi), !t.get(Lk, !0))
    return Ei(e) ? t.get(Ye) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ei(e)) {
    let u = t.get(Ye);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return KC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var KC;
function kC() { KC = Fk; }
function Fk(e, t) { let n = e.injector.get(Ye); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(r => n.bootstrap(r));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new T(-403, !1); t.push(e); }
function jk(e, t, n) { try {
    let r = n();
    return kf(r) ? r.catch(o => { throw t.runOutsideAngular(() => e(o)), o; }) : r;
}
catch (r) {
    throw t.runOutsideAngular(() => e(r)), r;
} }
var JC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, r) { let o = r?.scheduleInRootZone, i = () => Uv(r?.ngZone, Ce(q({}, cc({ eventCoalescing: r?.ngZoneEventCoalescing, runCoalescing: r?.ngZoneRunCoalescing })), { scheduleInRootZone: o })), s = r?.ignoreChangesOutsideZone, a = [ac({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Ne, useExisting: lc }, Rl], c = CE(n.moduleType, this.injector, a); return kC(), YC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, r = []) { let o = jf({}, r); return kC(), Pk(this.injector, o, n).then(i => this.bootstrapModuleFactory(i, o)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new T(404, !1); this._modules.slice().forEach(r => r.destroy()), this._destroyListeners.forEach(r => r()); let n = this._injector.get(Ec, null); n && (n.forEach(r => r()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (r) { return new (r || e)(fe(ce)); };
    static \u0275prov = j({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), $r = null;
function Vk(e) { if (Mc())
    throw new T(400, !1); Ff(), $r = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(JC); return eN(e), t; }
function Hk(e, t, n = []) { let r = `Platform: ${t}`, o = new C(r); return (i = []) => { let s = Mc(); if (!s) {
    let a = [...n, ...i, { provide: o, useValue: !0 }];
    s = e?.(a) ?? Vk(XC(a, r));
} return typeof ngServerMode < "u" && ngServerMode ? s : Bk(o); }; }
function XC(e = [], t) { return ce.create({ name: t, providers: [{ provide: el, useValue: "platform" }, { provide: Ec, useValue: new Set([() => $r = null]) }, ...e] }); }
function Bk(e) { let t = Mc(); if (!t)
    throw new T(-401, !1); return t; }
function Mc() { return typeof ngServerMode < "u" && ngServerMode ? null : $r?.get(JC) ?? null; }
function bF() { Mc()?.destroy(); }
function $k(e = []) { if ($r)
    return $r; let t = XC(e); return (typeof ngServerMode > "u" || !ngServerMode) && ($r = t), Ff(), eN(t), t; }
function RF(e) { return qe([{ provide: md, useValue: e, multi: !0 }]); }
function eN(e) { let t = e.get(md, null); Vi(e, () => { t?.forEach(n => n()); }); }
function AF(e) { return qe([]); }
function OF() { return !1; }
function xF() { }
function kF(e) { let t = Nf(e); if (!t)
    throw tN(e); return new vr(t); }
function PF(e) { let t = Nf(e); if (!t)
    throw tN(e); return t; }
function tN(e) { return new Error(`No module with ID ${e} loaded`); }
var Uk = (() => { class e {
    static __NG_ELEMENT_ID__ = Gk;
} return e; })();
function Gk(e) { return qk(_(), g(), (e & 16) === 16); }
function qk(e, t, n) { if (Me(e) && !n) {
    let r = me(e.index, t);
    return new zt(r, r);
}
else if (e.type & 175) {
    let r = t[X];
    return new zt(r, t);
} return null; }
var Up = class extends Uk {
}, PC = class extends Up {
}, Ic = class {
    constructor() { }
    supports(t) { return Ho(t); }
    create(t) { return new Gp(t); }
}, Wk = (e, t) => t, Gp = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || Wk; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, r = this._removalsHead, o = 0, i = null; for (; n || r;) {
        let s = !r || n && n.currentIndex < LC(r, o, i) ? n : r, a = LC(s, o, i), c = s.currentIndex;
        if (s === r)
            o--, r = r._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            o++;
        else {
            i || (i = []);
            let l = a - o, u = c - o;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Ho(t))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, r = !1, o, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        o = 0, Yy(t, a => { s = this._trackByFn(o, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++; }), this.length = o; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, r, o) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, o)) : t = this._addAfter(new qp(n, r), i, o)), t; }
    _verifyReinsertion(t, n, r, o) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null); return i !== null ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, r) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let o = t._prevRemoved, i = t._nextRemoved; return o === null ? this._removalsHead = i : o._nextRemoved = i, i === null ? this._removalsTail = o : i._prevRemoved = o, this._insertAfter(t, n, r), this._addToMoves(t, r), t; }
    _moveAfter(t, n, r) { return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t; }
    _addAfter(t, n, r) { return this._insertAfter(t, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, r) { let o = n === null ? this._itHead : n._next; return t._next = o, t._prev = n, o === null ? this._itTail = t : o._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Dc), this._linkedRecords.put(t), t.currentIndex = r, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, r = t._next; return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Dc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, qp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, Wp = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let r; for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
            return r; return null; }
    remove(t) { let n = t._prevDup, r = t._nextDup; return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null; }
}, Dc = class {
    map = new Map;
    put(t) { let n = t.trackById, r = this.map.get(n); r || (r = new Wp, this.map.set(n, r)), r.add(t); }
    get(t, n) { let r = t, o = this.map.get(r); return o ? o.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function LC(e, t, n) { let r = e.previousIndex; if (r === null)
    return r; let o = 0; return n && r < n.length && (o = n[r]), r + t + o; }
var Tc = class {
    constructor() { }
    supports(t) { return t instanceof Map || Ua(t); }
    create() { return new zp; }
}, zp = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Ua(t)))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (r, o) => { if (n && n.key === o)
        this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(o, r);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let r = n; r !== null; r = r._nextRemoved)
            r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let r = t._prev;
        return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev, s = o._next;
        return i && (i._next = s), s && (s._prev = i), o._next = null, o._prev = null, o;
    } let r = new Qp(t); return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r)); }
}, Qp = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function FC() { return new nN([new Ic]); }
var nN = (() => { class e {
    factories;
    static \u0275prov = j({ token: e, providedIn: "root", factory: FC });
    constructor(n) { this.factories = n; }
    static create(n, r) { if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let r = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, r || FC()); } }; }
    find(n) { let r = this.factories.find(o => o.supports(n)); if (r != null)
        return r; throw new T(901, !1); }
} return e; })();
function jC() { return new rN([new Tc]); }
var rN = (() => { class e {
    static \u0275prov = j({ token: e, providedIn: "root", factory: jC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, r) { if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let r = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, r || jC()); } }; }
    find(n) { let r = this.factories.find(o => o.supports(n)); if (r)
        return r; throw new T(901, !1); }
} return e; })(), zk = [new Tc], Qk = [new Ic], LF = new nN(Qk), FF = new rN(zk), jF = Hk(null, "core", []), VF = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (r) { return new (r || e)(fe(Ye)); };
    static \u0275mod = wf({ type: e });
    static \u0275inj = Jr({});
} return e; })();
function HF(e) { let { rootComponent: t, appProviders: n, platformProviders: r, platformRef: o } = e; if (V(8), typeof ngServerMode < "u" && ngServerMode && !o)
    throw new T(-401, !1); try {
    let i = o?.injector ?? $k(r), s = [ac({}), { provide: Ne, useExisting: lc }, Rl, ...n || []], a = new $o({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return YC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(9);
} }
var vc = new WeakSet, VC = "", yc = [];
function HC(e) { return e.get(fa, Td); }
function Zk() { let e = [{ provide: fa, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(St);
            t = !!window._ejsas?.[n];
        } return t && te("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Le, useValue: () => { let t = E(Ye), { injector: n } = t; if (!vc.has(t)) {
        let r = E(Xo);
        if (HC(n)) {
            zm();
            let o = n.get(St), i = qm(o, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Gm(s, a, c), Md(s, r)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: fi, useFactory: () => { let t = E(Ye), { injector: n } = t; return () => { if (!HC(n) || vc.has(t))
        return; vc.add(t); let r = n.get(St); t.onDestroy(() => { vc.delete(t), typeof ngServerMode < "u" && !ngServerMode && Hp(r); }), t.whenStable().then(() => { if (t.destroyed)
        return; let o = n.get(_d); Yk(o, n); let i = n.get(Xo); i.get(VC)?.forEach(wd), i.delete(VC); let s = o.instance; ei(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var Yk = (e, t) => { let n = t.get(St), r = window._ejsas[n], o = e.instance = new MC(new hc(r.c)); for (let a of r.et)
    o.addEvent(a); for (let a of r.etc)
    o.addEvent(a); let i = wC(n); o.replayEarlyEventInfos(i), Hp(n); let s = new gc(a => { Jk(t, a, a.currentTarget); }); NC(o, s); };
function Kk(e, t, n) { let r = new Map, o = t[jt], i = e.cleanup; if (!i || !o)
    return r; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!fC(l))
        continue;
    mc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = P(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (r.has(u) ? r.get(u).push(l) : r.set(u, [l]));
} return r; }
function Jk(e, t, n) { let r = (n && n.getAttribute(br)) ?? ""; /d\d+/.test(r) ? Xk(r, e, t, n) : t.eventPhase === Vp.REPLAY && Sd(t, n); }
function Xk(e, t, n, r) { yc.push({ event: n, currentTarget: r }), xt(t, e, eP); }
function eP(e) { let t = [...yc], n = new Set(e); yc = []; for (let { event: r, currentTarget: o } of t) {
    let i = o.getAttribute(br);
    n.has(i) ? Sd(r, o) : yc.push({ event: r, currentTarget: o });
} }
var Zp = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let r = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, r), r;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, tP = 0;
function oN(e) { return e.ssrId || (e.ssrId = `t${tP++}`), e.ssrId; }
function iN(e, t, n) { let r = []; return fr(e, t, n, r), r.length; }
function nP(e) { let t = []; return Pa(e, t), t.length; }
function sN(e, t, n) { let r = e[$]; return r && !r.hasAttribute(Mr) ? Cc(r, e, null, t) : null; }
function aN(e, t, n) { let r = co(e[$]), o = sN(r, t); if (o === null)
    return; let i = P(r[$]), s = e[z], a = Cc(i, s, null, t), c = r[w], l = `${o}|${a}`; c.setAttribute(i, rr, l); }
function BF(e, t) { let n = e.injector, r = xy(n), o = ei(n), i = new Zp, s = new Map, a = e._views, c = n.get(fa, Td), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(St); for (let h of a) {
    let v = bd(h);
    if (v !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: r, isIncrementalHydrationEnabled: o, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        Y(v) ? aN(v, y) : sN(v, y), aP(s, t);
    }
} let f = i.getAll(), p = n.get(_n); if (p.set(pa, f), u.size > 0) {
    let h = {};
    for (let [v, y] of u.entries())
        h[v] = y;
    p.set(ha, h);
} return l; }
function rP(e, t, n, r, o) { let i = [], s = ""; for (let a = U; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (nt(c) && (c = c[I], Y(c))) {
        u = nP(c) + 1, aN(c, o);
        let p = co(c[$]);
        d = { [ca]: p[m].ssrId, [Ct]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = oN(p), u = iN(p, c, p.firstChild)), d = { [ca]: l, [Ct]: u };
        let h = !1;
        if ($E(n[m], t)) {
            let v = De(n, t), y = de(n[m], t);
            if (o.isIncrementalHydrationEnabled && y.hydrateTriggers !== null) {
                let D = `d${o.deferBlocks.size}`;
                y.hydrateTriggers.has(7) && (h = !0);
                let O = [];
                Pa(e, O);
                let ge = { [Ct]: O.length, [Jo]: v[Ot] }, Be = oP(y.hydrateTriggers);
                Be.length > 0 && (ge[da] = Be), r !== null && (ge[Ed] = r), o.deferBlocks.set(D, ge);
                let ke = P(e);
                ke !== void 0 ? ke.nodeType === Node.COMMENT_NODE && BC(ke, D) : BC(ke, D), h || lP(y, O, D, o), r = D, d[ua] = D;
            }
            d[Jo] = v[Ot];
        }
        h || Object.assign(d, cN(e[a], r, o));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Yo] ??= 1, p[Yo]++;
    }
    else
        s = f, i.push(d);
} return i; }
function oP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [r, o] of e)
    t.has(r) && (o === null ? n.push(r) : n.push({ trigger: r, delay: o.delay })); return n; }
function Ii(e, t, n, r) { let o = t.index - I; e[Ko] ??= {}, e[Ko][o] ??= Sy(t, n, r); }
function Bp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Sr] ??= [], e[Sr].includes(n) || e[Sr].push(n); }
function cN(e, t = null, n) { let r = {}, o = e[m], i = ky(o, n), s = n.shouldReplayEvents ? Kk(o, e, n.eventTypesToReplay) : null; for (let a = I; a < o.bindingStartIndex; a++) {
    let c = o.data[a], l = a - I, u = Py(e, a, n);
    if (u) {
        r[la] ??= {}, r[la][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Bp(r, d);
        for (let d of u.disjointNodes) {
            let f = o.data[d + I];
            Ii(r, f, e, i);
        }
        continue;
    }
    if (na(c) && !Rr(c)) {
        if (Y(e[a]) && c.tView && (r[aa] ??= {}, r[aa][l] = oN(c.tView)), Fr(c, e) && cP(c)) {
            Bp(r, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !il(d) && !wr(d) && (Fr(d, e) ? Bp(r, d) : Ii(r, d, e, i));
                    else
                        throw Ey(P(e[a]));
        }
        if (iP(r, c, e, i), Y(e[a])) {
            let d = e[a][$];
            if (Array.isArray(d)) {
                let f = P(d);
                f.hasAttribute(Mr) || Cc(f, d, t, n);
            }
            r[_r] ??= {}, r[_r][l] = rP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !um(c)) {
            let d = P(e[a][$]);
            d.hasAttribute(Mr) || Cc(d, e[a], t, n);
        }
        else if (c.type & 8)
            r[Zo] ??= {}, r[Zo][l] = iN(o, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !wr(d) && Ii(r, d, e, i);
        }
        else if (c.type & 1) {
            let d = P(e[a]);
            Ad(n, d);
        }
        if (s && c.type & 2) {
            let d = P(e[a]);
            s.has(d) && Nd(d, s.get(d), t);
        }
    }
} return r; }
function iP(e, t, n, r) { il(t) || (t.projectionNext && t.projectionNext !== t.next && !wr(t.projectionNext) && Ii(e, t.projectionNext, n, r), t.prev === null && t.parent !== null && Fr(t.parent, n) && !Fr(t, n) && Ii(e, t, n, r)); }
function sP(e) { let t = e[H]; return t?.constructor ? W(t.constructor)?.encapsulation === Nt.ShadowDom : !1; }
function Cc(e, t, n, r) { let o = t[w]; if (Ih(t) && !Va() || sP(t))
    return o.setAttribute(e, Mr, ""), null; {
    let i = cN(t, n, r), s = r.serializedViewCollection.add(i);
    return o.setAttribute(e, rr, s.toString()), s;
} }
function BC(e, t) { e.textContent = `ngh=${t}`; }
function aP(e, t) { for (let [n, r] of e)
    n.after(t.createComment(r)); }
function cP(e) { let t = e; for (; t != null;) {
    if (Me(t))
        return !0;
    t = t.parent;
} return !1; }
function lP(e, t, n, r) { let o = iv(e.hydrateTriggers); for (let i of o)
    r.eventTypesToReplay.regular.add(i); if (o.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Nd(s, o, n);
} }
var $C = !1, UC = !1, GC = !1;
function uP() { $C || ($C = !0, Xm(), BI(), PD(), $I(), FE(), cE(), By(), oy()); }
function dP() { UC || (UC = !0, YI(), Oy(), Fy()); }
function fP() { GC || (GC = !0, cv()); }
function pP(e) { return e.whenStable(); }
var $F = "ngcm";
function UF() { let e = [{ provide: Sn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(_n, { optional: !0 })?.get(pa, null)), t && te("NgHydration"), t; } }, { provide: Le, useValue: () => { df(!1), !(typeof ngServerMode < "u" && ngServerMode) && E(Sn) && (uv(_t()), uP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Id, useFactory: () => E(Sn) }, { provide: fi, useFactory: () => { if (E(Sn)) {
        let t = E(Ye);
        return () => { pP(t).then(() => { t.destroyed || ff(t); }); };
    } return () => { }; }, multi: !0 }), qe(e); }
function GF() { return [{ provide: Dd, useFactory: () => E(Sn) }, { provide: Le, useValue: () => { E(Sn) && (dP(), df(!0), te("NgI18nHydration")); }, multi: !0 }]; }
function qF() { let e = [Zk(), { provide: Cd, useValue: !0 }, { provide: bt, useClass: Qm }, { provide: Le, useValue: () => { fP(), te("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: fi, useFactory: () => { let t = E(ce), n = _t(); return () => { let r = lv(t), o = by(n, n.body); iI(t, r, o), sv(n, t); }; }, multi: !0 }), e; }
function WF(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function zF(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var hP = "\u{1F170}\uFE0F", wc = !1;
function QF(e) { if (!wc)
    return; let { startLabel: t } = lN(e); performance.mark(t); }
function ZF(e) { if (!wc)
    return; let { startLabel: t, labelName: n, endLabel: r } = lN(e); performance.mark(r), performance.measure(n, t, r), performance.clearMarks(t), performance.clearMarks(r); }
function lN(e) { let t = `${hP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var qC = !1;
function YF() { if (!qC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    qC = !0, console.warn("Performance API is not supported on this platform");
    return;
} wc = !0; }
function KF() { wc = !1; }
function JF(e) { let t = e; for (; t;) {
    let n = Sm(t);
    if (n !== null)
        for (let r = I; r < n.length; r++) {
            let o = n[r];
            if (!ee(o) && !Y(o) || o[$] !== t)
                continue;
            let i = n[m], s = yt(i, r);
            if (Me(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function XF(e) { }
function e1(e) { return oe({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function t1(e) { Of(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function n1(e) { QE(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Of(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function r1(e) { return oe({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ee, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function o1(e) { return oe({ usage: 1, kind: gP(e.target), type: e.type }).compileFactoryDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function gP(e) { switch (e) {
    case Br.Directive: return "directive";
    case Br.Component: return "component";
    case Br.Injectable: return "injectable";
    case Br.Pipe: return "pipe";
    case Br.NgModule: return "NgModule";
} }
function i1(e) { return oe({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ee, `ng:///${e.type.name}/\u0275prov.js`, e); }
function s1(e) { return oe({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ee, `ng:///${e.type.name}/\u0275inj.js`, e); }
function a1(e) { return oe({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ee, `ng:///${e.type.name}/\u0275mod.js`, e); }
function c1(e) { return oe({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ee, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var $p = Symbol("NOT_SET"), uN = new Set, mP = Ce(q({}, Ac), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: $p, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== $p && !Mi(this))
        return this.signal; try {
        for (let o of this.cleanup ?? uN)
            o();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = Gr(this), r; try {
        r = this.userFn.apply(null, t);
    }
    finally {
        Ni(this, n);
    } return (this.value === $p || !this.equal(this.value, r)) && (this.value = r, this.version++), this.signal; } }), Yp = class extends Po {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, r, o, i, s = null) { super(t, [void 0, void 0, void 0, void 0], r, !1, i.get(je), s), this.scheduler = o; for (let a of Zd) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(mP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Ci(l), l.value), l.signal[ae] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? uN)
                    n();
            }
            finally {
                Lt(t);
            } }
};
function l1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ma; let n = t?.injector ?? E(ce), r = n.get(Ne), o = n.get(Na), i = n.get(xr, null, { optional: !0 }); o.impl ??= n.get(Yd); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(dn, null, { optional: !0 }), c = new Yp(o.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, r, n, i?.snapshot(null)); return o.impl.register(c), c; }
function u1(e, t) { let n = W(e), r = t.elementInjector || jn(); return new Qt(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function d1(e) { let t = W(e); if (!t)
    return null; let n = new Qt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function f1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var p1 = new C("", { providedIn: "platform", factory: () => null }), h1 = new C("", { providedIn: "platform", factory: () => null }), g1 = new C("", { providedIn: "platform", factory: () => null });
export { nw as ANIMATION_MODULE_TYPE, fi as APP_BOOTSTRAP_LISTENER, St as APP_ID, Pf as APP_INITIALIZER, Lf as ApplicationInitStatus, VF as ApplicationModule, Ye as ApplicationRef, Tm as Attribute, XT as COMPILER_OPTIONS, rw as CSP_NONCE, Sw as CUSTOM_ELEMENTS_SCHEMA, ia as ChangeDetectionStrategy, Uk as ChangeDetectorRef, _x as Compiler, cd as CompilerFactory, Ix as Component, $a as ComponentFactory, ci as ComponentFactoryResolver, Gy as ComponentRef, wF as ContentChild, MF as ContentChildren, xx as DEFAULT_CURRENCY_CODE, Lh as DOCUMENT, wn as DebugElement, ld as DebugEventListener, Wo as DebugNode, Gp as DefaultIterableDiffer, je as DestroyRef, JT as Directive, Le as ENVIRONMENT_INITIALIZER, Qo as ElementRef, PC as EmbeddedViewRef, Se as EnvironmentInjector, et as ErrorHandler, Dt as EventEmitter, Rk as HOST_TAG_NAME, tm as Host, _C as HostAttributeToken, Nx as HostBinding, Mx as HostListener, Kc as INJECTOR, Kg as Inject, _M as Injectable, C as InjectionToken, ce as Injector, Tx as Input, nN as IterableDiffers, rN as KeyValueDiffers, Np as LOCALE_ID, RI as MAX_ANIMATION_TIMEOUT, tC as MissingTranslationStrategy, ta as ModuleWithComponentFactories, bw as NO_ERRORS_SCHEMA, wx as NgModule, DE as NgModuleFactory, gr as NgModuleRef, qu as NgProbeToken, G as NgZone, Jg as Optional, Cx as Output, yi as OutputEmitterRef, tw as PACKAGE_ROOT_URL, ew as PLATFORM_ID, md as PLATFORM_INITIALIZER, go as PendingTasks, Dx as Pipe, JC as PlatformRef, Ur as Query, Rs as QueryList, p1 as REQUEST, g1 as REQUEST_CONTEXT, h1 as RESPONSE_INIT, Eb as Renderer2, Vo as RendererFactory2, Ps as RendererStyleFlags2, qy as Sanitizer, K as SecurityContext, Xg as Self, Ms as SimpleChange, em as SkipSelf, kx as TRANSLATIONS, Px as TRANSLATIONS_FORMAT, Fo as TemplateRef, nA as Testability, KE as TestabilityRegistry, _n as TransferState, nm as Type, vN as VERSION, Si as Version, SF as ViewChild, _F as ViewChildren, qa as ViewContainerRef, Nt as ViewEncapsulation, Up as ViewRef, Gv as afterEveryRender, Kd as afterNextRender, l1 as afterRenderEffect, Lx as asNativeElements, $N as assertInInjectionContext, ZN as assertNotInReactiveContext, Bk as assertPlatform, WF as booleanAttribute, An as computed, TF as contentChild, CF as contentChildren, u1 as createComponent, Mf as createEnvironmentInjector, TE as createNgModule, hR as createNgModuleRef, Vk as createPlatform, Hk as createPlatformFactory, DN as defineInjectable, bF as destroyPlatform, oC as effect, xF as enableProdMode, JR as enableProfiling, Yr as forwardRef, Tr as getDebugNode, kF as getModuleFactory, PF as getNgModuleById, Mc as getPlatform, mh as importProvidersFrom, E as inject, EF as input, eE as inputBinding, OF as isDevMode, Al as isSignal, io as isStandalone, _p as linkedSignal, qe as makeEnvironmentProviders, iw as makeStateKey, f1 as mergeApplicationConfig, NF as model, zF as numberAttribute, yF as output, tE as outputBinding, jF as platformCore, rA as provideAppInitializer, zN as provideBrowserGlobalErrorListeners, AF as provideCheckNoChangesConfig, gh as provideEnvironmentInitializer, h_ as provideNgReflectAttributes, RF as providePlatformInitializer, bx as provideZoneChangeDetection, Ax as provideZonelessChangeDetection, d1 as reflectComponentType, x as resolveForwardRef, Wx as resource, Vi as runInInjectionContext, JE as setTestabilityGetter, $t as signal, Hb as twoWayBinding, Ke as untracked, IF as viewChild, DF as viewChildren, bI as \u0275ANIMATIONS_DISABLED, Pm as \u0275AcxChangeDetectionStrategy, Lm as \u0275AcxViewEncapsulation, Na as \u0275AfterRenderManager, $F as \u0275CLIENT_RENDER_MODE_FLAG, U as \u0275CONTAINER_HEADER_OFFSET, Ne as \u0275ChangeDetectionScheduler, lc as \u0275ChangeDetectionSchedulerImpl, $a as \u0275ComponentFactory, KR as \u0275Console, gi as \u0275DEFAULT_LOCALE_ID, qE as \u0275DEFER_BLOCK_CONFIG, WR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, bt as \u0275DEHYDRATED_BLOCK_REGISTRY, Rf as \u0275DeferBlockBehavior, Q as \u0275DeferBlockState, Lk as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, mo as \u0275EffectScheduler, km as \u0275Framework, tv as \u0275HydrationStatus, ow as \u0275IMAGE_CONFIG, Fm as \u0275IMAGE_CONFIG_DEFAULTS, el as \u0275INJECTOR_SCOPE, vF as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, ct as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, aw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Sn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Cd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Xo as \u0275JSACTION_BLOCK_ELEMENT_MAP, _d as \u0275JSACTION_EVENT_CONTRACT, As as \u0275LContext, Er as \u0275LocaleDataIndex, nn as \u0275NG_COMP_DEF, eo as \u0275NG_DIR_DEF, rn as \u0275NG_ELEMENT_ID, Wr as \u0275NG_INJ_DEF, Oi as \u0275NG_MOD_DEF, to as \u0275NG_PIPE_DEF, Pn as \u0275NG_PROV_DEF, Es as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, B as \u0275NO_CHANGE, vr as \u0275NgModuleFactory, dr as \u0275NoopNgZone, hP as \u0275PERFORMANCE_MARK_PREFIX, eC as \u0275PROVIDED_NG_ZONE, Et as \u0275PendingTasksInternal, tn as \u0275R3Injector, Ns as \u0275ReflectionCapabilities, Qt as \u0275Render3ComponentFactory, qs as \u0275Render3ComponentRef, mr as \u0275Render3NgModuleRef, uc as \u0275ResourceImpl, T as \u0275RuntimeError, ae as \u0275SIGNAL, Km as \u0275SSR_CONTENT_INTEGRITY_MARKER, ZE as \u0275TESTABILITY, YE as \u0275TESTABILITY_GETTER, GE as \u0275TimerScheduler, Ca as \u0275TracingAction, xr as \u0275TracingService, zt as \u0275ViewRef, Ri as \u0275XSS_SECURITY_URL, qn as \u0275ZONELESS_ENABLED, Tv as \u0275_sanitizeHtml, ya as \u0275_sanitizeUrl, In as \u0275allLeavingAnimations, Or as \u0275allowSanitizationBypassAndThrow, BF as \u0275annotateForHydration, XF as \u0275assertType, Pw as \u0275bypassSanitizationTrustHtml, Vw as \u0275bypassSanitizationTrustResourceUrl, Fw as \u0275bypassSanitizationTrustScript, Lw as \u0275bypassSanitizationTrustStyle, jw as \u0275bypassSanitizationTrustUrl, yE as \u0275clearResolutionOfComponentResourcesQueue, $T as \u0275compileComponent, Cp as \u0275compileDirective, HT as \u0275compileNgModule, BT as \u0275compileNgModuleDefs, Pk as \u0275compileNgModuleFactory, KT as \u0275compilePipe, Xt as \u0275convertToBitFlags, $c as \u0275createInjector, $k as \u0275createOrReusePlatformInjector, LF as \u0275defaultIterableDiffers, FF as \u0275defaultKeyValueDiffers, pr as \u0275depsTracker, Ky as \u0275devModeEqual, KF as \u0275disableProfiling, YF as \u0275enableProfiling, Op as \u0275encapsulateResourceError, Xf as \u0275findLocaleData, jT as \u0275flushModuleScopingQueueAsMuchAsPossible, Zr as \u0275formatRuntimeError, ax as \u0275generateStandaloneInDeclarationsError, YR as \u0275getAsyncClassMetadataFn, JF as \u0275getClosestComponentName, W as \u0275getComponentDef, Tr as \u0275getDebugNode, Ts as \u0275getDeferBlocks, qM as \u0275getDirectives, _t as \u0275getDocument, zM as \u0275getHostElement, Xr as \u0275getInjectableDef, _e as \u0275getLContext, jA as \u0275getLocaleCurrencyCode, GI as \u0275getLocalePluralCase, Hx as \u0275getOutputDestroyRef, gv as \u0275getSanitizationBypassType, XR as \u0275getTransferState, Aw as \u0275getUnknownElementStrictMode, xw as \u0275getUnknownPropertyStrictMode, be as \u0275global, nE as \u0275inferTagNameFromDefinition, Gk as \u0275injectChangeDetectorRef, HF as \u0275internalCreateApplication, ac as \u0275internalProvideZoneChangeDetection, eI as \u0275isBoundToModule, cR as \u0275isComponentDefPendingResolution, qc as \u0275isEnvironmentProviders, TN as \u0275isInjectable, hn as \u0275isNgModule, kf as \u0275isPromise, XE as \u0275isSubscribable, CS as \u0275isViewDirty, NS as \u0275markForRefresh, ut as \u0275noSideEffects, Dp as \u0275patchComponentDefWithScope, te as \u0275performanceMarkFeature, eA as \u0275publishExternalGlobalUtil, vw as \u0275readHydrationInfo, FA as \u0275registerLocaleData, Tt as \u0275renderDeferBlockState, ux as \u0275resetCompiledComponents, Ew as \u0275resetIncrementalHydrationEnabledWarnedForTests, ix as \u0275resetJitOptions, mE as \u0275resolveComponentResources, lR as \u0275restoreComponentResolutionQueue, pR as \u0275setAllowDuplicateNgModuleIdsForTest, pN as \u0275setAlternateWeakRefImpl, kT as \u0275setClassDebugInfo, Of as \u0275setClassMetadata, QE as \u0275setClassMetadataAsync, Je as \u0275setCurrentInjector, JM as \u0275setDocument, MN as \u0275setInjectorProfilerContext, QI as \u0275setLocaleId, Rw as \u0275setUnknownElementStrictMode, Ow as \u0275setUnknownPropertyStrictMode, QF as \u0275startMeasuring, ZF as \u0275stopMeasuring, lo as \u0275store, $e as \u0275stringify, Tp as \u0275transitiveScopesFor, Za as \u0275triggerResourceLoading, EN as \u0275truncateMiddle, VA as \u0275unregisterLocaleData, Rt as \u0275unwrapSafeValue, QN as \u0275unwrapWritableSignal, UF as \u0275withDomHydration, Zk as \u0275withEventReplay, GF as \u0275withI18nSupport, qF as \u0275withIncrementalHydration, AE as \u0275\u0275CopyDefinitionFeature, cT as \u0275\u0275ExternalStylesFeature, Br as \u0275\u0275FactoryTarget, OE as \u0275\u0275HostDirectivesFeature, _f as \u0275\u0275InheritDefinitionFeature, om as \u0275\u0275NgOnChangesFeature, aT as \u0275\u0275ProvidersFeature, Pv as \u0275\u0275advance, No as \u0275\u0275animateEnter, Mo as \u0275\u0275animateEnterListener, wo as \u0275\u0275animateLeave, Zs as \u0275\u0275animateLeaveListener, Hf as \u0275\u0275ariaProperty, ZD as \u0275\u0275attachSourceLocations, Bf as \u0275\u0275attribute, MD as \u0275\u0275classMap, cp as \u0275\u0275classProp, kI as \u0275\u0275componentInstance, LI as \u0275\u0275conditional, Xa as \u0275\u0275conditionalBranchCreate, PI as \u0275\u0275conditionalCreate, fD as \u0275\u0275contentQuery, mD as \u0275\u0275contentQuerySignal, Ip as \u0275\u0275declareLet, sI as \u0275\u0275defer, zE as \u0275\u0275deferEnableTimerScheduling, uI as \u0275\u0275deferHydrateNever, TI as \u0275\u0275deferHydrateOnHover, pI as \u0275\u0275deferHydrateOnIdle, mI as \u0275\u0275deferHydrateOnImmediate, MI as \u0275\u0275deferHydrateOnInteraction, EI as \u0275\u0275deferHydrateOnTimer, SI as \u0275\u0275deferHydrateOnViewport, lI as \u0275\u0275deferHydrateWhen, II as \u0275\u0275deferOnHover, dI as \u0275\u0275deferOnIdle, hI as \u0275\u0275deferOnImmediate, CI as \u0275\u0275deferOnInteraction, vI as \u0275\u0275deferOnTimer, wI as \u0275\u0275deferOnViewport, DI as \u0275\u0275deferPrefetchOnHover, fI as \u0275\u0275deferPrefetchOnIdle, gI as \u0275\u0275deferPrefetchOnImmediate, NI as \u0275\u0275deferPrefetchOnInteraction, yI as \u0275\u0275deferPrefetchOnTimer, _I as \u0275\u0275deferPrefetchOnViewport, cI as \u0275\u0275deferPrefetchWhen, aI as \u0275\u0275deferWhen, NE as \u0275\u0275defineComponent, wE as \u0275\u0275defineDirective, j as \u0275\u0275defineInjectable, Jr as \u0275\u0275defineInjector, wf as \u0275\u0275defineNgModule, _E as \u0275\u0275definePipe, jr as \u0275\u0275directiveInject, pl as \u0275\u0275disableBindings, qf as \u0275\u0275domElement, Zf as \u0275\u0275domElementContainer, Qf as \u0275\u0275domElementContainerEnd, ic as \u0275\u0275domElementContainerStart, rc as \u0275\u0275domElementEnd, nc as \u0275\u0275domElementStart, ip as \u0275\u0275domListener, Kf as \u0275\u0275domProperty, bf as \u0275\u0275domTemplate, Gf as \u0275\u0275element, zf as \u0275\u0275elementContainer, hi as \u0275\u0275elementContainerEnd, oc as \u0275\u0275elementContainerStart, tc as \u0275\u0275elementEnd, ec as \u0275\u0275elementStart, fl as \u0275\u0275enableBindings, xT as \u0275\u0275getComponentDepsFactory, UI as \u0275\u0275getCurrentView, Im as \u0275\u0275getInheritedFactory, PT as \u0275\u0275getReplaceMetadataURL, iD as \u0275\u0275i18n, aD as \u0275\u0275i18nApply, sD as \u0275\u0275i18nAttributes, tp as \u0275\u0275i18nEnd, np as \u0275\u0275i18nExp, cD as \u0275\u0275i18nPostprocess, ep as \u0275\u0275i18nStart, fe as \u0275\u0275inject, ra as \u0275\u0275injectAttribute, YD as \u0275\u0275interpolate, KD as \u0275\u0275interpolate1, JD as \u0275\u0275interpolate2, XD as \u0275\u0275interpolate3, eT as \u0275\u0275interpolate4, tT as \u0275\u0275interpolate5, nT as \u0275\u0275interpolate6, rT as \u0275\u0275interpolate7, oT as \u0275\u0275interpolate8, iT as \u0275\u0275interpolateV, Wy as \u0275\u0275invalidFactory, ki as \u0275\u0275invalidFactoryDep, rp as \u0275\u0275listener, gD as \u0275\u0275loadQuery, Sl as \u0275\u0275namespaceHTML, _l as \u0275\u0275namespaceMathML, wl as \u0275\u0275namespaceSVG, lD as \u0275\u0275nextContext, t1 as \u0275\u0275ngDeclareClassMetadata, n1 as \u0275\u0275ngDeclareClassMetadataAsync, r1 as \u0275\u0275ngDeclareComponent, e1 as \u0275\u0275ngDeclareDirective, o1 as \u0275\u0275ngDeclareFactory, i1 as \u0275\u0275ngDeclareInjectable, s1 as \u0275\u0275ngDeclareInjector, a1 as \u0275\u0275ngDeclareNgModule, c1 as \u0275\u0275ngDeclarePipe, wT as \u0275\u0275pipe, _T as \u0275\u0275pipeBind1, ST as \u0275\u0275pipeBind2, bT as \u0275\u0275pipeBind3, RT as \u0275\u0275pipeBind4, AT as \u0275\u0275pipeBindV, dD as \u0275\u0275projection, uD as \u0275\u0275projectionDef, Uf as \u0275\u0275property, dT as \u0275\u0275pureFunction0, fT as \u0275\u0275pureFunction1, pT as \u0275\u0275pureFunction2, hT as \u0275\u0275pureFunction3, gT as \u0275\u0275pureFunction4, mT as \u0275\u0275pureFunction5, vT as \u0275\u0275pureFunction6, yT as \u0275\u0275pureFunction7, ET as \u0275\u0275pureFunction8, IT as \u0275\u0275pureFunctionV, yD as \u0275\u0275queryAdvance, hD as \u0275\u0275queryRefresh, QD as \u0275\u0275readContextLet, ED as \u0275\u0275reference, Cf as \u0275\u0275registerNgModuleType, HI as \u0275\u0275repeater, VI as \u0275\u0275repeaterCreate, jI as \u0275\u0275repeaterTrackByIdentity, FI as \u0275\u0275repeaterTrackByIndex, LT as \u0275\u0275replaceMetadata, ml as \u0275\u0275resetView, Bd as \u0275\u0275resolveBody, Av as \u0275\u0275resolveDocument, Rv as \u0275\u0275resolveWindow, gl as \u0275\u0275restoreView, Ld as \u0275\u0275sanitizeHtml, Ia as \u0275\u0275sanitizeResourceUrl, Vd as \u0275\u0275sanitizeScript, Fd as \u0275\u0275sanitizeStyle, jd as \u0275\u0275sanitizeUrl, bv as \u0275\u0275sanitizeUrlOrResourceUrl, lT as \u0275\u0275setComponentScope, uT as \u0275\u0275setNgModuleScope, zD as \u0275\u0275storeLet, ND as \u0275\u0275styleMap, ap as \u0275\u0275styleProp, op as \u0275\u0275syntheticHostListener, Jf as \u0275\u0275syntheticHostProperty, Sf as \u0275\u0275template, OT as \u0275\u0275templateRefExtractor, xD as \u0275\u0275text, lp as \u0275\u0275textInterpolate, sc as \u0275\u0275textInterpolate1, up as \u0275\u0275textInterpolate2, dp as \u0275\u0275textInterpolate3, fp as \u0275\u0275textInterpolate4, pp as \u0275\u0275textInterpolate5, hp as \u0275\u0275textInterpolate6, gp as \u0275\u0275textInterpolate7, mp as \u0275\u0275textInterpolate8, vp as \u0275\u0275textInterpolateV, _v as \u0275\u0275trustConstantHtml, Sv as \u0275\u0275trustConstantResourceUrl, qD as \u0275\u0275twoWayBindingSet, Ep as \u0275\u0275twoWayListener, yp as \u0275\u0275twoWayProperty, Hd as \u0275\u0275validateAttribute, pD as \u0275\u0275viewQuery, vD as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/resource.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.25
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
