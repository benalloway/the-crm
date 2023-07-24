import { Text, View, ScrollView } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import {
  AVAILABLE_REGIONS,
  useCustomers,
  useCustomersDispatch,
} from "../../../context/CustomersContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";

import styles from "../styles";
import { faker } from "@faker-js/faker";

export const EditCustomer = () => {
  const customers = useCustomers();
  const dispatch = useCustomersDispatch();
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { setOptions } = useNavigation();

  const [state, setState] = useState({
    name: "",
    id: -1,
    job: "",
    region: "",
  });
  const [isCreate, setIsCreate] = useState(true);

  const handleSave = () => {
    if (isCreate) {
      dispatch({
        type: "created",
        customer: {...state, id: faker.number.int()}
      });
    } else {
      dispatch({
        type: "edited",
        customer: state,
      });
    }
    goBack();
  };

  // if id => Update
  useEffect(() => {
    if (params?.id) {
      setOptions({
        title: "Edit Customer",
      });
      setState(customers?.find((customer) => customer.id === params.id));
      setIsCreate(false);
    } else {
      setIsCreate(true);
      setState({
        name: "",
        id: Math.random(),
        job: "",
        region: params?.region || "",
      });
    }
  }, [params]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "100%", padding: 8 }}>
        <TextInput
          mode="outlined"
          label="Name"
          value={state.name}
          onChangeText={(text) => setState((prev) => ({ ...prev, name: text }))}
        />
        <TextInput
          mode="outlined"
          label="job"
          onChangeText={(text) =>
            setState((prev) => ({ ...prev, job: text }))
          }
          value={state.job}
        />

        <SelectDropdown
          data={Object.values(AVAILABLE_REGIONS)}
          defaultButtonText="Select a Region"
          defaultValue={state.region}
          onSelect={(selectedItem, index) =>
            setState((prev) => ({ ...prev, region: selectedItem }))
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
        >
          Save
        </Button>
      </View>
    </View>
  );
};
