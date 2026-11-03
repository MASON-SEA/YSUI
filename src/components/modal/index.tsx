import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-modal")
export class Modal extends YSElement {
  open: boolean;
  title: string;
  maskClosable: boolean;

  static properties = {
    open: { type: Boolean, default: false, reflect: true },
    title: { type: String, default: "" },
    maskClosable: { type: Boolean, default: true },
  };

  private root: HTMLElement | null = null;
  private titleEl: HTMLElement | null = null;
  private prevOpen = false;

  init() {
    this.import_css(style);
    const rootRef = { current: null as HTMLElement | null };
    const titleRef = { current: null as HTMLElement | null };
    const html = (
      <div ref={rootRef} className="ysui-modal" part="root" hidden>
        <div className="ysui-modal__mask" part="mask" />
        <div className="ysui-modal__wrap" part="wrap">
          <div className="ysui-modal__dialog" part="dialog" role="dialog" aria-modal="true">
            <div className="ysui-modal__header" part="header">
              <div ref={titleRef} className="ysui-modal__title" part="title" />
              <button type="button" className="ysui-modal__close" part="close" aria-label="关闭">
                ×
              </button>
            </div>
            <div className="ysui-modal__body" part="body">
              <slot />
            </div>
            <div className="ysui-modal__footer" part="footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    );
    this.shadowRoot!.append(html);
    this.root = rootRef.current;
    this.titleEl = titleRef.current;

    this.root?.querySelector(".ysui-modal__close")?.addEventListener("click", () => this.close());
    this.root?.querySelector(".ysui-modal__mask")?.addEventListener("click", () => {
      if (this.maskClosable !== false) this.close();
    });
  }

  private close() {
    this.open = false;
  }

  update(name: string) {
    if (["open", "title", "maskClosable"].includes(name)) this.render();
  }

  render() {
    if (this.titleEl) this.titleEl.textContent = this.title || "";
    const isOpen = !!this.open;
    if (this.root) this.root.hidden = !isOpen;
    this.classList.toggle("is-open", isOpen);
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
    if (isOpen && !this.prevOpen) {
      this.dispatchEvent(new CustomEvent("open", { bubbles: true, composed: true }));
    } else if (!isOpen && this.prevOpen) {
      this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
    }
    this.prevOpen = isOpen;
  }

  disconnectedCallback() {
    if (typeof document !== "undefined" && this.prevOpen) {
      document.body.style.overflow = "";
    }
    // @ts-ignore YSElement base may define this
    super.disconnectedCallback?.();
  }
}
