import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles";
import { AVAILABLE_REGIONS } from "../../../utilities/helpers";
import ListItem from "../../../components/ListItem";

export const ListRegion = () => {
  const {navigate} = useNavigation();
  
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={Object.values(AVAILABLE_REGIONS)}
        renderItem={({ item }) => <ListItem item={item} onPress={() => navigate("CustomerList", {region: item })}>{item}</ListItem>}
      />
    </View>
  );
};