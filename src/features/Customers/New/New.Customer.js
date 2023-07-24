import { View } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";

import { useCreateCustomerStatus, useNewCustomer, useUpdateFields } from "../hooks";
import { AVAILABLE_REGIONS, INPROGRESS, PENDING } from "../../../utilities/helpers";
import styles from "../styles";

export const NewCustomer = () => {
  const { goBack } = useNavigation();

  const {onSubmit} = useNewCustomer();
  const status = useCreateCustomerStatus();

  const {fields, setFormField} = useUpdateFields(null)
  const { name, job, region } = fields;

  const handleSave = () => {
    onSubmit();
    goBack();
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "100%", padding: 8 }}>
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={(text) => setFormField("name", text)}
        />
        <TextInput
          mode="outlined"
          label="job"
          onChangeText={(text) => setFormField("job", text)}
          value={job}
        />

        <SelectDropdown
          data={Object.values(AVAILABLE_REGIONS)}
          defaultButtonText="Select a Region"
          defaultValue={region}
          onSelect={(selectedItem, index) =>
            setFormField("region", selectedItem)
          }
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <IconButton
                icon={isOpened ? "chevron-up" : "chevron-down"}
                iconColor="#444"
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdownDropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
        />

        <Button
          style={{ marginTop: 16, width: "75%", alignSelf: "center" }}
          mode="contained"
          onPress={handleSave}
          disabled={status !== PENDING && status !== INPROGRESS}
        >
          Save
        </Button>
      </View>
    </View>
  );
};
