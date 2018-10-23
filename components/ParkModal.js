import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ModalBackground from "./ModalBackground";

export default (ParkModal = ({ navigation }) => {
  const {
    fullName,
    states,
    description,
    weatherInfo,
    directionsInfo
  } = navigation.state.params.park;

  const { containerStyle, headerStyle, contentStyle, sectionStyle } = styles;

  navigationOptions = {
    title: fullName
  };
  return (
    <ModalBackground>
      <ScrollView>
        <View style={containerStyle}>
          <View style={sectionStyle}>
            <Text style={headerStyle}>Name</Text>
            <Text>
              {fullName}, {states}
            </Text>
          </View>
          <View style={sectionStyle}>
            <Text style={headerStyle}>Description</Text>
            <Text>{description}</Text>
          </View>
          <View style={sectionStyle}>
            <Text style={headerStyle}>Weather</Text>
            <Text>{weatherInfo}</Text>
          </View>
          <View style={sectionStyle}>
            <Text style={headerStyle}>Directions</Text>
            <Text>{directionsInfo}</Text>
          </View>
        </View>
      </ScrollView>
    </ModalBackground>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20
  },
  sectionStyle: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff"
  },
  headerStyle: {
    fontWeight: "bold"
  },
  contentStyle: {}
});
