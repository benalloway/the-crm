import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { IconButton, Switch } from "react-native-paper";
import { useEffect, useState } from "react";
import styles from "../styles";
import ListItem from "../../../components/ListItem";

import { useListCustomers } from "../hooks";

export const ListCustomer = () => {
  const { params } = useRoute();
  const customers = useListCustomers(params?.region);
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

  return (
    <View style={styles.customersContainer}>
      <FlatList
        contentContainerStyle={{ marginHorizontal: 32 }}
        data={customers}
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
