import {ORUIElement, ORUI} from "../base/index.js";
import {get_control} from "../utils/index.js";

export class SafePage extends ORUIElement {
    position: string;
    static properties = {
        top: {
            type: Boolean,
            default: false
        },
        bottom: {
            type: Boolean,
            default: false
        }
    };

    get top_area() {
        const control = get_control('top', this.shadowRoot);
        return control
    }

    get bottom_area() {
        const control = get_control('bottom', this.shadowRoot);
        return control
    }

    init() {
        const html = (
            <orui-grid gap="0">
                <orui-row grow="0" ui_name="top"/>
                <orui-row>
                    <orui-grid gap="0">
                        <slot/>
                    </orui-grid>
                </orui-row>
                <orui-row grow="0" ui_name="bottom"/>
            </orui-grid>
        );
        this.import_css('/components/safePage/index.css');
        this.shadowRoot.append(html);
    }

    update(name: string) {
        const handler = {
            top: 'render_safe_area',
            bottom: 'render_safe_area'
        };

        handler[name] && this[handler[name]](name);
    }

    render_safe_area(name: string) {
        const area = this[`${name}_area`] as HTMLElement;
        area.innerHTML = '';

        if(this[name]) {
            const html = (
                <orui-safe-area
                    position={name}
                    style={name == 'top' ? 'background: var(--orui-theme-color)' : ''}
                />
            );
            area.append(html);
        }
    }

    render() {
        this.render_safe_area('top');
        this.render_safe_area('bottom');
    }
}

customElements.define("orui-safe-page", SafePage);