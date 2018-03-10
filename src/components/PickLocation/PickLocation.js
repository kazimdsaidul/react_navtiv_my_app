import React, { Component } from "react";
import { Image, Button,Text, View, StyleSheet } from "react-native";



class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeHolder}>
          <Text>Maps</Text>
        </View>
        <Button title="Locate Me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
});

export default PickLocation;
