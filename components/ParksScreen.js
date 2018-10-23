import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import config from "../config.json";
import ParkCard from "./ParkCard";

class ParksScreen extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch(config.GET_PARKS)
      .then(response => response.json())
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          {this.state.data.map(park => (
            <ParkCard
              key={park.parkCode}
              {...park}
              handlePress={() =>
                this.props.navigation.navigate("ParkModal", { park })
              }
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    margin: 25
  }
});

export default withNavigation(ParksScreen);
