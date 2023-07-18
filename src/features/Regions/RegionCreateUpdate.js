import { Text, View } from "react-native";
import { useRegions } from "../../context/RegionsContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

export const RegionCreateUpdate = () => {
  const regions = useRegions();
  const { params } = useRoute();
  const { setOptions } = useNavigation();

  // if regionId => update
  useEffect(() => {
    if (params?.regionId) {
      setOptions({ title: "Update Region" });
    }
  }, [params]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>
        {params?.regionId
          ? `Update: ${
              regions.find((region) => region.id === params.regionId).name
            }`
          : "Create Region"}
      </Text>
    </View>
  );
};
