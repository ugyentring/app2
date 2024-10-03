import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "../screens/Info";
import SecondaryNavigator from "./SecondaryNavigator";

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Info"
        component={Info}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SecondaryNavigator" component={SecondaryNavigator} />
    </Stack.Navigator>
  );
}
