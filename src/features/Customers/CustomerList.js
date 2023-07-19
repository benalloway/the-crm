import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { useCustomers } from "../../context/CustomersContext";
import { Button, IconButton } from "react-native-paper";
import { useEffect } from "react";
import styles from "./styles";
import ListItem from "../../components/ListItem";

export default CustomerList = () => {
  const { params } = useRoute();
  const customers = useCustomers();
  const { navigate, setOptions } = useNavigation();

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
      <FlatList
      contentContainerStyle={{marginHorizontal: 32}}
        data={customers?.filter((cus) => cus.region === params?.region)}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={() => navigate("CustomerDetail", { id: item.id })}>
            <Text style={{fontWeight: "bold"}}>Name: </Text>{item.name} {` 
`}
            <Text style={{fontWeight: "bold"}}>Position: </Text>{item.job}
          </ListItem>
        )}
      />
    </View>
  );
};
