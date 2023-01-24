import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import { Icon } from "./Icon";

import { useLayout, useTheme } from "~/hooks";

interface HeaderProps {
  contentOffset: SharedValue<number>;
}

export const Header = memo(({ contentOffset }: HeaderProps) => {
  const { padding, insets, borderWidth, headerHeight, normalize } = useLayout();
  const { colors } = useTheme();

  const maxContainerOffset = normalize(50);
  const maxContentOffset = normalize(15);

  const translation = useDerivedValue(() =>
    interpolate(contentOffset.value, [0, headerHeight], [0, 1], Extrapolate.CLAMP)
  );

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translation.value * -maxContainerOffset }],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translation.value * maxContentOffset }],
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        {
          padding,
          height: headerHeight + insets.top,
          borderBottomWidth: borderWidth * 2,
          borderColor: colors.background2,
          backgroundColor: colors.background,
        },
        containerStyle,
      ]}
    >
      <Animated.View style={[styles.content, contentStyle]}>
        <View style={styles.column}>
          <Icon name="Drawer" style={styles.drawer} />
        </View>

        <Icon name="Logo" disabled />

        <View style={styles.column} />
      </Animated.View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  column: {
    flex: 1,
  },

  drawer: {
    alignSelf: "flex-start",
  },
});
