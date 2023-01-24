import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

import { themes } from "~/constants";

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}

export function useTheme() {
  const colorScheme = useColorScheme();

  if (colorScheme === "light") return themes.light;
  return themes.dark;
}
