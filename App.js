import * as React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {createAppContainer}from'react-navigation'
import {createBottonTabNavigator}from'react-navigation-tabs'
import Booktransaction from './components/booktransaction'
import Search from './components/search'
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const tabNavigator=createBottonTabNavigator({ transaction:{screen:Booktransaction},
search:{screen:Search},
})
const AppContainer=createAppContainer(tabNavigator)