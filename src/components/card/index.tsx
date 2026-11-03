import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-card")
export class Card extends YSElement {
  title: string;
  bordered: boolean;
  hoverable: boolean;

  static properties = {
    title: { type: String, default: "" },
    bordered: { type: Boolean, default: true },
    hoverable: { type: Boolean, default: false },
  };

  private headEl: HTMLElement | null = null;
  private titleEl: HTMLElement | null = null;

  init() {
    this.import_css(style);
    const headRef = { current: null as HTMLElement | null };
    const titleRef = { current: null as HTMLElement | null };
    const html = (
      <div className="ysui-card" part="card">
        <div ref={headRef} className="ysui-card__head" part="head" hidden>
          <div ref={titleRef} className="ysui-card__title" part="title" />
          <div className="ysui-card__extra" part="extra">
            <slot name="extra" />
            <slot name="header" />
          </div>
        </div>
        <div className="ysui-card__body" part="body">
          <slot />
        </div>
      </div>
    );
    this.shadowRoot!.append(html);
    this.headEl = headRef.current;
    this.titleEl = titleRef.current;
  }

  update(name: string) {
    if (["title", "bordered", "hoverable"].includes(name)) this.render();
  }

  render() {
    if (this.titleEl) this.titleEl.textContent = this.title || "";
    if (this.headEl) this.headEl.hidden = !(this.title || this.querySelector('[slot="extra"],[slot="header"]'));
    this.classList.toggle("is-bordered", this.bordered !== false);
    this.classList.toggle("is-hoverable", !!this.hoverable);
  }
}
