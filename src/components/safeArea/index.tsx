import {ORUIElement, ORUI} from "../base/index.js";

export class SafeArea extends ORUIElement {
    position: string;
    static properties = {
        position: {
            type: ['top', 'bottom'],
            default: ''
        }
    };

    init() {
        this.import_css('/components/safeArea/index.css');
    }

    update(name: string) {
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

customElements.define("orui-safe-area", SafeArea);