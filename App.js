
import { Navigation } from 'react-native-navigation';
import  AuthScreen  from './src/screen/Auth';


// register some screen
Navigation.registerComponent("myApp.AuthScreen", () => AuthScreen);


// start app
Navigation.startSingleScreenApp({
   screen: {
     screen: "myApp.AuthScreen",
     title : "Login"
   }
   
});
