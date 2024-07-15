import { YSUI } from "yselement";
import GridDemo from "./examples/grid";
import "./index";

export function FlexDemo() {
  const html = (
      <ysui-flex>
          <ysui-row>
              <ysui-col style="background: var(--ysui-color-primary)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-success)"></ysui-col>
          </ysui-row>
          <ysui-row>
              <ysui-col style="background: var(--ysui-color-warning)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-danger)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-yellow)"></ysui-col>
          </ysui-row>
          <ysui-row>
              <ysui-col style="background: var(--ysui-color-orange)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-wathet)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-text)"></ysui-col>
              <ysui-col style="background: var(--ysui-color-text-secondary)"></ysui-col>
          </ysui-row>
          <ysui-row style="background: var(--ysui-color-weak)"></ysui-row>
      </ysui-flex>
  );
  return html
}

document.getElementById("app").appendChild(<GridDemo />);
