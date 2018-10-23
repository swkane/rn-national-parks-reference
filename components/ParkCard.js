import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default (ParkCard = ({ name, designation, states, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.cardStyle}>
        <Text style={styles.headerStyle}>
          {name}, {states}
        </Text>
        <Text>{designation}</Text>
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
    backgroundColor: "#fff"
  },
  headerStyle: {
    fontWeight: "bold"
  }
});
