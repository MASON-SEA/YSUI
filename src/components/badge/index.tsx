import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-badge")
export class Badge extends YSElement {
  count: number | string;
  dot: boolean;
  overflowCount: number;

  static properties = {
    count: { type: Number, default: 0 },
    dot: { type: Boolean, default: false },
    overflowCount: { type: Number, default: 99 },
  };

  private mark: HTMLElement | null = null;

  init() {
    this.import_css(style);
    const markRef = { current: null as HTMLElement | null };
    const html = (
      <span className="ysui-badge">
        <span className="ysui-badge__content">
          <slot />
        </span>
        <sup ref={markRef} className="ysui-badge__mark" part="mark" hidden />
      </span>
    );
    this.shadowRoot!.append(html);
    this.mark = markRef.current;
  }

  update(name: string) {
    if (["count", "dot", "overflowCount"].includes(name)) this.render();
  }

  render() {
    if (!this.mark) return;
    if (this.dot) {
      this.mark.hidden = false;
      this.mark.textContent = "";
      this.mark.className = "ysui-badge__mark ysui-badge__mark--dot";
      return;
    }
    const n = Number(this.count);
    if (!n || n <= 0) {
      this.mark.hidden = true;
      this.mark.textContent = "";
      return;
    }
    const overflow = Number(this.overflowCount) || 99;
    this.mark.hidden = false;
    this.mark.className = "ysui-badge__mark ysui-badge__mark--count";
    this.mark.textContent = n > overflow ? `${overflow}+` : String(n);
  }
}
