import React, { Component } from "react";
import { View, Text } from "react-native";
import {connect} from 'react-redux';

import {addPlace} from  './/..//../store/actions/index'

import PlaceInput from "../../components/PlaceInput/PlaceInput";


class SharePlaces extends Component {

  onPlaceAddedHander = placeName =>
  {
    this.props.onAddPlace(placeName);
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded ={this.onPlaceAddedHander}/>
      </View>
    );
  }
}

const mapDisPatchToProps  = disPatch =>{
  return{
      onAddPlace : (placeName) => disPatch(addPlace(placeName))
  };
};

// connect this and status pass = null
export default connect(null,mapDisPatchToProps)(SharePlaces);