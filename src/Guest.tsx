import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Guest() {
  const insets = useSafeAreaInsets();
  return (
    <WebView
      style={{ marginTop: insets.top }}
      source={{ uri: "https://tomogo-travel-dev.tgl-cloud.com/" }}
    />
  );
}
