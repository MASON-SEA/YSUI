import {ORUI, ORUIElement} from "../index";
import styles from "./index.css";

export class Cache extends ORUIElement {
    init() {
        this.import_css(styles);
    }

    append(...dom) {
        this.shadowRoot.append(...dom);
    }

    querySelector(selector: string) {
        return this.shadowRoot.querySelector(selector);
    }
}

customElements.define("orui-cache", Cache);