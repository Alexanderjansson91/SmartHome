import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//My header View
const IconBox = (props)=> {
    const {imageContainer, viewContainer, infoText,textContainer} = styles;
    return(
        <View style={viewContainer}>
             <View style={styles.parent}>
            <Text style={imageContainer}>
            <Ionicons name="bed-outline" size={80} color="black" />
            </Text>  
            <Text style={imageContainer}>
            <MaterialIcons name="kitchen" size={80} color="black" />  
            </Text>
            <Text style={imageContainer}>
            <MaterialCommunityIcons name="sofa" size={80} color="black" />   
            </Text>
        </View>
        <View style={styles.parent}>
            <Text style={textContainer}>   
            <Text style={infoText}>Bedroom</Text>
            </Text>  
            <Text style={textContainer}>     
            <Text style={infoText}>Kitchen</Text>
            </Text>
            <Text style={textContainer}>
            <Text style={infoText}>Livingroom</Text>
            </Text>
        </View>
        </View>
    )
}

//Styles for my header
const styles = StyleSheet.create({
    viewContainer:{
       backgroundColor: '#ffffff',
       height:130,
       marginBottom:20,
    },
    imageContainer:{
        fontSize:30,
        textAlign:'center',
        marginBottom: 20,
        backgroundColor:"#64B8B8",
        margin:18,
        height:100,
        width:100,
    },
    textContainer:{
        fontSize:30,
        textAlign:'center',
        marginBottom: 20,
        backgroundColor:"#64B8B8",
        margin:18
        ,
        marginTop:40,
        height:30,
        width:100,
        flexDirection:'column'
    },
    infoText:{
        fontSize:15,
        color:"#000000", 
    },
    parent: {
        flex: 1,
        flexDirection: 'row',      
        textAlign:'center',
        justifyContent:'center', 
      }

});

export default IconBox;