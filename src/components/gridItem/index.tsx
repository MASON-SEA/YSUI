import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-grid-item")
export class TileItem extends YSElement {
  static properties = {
    x: {
      type: Number,
      default: 1,
    },
    y: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 1,
    },
  };
  x: number;
  y: number;
  width: number;
  height: number;

  init() {
    this.import_css(style);
    this.shadowRoot.append(<slot />);
  }

  render() {
    this.render_x();
    this.render_y();
    this.render_width();
    this.render_height();
  }

  render_x() {
    this.style.setProperty("--x", this.x.toString());
  }

  render_y() {
    this.style.setProperty("--y", this.y.toString());
  }

  render_width() {
    this.style.setProperty("--width", this.width.toString());
  }

  render_height() {
    this.style.setProperty("--height", this.height.toString());
  }

  update(key: string) {
    const handler = {
      x: "render_x",
      y: "render_y",
      width: "render_width",
      height: "render_height",
    };
    handler[key] && this[handler[key]]();
  }
}
