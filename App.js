import React from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import ParksScreen from "./components/ParksScreen";
import ParkModal from "./components/ParkModal";
import ArticlesScreen from "./components/ArticlesScreen";
import CommonBackground from "./components/CommonBackground";

const MainStack = createMaterialTopTabNavigator({
  Home: CommonBackground(HomeScreen),
  Parks: CommonBackground(ParksScreen),
  Articles: CommonBackground(ArticlesScreen)
});

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    ParkModal: {
      screen: ParkModal,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.park.name}`
      })
    }
  },
  {
    mode: "modal",
    navigationOptions: { title: "National Park Service" },
    headerMode: "float"
  }
);

export default (App = () => {
  return <RootStack />;
});
