import React from 'react';
import { Modal, View, Text, Button, Image , StyleSheet} from "react-native";

const placeDetalis = props => {
    let modalContent = null;
    if (props.seletedPlace) {
        modalContent = (
            <View style={styles.container }>
                <Image style= {styles.palceImage} source={props.seletedPlace.image}/>
                <Text style= {styles.palceName}>{props.seletedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onRequestClose} visible = {props.seletedPlace !==null}>
            <View>
                {modalContent}
                <View>
                    <Button title="Delete" color="red"  onPress={props.onItemDelete}/>
                    <Button title="Close" onPress={props.onMedelClose}/>
                </View>
            </View>

        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
      padding: 26,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
       
    }, 
    palceImage:{
   
    
    }, palceName:{
        fontSize: 22
        

    }

  });
  


export default  placeDetalis;







