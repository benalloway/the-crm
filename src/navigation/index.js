import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import WelcomeScreen from "../screens/Welcome";
import RegionsScreen from "../screens/Regions";
import CustomersScreen from "../screens/Customers";
import { RegionDetailScreen } from "../screens/Regions/RegionDetail";
import { RegionCreateUpdateScreen } from "../screens/Regions/RegionCreateUpdate";

const Tab = createBottomTabNavigator();
const CustomerStack = createNativeStackNavigator();
const RegionsStack = createNativeStackNavigator();

const RegionsStackScreen = () => {
  return (
    <RegionsStack.Navigator>
      <RegionsStack.Screen
        name="RegionsList"
        component={RegionsScreen}
        options={{ title: "Regions" }}
      />
      <RegionsStack.Screen
        name="RegionDetail"
        component={RegionDetailScreen}
        options={{ title: "Region Detail" }}
      />
      <RegionsStack.Screen
        name="RegionCreateUpdate"
        component={RegionCreateUpdateScreen}
        options={{ title: "Create Region" }}
      />
    </RegionsStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Regions") {
              iconName = focused ? "planet" : "planet-outline";
            } else if (route.name === "Customers") {
              iconName = focused ? "people" : "people-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Regions" component={RegionsStackScreen} />
        <Tab.Screen name="Customers" component={CustomersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
