import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {connect} from 'react-redux';

import PlaceList from '..//..//components/PlaceList/PlaceList';

class FindPlaces extends Component {
  render() {
    return (
      <View>
       <PlaceList places={this.props.places}></PlaceList>
   
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
