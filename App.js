import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./assets/android.jpg"
import PlaceDetals from "./src/components/PlaceDetals/PlaceDetalis"

export default class App extends Component {
  state = {
    places: [],
    seletedPlace : null

  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeletedHandler= () =>{
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.seletedPlace.key;
        }),
        seletedPlace : null
      };
    });

    
  };


  placeSeletedHandler = key => {
    // update the selectedPlace variable 

    this.setState(prevState =>{
        return {
          seletedPlace : prevState.places.find(place =>{
            return place.key === key;
          })
        }

    });
  };

  placeOnModalCloseHanderer = () =>{
    this.setState({
      seletedPlace : null
    });

    
  
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetals seletedPlace = {this.state.seletedPlace}  onItemDelete = {this.placeDeletedHandler} onMedelClose = {this.placeOnModalCloseHanderer} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSeleted={this.placeSeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
