import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-tag")
export class Tag extends YSElement {
  color: string;
  closable: boolean;

  static properties = {
    color: {
      type: ["default", "primary", "success", "warning", "danger"],
      default: "default",
    },
    closable: { type: Boolean, default: false },
  };

  private closeBtn: HTMLButtonElement | null = null;

  init() {
    this.import_css(style);
    const closeRef = { current: null as HTMLButtonElement | null };
    const html = (
      <span className="ysui-tag" part="tag">
        <span className="ysui-tag__label">
          <slot />
        </span>
        <button ref={closeRef} type="button" className="ysui-tag__close" part="close" hidden aria-label="关闭">
          ×
        </button>
      </span>
    );
    this.shadowRoot!.append(html);
    this.closeBtn = closeRef.current;
    this.closeBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
    });
  }

  update(name: string) {
    if (name === "color" || name === "closable") this.render();
  }

  render() {
    const hostClass = `ysui-tag--${this.color || "default"}`;
    this.classList.remove(
      "ysui-tag--default",
      "ysui-tag--primary",
      "ysui-tag--success",
      "ysui-tag--warning",
      "ysui-tag--danger"
    );
    this.classList.add(hostClass);
    if (this.closeBtn) this.closeBtn.hidden = !this.closable;
  }
}
