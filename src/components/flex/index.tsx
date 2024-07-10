import { YSUI, YSElement, custom_element } from "yselement";
import { Space, SIZE_TYPE } from "../space/index.js";
import style from "./index.less?inline";

@custom_element("ysui-flex")
export class Grid extends YSElement {
    size: string;
    gap: string;
    space: Space;
    static properties = {
        size: {
            type: Object.keys(SIZE_TYPE),
            default: 'middle'
        },
        gap: {
            type: String,
            default: ''
        }
    };

    init() {
        const html = (
            <ysui-space direction="vertical" style="width: 100%;height: 100%">
                <slot/>
            </ysui-space>
        );
        this.import_css(style);
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('ysui-space');
    }

    render() {
        this.space.size = this.size;
        this.space.gap = this.gap;
    }
}