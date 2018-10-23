import React from "react";
import { ImageBackground } from "react-native";

export default (CommonBackground = Component => ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/nature-background.jpg")}
      style={{ flex: 1 }}
      imageStyle={{
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        opacity: 0.8
      }}
    >
      <Component>{children}</Component>
    </ImageBackground>
  );
});
