import { StatusBar } from "expo-status-bar";
import { FlatListProps, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { ActivityIndicator, Header } from "~/components";
import { useLayout, useTheme } from "~/hooks";

interface DefaultSceneProps<ItemT> extends FlatListProps<ItemT> {
  activity?: boolean;
}

const ContentContainer = <ItemT,>(props: DefaultSceneProps<ItemT>) => {
  const { padding, insets, headerHeight } = useLayout();
  const { schema, colors } = useTheme();

  const offset = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    offset.value = y;
  });

  return (
    <>
      <StatusBar style={schema === "light" ? "dark" : "light"} />

      <Header contentOffset={offset} />

      <Animated.FlatList
        scrollEventThrottle={8}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background2 }}
        contentContainerStyle={[
          styles.content,
          {
            padding: padding * 0.75,
            paddingTop: padding * 0.75 + insets.top + headerHeight,
            paddingBottom: padding * 0.75 + insets.bottom,
          },
        ]}
        //
        onScroll={onScroll}
        {...props}
      />

      <ActivityIndicator activity={props.activity} style={{ backgroundColor: colors.tint }} />
    </>
  );
};

const IOSContentContainerWrapper = <ItemT,>(props: DefaultSceneProps<ItemT>) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
      <ContentContainer {...props} />
    </KeyboardAvoidingView>
  );
};

export const List = Platform.select({
  ios: IOSContentContainerWrapper,
  default: ContentContainer,
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
  },
});
