import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render(){
    return(
      
    
    
      <AppContainer/>
     
     
     
    )
  }
}


  const tabNavigator=createBottomTabNavigator({
    WriteStory:{screen:WriteStoryScreen},
  ReadStory:{screen:ReadStoryScreen}
   
  },
   {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
        const routeName=navigation.state.routeName
        if(routeName==='WriteStory'){
          return(
            <Image
            source={require('./assets/write.png')}
            style={{width:40,height:40}}
            />
          )
        }
        else if(routeName==='ReadStory'){
          return(
            <Image
            source={require('./assets/read.png')}
            style={{width:40,height:40}}
            />
          )
        }
      }
    })
  }
  )
const AppContainer=createAppContainer(tabNavigator)
