import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-grid")
export class Tile extends YSElement {
  static properties = {
    row: {
      type: Number,
      default: 2,
    },
    col: {
      type: Number,
      default: 3,
    },
  };
  row: number;
  col: number;

  init() {
    this.import_css(style);
    this.shadowRoot.append(<slot />);
  }

  render() {
    this.render_row();
    this.render_col();
  }

  render_row() {
    this.style.setProperty("--row", this.row.toString());
  }

  render_col() {
    this.style.setProperty("--col", this.col.toString());
  }

  update(key: string) {
    const handler = {
      row: "render_row",
      col: "render_col",
    };
    handler[key] && this[handler[key]]();
  }
}
