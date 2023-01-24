import { memo } from "react";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";
import Animated, { AnimateProps, FadeIn } from "react-native-reanimated";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { Label } from "./Label";

import { miscellaneous } from "~/constants";
import { useLayout, useTheme } from "~/hooks";
import { CreditCardStatus, CreditCardType } from "~/types";
import { formatCurrency } from "~/utils";

interface CardProps {
  id: number;
  status: CreditCardStatus;
  type: CreditCardType;
  holder: string;
  number: string;
  balance: number;
  isOnTop: boolean;
  //
  onPressRemove: ({ id }: { id: number }) => void;
}

export const Card = memo(
  ({
    id,
    status,
    type,
    holder,
    number,
    balance,
    isOnTop,
    style,
    //
    onPressRemove,
    ...props
  }: CardProps & AnimateProps<ViewProps>) => {
    const { padding, margin, normalize, fontSize, borderRadius } = useLayout();
    const { colors } = useTheme();

    const controlButtonProps = {
      style: [styles.control, { marginHorizontal: normalize(2), marginTop: normalize(4) }],
      innerStyle: [styles.controlInner, { backgroundColor: colors.background }],
    };

    return (
      <Animated.View
        {...props}
        style={[style, styles.container, { marginBottom: margin / 2, borderRadius }]}
      >
        {/* Details */}
        <View style={[styles.detailsContainer, { backgroundColor: colors.background }]}>
          <View style={[styles.infoContainer, { padding, paddingRight: padding / 2 }]}>
            {/* Status */}
            <Label
              style={[
                styles.status,
                { marginBottom: margin, fontSize: fontSize * 0.85, color: statusColors[status] },
              ]}
            >
              {status}
            </Label>

            {/* Holder name */}
            <Label numberOfLines={1} style={[styles.holder, { fontSize: fontSize * 1.15 }]}>
              {holder}
            </Label>

            {/* Number */}
            <View style={[styles.numberContainer, { marginBottom: margin }]}>
              <Label style={{ fontSize: normalize(10), color: colors.background4 }}>
                {miscellaneous.asterisk}
              </Label>
              <Label style={styles.number}>{number}</Label>
            </View>

            {/* Balance */}
            <Label numberOfLines={1} style={[styles.balance, { fontSize: fontSize * 1.4 }]}>
              {formatCurrency(balance)}
            </Label>
          </View>

          <View style={[styles.typeContainer, { padding, paddingLeft: padding / 2 }]}>
            <Type name={type} />
            <VisaLogo />
          </View>
        </View>

        {/* Controls */}
        <View style={[styles.controlsContainer, { marginHorizontal: -normalize(4) }]}>
          {status === "CANCELED" ? (
            <>
              {/* Remove */}
              <Button title="Remove" {...controlButtonProps} onPress={() => onPressRemove({ id })}>
                <Icon name="Remove" disabled />
              </Button>
            </>
          ) : (
            <>
              {/* Top up */}
              <Button
                title="Top&nbsp;up"
                {...controlButtonProps}
                titleStyle={isOnTop && styles.controlDisabled}
                disabled={isOnTop}
              >
                <Icon name="TopUp" style={isOnTop && styles.controlDisabled} disabled />
              </Button>

              {/* Withdraw */}
              <Button title="Withdraw" {...controlButtonProps}>
                <Icon name="Withdraw" disabled />
              </Button>
            </>
          )}
        </View>
      </Animated.View>
    );
  }
);

const Type = memo(({ name }: { name: CreditCardType }) => {
  const { colors } = useTheme();
  const { padding, fontSize } = useLayout();

  switch (name) {
    case "virtual":
      return (
        <Animated.View entering={FadeIn.delay(600)}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              paddingHorizontal: padding / 2,
              paddingVertical: padding / 3,
              borderRadius: Number.MAX_SAFE_INTEGER,
              backgroundColor: "#00CBD7",
            }}
          >
            <Label
              numberOfLines={1}
              style={[styles.type, { fontSize: fontSize * 0.85, color: colors.background }]}
            >
              {name}
            </Label>
          </TouchableOpacity>
        </Animated.View>
      );

    default:
      return null;
  }
});

const VisaLogo = () => (
  <View
    style={{
      width: 35,
      aspectRatio: 1,
      borderRadius: Number.MAX_SAFE_INTEGER,
      margin: -5,
      marginTop: "auto",
      backgroundColor: "#0001",
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },

  controlsContainer: {
    flexDirection: "row",
  },

  control: {
    flexGrow: 1,
    flexShrink: 1,
  },

  controlInner: {
    borderRadius: 0,
  },

  controlDisabled: {
    opacity: 0.4,
  },

  detailsContainer: {
    flexDirection: "row",
  },

  infoContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },

  typeContainer: {
    flexShrink: 2,
    alignItems: "flex-end",
  },

  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  status: {
    fontWeight: "600",
  },

  holder: {
    fontWeight: "500",
  },

  number: {
    fontWeight: "500",
  },

  balance: {
    fontWeight: "500",
  },

  type: {
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

type StatusColors = {
  [K in CreditCardStatus]: string;
};

const statusColors: StatusColors = {
  ACTIVE: "#00CBD7",
  PENDING: "#E1BA55",
  CANCELED: "#FF0063",
};
