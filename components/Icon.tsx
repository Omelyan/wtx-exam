import { FunctionComponent, lazy, Suspense } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { layout } from "~/constants";

const allIcons = {
  Activity: lazy(() => import("./Icons/Activity")),
  Add: lazy(() => import("./Icons/Add")),
  Drawer: lazy(() => import("./Icons/Drawer")),
  Euro: lazy(() => import("./Icons/Euro")),
  Logo: lazy(() => import("./Icons/Logo")),
  Remove: lazy(() => import("./Icons/Remove")),
  Search: lazy(() => import("./Icons/Search")),
  TopUp: lazy(() => import("./Icons/TopUp")),
  Withdraw: lazy(() => import("./Icons/Withdraw")),
};

export type IconName = keyof typeof allIcons;

type IconProps<Name extends IconName> = Parameters<(typeof allIcons)[Name]>[0];
type OmitProps = "";
type IconOptionProps<Name extends IconName> = Omit<IconProps<Name>, OmitProps>;

interface IconContainerProps<Name extends IconName> extends TouchableOpacityProps {
  name: Name;
}

export function Icon<Name extends IconName>({
  name,
  children,
  style,
  //
  onPress,
  ...props
}: IconContainerProps<Name> & IconOptionProps<Name>) {
  const Content = allIcons[name] as FunctionComponent<IconProps<Name>>;

  if (Content === undefined) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      hitSlop={layout.hitSlop}
      style={[styles.container, style]}
      {...props}
      //
      onPress={onPress}
    >
      <Suspense>
        <Content {...props} />
      </Suspense>

      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
