import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import AppHeader from '../components/AppHeader';


export default class ReadStoryScreen extends React.Component {
render(){
  return(
    <View>
    <AppHeader/>
    <Text>ReadStory</Text>
    </View>
  )
}

}