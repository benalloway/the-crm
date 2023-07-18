import { Button, Text, View } from "react-native";
import { useRegions } from "../../context/RegionsContext";
import { useNavigation, useRoute } from "@react-navigation/native";

export const RegionDetail = () => {
  const regions = useRegions();
  const { params } = useRoute();
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>
        {regions.find((region) => region.id === params.regionId).name}
      </Text>
      <Button
        title="Update Region"
        onPress={() =>
          navigate("RegionCreateUpdate", { regionId: params.regionId })
        }
      />
    </View>
  );
};
