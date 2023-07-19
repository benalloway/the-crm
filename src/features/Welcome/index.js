import { View, Text } from "react-native";
import styles from "./styles";
import { IconButton } from "react-native-paper";

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="account-group-outline" size={64} iconColor="purple" />
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 32 }}>CRMastery</Text>
    </View>
  );
};
