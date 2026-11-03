import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-divider")
export class Divider extends YSElement {
  type: string;
  dashed: boolean;

  static properties = {
    type: { type: ["horizontal", "vertical"], default: "horizontal" },
    dashed: { type: Boolean, default: false },
  };

  init() {
    this.import_css(style);
    this.shadowRoot!.append(<div className="ysui-divider" part="divider" />);
  }

  update(name: string) {
    if (name === "type" || name === "dashed") this.render();
  }

  render() {
    this.classList.toggle("is-vertical", this.type === "vertical");
    this.classList.toggle("is-dashed", !!this.dashed);
    this.setAttribute("role", "separator");
    this.setAttribute("aria-orientation", this.type === "vertical" ? "vertical" : "horizontal");
  }
}
