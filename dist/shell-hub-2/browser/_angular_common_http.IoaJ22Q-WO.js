import { a as Oe, b as Ae } from "@nf-internal/chunk-TX7OSOVJ";
import { a as Y, c as Me, d as ce } from "@nf-internal/chunk-4CLCTAJ7";
import * as h from "@angular/core";
import { \u0275RuntimeError as _, InjectionToken as D, inject as x, NgZone as Tt, DestroyRef as Et, \u0275formatRuntimeError as vr, PendingTasks as je, runInInjectionContext as me, DOCUMENT as Se, makeEnvironmentProviders as wt } from "@angular/core";
import { concatMap as bt, filter as Rt, map as Z, finalize as Be, switchMap as vt } from "rxjs/operators";
import { of as ze, Observable as ye, from as xt } from "rxjs";
var S = class {
}, B = class {
}, M = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
        r ? typeof r == "string" ? this.lazyInit = () => {
            this.headers = new Map, r.split(`
`).forEach(t => { let n = t.indexOf(":"); if (n > 0) {
                let s = t.slice(0, n), i = t.slice(n + 1).trim();
                this.addHeaderEntry(s, i);
            } });
        } : typeof Headers < "u" && r instanceof Headers ? (this.headers = new Map, r.forEach((t, n) => { this.addHeaderEntry(n, t); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(r).forEach(([t, n]) => { this.setHeaderEntries(t, n); }); } : this.headers = new Map;
    }
    has(r) { return this.init(), this.headers.has(r.toLowerCase()); }
    get(r) { this.init(); let t = this.headers.get(r.toLowerCase()); return t && t.length > 0 ? t[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(r) { return this.init(), this.headers.get(r.toLowerCase()) || null; }
    append(r, t) { return this.clone({ name: r, value: t, op: "a" }); }
    set(r, t) { return this.clone({ name: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ name: r, value: t, op: "d" }); }
    maybeSetNormalizedName(r, t) { this.normalizedNames.has(t) || this.normalizedNames.set(t, r); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(r => this.applyUpdate(r)), this.lazyUpdate = null)); }
    copyFrom(r) { r.init(), Array.from(r.headers.keys()).forEach(t => { this.headers.set(t, r.headers.get(t)), this.normalizedNames.set(t, r.normalizedNames.get(t)); }); }
    clone(r) { let t = new e; return t.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([r]), t; }
    applyUpdate(r) { let t = r.name.toLowerCase(); switch (r.op) {
        case "a":
        case "s":
            let n = r.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(r.name, t);
            let s = (r.op === "a" ? this.headers.get(t) : void 0) || [];
            s.push(...n), this.headers.set(t, s);
            break;
        case "d":
            let i = r.value;
            if (!i)
                this.headers.delete(t), this.normalizedNames.delete(t);
            else {
                let o = this.headers.get(t);
                if (!o)
                    return;
                o = o.filter(d => i.indexOf(d) === -1), o.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, o);
            }
            break;
    } }
    addHeaderEntry(r, t) { let n = r.toLowerCase(); this.maybeSetNormalizedName(r, n), this.headers.has(n) ? this.headers.get(n).push(t) : this.headers.set(n, [t]); }
    setHeaderEntries(r, t) { let n = (Array.isArray(t) ? t : [t]).map(i => i.toString()), s = r.toLowerCase(); this.headers.set(s, n), this.maybeSetNormalizedName(r, s); }
    forEach(r) { this.init(), Array.from(this.normalizedNames.keys()).forEach(t => r(this.normalizedNames.get(t), this.headers.get(t))); }
};
var H = class {
    encodeKey(r) { return _e(r); }
    encodeValue(r) { return _e(r); }
    decodeKey(r) { return decodeURIComponent(r); }
    decodeValue(r) { return decodeURIComponent(r); }
};
function Pt(e, r) { let t = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(s => { let i = s.indexOf("="), [o, d] = i == -1 ? [r.decodeKey(s), ""] : [r.decodeKey(s.slice(0, i)), r.decodeValue(s.slice(i + 1))], a = t.get(o) || []; a.push(d), t.set(o, a); }), t; }
var Nt = /%(\d[a-f0-9])/gi, Mt = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function _e(e) { return encodeURIComponent(e).replace(Nt, (r, t) => Mt[t] ?? r); }
function Q(e) { return `${e}`; }
var I = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(r = {}) { if (this.encoder = r.encoder || new H, r.fromString) {
        if (r.fromObject)
            throw new _(2805, !1);
        this.map = Pt(r.fromString, this.encoder);
    }
    else
        r.fromObject ? (this.map = new Map, Object.keys(r.fromObject).forEach(t => { let n = r.fromObject[t], s = Array.isArray(n) ? n.map(Q) : [Q(n)]; this.map.set(t, s); })) : this.map = null; }
    has(r) { return this.init(), this.map.has(r); }
    get(r) { this.init(); let t = this.map.get(r); return t ? t[0] : null; }
    getAll(r) { return this.init(), this.map.get(r) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(r, t) { return this.clone({ param: r, value: t, op: "a" }); }
    appendAll(r) { let t = []; return Object.keys(r).forEach(n => { let s = r[n]; Array.isArray(s) ? s.forEach(i => { t.push({ param: n, value: i, op: "a" }); }) : t.push({ param: n, value: s, op: "a" }); }), this.clone(t); }
    set(r, t) { return this.clone({ param: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ param: r, value: t, op: "d" }); }
    toString() { return this.init(), this.keys().map(r => { let t = this.encoder.encodeKey(r); return this.map.get(r).map(n => t + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(r => r !== "").join("&"); }
    clone(r) { let t = new e({ encoder: this.encoder }); return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat(r), t; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(r => this.map.set(r, this.cloneFrom.map.get(r))), this.updates.forEach(r => { switch (r.op) {
        case "a":
        case "s":
            let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
            t.push(Q(r.value)), this.map.set(r.param, t);
            break;
        case "d": if (r.value !== void 0) {
            let n = this.map.get(r.param) || [], s = n.indexOf(Q(r.value));
            s !== -1 && n.splice(s, 1), n.length > 0 ? this.map.set(r.param, n) : this.map.delete(r.param);
        }
        else {
            this.map.delete(r.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
}, le = class {
    defaultValue;
    constructor(r) { this.defaultValue = r; }
}, ee = class {
    map = new Map;
    set(r, t) { return this.map.set(r, t), this; }
    get(r) { return this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r); }
    delete(r) { return this.map.delete(r), this; }
    has(r) { return this.map.has(r); }
    keys() { return this.map.keys(); }
};
function Ot(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Ie(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function ke(e) { return typeof Blob < "u" && e instanceof Blob; }
function De(e) { return typeof FormData < "u" && e instanceof FormData; }
function At(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var G = "Content-Type", te = "Accept", ge = "X-Request-URL", Je = "text/plain", Xe = "application/json", Ve = `${Xe}, ${Je}, */*`, j = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(r, t, n, s) { this.url = t, this.method = r.toUpperCase(); let i; if (Ot(this.method) || s ? (this.body = n !== void 0 ? n : null, i = s) : i = n, i) {
        if (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, this.keepalive = !!i.keepalive, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.context && (this.context = i.context), i.params && (this.params = i.params), i.priority && (this.priority = i.priority), i.cache && (this.cache = i.cache), i.credentials && (this.credentials = i.credentials), typeof i.timeout == "number") {
            if (i.timeout < 1 || !Number.isInteger(i.timeout))
                throw new _(2822, "");
            this.timeout = i.timeout;
        }
        i.mode && (this.mode = i.mode), i.redirect && (this.redirect = i.redirect), i.integrity && (this.integrity = i.integrity), i.referrer !== void 0 && (this.referrer = i.referrer), this.transferCache = i.transferCache;
    } if (this.headers ??= new M, this.context ??= new ee, !this.params)
        this.params = new I, this.urlWithParams = t;
    else {
        let o = this.params.toString();
        if (o.length === 0)
            this.urlWithParams = t;
        else {
            let d = t.indexOf("?"), a = d === -1 ? "?" : d < t.length - 1 ? "&" : "";
            this.urlWithParams = t + a + o;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Ie(this.body) || ke(this.body) || De(this.body) || At(this.body) ? this.body : this.body instanceof I ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || De(this.body) ? null : ke(this.body) ? this.body.type || null : Ie(this.body) ? null : typeof this.body == "string" ? Je : this.body instanceof I ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Xe : null; }
    clone(r = {}) { let t = r.method || this.method, n = r.url || this.url, s = r.responseType || this.responseType, i = r.keepalive ?? this.keepalive, o = r.priority || this.priority, d = r.cache || this.cache, a = r.mode || this.mode, f = r.redirect || this.redirect, g = r.credentials || this.credentials, m = r.referrer ?? this.referrer, E = r.integrity || this.integrity, w = r.transferCache ?? this.transferCache, c = r.timeout ?? this.timeout, P = r.body !== void 0 ? r.body : this.body, l = r.withCredentials ?? this.withCredentials, u = r.reportProgress ?? this.reportProgress, y = r.headers || this.headers, b = r.params || this.params, p = r.context ?? this.context; return r.setHeaders !== void 0 && (y = Object.keys(r.setHeaders).reduce((v, T) => v.set(T, r.setHeaders[T]), y)), r.setParams && (b = Object.keys(r.setParams).reduce((v, T) => v.set(T, r.setParams[T]), b)), new e(t, n, P, { params: b, headers: y, context: p, reportProgress: u, responseType: s, withCredentials: l, transferCache: w, keepalive: i, cache: d, priority: o, timeout: c, mode: a, redirect: f, credentials: g, referrer: m, integrity: E }); }
}, A = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(A || {}), X = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    constructor(r, t = 200, n = "OK") { this.headers = r.headers || new M, this.status = r.status !== void 0 ? r.status : t, this.statusText = r.statusText || n, this.url = r.url || null, this.redirected = r.redirected, this.ok = this.status >= 200 && this.status < 300; }
}, W = class e extends X {
    constructor(r = {}) { super(r); }
    type = A.ResponseHeader;
    clone(r = {}) { return new e({ headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, k = class e extends X {
    body;
    constructor(r = {}) { super(r), this.body = r.body !== void 0 ? r.body : null; }
    type = A.Response;
    clone(r = {}) { return new e({ body: r.body !== void 0 ? r.body : this.body, headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0, redirected: r.redirected ?? this.redirected }); }
}, N = class extends X {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) { super(r, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${r.url || "(unknown url)"}` : this.message = `Http failure response for ${r.url || "(unknown url)"}: ${r.status} ${r.statusText}`, this.error = r.error || null; }
}, Te = 200, _t = 204, $e = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })($e || {});
function de(e, r) { return { body: r, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, credentials: e.credentials, transferCache: e.transferCache, timeout: e.timeout, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect, integrity: e.integrity, referrer: e.referrer }; }
var Ee = (() => { class e {
    handler;
    constructor(t) { this.handler = t; }
    request(t, n, s = {}) { let i; if (t instanceof j)
        i = t;
    else {
        let a;
        s.headers instanceof M ? a = s.headers : a = new M(s.headers);
        let f;
        s.params && (s.params instanceof I ? f = s.params : f = new I({ fromObject: s.params })), i = new j(t, n, s.body !== void 0 ? s.body : null, { headers: a, context: s.context, params: f, reportProgress: s.reportProgress, responseType: s.responseType || "json", withCredentials: s.withCredentials, transferCache: s.transferCache, keepalive: s.keepalive, priority: s.priority, cache: s.cache, mode: s.mode, redirect: s.redirect, credentials: s.credentials, referrer: s.referrer, integrity: s.integrity, timeout: s.timeout });
    } let o = ze(i).pipe(bt(a => this.handler.handle(a))); if (t instanceof j || s.observe === "events")
        return o; let d = o.pipe(Rt(a => a instanceof k)); switch (s.observe || "body") {
        case "body": switch (i.responseType) {
            case "arraybuffer": return d.pipe(Z(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new _(2806, !1); return a.body; }));
            case "blob": return d.pipe(Z(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new _(2807, !1); return a.body; }));
            case "text": return d.pipe(Z(a => { if (a.body !== null && typeof a.body != "string")
                throw new _(2808, !1); return a.body; }));
            case "json":
            default: return d.pipe(Z(a => a.body));
        }
        case "response": return d;
        default: throw new _(2809, !1);
    } }
    delete(t, n = {}) { return this.request("DELETE", t, n); }
    get(t, n = {}) { return this.request("GET", t, n); }
    head(t, n = {}) { return this.request("HEAD", t, n); }
    jsonp(t, n) { return this.request("JSONP", t, { params: new I().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(t, n = {}) { return this.request("OPTIONS", t, n); }
    patch(t, n, s = {}) { return this.request("PATCH", t, de(s, n)); }
    post(t, n, s = {}) { return this.request("POST", t, de(s, n)); }
    put(t, n, s = {}) { return this.request("PUT", t, de(s, n)); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(S)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), It = /^\)\]\}',?\n/;
function Fe(e) { if (e.url)
    return e.url; let r = ge.toLocaleLowerCase(); return e.headers.get(r); }
var Ge = new D(""), q = (() => { class e {
    fetchImpl = x(ue, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
    ngZone = x(Tt);
    destroyRef = x(Et);
    handle(t) { return new ye(n => { let s = new AbortController; this.doRequest(t, s.signal, n).then(he, o => n.error(new N({ error: o }))); let i; return t.timeout && (i = this.ngZone.runOutsideAngular(() => setTimeout(() => { s.signal.aborted || s.abort(new DOMException("signal timed out", "TimeoutError")); }, t.timeout))), () => { i !== void 0 && clearTimeout(i), s.abort(); }; }); }
    doRequest(t, n, s) { return ce(this, null, function* () { let i = this.createRequestInit(t), o; try {
        let c = this.ngZone.runOutsideAngular(() => this.fetchImpl(t.urlWithParams, Y({ signal: n }, i)));
        kt(c), s.next({ type: A.Sent }), o = yield c;
    }
    catch (c) {
        s.error(new N({ error: c, status: c.status ?? 0, statusText: c.statusText, url: t.urlWithParams, headers: c.headers }));
        return;
    } let d = new M(o.headers), a = o.statusText, f = Fe(o) ?? t.urlWithParams, g = o.status, m = null; if (t.reportProgress && s.next(new W({ headers: d, status: g, statusText: a, url: f })), o.body) {
        let c = o.headers.get("content-length"), P = [], l = o.body.getReader(), u = 0, y, b, p = typeof Zone < "u" && Zone.current, v = !1;
        if (yield this.ngZone.runOutsideAngular(() => ce(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield l.cancel(), v = !0;
                break;
            }
            let { done: O, value: U } = yield l.read();
            if (O)
                break;
            if (P.push(U), u += U.length, t.reportProgress) {
                b = t.responseType === "text" ? (b ?? "") + (y ??= new TextDecoder).decode(U, { stream: !0 }) : void 0;
                let J = () => s.next({ type: A.DownloadProgress, total: c ? +c : void 0, loaded: u, partialText: b });
                p ? p.run(J) : J();
            }
        } })), v) {
            s.complete();
            return;
        }
        let T = this.concatChunks(P, u);
        try {
            let O = o.headers.get(G) ?? "";
            m = this.parseBody(t, T, O, g);
        }
        catch (O) {
            s.error(new N({ error: O, headers: new M(o.headers), status: o.status, statusText: o.statusText, url: Fe(o) ?? t.urlWithParams }));
            return;
        }
    } g === 0 && (g = m ? Te : 0); let E = g >= 200 && g < 300, w = o.redirected; E ? (s.next(new k({ body: m, headers: d, status: g, statusText: a, url: f, redirected: w })), s.complete()) : s.error(new N({ error: m, headers: d, status: g, statusText: a, url: f, redirected: w })); }); }
    parseBody(t, n, s, i) { switch (t.responseType) {
        case "json":
            let o = new TextDecoder().decode(n).replace(It, "");
            if (o === "")
                return null;
            try {
                return JSON.parse(o);
            }
            catch (d) {
                if (i < 200 || i >= 300)
                    return o;
                throw d;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: s });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(t) { let n = {}, s; if (s = t.credentials, t.withCredentials && (s = "include"), t.headers.forEach((i, o) => n[i] = o.join(",")), t.headers.has(te) || (n[te] = Ve), !t.headers.has(G)) {
        let i = t.detectContentTypeHeader();
        i !== null && (n[G] = i);
    } return { body: t.serializeBody(), method: t.method, headers: n, credentials: s, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, referrer: t.referrer, integrity: t.integrity }; }
    concatChunks(t, n) { let s = new Uint8Array(n), i = 0; for (let o of t)
        s.set(o, i), i += o.length; return s; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), ue = class {
};
function he() { }
function kt(e) { e.then(he, he); }
function We(e, r) { return r(e); }
function Dt(e, r) { return (t, n) => r.intercept(t, { handle: s => e(s, n) }); }
function Ft(e, r, t) { return (n, s) => me(t, () => r(n, i => e(i, s))); }
var we = new D(""), K = new D(""), be = new D(""), Re = new D("", { providedIn: "root", factory: () => !0 });
function Ut() { let e = null; return (r, t) => { e === null && (e = (x(we, { optional: !0 }) ?? []).reduceRight(Dt, We)); let n = x(je); if (x(Re)) {
    let i = n.add();
    return e(r, t).pipe(Be(i));
}
else
    return e(r, t); }; }
var re = (() => { class e extends S {
    backend;
    injector;
    chain = null;
    pendingTasks = x(je);
    contributeToStability = x(Re);
    constructor(t, n) { super(), this.backend = t, this.injector = n; }
    handle(t) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get(K), ...this.injector.get(be, [])]));
        this.chain = n.reduceRight((s, i) => Ft(s, i, this.injector), We);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(t, s => this.backend.handle(s)).pipe(Be(n));
    }
    else
        return this.chain(t, n => this.backend.handle(n)); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(B), h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Lt = 0, Ue, Ct = "JSONP injected script did not invoke callback.";
var ne = class {
};
function jt() { return typeof window == "object" ? window : {}; }
var ve = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    constructor(t, n) { this.callbackMap = t, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Lt++}`; }
    handle(t) { if (t.method !== "JSONP")
        throw new _(2810, !1); if (t.responseType !== "json")
        throw new _(2811, !1); if (t.headers.keys().length > 0)
        throw new _(2812, !1); if (!this.isAllowedJsonpUrl(t.urlWithParams))
        throw new _(2826, !1); return new ye(n => { let s = this.nextCallback(), i = t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${s}$1`), o = this.document.createElement("script"); o.src = i; let d = null, a = !1; this.callbackMap[s] = E => { delete this.callbackMap[s], d = E, a = !0; }; let f = () => { o.removeEventListener("load", g), o.removeEventListener("error", m), o.remove(), delete this.callbackMap[s]; }, g = () => { this.resolvedPromise.then(() => { if (f(), !a) {
        n.error(new N({ url: i, status: 0, statusText: "JSONP Error", error: new Error(Ct) }));
        return;
    } n.next(new k({ body: d, status: Te, statusText: "OK", url: i })), n.complete(); }); }, m = E => { f(), n.error(new N({ error: E, status: 0, statusText: "JSONP Error", url: i })); }; return o.addEventListener("load", g), o.addEventListener("error", m), this.document.body.appendChild(o), n.next({ type: A.Sent }), () => { a || this.removeListeners(o), f(); }; }); }
    removeListeners(t) { Ue ??= this.document.implementation.createHTMLDocument(), Ue.adoptNode(t); }
    isAllowedJsonpUrl(t) { return /^https?:\/\//i.test(t); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(ne), h.\u0275\u0275inject(Se)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Ke(e, r) { return e.method === "JSONP" ? x(ve).handle(e) : r(e); }
var St = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return me(this.injector, () => Ke(t, s => n.handle(s))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Bt = /^\)\]\}',?\n/, zt = RegExp(`^${ge}:`, "m");
function Jt(e) { return "responseURL" in e && e.responseURL ? e.responseURL : zt.test(e.getAllResponseHeaders()) ? e.getResponseHeader(ge) : null; }
var fe = (() => { class e {
    xhrFactory;
    constructor(t) { this.xhrFactory = t; }
    handle(t) { if (t.method === "JSONP")
        throw new _(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? xt(n.\u0275loadImpl()) : ze(null)).pipe(vt(() => new ye(i => { let o = n.build(); if (o.open(t.method, t.urlWithParams), t.withCredentials && (o.withCredentials = !0), t.headers.forEach((l, u) => o.setRequestHeader(l, u.join(","))), t.headers.has(te) || o.setRequestHeader(te, Ve), !t.headers.has(G)) {
        let l = t.detectContentTypeHeader();
        l !== null && o.setRequestHeader(G, l);
    } if (t.timeout && (o.timeout = t.timeout), t.responseType) {
        let l = t.responseType.toLowerCase();
        o.responseType = l !== "json" ? l : "text";
    } let d = t.serializeBody(), a = null, f = () => { if (a !== null)
        return a; let l = o.statusText || "OK", u = new M(o.getAllResponseHeaders()), y = Jt(o) || t.url; return a = new W({ headers: u, status: o.status, statusText: l, url: y }), a; }, g = () => { let { headers: l, status: u, statusText: y, url: b } = f(), p = null; u !== _t && (p = typeof o.response > "u" ? o.responseText : o.response), u === 0 && (u = p ? Te : 0); let v = u >= 200 && u < 300; if (t.responseType === "json" && typeof p == "string") {
        let T = p;
        p = p.replace(Bt, "");
        try {
            p = p !== "" ? JSON.parse(p) : null;
        }
        catch (O) {
            p = T, v && (v = !1, p = { error: O, text: p });
        }
    } v ? (i.next(new k({ body: p, headers: l, status: u, statusText: y, url: b || void 0 })), i.complete()) : i.error(new N({ error: p, headers: l, status: u, statusText: y, url: b || void 0 })); }, m = l => { let { url: u } = f(), y = new N({ error: l, status: o.status || 0, statusText: o.statusText || "Unknown Error", url: u || void 0 }); i.error(y); }, E = m; t.timeout && (E = l => { let { url: u } = f(), y = new N({ error: new DOMException("Request timed out", "TimeoutError"), status: o.status || 0, statusText: o.statusText || "Request timeout", url: u || void 0 }); i.error(y); }); let w = !1, c = l => { w || (i.next(f()), w = !0); let u = { type: A.DownloadProgress, loaded: l.loaded }; l.lengthComputable && (u.total = l.total), t.responseType === "text" && o.responseText && (u.partialText = o.responseText), i.next(u); }, P = l => { let u = { type: A.UploadProgress, loaded: l.loaded }; l.lengthComputable && (u.total = l.total), i.next(u); }; return o.addEventListener("load", g), o.addEventListener("error", m), o.addEventListener("timeout", E), o.addEventListener("abort", m), t.reportProgress && (o.addEventListener("progress", c), d !== null && o.upload && o.upload.addEventListener("progress", P)), o.send(d), i.next({ type: A.Sent }), () => { o.removeEventListener("error", m), o.removeEventListener("abort", m), o.removeEventListener("load", g), o.removeEventListener("timeout", E), t.reportProgress && (o.removeEventListener("progress", c), d !== null && o.upload && o.upload.removeEventListener("progress", P)), o.readyState !== o.DONE && o.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(Ae)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), se = new D(""), Ye = "XSRF-TOKEN", Ze = new D("", { providedIn: "root", factory: () => Ye }), Qe = "X-XSRF-TOKEN", qe = new D("", { providedIn: "root", factory: () => Qe }), V = class {
}, He = (() => { class e {
    doc;
    cookieName;
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    constructor(t, n) { this.doc = t, this.cookieName = n; }
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let t = this.doc.cookie || ""; return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Oe(t, this.cookieName), this.lastCookieString = t), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(Se), h.\u0275\u0275inject(Ze)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Xt = /^(?:https?:)?\/\//i;
function et(e, r) { if (!x(se) || e.method === "GET" || e.method === "HEAD" || Xt.test(e.url))
    return r(e); let t = x(V).getToken(), n = x(qe); return t != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, t) })), r(e); }
var Le = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return me(this.injector, () => et(t, s => n.handle(s))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), F = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; })(F || {});
function z(e, r) { return { \u0275kind: e, \u0275providers: r }; }
function tt(...e) { let r = [Ee, fe, re, { provide: S, useExisting: re }, { provide: B, useFactory: () => x(Ge, { optional: !0 }) ?? x(fe) }, { provide: K, useValue: et, multi: !0 }, { provide: se, useValue: !0 }, { provide: V, useClass: He }]; for (let t of e)
    r.push(...t.\u0275providers); return wt(r); }
function Vt(e) { return z(F.Interceptors, e.map(r => ({ provide: K, useValue: r, multi: !0 }))); }
var Ce = new D("");
function rt() { return z(F.LegacyInterceptors, [{ provide: Ce, useFactory: Ut }, { provide: K, useExisting: Ce, multi: !0 }]); }
function pe({ cookieName: e, headerName: r }) { let t = []; return e !== void 0 && t.push({ provide: Ze, useValue: e }), r !== void 0 && t.push({ provide: qe, useValue: r }), z(F.CustomXsrfConfiguration, t); }
function nt() { return z(F.NoXsrfProtection, [{ provide: se, useValue: !1 }]); }
function st() { return z(F.JsonpSupport, [ve, { provide: ne, useFactory: jt }, { provide: K, useValue: Ke, multi: !0 }]); }
function $t() { return z(F.RequestsMadeViaParent, [{ provide: B, useFactory: () => x(S, { skipSelf: !0, optional: !0 }) }]); }
function Gt() { return z(F.Fetch, [q, { provide: Ge, useExisting: q }, { provide: B, useExisting: q }]); }
var Wt = (() => { class e {
    static disable() { return { ngModule: e, providers: [nt().\u0275providers] }; }
    static withOptions(t = {}) { return { ngModule: e, providers: pe(t).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [Le, { provide: we, useExisting: Le, multi: !0 }, { provide: V, useClass: He }, pe({ cookieName: Ye, headerName: Qe }).\u0275providers, { provide: se, useValue: !0 }] });
} return e; })(), Kt = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [tt(rt())] });
} return e; })(), Yt = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [st().\u0275providers] });
} return e; })();
import { inject as $, Injector as Zt, \u0275ResourceImpl as Qt, linkedSignal as xe, computed as qt, signal as Ht, \u0275encapsulateResourceError as er, \u0275RuntimeError as pt, InjectionToken as mt, \u0275performanceMarkFeature as tr, APP_BOOTSTRAP_LISTENER as rr, ApplicationRef as nr, TransferState as sr, makeStateKey as or, \u0275truncateMiddle as Ur, \u0275formatRuntimeError as Lr } from "@angular/core";
import { of as ir } from "rxjs";
import { tap as ar } from "rxjs/operators";
var Sr = (() => { let e = oe("json"); return e.arrayBuffer = oe("arraybuffer"), e.blob = oe("blob"), e.text = oe("text"), e; })();
function oe(e) { return function (t, n) { let s = n?.injector ?? $(Zt); return new Pe(s, () => cr(t, e), n?.defaultValue, n?.parse, n?.equal); }; }
function cr(e, r) { let t = typeof e == "function" ? e() : e; if (t === void 0)
    return; typeof t == "string" && (t = { url: t }); let n = t.headers instanceof M ? t.headers : new M(t.headers), s = t.params instanceof I ? t.params : new I({ fromObject: t.params }); return new j(t.method ?? "GET", t.url, t.body ?? null, { headers: n, params: s, reportProgress: t.reportProgress, withCredentials: t.withCredentials, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, responseType: r, context: t.context, transferCache: t.transferCache, credentials: t.credentials, referrer: t.referrer, integrity: t.integrity, timeout: t.timeout }); }
var Pe = class extends Qt {
    client;
    _headers = xe({ source: this.extRequest, computation: () => { } });
    _progress = xe({ source: this.extRequest, computation: () => { } });
    _statusCode = xe({ source: this.extRequest, computation: () => { } });
    headers = qt(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(r, t, n, s, i) { super(t, ({ params: o, abortSignal: d }) => { let a, f = () => a.unsubscribe(); d.addEventListener("abort", f); let g = Ht({ value: void 0 }), m, E = new Promise(c => m = c), w = c => { g.set(c), m?.(g), m = void 0; }; return a = this.client.request(o).subscribe({ next: c => { switch (c.type) {
            case A.Response:
                this._headers.set(c.headers), this._statusCode.set(c.status);
                try {
                    w({ value: s ? s(c.body) : c.body });
                }
                catch (P) {
                    w({ error: er(P) });
                }
                break;
            case A.DownloadProgress:
                this._progress.set(c);
                break;
        } }, error: c => { c instanceof N && (this._headers.set(c.headers), this._statusCode.set(c.status)), w({ error: c }), d.removeEventListener("abort", f); }, complete: () => { m && w({ error: new pt(991, !1) }), d.removeEventListener("abort", f); } }), E; }, n, i, r), this.client = r.get(Ee); }
    set(r) { super.set(r), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
}, dr = new mt(""), ot = "b", it = "h", at = "s", ct = "st", dt = "u", lt = "rt", Ne = new mt(""), lr = ["GET", "HEAD"];
function ur(e, r) { let w = $(Ne), { isCacheActive: t } = w, n = Me(w, ["isCacheActive"]), { transferCache: s, method: i } = e; if (!t || s === !1 || mr(e) || i === "POST" && !n.includePostRequests && !s || i !== "POST" && !lr.includes(i) || !n.includeRequestsWithAuthHeaders && hr(e) || ut(e.headers) || pr(e.cache) || n.filter?.(e) === !1)
    return r(e); let o = $(sr), d = $(dr, { optional: !0 }); if (typeof ngServerMode < "u" && !ngServerMode && d)
    throw new pt(2803, !1); let a = typeof ngServerMode < "u" && ngServerMode && d ? wr(e.url, d) : e.url, f = gr(e, a), g = o.get(f, null), m = n.includeHeaders; if (typeof s == "object" && s.includeHeaders && (m = s.includeHeaders), g) {
    let { [ot]: c, [lt]: P, [it]: l, [at]: u, [ct]: y, [dt]: b } = g, p = c;
    switch (P) {
        case "arraybuffer":
            p = new TextEncoder().encode(c).buffer;
            break;
        case "blob":
            p = new Blob([c]);
            break;
    }
    let v = new M(l);
    return ir(new k({ body: p, headers: v, status: u, statusText: y, url: b }));
} let E = r(e); return typeof ngServerMode < "u" && ngServerMode ? E.pipe(ar(c => { c instanceof k && !ut(c.headers) && o.set(f, { [ot]: c.body, [it]: yr(c.headers, m), [at]: c.status, [ct]: c.statusText, [dt]: a, [lt]: e.responseType }); })) : E; }
function hr(e) { return e.headers.has("authorization") || e.headers.has("proxy-authorization") || e.headers.has("cookie"); }
var fr = new Set(["no-store", "private", "no-cache"]);
function ut(e) { let r = e.get("cache-control"); return r ? r.split(",").some(t => { let n = t.split("=", 1)[0].trim().toLowerCase(); return fr.has(n); }) : !1; }
function pr(e) { return e === "no-cache" || e === "no-store"; }
function mr(e) { return e.withCredentials || e.credentials === "include" || e.credentials === "same-origin"; }
function yr(e, r) { if (!r)
    return {}; let t = {}; for (let n of r) {
    let s = e.getAll(n);
    s !== null && (t[n] = s);
} return t; }
function ht(e) { return [...e.keys()].sort().map(r => `${r}=${e.getAll(r)}`).join("&"); }
function gr(e, r) { let { params: t, method: n, responseType: s } = e, i = ht(t), o = e.serializeBody(); o instanceof URLSearchParams ? o = ht(o) : typeof o != "string" && (o = ""); let d = [n, s, r, o, i].join("|"), a = Er(d); return or(a); }
var Tr = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), ft;
function Er(e) { ft ??= new TextEncoder; let r = ft.encode(e), t = 1779033703, n = 3144134277, s = 1013904242, i = 2773480762, o = 1359893119, d = 2600822924, a = 528734635, f = 1541459225, g = r.length * 8, m = (r.length + 8 >> 6) + 1 << 6, E = new Uint8Array(m); E.set(r), E[r.length] = 128; let w = new DataView(E.buffer), c = g >>> 0, P = g / 4294967296 >>> 0; w.setUint32(m - 8, P, !1), w.setUint32(m - 4, c, !1); let l = new Uint32Array(64); for (let u = 0; u < m; u += 64) {
    for (let R = 0; R < 16; R++)
        l[R] = w.getUint32(u + R * 4, !1);
    for (let R = 16; R < 64; R++) {
        let C = l[R - 15], ie = ((C >>> 7 | C << 25) ^ (C >>> 18 | C << 14) ^ C >>> 3) >>> 0, L = l[R - 2], ae = ((L >>> 17 | L << 15) ^ (L >>> 19 | L << 13) ^ L >>> 10) >>> 0;
        l[R] = l[R - 16] + ie + l[R - 7] + ae >>> 0;
    }
    let y = t, b = n, p = s, v = i, T = o, O = d, U = a, J = f;
    for (let R = 0; R < 64; R++) {
        let C = ((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) >>> 0, ie = (T & O ^ ~T & U) >>> 0, L = J + C + ie + Tr[R] + l[R] >>> 0, ae = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) >>> 0, yt = (y & b ^ y & p ^ b & p) >>> 0, gt = ae + yt >>> 0;
        J = U, U = O, O = T, T = v + L >>> 0, v = p, p = b, b = y, y = L + gt >>> 0;
    }
    t = t + y >>> 0, n = n + b >>> 0, s = s + p >>> 0, i = i + v >>> 0, o = o + T >>> 0, d = d + O >>> 0, a = a + U >>> 0, f = f + J >>> 0;
} return [t, n, s, i, o, d, a, f].map(u => u.toString(16).padStart(8, "0")).join(""); }
function Br(e) { return [{ provide: Ne, useFactory: () => (tr("NgHttpTransferCache"), Y({ isCacheActive: !0 }, e)) }, { provide: be, useValue: ur, multi: !0 }, { provide: rr, multi: !0, useFactory: () => { let r = $(nr), t = $(Ne); return () => { r.whenStable().then(() => { t.isCacheActive = !1; }); }; } }]; }
function wr(e, r) { let t = new URL(e, "resolve://").origin, n = r[t]; return n ? e.replace(t, n) : e; }
export { q as FetchBackend, we as HTTP_INTERCEPTORS, dr as HTTP_TRANSFER_CACHE_ORIGIN_MAP, B as HttpBackend, Ee as HttpClient, Yt as HttpClientJsonpModule, Kt as HttpClientModule, Wt as HttpClientXsrfModule, ee as HttpContext, le as HttpContextToken, N as HttpErrorResponse, A as HttpEventType, F as HttpFeatureKind, S as HttpHandler, W as HttpHeaderResponse, M as HttpHeaders, I as HttpParams, j as HttpRequest, k as HttpResponse, X as HttpResponseBase, $e as HttpStatusCode, H as HttpUrlEncodingCodec, fe as HttpXhrBackend, V as HttpXsrfTokenExtractor, ve as JsonpClientBackend, St as JsonpInterceptor, Sr as httpResource, tt as provideHttpClient, Gt as withFetch, Vt as withInterceptors, rt as withInterceptorsFromDi, st as withJsonpSupport, nt as withNoXsrfProtection, $t as withRequestsMadeViaParent, pe as withXsrfConfiguration, be as \u0275HTTP_ROOT_INTERCEPTOR_FNS, re as \u0275HttpInterceptingHandler, re as \u0275HttpInterceptorHandler, Re as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, Br as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v20.3.25
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
