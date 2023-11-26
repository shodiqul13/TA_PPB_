import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CHaracterPage from "./src/Characterss";
import Consume from "./src/Consumables";
import DetailCharacter from "./src/Character_detail";
import Nav from "./src/Nav";
import Foods from "./src/Food";
import Potions from "./src/Potion";
import About from "./src/About";
import SplashScreen from "./src/SplashScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Characterss" component={CHaracterPage} />
        <Stack.Screen name="DetailCharacter" component={DetailCharacter} />
        <Stack.Screen name="Consumables" component={Consume} />
        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen name="Potions" component={Potions} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

