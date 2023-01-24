import { Platform, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

import { ActivityIndicator } from "./ActivityIndicator";
import { Touchable, TouchableProps } from "./Touchable";

import { useLayout, useTheme } from "~/hooks";

interface ButtonProps extends TouchableProps {
  title: string;
  activity?: boolean;
  innerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  title,
  disabled,
  activity,
  style,
  innerStyle,
  titleStyle,
  children,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();
  const { padding, margin, fontSize, iconSize, borderRadius } = useLayout();

  return (
    <Touchable disabled={disabled || activity} rippleColor={colors.accent} style={style} {...props}>
      <View
        style={[
          Platform.OS === "android" && style,
          styles.container,
          {
            paddingVertical: padding / 2,
            paddingHorizontal: padding,
            borderRadius,
            backgroundColor: colors.background2,
          },
          innerStyle,
        ]}
      >
        {!!children && (
          <View style={{ marginRight: margin / 2, marginVertical: -padding / 2 }}>{children}</View>
        )}

        <View>
          <ActivityIndicator activity={activity} style={{ left: -iconSize - margin / 2 }} />
        </View>

        <Text
          numberOfLines={1}
          style={[styles.title, { fontSize, color: colors.text }, titleStyle]}
        >
          {title}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  title: {
    flexShrink: 1,
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
