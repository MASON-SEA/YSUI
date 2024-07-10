import { YSUI, YSElement, custom_element } from "yselement";
import { SIZE_TYPE, Space } from "../space/index.js";
import { ALIGN_TYPE, JUSTIFY_TYPE } from "../space/index.js";
import style from "./index.less?inline";

@custom_element("ysui-row")
export class Row extends YSElement {
  size: string;
  grow: number;
  justify: string;
  align: string;
  gap: string;
  space: Space;
  static properties = {
    size: {
      type: Object.keys(SIZE_TYPE),
      default: "middle",
    },
    grow: {
      type: Number,
      default: 1,
    },
    justify: {
      type: Object.keys(JUSTIFY_TYPE),
      default: "start",
    },
    align: {
      type: Object.keys(ALIGN_TYPE),
      default: "start",
    },
    gap: {
      type: String,
      default: "",
    },
  };

  init() {
    const html = (
      <ysui-space style="width: 100%;height: 100%;">
        <slot />
      </ysui-space>
    );
    this.import_css(style);
    this.shadowRoot.append(html);
    this.space = this.shadowRoot.querySelector("ysui-space");
  }

  update(name: string) {
    const handler = {
      size: "render_size",
      grow: "render_grow",
      justify: "render_justify",
      align: "render_align",
      gap: "render_gap",
    };

    handler[name] && this[handler[name]]();
  }

  render_size() {
    this.space.size = this.size;
  }

  render_grow() {
    const grow = this.grow;
    this.style.flex = grow.toString();
    if (!grow) {
      this.style.flexBasis = "auto";
      this.style.flexShrink = "0";
    }
  }

  render_justify() {
    this.space.justify = this.justify;
  }

  render_align() {
    this.space.align = this.align;
  }

  render_gap() {
    this.space.gap = this.gap;
  }

  render() {
    this.render_size();
    this.render_gap();
    this.render_grow();
    this.render_justify();
    this.render_align();
  }
}
