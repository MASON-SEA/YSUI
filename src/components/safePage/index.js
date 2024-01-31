import { ORUIElement, ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export class SafePage extends ORUIElement {
    get top_area() {
        const control = get_control('top', this.shadowRoot);
        return control;
    }
    get bottom_area() {
        const control = get_control('bottom', this.shadowRoot);
        return control;
    }
    init() {
        const html = (ORUI.createElement("orui-grid", { gap: "0" },
            ORUI.createElement("orui-row", { grow: "0", ui_name: "top" }),
            ORUI.createElement("orui-row", null,
                ORUI.createElement("orui-grid", { gap: "0" },
                    ORUI.createElement("slot", null))),
            ORUI.createElement("orui-row", { grow: "0", ui_name: "bottom" })));
        this.import_css('/components/safePage/index.css');
        this.shadowRoot.append(html);
    }
    update(name) {
        const handler = {
            top: 'render_safe_area',
            bottom: 'render_safe_area'
        };
        handler[name] && this[handler[name]](name);
    }
    render_safe_area(name) {
        const area = this[`${name}_area`];
        area.innerHTML = '';
        if (this[name]) {
            const html = (ORUI.createElement("orui-safe-area", { position: name, style: name == 'top' ? 'background: var(--orui-theme-color)' : '' }));
            area.append(html);
        }
    }
    render() {
        this.render_safe_area('top');
        this.render_safe_area('bottom');
    }
}
SafePage.properties = {
    top: {
        type: Boolean,
        default: false
    },
    bottom: {
        type: Boolean,
        default: false
    }
};
customElements.define("orui-safe-page", SafePage);
