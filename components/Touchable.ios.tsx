import { TouchableOpacity } from "react-native";

import { TouchableProps } from "./Touchable";

export const Touchable = ({ activeOpacity = 0.67, ...props }: TouchableProps) => {
  return <TouchableOpacity activeOpacity={activeOpacity} {...props} />;
};
