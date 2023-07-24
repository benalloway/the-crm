import { Button as RNButton } from "react-native-paper";
import styles from "./styles";

export default Button = ({ onPress, disabled, children }) => {
  return (
    <RNButton
      style={styles.button}
      mode="contained"
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </RNButton>
  );
};
