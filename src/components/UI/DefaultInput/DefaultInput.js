import React, { Component } from "react";
import { TextInput , StyleSheet} from "react-native";

const defaultInput = props => (
  <TextInput underlineColorAndroid="transparent" style={styles.input}
  {...props}
   />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8,
    backgroundColor : "#FFFFFF"
  }
});

export default defaultInput;
