import React, {Component} from "react";
import {View, Image, Text, Button, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import { deletePlace } from "../../store/actions";


class PlaceDetail  extends Component{

placeDeletedHander = () =>{
   this.props.onDeletePlace(this.props.selectedPlace.key);
   this.props.navigator.pop();
}


render() {
  return(
    <View style={styles.container}>
    <View> 
    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
      <Button title="Delete" color="red" onPress={this.placeDeletedHander} />
    </View>
  </View>  
  )
}};


const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});


const mapDispatchToPops = dispatch =>{
  return{
    onDeletePlace : (key) => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToPops)(PlaceDetail);
