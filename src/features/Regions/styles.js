import { StyleSheet } from "react-native";

export default useStyles = () => {
  const styles = StyleSheet.create({
    flatList: { marginVertical: 32 },
    flatListHeader: { fontWeight: "bold", marginBottom: 8 },
  });

  return { styles };
};
