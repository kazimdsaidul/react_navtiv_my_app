import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';
import startMainTabs from '..//mainTabs/MainTabs'

class AuthScreen extends Component {
    
     loginHander = () =>{
        console.log('====================================')
        console.log("on click")
        console.log('====================================')
      startMainTabs();

     }

    
    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Button title = "Login" onPress= {this.loginHander}></Button>
            </View>
        );
    }
}

export default AuthScreen;
