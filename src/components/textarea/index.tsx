import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-textarea")
export class Textarea extends YSElement {
  value: string;
  placeholder: string;
  disabled: boolean;
  rows: number;

  static properties = {
    value: { type: String, default: "", reflect: true },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    rows: { type: Number, default: 3 },
  };

  private area: HTMLTextAreaElement | null = null;

  init() {
    this.import_css(style);
    const areaRef = { current: null as HTMLTextAreaElement | null };
    const html = <textarea ref={areaRef} className="ysui-textarea" part="textarea" />;
    this.shadowRoot!.append(html);
    this.area = areaRef.current;
    this.area?.addEventListener("input", () => {
      const next = this.area!.value;
      this.value = next;
      this.dispatchEvent(
        new CustomEvent("input", { bubbles: true, composed: true, detail: { value: next } })
      );
    });
    this.area?.addEventListener("change", () => {
      const next = this.area!.value;
      this.value = next;
      this.dispatchEvent(
        new CustomEvent("change", { bubbles: true, composed: true, detail: { value: next } })
      );
    });
  }

  update(name: string) {
    if (["value", "placeholder", "disabled", "rows"].includes(name)) this.render();
  }

  render() {
    if (!this.area) return;
    if (this.area.value !== (this.value ?? "")) this.area.value = this.value ?? "";
    this.area.placeholder = this.placeholder || "";
    this.area.disabled = !!this.disabled;
    this.area.rows = Number(this.rows) || 3;
  }
}
