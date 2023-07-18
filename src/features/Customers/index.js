import { Text, View } from "react-native";

export default Customers = ({ region }) => {
  if (region?.length) {
    // return customers by region
  } else {
    // return all customers
  }
  return (
    <View>
      <Text>Customers{region?.length ? ` in region: ${region}` : ""}</Text>
    </View>
  );
};
