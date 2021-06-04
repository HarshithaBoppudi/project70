import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,FlatList } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import db from '../config'

export default class ReadStoryScreen extends React.Component {
render(){
  return(
    <View>
  
    <Text style={{ fontSize:30,
    marginTop:10,
    fontWeight:"bold",
    backgroundColor:"orange",
    width:400,
    height:40,
    textAlign:"center",
    textDecorationLine:"underline",
    marginLeft:500,justifyContent:'center'}}>BED TIME STORIES</Text>
    </View>
  )
}

}