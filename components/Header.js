import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

//My header View
const Header = (props)=> {
    const {imageContainer, viewContainer, infoText} = styles;
    return(
        <View style={viewContainer}>
             <View style={styles.parent}>
            <Text style={imageContainer}>
            <AntDesign name="home" size={30} color="#3F7A79" />  
            </Text>         
            <Text style={infoText}>
                {props.infoText}
            </Text>
        </View>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#ffffff',
       height:130
    },
    imageContainer:{
        fontSize:30,
        marginTop: 60, 
        marginBottom: 20,
        marginLeft: 20,
        color:"#ffffff",
        flexDirection:"row",

    },
    infoText:{
        fontSize:20,
        marginTop: 65, 
        marginLeft: 20,
        color:"#3F7A79",
        marginBottom: 40, 
        flexDirection:"row",
        

    },
    parent: {
        flex: 1,
        flexDirection: 'row',  
         
      }

});

export default Header;