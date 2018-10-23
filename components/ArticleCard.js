import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";

export default (ArticleCard = ({ listingImage, title, url }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(url).catch(err => console.error("error: ", err))
      }
    >
      <View style={styles.cardStyle}>
        <Text style={styles.headerStyle}>{title}</Text>

        {listingImage.url ? (
          <Image style={styles.imageStyle} source={{ uri: listingImage.url }} />
        ) : (
          <Image
            style={[styles.imageStyle, { resizeMode: "contain" }]}
            source={require("../assets/logo.png")}
          />
        )}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerStyle: {
    fontWeight: "bold",
    textAlign: "center"
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 5,
    margin: 15,
    marginBottom: 0
  }
});
