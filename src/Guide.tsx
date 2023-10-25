import React, { useRef } from "react";
import { Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function Guide() {
  const insets = useSafeAreaInsets();
  const webviewRef = useRef<any>();
  return (
    <WebView
      ref={webviewRef}
      style={{ marginTop: insets.top }}
      source={{ uri: "https://guide.tomogo-travel-dev.tgl-cloud.com/initial" }}
      onMessage={(message) => {
        console.log(message.nativeEvent);
        if (message.nativeEvent.data === "requestNotificationPermission") {
          Alert.alert(
            "Request Notification Permission",
            "The app wants to send notifications to you. Do you agree?",
            [
              {
                text: "Agree",
                onPress: () => {
                  webviewRef.current.postMessage(
                    "requestNotificationPermission_ok"
                  );
                },
              },
              {
                text: "Deny",
                style: "cancel",
                onPress: () => {
                  webviewRef.current.postMessage(
                    "requestNotificationPermission_cancel"
                  );
                },
              },
            ]
          );
        }
      }}
    />
  );
}
