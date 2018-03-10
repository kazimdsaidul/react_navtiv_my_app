import React, { Component } from 'react';
import {Image, Button, View, StyleSheet}from 'react-native'

import image from "..///../assets/beautiful-place.jpg"


class PickImage extends Component{
    render() {
        return (
           <View style={styles.container}>
           <View style={styles.placeHolder}>
            <Image source={image}  style={styles.imagePreview}/>
           </View>
           <Button title="Pick Image" onPress = { () => alert('Pick Image!')} />
           </View>
           
        );
    }
}

const styles = StyleSheet.create({
  container:{
      width : "100%",
      alignItems: "center"
  },
    placeHolder: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#eee",
      width: "80%",
      height: 150
    },
    input: {
      width: "80%"
    }, 
    imagePreview :{
     width: "100%",
     height: "100%"
    }
  });


  export default  PickImage;