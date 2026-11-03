<div align="center">

## YSUI Design

### 基于 YSElement 的 Web Components 组件库，简单易上手

</div>

<p align="center">
  <a href="https://www.npmjs.com/package/ysuid">
    <img src="https://img.shields.io/npm/dt/ysuid.svg" alt="Total Downloads"></a>
  <a href="https://www.npmjs.com/package/ysuid">
    <img src="https://img.shields.io/npm/v/ysuid.svg" alt="Published on NPM">
  </a>
  <a href="https://github.com/MASON-SEA/YSUI">
    <img src="https://img.shields.io/github/contributors/mason-sea/ysui" alt="contributors">
  </a>
  <a href="https://github.com/MASON-SEA/YSUI/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/ysuid.svg" alt="License">
  </a>
</p>

## Install

```bash
npm install ysuid yselement
```

依赖 `yselement@^1.2.0`（批更新、adoptedStyleSheets、keyed 等）。

## 组件

| 标签 | 说明 |
|---|---|
| `ysui-space` | 间距 / 弹性布局容器 |
| `ysui-flex` | 纵向 flex 布局 |
| `ysui-row` / `ysui-col` | 行 / 列 |
| `ysui-grid` / `ysui-grid-item` | CSS Grid 宫格 |
| `ysui-title` | 标题区（左文案 + 右侧插槽） |

```ts
import "ysuid"; // 注册全部自定义元素
// 或按需
import { Space, Flex, Row, Col, Grid, GridItem, Title } from "ysuid";
```

```html
<ysui-flex>
  <ysui-row>
    <ysui-col>A</ysui-col>
    <ysui-col>B</ysui-col>
  </ysui-row>
</ysui-flex>
```
