/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button

} from 'react-native';

import  ListItem from './src/components/listItem/ListItem';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  // status
  state = {
    placeName: "",
    placeData: []
  }

  // on change hander 
  placeNameChangeHander = value => {


    this.setState({
      placeName: value
      
    });
  };

  // hander on button press 
  placeButtonPressHander = () => {
  

    if (this.state.placeName.trim === "") {
      return;
    }

    
    this.setState(preState =>{
      return{
        placeData : preState.placeData.concat(preState.placeName)
      }
    });
    this.setState({
      placeName: ""
    });
  };

   
  render() {
    
    const placeOutput = this.state.placeData.map((place, i) => (
      <ListItem key = {i} placeName= {place} ></ListItem>  
    
    ));


    return (
      <View style={styles.container}>
        <View style={styles.inputContainer} >
          <TextInput style = {styles.inputText}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHander}
          />
          <Button 
            style = {styles.button}
            title="Add"
            color="#841584"
            onPress ={this.placeButtonPressHander}
          />
        </View>    
       <View style = {styles.listContainer} >{placeOutput}</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  }, 
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  inputText: {
    width : "70%"
  },

  button: {
    width : "30%"
  },
  listContainer: {
    width : "100%"
  }


});
