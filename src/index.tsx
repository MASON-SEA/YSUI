import "./library.less";

export { Space, JUSTIFY_TYPE, ALIGN_TYPE, DIRECTION_TYPE, SIZE_TYPE } from "./components/space";
export { Flex } from "./components/flex";
export { Row } from "./components/row";
export { Col } from "./components/col";
export { Tile as Grid } from "./components/grid";
export { TileItem as GridItem } from "./components/gridItem";
export { Title } from "./components/title";
export { Button } from "./components/button";
export { Input } from "./components/input";
export { Textarea } from "./components/textarea";
export { Tag } from "./components/tag";
export { Card } from "./components/card";
export { Badge } from "./components/badge";
export { Modal } from "./components/modal";
export { Empty } from "./components/empty";
export { Divider } from "./components/divider";

// Side-effect registration of custom elements
import "./components/space";
import "./components/col";
import "./components/flex";
import "./components/row";
import "./components/title";
import "./components/grid";
import "./components/gridItem";
import "./components/button";
import "./components/input";
import "./components/textarea";
import "./components/tag";
import "./components/card";
import "./components/badge";
import "./components/modal";
import "./components/empty";
import "./components/divider";
