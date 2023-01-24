import { Dimensions, Insets } from "react-native";

const { width, height } = Dimensions.get("window");
const templateWidth = 428;
const scale = width / templateWidth;
const hitSlop: Insets = { left: 10, right: 10, top: 10, bottom: 10 };

export default {
  width,
  height,
  scale,
  hitSlop,
};
