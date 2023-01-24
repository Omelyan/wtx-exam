import { Platform, StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { useLayout, useTheme } from "~/hooks";

interface InputProps {
  renderRight?: JSX.Element;
}

export const Input = ({ style, children, renderRight, ...props }: InputProps & TextInputProps) => {
  const { padding, borderWidth, borderRadius, fontSize } = useLayout();
  const { colors } = useTheme();

  return (
    <View
      style={[
        style,
        styles.container,
        { borderWidth, borderRadius, borderColor: colors.background3 },
      ]}
    >
      <TextInput
        blurOnSubmit
        maxLength={200}
        cursorColor={colors.accent}
        selectionColor={colors.accent}
        placeholderTextColor={colors.lightText}
        style={[
          styles.input,
          {
            fontSize,
            color: colors.text,
            paddingHorizontal: padding / 2,
            paddingVertical: Platform.OS === "ios" ? padding / 2 : padding / 4,
          },
        ]}
        {...props}
      />
      {renderRight}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontWeight: "500",
  },
});
