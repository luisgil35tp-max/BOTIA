import { a as u, d as l } from "@nf-internal/chunk-NHDVMEST";
import "@nf-internal/chunk-ZSWNR2OG";
import "@nf-internal/chunk-NATPXMDT";
import { a as i } from "@nf-internal/chunk-4CLCTAJ7";
import * as d from "@angular/core";
import { signal as r, inject as c, effect as M, untracked as y, PLATFORM_ID as N, InjectionToken as b, provideAppInitializer as A, makeEnvironmentProviders as C } from "@angular/core";
import { FilterMatchMode as t } from "primeng/api";
import { Subject as D } from "rxjs";
import { DOCUMENT as E } from "@angular/common";
import { BaseStyle as L } from "primeng/base";
var P = (() => { class o {
    theme = r(void 0);
    csp = r({ nonce: void 0 });
    isThemeChanged = !1;
    document = c(E);
    baseStyle = c(L);
    constructor() { M(() => { u.on("theme:change", e => { y(() => { this.isThemeChanged = !0, this.theme.set(e); }); }); }), M(() => { let e = this.theme(); this.document && e && (this.isThemeChanged || this.onThemeChange(e), this.isThemeChanged = !1); }); }
    ngOnDestroy() { l.clearLoadedStyleNames(), u.clear(); }
    onThemeChange(e) { l.setTheme(e), this.document && this.loadCommonTheme(); }
    loadCommonTheme() { if (this.theme() !== "none" && !l.isStyleNameLoaded("common")) {
        let { primitive: e, semantic: a, global: s, style: m } = this.baseStyle.getCommonTheme?.() || {}, n = { nonce: this.csp?.()?.nonce };
        this.baseStyle.load(e?.css, i({ name: "primitive-variables" }, n)), this.baseStyle.load(a?.css, i({ name: "semantic-variables" }, n)), this.baseStyle.load(s?.css, i({ name: "global-variables" }, n)), this.baseStyle.loadGlobalTheme(i({ name: "global-style" }, n), m), l.setLoadedStyleName("common");
    } }
    setThemeConfig(e) { let { theme: a, csp: s } = e || {}; a && this.theme.set(a), s && this.csp.set(s); }
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), w = (() => { class o extends P {
    ripple = r(!1);
    platformId = c(N);
    inputStyle = r(null);
    inputVariant = r(null);
    overlayAppendTo = r("self");
    overlayOptions = {};
    csp = r({ nonce: void 0 });
    filterMatchModeOptions = { text: [t.STARTS_WITH, t.CONTAINS, t.NOT_CONTAINS, t.ENDS_WITH, t.EQUALS, t.NOT_EQUALS], numeric: [t.EQUALS, t.NOT_EQUALS, t.LESS_THAN, t.LESS_THAN_OR_EQUAL_TO, t.GREATER_THAN, t.GREATER_THAN_OR_EQUAL_TO], date: [t.DATE_IS, t.DATE_IS_NOT, t.DATE_BEFORE, t.DATE_AFTER] };
    translation = { startsWith: "Starts with", contains: "Contains", notContains: "Not contains", endsWith: "Ends with", equals: "Equals", notEquals: "Not equals", noFilter: "No Filter", lt: "Less than", lte: "Less than or equal to", gt: "Greater than", gte: "Greater than or equal to", is: "Is", isNot: "Is not", before: "Before", after: "After", dateIs: "Date is", dateIsNot: "Date is not", dateBefore: "Date is before", dateAfter: "Date is after", clear: "Clear", apply: "Apply", matchAll: "Match All", matchAny: "Match Any", addRule: "Add Rule", removeRule: "Remove Rule", accept: "Yes", reject: "No", choose: "Choose", completed: "Completed", upload: "Upload", cancel: "Cancel", pending: "Pending", fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], chooseYear: "Choose Year", chooseMonth: "Choose Month", chooseDate: "Choose Date", prevDecade: "Previous Decade", nextDecade: "Next Decade", prevYear: "Previous Year", nextYear: "Next Year", prevMonth: "Previous Month", nextMonth: "Next Month", prevHour: "Previous Hour", nextHour: "Next Hour", prevMinute: "Previous Minute", nextMinute: "Next Minute", prevSecond: "Previous Second", nextSecond: "Next Second", am: "am", pm: "pm", dateFormat: "mm/dd/yy", firstDayOfWeek: 0, today: "Today", weekHeader: "Wk", weak: "Weak", medium: "Medium", strong: "Strong", passwordPrompt: "Enter a password", emptyMessage: "No results found", searchMessage: "Search results are available", selectionMessage: "{0} items selected", emptySelectionMessage: "No selected item", emptySearchMessage: "No results found", emptyFilterMessage: "No results found", fileChosenMessage: "Files", noFileChosenMessage: "No file chosen", aria: { trueLabel: "True", falseLabel: "False", nullLabel: "Not Selected", star: "1 star", stars: "{star} stars", selectAll: "All items selected", unselectAll: "All items unselected", close: "Close", previous: "Previous", next: "Next", navigation: "Navigation", scrollTop: "Scroll Top", moveTop: "Move Top", moveUp: "Move Up", moveDown: "Move Down", moveBottom: "Move Bottom", moveToTarget: "Move to Target", moveToSource: "Move to Source", moveAllToTarget: "Move All to Target", moveAllToSource: "Move All to Source", pageLabel: "{page}", firstPageLabel: "First Page", lastPageLabel: "Last Page", nextPageLabel: "Next Page", prevPageLabel: "Previous Page", rowsPerPageLabel: "Rows per page", previousPageLabel: "Previous Page", jumpToPageDropdownLabel: "Jump to Page Dropdown", jumpToPageInputLabel: "Jump to Page Input", selectRow: "Row Selected", unselectRow: "Row Unselected", expandRow: "Row Expanded", collapseRow: "Row Collapsed", showFilterMenu: "Show Filter Menu", hideFilterMenu: "Hide Filter Menu", filterOperator: "Filter Operator", filterConstraint: "Filter Constraint", editRow: "Row Edit", saveEdit: "Save Edit", cancelEdit: "Cancel Edit", listView: "List View", gridView: "Grid View", slide: "Slide", slideNumber: "{slideNumber}", zoomImage: "Zoom Image", zoomIn: "Zoom In", zoomOut: "Zoom Out", rotateRight: "Rotate Right", rotateLeft: "Rotate Left", listLabel: "Option List", selectColor: "Select a color", removeLabel: "Remove", browseFiles: "Browse Files", maximizeLabel: "Maximize", minimizeLabel: "Minimize" } };
    zIndex = { modal: 1100, overlay: 1e3, menu: 1e3, tooltip: 1100 };
    translationSource = new D;
    translationObserver = this.translationSource.asObservable();
    getTranslation(e) { return this.translation[e]; }
    setTranslation(e) { this.translation = i(i({}, this.translation), e), this.translationSource.next(this.translation); }
    setConfig(e) { let { csp: a, ripple: s, inputStyle: m, inputVariant: n, theme: p, overlayOptions: h, translation: v, filterMatchModeOptions: g, overlayAppendTo: f, zIndex: T } = e || {}; a && this.csp.set(a), f && this.overlayAppendTo.set(f), s && this.ripple.set(s), m && this.inputStyle.set(m), n && this.inputVariant.set(n), h && (this.overlayOptions = h), v && this.setTranslation(v), g && (this.filterMatchModeOptions = g), T && (this.zIndex = T), p && this.setThemeConfig({ theme: p, csp: a }); }
    static \u0275fac = (() => { let e; return function (s) { return (e || (e = d.\u0275\u0275getInheritedFactory(o)))(s || o); }; })();
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
} return o; })(), I = new b("PRIME_NG_CONFIG");
function G(...o) { let S = o?.map(a => ({ provide: I, useValue: a, multi: !1 })), e = A(() => { let a = c(w); o?.forEach(s => a.setConfig(s)); }); return C([...S, e]); }
export { I as PRIME_NG_CONFIG, w as PrimeNG, P as ThemeProvider, G as providePrimeNG };
