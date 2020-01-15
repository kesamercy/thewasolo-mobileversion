import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from "react-navigation-drawer";
import {Dimensions} from "react-native";
import {Feather} from "react-native-vector-icons";
import HomeScreen from './screens/HomeScreen';
import UpdateScreen from './screens/UpdateScreen';
import AboutScreen from './screens/AboutScreen';
import Language from './screens/Language';
import CategoryScreen from './screens/CategoryScreen';
import doctorLanguage from './screens/doctorLanguage';
import patientResponse from './screens/patientResponse';

const DrawerNavigator = createDrawerNavigator({
  
  Home: HomeScreen,
  Doctor: doctorLanguage,
  Language: Language,
  Update: UpdateScreen,
  Category: CategoryScreen,
  PR: patientResponse,
  About: AboutScreen,
  

  // contentOptions: {
  //   activeTintColor: 'white',
  // },


},



{
  drawerBackgroundColor: 'cadetblue',

}


)



export default createAppContainer(DrawerNavigator);

  // const App navigationOptions = {
  //   title: "The Wasolo",
  //   headerStyle: {
  //     backgroundColor: '#373142'
  //   },
  //   headerTitleStyle: {
  //     color: '#FFF'
  //   }
  // }
