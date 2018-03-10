import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  contentContainerStyle
} from "react-native";
import { connect } from "react-redux";
import { addPlace } from ".//..//../store/actions/index";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import PickImage from ".//../../components/PickImage/PickImage"
import PickLocation from ".//..//.//..//components/PickLocation/PickLocation"


class SharePlaces extends Component {

  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  // setup for onNavigatorEvent
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  // onNavigatorEvent click event handler
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  onPlaceAddedHander = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Share a place with us!</Text>
          <PickImage/>
          <PickLocation/>
          <View style={styles.input}>
           <PlaceInput placeName={this.state.placeName}  placeNameChangedHandler ={this.on}></PlaceInput>
          </View>
          <Button title="Share the Place!" />
  
        </View>
      </ScrollView>
    );
  }
}

const mapDisPatchToProps = disPatch => {
  return {
    onAddPlace: placeName => disPatch(addPlace(placeName))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

// connect this and status pass = null
export default connect(null, mapDisPatchToProps)(SharePlaces);
