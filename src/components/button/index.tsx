import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-button")
export class Button extends YSElement {
  type: string;
  size: string;
  disabled: boolean;
  block: boolean;
  htmlType: string;

  static properties = {
    type: {
      type: ["primary", "default", "dashed", "text", "link"],
      default: "default",
    },
    size: {
      type: ["small", "middle", "large"],
      default: "middle",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    htmlType: {
      type: ["button", "submit", "reset"],
      default: "button",
    },
  };

  private btn: HTMLButtonElement | null = null;

  init() {
    this.import_css(style);
    const btnRef = { current: null as HTMLButtonElement | null };
    const html = (
      <button ref={btnRef} className="ysui-btn" part="button">
        <slot />
      </button>
    );
    this.btn = btnRef.current;
    this.shadowRoot!.append(html);
    this.btn?.addEventListener("click", (e) => {
      if (this.disabled) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return;
      }
      this.dispatchEvent(
        new CustomEvent("click", { bubbles: true, composed: true, detail: { originalEvent: e } })
      );
    });
  }

  update(name: string) {
    if (["type", "size", "disabled", "block", "htmlType"].includes(name)) {
      this.render();
    }
  }

  render() {
    if (!this.btn) return;
    this.btn.type = (this.htmlType || "button") as "button" | "submit" | "reset";
    this.btn.disabled = !!this.disabled;
    this.btn.className = [
      "ysui-btn",
      `ysui-btn--${this.type || "default"}`,
      `ysui-btn--${this.size || "middle"}`,
      this.block ? "ysui-btn--block" : "",
      this.disabled ? "is-disabled" : "",
    ]
      .filter(Boolean)
      .join(" ");
    this.style.display = this.block ? "block" : "inline-block";
    this.style.width = this.block ? "100%" : "";
  }
}
