import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button } from 'react-native';
import Header from './components/Header'
import IconBoxes from './components/IconBox'

import DeviceCard from './components/DeviceCard'

export default function App() {

  const [total, setTotal] = useState(0)

  const [backgroundColor,setBackgroundColor] = useState ('#3F7A79');


  const increase = () => {
    setTotal(total + 1)
    if (total === 3) {
        setTotal(total - 0)
    }
  }

  const decrease = () => {
    setTotal(total - 1)
    if (total === 0) {
        setTotal(total - 0)
    }
  }

  const background = () => {
    setBackgroundColor((prevBackgroundColor) => {
        if(prevBackgroundColor === 'black') {
          return '#3F7A79';
        }else{
          return 'black';
        }
      });
}

  

  return (
    <View style={styles.topContainer} >
      <Header infoText="Smarthome"/>
      <View style={styles.ViewContainer}>
        <Text style={styles.headlineText}>Rooms</Text>
        <IconBoxes></IconBoxes>
        <Text  style={styles.headlineText}>Devices</Text>
        

        <DeviceCard  clickOn={increase} clickOff={decrease}  roomName="Bedroom"></DeviceCard>
        <DeviceCard clickOn={increase} clickOff={decrease} roomName="Kitchen"></DeviceCard>
        <DeviceCard clickOn={increase} clickOff={decrease} roomName="Livingroom"></DeviceCard>
        <Text style={styles.countText} >Total devices on: {total}</Text>
        
      </View>
    </View>
  );
}


//Styles For my App
const styles = StyleSheet.create({

  topContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  iconBoxGrid:{
    flex: 1, 
    flexDirection: 'row'
  },
  iconbox: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },

  ViewContainer: {
    backgroundColor: '#ffffff',
    flex: 1
  },

  headlineText: {
    marginLeft: 20,
    fontSize:30,
    fontWeight:'bold'
  },
  countText: {
    marginLeft: 20,
    fontSize:20,
    fontWeight:'bold'
  },


});