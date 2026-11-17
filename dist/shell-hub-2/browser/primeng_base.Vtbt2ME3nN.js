import { b as m, c as r, d as o } from "@nf-internal/chunk-NHDVMEST";
import { f as d, j as c } from "@nf-internal/chunk-ZSWNR2OG";
import "@nf-internal/chunk-NATPXMDT";
import { a as y } from "@nf-internal/chunk-4CLCTAJ7";
import * as u from "@angular/core";
import { inject as v } from "@angular/core";
var g = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;
import { UseStyle as S } from "primeng/usestyle";
var _ = { _loadedStyleNames: new Set, getLoadedStyleNames() { return this._loadedStyleNames; }, isStyleNameLoaded(a) { return this._loadedStyleNames.has(a); }, setLoadedStyleName(a) { this._loadedStyleNames.add(a); }, deleteLoadedStyleName(a) { this._loadedStyleNames.delete(a); }, clearLoadedStyleNames() { this._loadedStyleNames.clear(); } }, k = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`, j = (() => { class a {
    name = "base";
    useStyle = v(S);
    theme = void 0;
    css = void 0;
    classes = {};
    inlineStyles = {};
    load = (e, n = {}, t = s => s) => { let s = t(r `${d(e, { dt: m })}`); return s ? this.useStyle.use(c(s), y({ name: this.name }, n)) : {}; };
    loadCSS = (e = {}) => this.load(this.css, e);
    loadTheme = (e = {}, n = "") => this.load(this.theme, e, (t = "") => o.transformCSS(e.name || this.name, `${t}${r `${n}`}`));
    loadGlobalCSS = (e = {}) => this.load(k, e);
    loadGlobalTheme = (e = {}, n = "") => this.load(g, e, (t = "") => o.transformCSS(e.name || this.name, `${t}${r `${n}`}`));
    getCommonTheme = e => o.getCommon(this.name, e);
    getComponentTheme = e => o.getComponent(this.name, e);
    getDirectiveTheme = e => o.getDirective(this.name, e);
    getPresetTheme = (e, n, t) => o.getCustomPreset(this.name, e, n, t);
    getLayerOrderThemeCSS = () => o.getLayerOrderCSS(this.name);
    getStyleSheet = (e = "", n = {}) => { if (this.css) {
        let t = d(this.css, { dt: m }), s = c(r `${t}${e}`), h = Object.entries(n).reduce((i, [p, l]) => i.push(`${p}="${l}"`) && i, []).join(" ");
        return `<style type="text/css" data-primeng-style-id="${this.name}" ${h}>${s}</style>`;
    } return ""; };
    getCommonThemeStyleSheet = (e, n = {}) => o.getCommonStyleSheet(this.name, e, n);
    getThemeStyleSheet = (e, n = {}) => { let t = [o.getStyleSheet(this.name, e, n)]; if (this.theme) {
        let s = this.name === "base" ? "global-style" : `${this.name}-style`, h = r `${d(this.theme, { dt: m })}`, i = c(o.transformCSS(s, h)), p = Object.entries(n).reduce((l, [b, f]) => l.push(`${b}="${f}"`) && l, []).join(" ");
        t.push(`<style type="text/css" data-primeng-style-id="${s}" ${p}>${i}</style>`);
    } return t.join(""); };
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275prov = u.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" });
} return a; })();
export { _ as Base, j as BaseStyle };
