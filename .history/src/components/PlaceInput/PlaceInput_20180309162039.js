import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from "..//..//..//src/components/UI/DefaultInput/DefaultInput";


PlaceInput = props => (
  <DefaultInput
    placeholder="Place Name"
    value={this.props.placeName}
    onChangeText={this.props.placeNameChangedHandler}
  />
);

export default PlaceInput;
