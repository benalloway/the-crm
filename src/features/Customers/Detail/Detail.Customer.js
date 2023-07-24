import { View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { IconButton, Text } from "react-native-paper";
import { useViewFields } from "../hooks";

export const DetailCustomer = () => {
  const { params } = useRoute();
  const { navigate, setOptions } = useNavigation();

  const { fields } = useViewFields(params.id);
  const { name, job, region, id } = fields;

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
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
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Text variant="titleLarge" style={{ fontSize: 24 }}>
        {name}
      </Text>
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
