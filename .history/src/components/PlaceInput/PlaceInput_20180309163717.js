import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from "..//..//..//src/components/UI/DefaultInput/DefaultInput";


PlaceInput = props => (
  <DefaultInput
    placeholder="Place Name"
    value={props.placeName}
    onChangeText={props.placeNameChangedHandler}
  />
);

export default PlaceInput;
