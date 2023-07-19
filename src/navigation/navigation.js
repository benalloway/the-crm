import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcome";
import RegionsScreen from "../screens/Regions";
import CustomersScreen from "../screens/Customers";
import { CustomerDetailScreen } from "../screens/Customers/CustomerDetail";
import { CustomerEditScreen } from "../screens/Customers/CustomerEdit";
import { IconButton } from "react-native-paper";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  const { navigate } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegionList"
        options={{
          title: "Regions",
          headerRight: () => (
            <IconButton
              icon="account-plus-outline"
              onPress={() => navigate("CustomerEdit")}
            />
          ),
          unmountOnBlur: true
        }}
        component={RegionsScreen}
      />
      <Stack.Screen
        name="CustomerList"
        component={CustomersScreen}
        options={{
          title: "Customers",
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetailScreen}
        options={{ title: "Customer Detail", unmountOnBlur: true }}
      />
      <Stack.Screen
        name="CustomerEdit"
        component={CustomerEditScreen}
        options={{ title: "Create Customer", unmountOnBlur: true }}
      />
    </Stack.Navigator>
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
              iconName = focused
                ? "map-marker-multiple"
                : "map-marker-multiple-outline";
            } else if (route.name === "CreateCustomer") {
              iconName = focused ? "account-plus" : "account-plus-outline";
            }

            return <IconButton icon={iconName} size={size} iconColor={color} />;
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen
          name="Regions"
          component={StackScreen}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
