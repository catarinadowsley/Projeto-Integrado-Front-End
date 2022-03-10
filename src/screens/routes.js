import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
<AppStack.Navigator
  screenOptions={{
    gestureEnabled: true,
    gestureDirection: "horizontal",
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }}
></AppStack.Navigator>