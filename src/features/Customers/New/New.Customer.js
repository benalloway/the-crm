import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useCreateCustomerStatus, useNewCustomer } from "../hooks";
import { Form } from "../components/Form";
import styles from "./styles";

export const NewCustomer = () => {
  const { goBack } = useNavigation();

  const { onSubmit } = useNewCustomer();
  const status = useCreateCustomerStatus();

  const handleSave = () => {
    onSubmit();
    goBack();
  };

  return (
    <View style={styles.screenContainer}>
      <Form handleSubmit={handleSave} customerId={null} status={status} />
    </View>
  );
};
