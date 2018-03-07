
import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux'

import AuthScreen from './src/screen/auth/Auth';
import SharePlaces from './/src/screen/sharePlaces/SharePlaces';
import FindPlaces from './/src/screen/findPlaces/FindPlaces';
import PlaceDetail from './/src/screen/PlaceDetail/PlaceDetail';


//create store and 
import configureStore from './src/store/configureStore';
const store = configureStore();

// register some screen and pass store and provider to connect redux in app
Navigation.registerComponent("myApp.AuthScreen", () => AuthScreen);
Navigation.registerComponent("myApp.SharePlaces", () => SharePlaces, store, Provider);
Navigation.registerComponent("myApp.FindPlaces", () => FindPlaces, store, Provider);
Navigation.registerComponent("myApp.PlaceDetail", () =>PlaceDetail);


// start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "myApp.AuthScreen",
    title: "Login"
  }
});
