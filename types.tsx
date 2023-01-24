import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as Screens from "./screens";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type Routes = keyof typeof Screens;

type RouteParams<T extends { [name in Routes]: unknown }> = T;

export type RootStackParamList = RouteParams<{
  Home: undefined;
}>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  //
  NativeStackScreenProps<RootStackParamList, Screen>;

export type CreditCardStatus = "ACTIVE" | "PENDING" | "CANCELED";

export type CreditCardType = "virtual" | "physical";

export type CreditCard = {
  id: number;
  number: string;
  nickname: string | null;
  balance: number;
  currency_code: string;
  status: CreditCardStatus;
  type: CreditCardType;
  holder_name: string;
};
