import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-title")
export class Title extends YSElement {
  static properties = {
    text: {
      type: String,
      default: "",
    },
    custom_style: {
      type: String,
      default: "",
    },
  };
  text: string;
  title_ctr: HTMLElement;
  custom_style: string;

  init() {
    this.import_css(style);
    const titleRef = { current: null as HTMLElement | null };
    const html = (
      <ysui-flex gap="0">
        <ysui-row grow={0} align="center" gap="0">
          <ysui-col ref={titleRef} className="ysui_title"></ysui-col>
          <ysui-col grow={0} size="small">
            <slot name="right" />
          </ysui-col>
        </ysui-row>
        <ysui-row>
          <slot />
        </ysui-row>
      </ysui-flex>
    );
    this.title_ctr = titleRef.current as HTMLElement;
    this.shadowRoot!.append(html);
  }

  update(name: string) {
    if (name === "text") {
      this.render_text();
    } else if (name === "custom_style") {
      this.init_custom_style();
    }
  }

  render_text() {
    if (this.title_ctr) this.title_ctr.innerHTML = this.text;
  }

  render() {
    this.render_text();
    this.init_custom_style();
  }

  init_custom_style() {
    if (!this.title_ctr) return;
    const styleText = this.custom_style || "";
    styleText.split(";").forEach((s) => {
      const [k, v] = s.split(":").map((x) => x?.trim());
      if (k && v) {
        (this.title_ctr.style as any)[k] = v;
      }
    });
  }
}
