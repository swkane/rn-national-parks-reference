import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import config from "../config.json";
import ArticleCard from "./ArticleCard";

class ArticlesScreen extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch(config.GET_ARTICLES)
      .then(response => response.json())
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          {this.state.data.map(article => (
            <ArticleCard key={article.id} {...article} />
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

export default withNavigation(ArticlesScreen);
