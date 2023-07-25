import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";

import styles from "./styles";
import { useClearCustomers } from "../Customers/hooks";

export const Welcome = () => {
  const {onSubmit} = useClearCustomers()

  const handleClear = () => {

  }

  return (
    <View style={styles.container}>
      <IconButton icon="account-group-outline" size={64} iconColor="purple" />
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32 }}>
        CRMastery
      </Text>
      <Button icon="recycle" style={{marginTop: 8}} onPress={onSubmit}>Clear AsyncDB</Button>
    </View>
  );
};
