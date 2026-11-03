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
| `ysui-button` | 按钮（primary / default / dashed / text / link） |
| `ysui-input` | 单行输入，`input` / `change` 事件带 `detail.value` |
| `ysui-textarea` | 多行输入 |
| `ysui-tag` | 标签，可关闭 |
| `ysui-card` | 卡片（title / extra / body 插槽） |
| `ysui-badge` | 徽标（count / dot） |
| `ysui-modal` | 居中弹层（open / maskClosable） |
| `ysui-empty` | 空状态 |
| `ysui-divider` | 分割线（horizontal / vertical） |

```ts
import "ysuid"; // 注册全部自定义元素
// 或按需
import { Space, Flex, Row, Col, Button, Input, Card, Modal, Tag, Empty } from "ysuid";
```

```html
<ysui-card title="任务">
  <ysui-tag color="primary">进行中</ysui-tag>
  <ysui-button type="primary">新建</ysui-button>
</ysui-card>
```
