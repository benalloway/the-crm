import {  View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default Item = ({ onPress, children }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.itemTouchable} onPress={onPress}>
        <Text style={styles.itemText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
