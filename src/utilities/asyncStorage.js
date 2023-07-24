import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
  const serialized = JSON.stringify(value);
  return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
  try {
    const raw = await AsyncStorage.getItem(key);
    return JSON.parse(raw);
  } catch (e) {
    return { error: "Failed to save to asyncStorage" };
  }
};

export const clear = async () => {
  return await AsyncStorage.clear();
};
