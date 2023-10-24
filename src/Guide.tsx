import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function Guide() {
  const insets = useSafeAreaInsets();

  return (
    <WebView
      style={{ marginTop: insets.top }}
      source={{ uri: "https://guide.tomogo-travel-dev.tgl-cloud.com/initial" }}
    />
  );
}
