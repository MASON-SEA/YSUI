import { ORUIElement } from "../base/index.js";
export class SafeArea extends ORUIElement {
    init() {
        this.import_css('/components/safeArea/index.css');
    }
    update(name) {
        const handler = {
            position: 'render_position'
        };
        handler[name] && this[handler[name]]();
    }
    render_position() {
        const value = this.position == '' ? '' : `env(safe-area-inset-${this.position})`;
        this.style.setProperty('--safe-height', value);
    }
    render() {
        this.render_position();
    }
}
SafeArea.properties = {
    position: {
        type: ['top', 'bottom'],
        default: ''
    }
};
customElements.define("orui-safe-area", SafeArea);
