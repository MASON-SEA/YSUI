import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-empty")
export class Empty extends YSElement {
  description: string;

  static properties = {
    description: { type: String, default: "暂无数据" },
  };

  private descEl: HTMLElement | null = null;

  init() {
    this.import_css(style);
    const descRef = { current: null as HTMLElement | null };
    const html = (
      <div className="ysui-empty" part="empty">
        <div className="ysui-empty__icon" part="icon" aria-hidden="true">
          <slot name="image">⬚</slot>
        </div>
        <div ref={descRef} className="ysui-empty__desc" part="description" />
        <div className="ysui-empty__extra">
          <slot />
        </div>
      </div>
    );
    this.shadowRoot!.append(html);
    this.descEl = descRef.current;
  }

  update(name: string) {
    if (name === "description") this.render();
  }

  render() {
    if (this.descEl) this.descEl.textContent = this.description || "暂无数据";
  }
}
