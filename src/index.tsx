import "./library.less";

export { Space, JUSTIFY_TYPE, ALIGN_TYPE, DIRECTION_TYPE, SIZE_TYPE } from "./components/space";
export { Flex } from "./components/flex";
export { Row } from "./components/row";
export { Col } from "./components/col";
export { Tile as Grid } from "./components/grid";
export { TileItem as GridItem } from "./components/gridItem";
export { Title } from "./components/title";

// Side-effect registration of custom elements
import "./components/space";
import "./components/col";
import "./components/flex";
import "./components/row";
import "./components/title";
import "./components/grid";
import "./components/gridItem";
