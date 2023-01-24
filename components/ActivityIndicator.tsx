import { useEffect, useRef, useState } from "react";
import { ColorValue, StyleSheet, ViewProps } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { Icon } from "./Icon";

interface ActivityIndicatorProps extends ViewProps {
  activity?: boolean;
  delay?: number;
  color?: ColorValue;
}

export const ActivityIndicator = ({
  activity,
  delay = 0,
  color,
  style,
  children,
  ...props
}: ActivityIndicatorProps) => {
  const [, update] = useState();
  const visibility = useRef<boolean>();
  const opacity = useSharedValue(0);
  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(
    () => {
      visibility.current = activity;
      opacity.value = activity
        ? withDelay(delay, withTiming(1, timing))
        : withDelay(
            duration,
            withTiming(0, timing, finished => {
              // @ts-ignore: {}
              if (finished) runOnJS(update)({});
            })
          );
    },
    //
    [opacity, activity, delay]
  );

  if (activity || visibility.current) {
    return (
      <Animated.View style={[styles.container, containerStyle, style]} {...props}>
        {children}
        <Icon name="Activity" color={color} />
      </Animated.View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
});

const duration = 300;
const timing = { duration };
