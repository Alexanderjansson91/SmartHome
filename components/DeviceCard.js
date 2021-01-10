import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

//My header View
const Header = (props)=> {
    const {imageContainer, viewContainer, colorBox,roomText,onOffButton,buttonView} = styles;
    return(
        <View style={viewContainer}>
             <View style={styles.parent}>
               <View style={styles.colorBox}></View>
               <Text style={styles.roomText} >{props.roomName}</Text>
               <View style={styles.buttonView}> 
               <Button onPress={props.clickOn}color='black' style={styles.onOffButton} title="On"></Button>
               <Button onPress={props.clickOff} color='black' style={styles.onOffButton} title="Off"></Button>
               </View>
        </View>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#3F7A79',
       height:110,
       width:'90%',
       justifyContent:'center',
       alignSelf:'center',
       marginTop:20,
       marginBottom:20,
        
    },
    colorBox: { 
        height:20,
        width:20,  
        backgroundColor:'red',
        marginTop:45,
        marginLeft:20,

    },
    roomText: {
        marginTop:42,
        marginLeft:20,
        fontSize:20,
    },

    onOffButton:{
        color:'black',
        borderStyle:'solid',

    }, 
    buttonView:{
        marginTop:18,
        marginRight:20,
        right:0,
        position:'absolute',
    },

    imageContainer:{
        fontSize:30,
        marginTop: 60, 
        marginBottom: 20,
        marginLeft: 20,
        color:"#ffffff",
        flexDirection:"row",

    },

    parent: {
        flex: 1,
        flexDirection: 'row',  
    
      }

});

export default Header;