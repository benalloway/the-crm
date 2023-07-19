import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default Item = ({ onPress, children }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.itemTouchable} onPress={onPress}>
          <Text style={styles.itemText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({item: { width: "100%", marginVertical: 8, borderRadius: 4, borderColor: "grey", borderWidth: 1, paddingVertical: 8 },
  itemTouchable: {width: "100%"},
  itemText: {textAlign: "center", width: "100%"},})