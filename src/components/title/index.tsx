import { YSUI, YSElement, custom_element, use_ref } from "yselement";
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
    const titleRef = use_ref();
    const html = (
      <ysui-grid size="small">
        <ysui-row grow="0" align="center">
          <ysui-col ref={titleRef} className="ysui_title"></ysui-col>
          <ysui-col grow="0" size="small">
            <slot name="right" />
          </ysui-col>
        </ysui-row>
        <ysui-row>
          <slot />
        </ysui-row>
      </ysui-grid>
    );
    this.title_ctr = titleRef.current;
    this.shadowRoot.append(html);
  }

  render() {
    this.title_ctr.innerHTML = this.text;
    this.init_custom_style();
  }

  init_custom_style() {
    let style = this.custom_style;
    let styles = style.split(";");
    styles.map((s) => {
      var k_v = s.split(":");
      this.title_ctr.style[k_v[0]] = k_v[1];
    });
    // for(var k in styles) {
    //     this.style[k] = styles
    // }
    // if (style) {
    //     this.style.cssText = style
    // }
  }
}