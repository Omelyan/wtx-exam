import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { defaultScreenOptions } from "./Options";

import { RootStackParamList } from "~/types";

// being lazy is not always bad...
const getHome = () => require("../screens/Home").default;

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Home" getComponent={getHome} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
