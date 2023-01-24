import { StyleSheet } from "react-native";
import { FadeInLeft, FadeInRight, FadeOut } from "react-native-reanimated";

import { Card, Label, WalletHeader } from "~/components";
import { useLayout, useWallet } from "~/hooks";
import { Scenes } from "~/scenes";
import { RootStackScreenProps } from "~/types";

export default (props: RootStackScreenProps<"Home">) => {
  const { margin } = useLayout();
  const {
    data,
    balance,
    isFetching,
    isLoading,
    isMutating,
    changeFilter,
    //
    removeCreditCard,
  } = useWallet();

  return (
    <Scenes.List
      ListHeaderComponent={
        <WalletHeader
          isSearching={isFetching && !isLoading}
          balance={balance}
          //
          onFilterChange={changeFilter}
        />
      }
      ListEmptyComponent={
        isLoading ? (
          <></>
        ) : (
          <Label style={[styles.empty, { marginTop: margin * 2 }]}>Nothing found :(</Label>
        )
      }
      activity={isLoading || isMutating}
      data={data}
      keyExtractor={({ id }, index) => `${id}-${index}`}
      renderItem={({ index, item: { id, status, type, number, balance, holder_name: holder } }) => (
        <Card
          id={id}
          status={status}
          type={type}
          number={number}
          balance={balance}
          holder={holder}
          isOnTop={index === 0}
          entering={index % 2 ? EFR : EFL}
          exiting={XF}
          //
          onPressRemove={removeCreditCard}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  empty: {
    textAlign: "center",
    opacity: 0.5,
  },
});

const EFR = FadeInRight.duration(380).delay(180);
const EFL = FadeInLeft.duration(380).delay(180);
const XF = FadeOut.duration(320);
