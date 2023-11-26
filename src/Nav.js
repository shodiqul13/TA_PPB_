import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CHaracterPage from "./Characterss";
import Consume from "./Consumables";
import About from "./About";

const bottomTabNavigator = createBottomTabNavigator();

const Nav = () => {
  return (
      <bottomTabNavigator.Navigator
        initialRouteName="Characters"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 16,
            shadowOpacity: 0,
            elevation: 1,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Characterss") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Consumables") {
              iconName = "cube";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "About"){
              iconName = "information-circle-sharp";
              color = focused ? "black" : "lightgray";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <bottomTabNavigator.Screen
          name="Characterss"
          component={CHaracterPage}
        />
        <bottomTabNavigator.Screen 
          name="Consumables" 
          component={Consume} 
        />
        <bottomTabNavigator.Screen 
          name="About" 
          component={About} 
        />
      </bottomTabNavigator.Navigator>
  );
}

export default Nav;