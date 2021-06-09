import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // default state on first render
    };
  }

  render = () => (
    <SafeAreaView style={styles.container}>
      <WebView source={{ url: "https://tuliptgr.github.io/vase/" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
