import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useEditCustomer } from "../hooks";
import { Form } from "../components/Form";
import styles from "./styles";

export const EditCustomer = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { onSubmit, status } = useEditCustomer(params.id);

  const handleSave = () => {
    onSubmit();
    goBack();
  };

  return (
    <View style={styles.screenContainer}>
      <Form handleSubmit={handleSave} customerId={params.id} status={status} />
    </View>
  );
};
