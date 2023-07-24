import { View } from "react-native";
import {
  useCustomers,
  useCustomersDispatch,
} from "../../../context/CustomersContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Card, IconButton, Button, Text } from "react-native-paper";

export const DetailCustomer = () => {
  const customers = useCustomers();
  const dispatch = useCustomersDispatch();
  const { params } = useRoute();
  const { navigate, setOptions, goBack } = useNavigation();

  const { name, id, job, region } = customers.find(
    (customer) => customer.id === params.id
  );

  const handleDelete = () => {
    dispatch({
      type: "deleted",
      id: id,
    });
    goBack();
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="pencil"
            onPress={() => navigate("CustomerEdit", { id: id })}
          />
          <IconButton icon="trash-can" iconColor="red" onPress={handleDelete} />
        </View>
      ),
    });
  }, [params]);
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Text variant="titleLarge" style={{fontSize: 24}}>{name}</Text>
      <Text variant="bodyLarge">
        <Text style={{ fontWeight: "bold" }}>Position: </Text>
        {job}
      </Text>
      <Text variant="bodyLarge">
        <Text style={{ fontWeight: "bold" }}>Region: </Text>
        {region}
      </Text>
    </View>
  );
};
