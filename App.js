import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Network from './components/network.js';
import Cellular from './components/cellular.js'
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style = {styles.container}>
     
      <Text style={styles.text}>Test.ER</Text>
      
      <Tab.Navigator >

          <Tab.Screen name = 'Cellular INFO' component={Cellular}/>
          <Tab.Screen name = 'Network INFO' component={Network}/>

      </Tab.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe1f1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cellular:{
    width:'100%',
    height:'60%',
    

  },
  text:{
    textAlign:'center',
    marginTop:30
  }
});
