import React, { Component } from "react";
import { Navigation } from "react-native-navigation";

import Icon from "react-native-vector-icons/Ionicons";

// start tab base app
const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-outline", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          title: "Find Places",
          label: "Find Places",
          screen: "myApp.FindPlaces",
          icon: sources[2]
          ,
           navigatorButtons: {
             leftButtons : [
               {
                 icon : sources[2],
                 title: "menu",
                 id : "sideDrawerToggle"
               }
             ]
           }
         
        },
        {
          title: "Share Places",
          label: "Share Places",
          screen: "myApp.SharePlaces",
          icon: sources[1],
          navigatorButtons: {
            leftButtons : [
              {
                icon : sources[2],
                title: "menu",
                id : "sideDrawerToggle"
              }
            ]
          }
        }
      ], 
      drawer: {
        left: {
      
          screen: "myApp.SideDrawer"
        }
      }
  });
  });
};

export default startTabs;
