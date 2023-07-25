import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";

import { WelcomeScreen } from "../screens/Welcome";
import { RegionsScreen } from "../screens/Regions/List.Region.Screen";
import { ListCustomerScreen } from "../screens/Customers/List.Customer.Screen";
import { DetailCustomerScreen } from "../screens/Customers/Detail.Customer.Screen";
import { EditCustomerScreen } from "../screens/Customers/Edit.Customer.Screen";
import { NewCustomerScreen } from "../screens/Customers/New.Customer.Screen";
import { NotificationScreen } from "../screens/Notifications/NotificationScreen";

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
              onPress={() => navigate("CustomerCreate")}
            />
          ),
          unmountOnBlur: true,
        }}
        component={RegionsScreen}
      />
      <Stack.Screen
        name="CustomerList"
        component={ListCustomerScreen}
        options={{
          title: "Customers",
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={DetailCustomerScreen}
        options={{ title: "Customer Detail", unmountOnBlur: true }}
      />
      <Stack.Screen
        name="CustomerEdit"
        component={EditCustomerScreen}
        options={{ title: "Edit Customer", unmountOnBlur: true }}
      />
      <Stack.Screen
        name="CustomerCreate"
        component={NewCustomerScreen}
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
            } else if (route.name === "Notifications") {
              iconName = focused ? "message" : "message-outline";
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
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
