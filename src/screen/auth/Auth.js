import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground} from "react-native";
import startMainTabs from "..//mainTabs/MainTabs";
import DefaultInput from "..//..//..//src/components/UI/DefaultInput/DefaultInput";
import HeadingText from ".//..//..//../src/components/UI/HeadingText/HeadingText"
import ButtonWithBackground from "..//../../src//components/UI/ButtonWithBackgroud/ButtonWithBackgroud"
import backgroundImage from ".//..//../assets/background.jpg"
class AuthScreen extends Component {
  loginHander = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source = {backgroundImage} style={styles.imageBackground}>
      <View style={styles.container}>
        <HeadingText style= {styles.textHeader}>Please Log In</HeadingText>
        <ButtonWithBackground color = "#29aaf4" >"Switch to login" </ButtonWithBackground>
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your E-Mail Address" />
          <DefaultInput placeholder="Password" />
          <DefaultInput placeholder="Confirm Password" />
        </View>
        <ButtonWithBackground color = "#29aaf4" onPress={this.loginHander}>Submit</ButtonWithBackground>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground:{
    width: "100%",
    flex: 1,
  },
  inputContainer: {
    width: "80%"
  }, textHeader:{
    fontSize: 32
    
  }
});

export default AuthScreen;
