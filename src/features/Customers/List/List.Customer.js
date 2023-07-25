import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useEffect, useState } from "react";
import ListItem from "../../../components/ListItem";

import { useListCustomers } from "../hooks";
import styles from "./styles";

export const ListCustomer = () => {
  const { params } = useRoute();
  const customers = useListCustomers();
  const [state, setState] = useState(customers || []);
  const { navigate, setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: params?.region,
      headerRight: () => (
        <IconButton
          icon="account-plus-outline"
          onPress={() => navigate("CustomerCreate")}
        />
      ),
    });
  }, [params]);

  useEffect(() => {
    setState(customers?.filter((c) => c.region === params?.region));
  }, [customers]);

  return (
    <View style={styles.screenContainer}>
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={state}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigate("CustomerDetail", { id: item.id })}
          >
            {item.name}
          </ListItem>
        )}
      />
    </View>
  );
};
