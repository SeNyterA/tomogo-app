import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <View
        onTouchEnd={() => {
          navigation.navigate("Guide");
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#bbb",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text>Guide</Text>
      </View>

      <View
        onTouchEnd={() => {
          navigation.navigate("Guest");
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#bbb",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text>Guest</Text>
      </View>
    </View>
  );
}
