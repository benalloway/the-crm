import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { CONTACT_STATUSES, useCustomers } from "../../context/CustomersContext";
import { IconButton, Switch } from "react-native-paper";
import { useEffect, useState } from "react";
import styles from "./styles";
import ListItem from "../../components/ListItem";

export default CustomerList = () => {
  const { params } = useRoute();
  const customers = useCustomers();
  const { navigate, setOptions } = useNavigation();

  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    setOptions({
      title: params?.region,
      headerRight: () => (
        <IconButton
          icon="account-plus-outline"
          onPress={() => navigate("CustomerEdit", { region: params?.region })}
        />
      ),
    });
  }, [params]);

  return (
    <View style={styles.customersContainer}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
      <Text>Sort by Status</Text>
        <Switch
          color="green"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>
      <FlatList
        contentContainerStyle={{ marginHorizontal: 32 }}
        data={isSwitchOn ? customers?.filter(customer => customer.region === params?.region).sort((a,b) => {
            return a.status > b.status ? 1 : -1;
        }) : customers?.filter(customer => customer.region === params?.region).sort((a,b) => {
            return a.name > b.name ? 1 : -1;
        })
        }
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigate("CustomerDetail", { id: item.id })}
          >
            {item.name}{" "}
            <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
          </ListItem>
        )}
      />
    </View>
  );
};
