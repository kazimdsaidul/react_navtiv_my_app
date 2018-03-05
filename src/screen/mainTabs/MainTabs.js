import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import SharePlaces from '..//sharePlaces/SharePlaces';
import FindPlaces from '..//findPlaces/FindPlaces';



// register some screen
Navigation.registerComponent("myApp.SharePlaces", () => SharePlaces);
Navigation.registerComponent("myApp.FindPlaces", () => FindPlaces);


// start tab base app 
const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'SharePlaces',
                screen: 'myApp.SharePlaces',
            },
            {
                label: 'FindPlaces',
                screen: 'myApp.FindPlaces',
            }
        ]
    });


};



export default startTabs;
