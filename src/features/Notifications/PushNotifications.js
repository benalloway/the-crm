import { useState, useEffect, useRef } from "react";
import { View, Platform, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Constants from "expo-constants";
import * as Notifications from "expo-notifications";

import Button from "../../components/Button";
import { TextInput, Text } from "react-native-paper";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const PushNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState(
    "You've got mail! 📬"
  );
  const [notificationBody, setNotificationBody] = useState(
    "Here is the notification body"
  );
  const [notificationData, setNotificationData] = useState(
    "Notifcation data goes here"
  );
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(JSON.stringify(response));
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text variant="titleLarge" style={styles.title}>
          Configure your notification
        </Text>
        <TextInput
          value={notificationTitle}
          onChangeText={(text) => setNotificationTitle(text)}
          label="Notification Title"
          style={styles.textInput}
        />
        <TextInput
          value={notificationBody}
          onChangeText={(text) => setNotificationBody(text)}
          label="Notification Body"
          style={styles.textInput}
        />
        <TextInput
          value={notificationData}
          onChangeText={(text) => setNotificationData(text)}
          label="Notification Data"
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <Button
        onPress={async () => {
          await schedulePushNotification(
            notificationTitle,
            notificationBody,
            notificationData
          );
        }}
      >
        Press to schedule a notification
      </Button>
    </View>
  );
};

async function schedulePushNotification(
  notificationTitle,
  notificationBody,
  notificationData
) {
  console.log(
    "params: ",
    JSON.stringify({
      notificationTitle: notificationTitle,
      notificationBody: notificationBody,
      notificationData: notificationData,
    })
  );
  await Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTitle,
      body: notificationBody,
      data: { data: { notificationData } },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants?.default?.easConfig?.projectId,
      })
    ).data;
    console.log(token);
  }

  return token;
}

const styles = StyleSheet.create({
  title: { marginVertical: 8 },
  textInput: { width: "90%", marginVertical: 8 },
});
