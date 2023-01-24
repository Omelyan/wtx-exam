import { createContext, PropsWithChildren } from "react";
import { PixelRatio, useWindowDimensions } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { layout } from "~/constants";

interface Layout {
  insets: EdgeInsets;
  padding: number;
  margin: number;
  fontSize: number;
  iconSize: number;
  borderWidth: number;
  borderRadius: number;
  headerHeight: number;
  //
  normalize: (value: number) => number;
}

// @ts-ignore: :(
export const LayoutContext = createContext<Layout>();

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const insets = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();

  const padding = normalize(24);
  const margin = normalize(16);
  const fontSize = normalize(14);
  const iconSize = normalize(20);
  const borderWidth = normalize(1);
  const borderRadius = normalize(10);
  const headerHeight = normalize(90);

  function normalize(value: number) {
    return Math.round(PixelRatio.roundToNearestPixel(value * fontScale * layout.scale));
  }

  const value: Layout = {
    insets,
    padding,
    margin,
    fontSize,
    iconSize,
    borderWidth,
    borderRadius,
    headerHeight,
    //
    normalize,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
