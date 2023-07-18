import { Button, FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useRegions, useRegionsDispatch } from "../../context/RegionsContext";
import useStyles from "./styles";

export default Regions = () => {
  const { styles } = useStyles();
  const regions = useRegions();
  const { navigate } = useNavigation();
  return (
    <View>
      <FlatList
        style={styles.flatList}
        ListHeaderComponent={() => (
          <Text style={styles.flatListHeader}>Regions:</Text>
        )}
        data={regions}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigate("RegionDetail", { regionId: item.id })}
          />
        )}
      />
      <Button
        title="Create Region"
        onPress={() => navigate("RegionCreateUpdate", { update: false })}
      />
    </View>
  );
};
