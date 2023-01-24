import { Text, TextProps } from "react-native";

import { useLayout, useTheme } from "~/hooks";

export const Label = ({ style, children, ...props }: TextProps) => {
  const { fontSize } = useLayout();
  const { colors } = useTheme();

  return (
    <Text style={[{ fontSize, color: colors.text }, style]} {...props}>
      {children}
    </Text>
  );
};
