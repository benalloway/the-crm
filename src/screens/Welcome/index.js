import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Welcome } from "../../features/Welcome";

export default WelcomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Welcome />
    </View>
  );
};
