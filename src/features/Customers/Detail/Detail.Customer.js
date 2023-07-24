import { View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { IconButton, Text } from "react-native-paper";
import { useViewFields } from "../hooks";

import styles from "./styles"

export const DetailCustomer = () => {
  const { params } = useRoute();
  const { navigate, setOptions } = useNavigation();

  const { fields } = useViewFields(params.id);
  const { name, job, region, id } = fields;

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <View style={styles.headerContainer}>
          <IconButton
            icon="pencil"
            onPress={() => navigate("CustomerEdit", { id: params.id })}
          />
        </View>
      ),
    });
  }, [params]);

  return (
    <View
      style={styles.screenContainer}
    >
      <Text variant="titleLarge" style={styles.title}>
        {name}
      </Text>
      <Text variant="bodyLarge">
        <Text style={styles.bold}>Position: </Text>
        {job}
      </Text>
      <Text variant="bodyLarge">
        <Text style={styles.bold}>Region: </Text>
        {region}
      </Text>
    </View>
  );
};
