import { memo } from "react";
import { StyleSheet, View } from "react-native";

import { ActivityIndicator } from "./ActivityIndicator";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Input } from "./Input";
import { Label } from "./Label";

import { useLayout, useTheme } from "~/hooks";

interface WalletHeaderProps {
  isSearching: boolean;
  balance: string | undefined;
  //
  onFilterChange: (text: string) => void;
}

export const WalletHeader = memo(
  ({
    isSearching,
    balance,
    //
    onFilterChange,
  }: WalletHeaderProps) => {
    const { padding, margin, iconSize, borderRadius, fontSize, borderWidth } = useLayout();
    const { colors } = useTheme();

    return (
      <View
        style={{
          padding,
          borderRadius,
          marginBottom: margin / 2,
          backgroundColor: colors.background,
        }}
      >
        <Label style={[styles.title, { fontSize: fontSize * 1.33, marginBottom: margin * 1.5 }]}>
          Debit Cards
        </Label>

        <View style={styles.row}>
          <Label style={[styles.balance, { fontSize: fontSize * 2 }]}>{balance ?? "\u200b"}</Label>
          <View style={{ width: iconSize }}>
            <ActivityIndicator activity={balance === undefined} color={colors.accent} />
          </View>
        </View>

        <View style={[styles.row, { marginBottom: margin }]}>
          <Label style={{ flexShrink: 1, color: colors.lightText }}>
            Total balance in&nbsp;<Label>EUR</Label>
          </Label>
          <Icon name="Euro" style={{ marginLeft: margin / 3 }} />
        </View>

        <View
          style={{
            marginBottom: margin,
            borderBottomWidth: borderWidth,
            borderColor: colors.background2,
          }}
        />

        <Button title="Get a&nbsp;new&nbsp;card" style={{ marginBottom: margin / 2 }}>
          <Icon name="Add" disabled />
        </Button>

        <Input
          placeholder="Search"
          returnKeyType="search"
          selectTextOnFocus
          renderRight={
            <Icon name="Search" style={{ margin: margin / 2 }}>
              <ActivityIndicator
                activity={isSearching}
                color="#34AA54"
                style={{ backgroundColor: colors.background }}
              />
            </Icon>
          }
          //
          onChangeText={onFilterChange}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontWeight: "500",
  },

  balance: {
    fontWeight: "500",
  },
});
