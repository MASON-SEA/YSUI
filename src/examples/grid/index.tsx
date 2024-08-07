import { YSUI, YSElement } from "yselement";
import "../../components/grid";
import "../../components/gridItem";

export default function GridDemo() {
  return (
    <>
      <ysui-grid row="2" col="3">
        <ysui-grid-item x="1" y="1" width="2" height="1" style="background: var(--ysui-color-primary)">
          <div style="height:1000px;width:1000px">123</div>
        </ysui-grid-item>
        <ysui-grid-item x="3" y="1" width="1" height="2" style="background: var(--ysui-color-success)"></ysui-grid-item>
        <ysui-grid-item x="2" y="2" width="1" height="1" style="background: var(--ysui-color-warning)"></ysui-grid-item>
        <ysui-grid-item x="1" y="2" width="1" height="1" style="background: var(--ysui-color-danger)"></ysui-grid-item>
        <ysui-grid-item x="1" y="2" width="1" height="1" style="background: var(--ysui-color-danger)"></ysui-grid-item>
      </ysui-grid>
    </>
  );
}
