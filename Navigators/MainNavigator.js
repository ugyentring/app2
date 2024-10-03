import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import BlockchainCourse from "../screens/BloackchainCourse";

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="BlockchainCourse" component={BlockchainCourse} />
    </Stack.Navigator>
  );
}
