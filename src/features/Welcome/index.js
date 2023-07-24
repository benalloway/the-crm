import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

import styles from "./styles";

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="account-group-outline" size={64} iconColor="purple" />
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32 }}>
        CRMastery
      </Text>
    </View>
  );
};
