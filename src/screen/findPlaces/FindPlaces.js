import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {connect} from 'react-redux';

import PlaceList from '..//..//components/PlaceList/PlaceList';

class FindPlaces extends Component {

  itemSelectedHander  = key =>{
    const sleetedPlaces = this.props.places.find(place =>{
      return place.key  === key;
    });

    this.props.navigator.push({
      screen: 'myApp.PlaceDetail',
      title:  sleetedPlaces.name , 
      passProps: {
        selectedPlace : sleetedPlaces
      },
    })};

  render() {
    return (
      <View>
       <PlaceList places={this.props.places}  onItemSelected = {this.itemSelectedHander}/>
   
      </View>
    );
  }
}

// get all places list form reducer  
const mapStateToProps =  state => {
  return { 
    places : state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaces); 
