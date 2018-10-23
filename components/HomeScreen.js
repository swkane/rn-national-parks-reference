import React from "react";
import { Text, View, Image } from "react-native";

export default (HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          padding: 20,
          margin: 20,
          textAlign: "center"
        }}
      >
        Learn more about our National Parks!
      </Text>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 250, height: 250, resizeMode: "contain" }}
      />
    </View>
  );
});
