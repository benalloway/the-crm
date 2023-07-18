import { Text, View } from "react-native";
import { useRegions } from "../../context/RegionsContext";
import { useRoute } from "@react-navigation/native";

export const RegionCreateUpdate = () => {
  const regions = useRegions();
  const { params } = useRoute();
  return (
    <View>
      <Text>
        {regions.find((region) => region.id === params.regionId).name}
      </Text>
    </View>
  );
};
