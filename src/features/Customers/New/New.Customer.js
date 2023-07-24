import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useCreateCustomerStatus, useNewCustomer } from "../hooks";
import { Form } from "../Form/Form";

export const NewCustomer = () => {
  const { goBack } = useNavigation();

  const { onSubmit } = useNewCustomer();
  const status = useCreateCustomerStatus();

  const handleSave = () => {
    onSubmit();
    goBack();
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Form handleSubmit={handleSave} customerId={null} status={status} />
    </View>
  );
};
