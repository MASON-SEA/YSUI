import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

export const JUSTIFY_TYPE = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const ALIGN_TYPE = {
  start: "start",
  end: "end",
  center: "center",
  baseline: "stretch",
};

export const DIRECTION_TYPE = {
  vertical: "column",
  horizontal: "row",
};

export const SIZE_TYPE = {
  large: "var(--ysui-gap-l)",
  middle: "var(--ysui-gap-m)",
  small: "var(--ysui-gap-s)",
  min: "var(--ysui-gap-min)",
};

@custom_element("ysui-space")
export class Space extends YSElement {
  align: string;
  direction: string;
  size: string;
  justify: string;
  wrap: number;
  gap: string;

  static properties = {
    justify: {
      type: Object.keys(JUSTIFY_TYPE),
      default: "start",
    },
    align: {
      type: Object.keys(ALIGN_TYPE),
      default: "start",
    },
    direction: {
      type: Object.keys(DIRECTION_TYPE),
      default: "horizontal",
    },
    size: {
      type: Object.keys(SIZE_TYPE),
      default: "middle",
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: String,
      default: "",
    },
  };

  init() {
    this.import_css(style);
    this.shadowRoot.append(<slot/>);
  }

  render() {
    let gap = SIZE_TYPE[this.size];
    gap = this.gap !== "" ? this.gap : gap;
    this.style.setProperty("--gap-size", gap);
    this.style.flexDirection = DIRECTION_TYPE[this.direction];
    this.style.alignItems = ALIGN_TYPE[this.align];
    this.style.flexWrap = this.wrap ? "wrap" : "";
    this.style.justifyContent = JUSTIFY_TYPE[this.justify];
  }
}
