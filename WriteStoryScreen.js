import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import AppHeader from '../components/AppHeader';


export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      text:''
    }
  }
render(){
  return(
    <View style ={styles.container}>
      <AppHeader/>
    
    <TextInput style={styles.inputBox}
        placeholder='Title Of The Story'
         onChangeText={(text)=>{
            this.setState({
         text:text
            })
        }}
        />


      <TextInput style={styles.inputBox2}
        placeholder='Author Of The Story'
         onChangeText={(text)=>{
            this.setState({
         text:text
            })
        }}
        />

<TextInput style={styles.inputBox3}
        placeholder='Write Your Story'
         onChangeText={(text)=>{
            this.setState({
         text:text
            })
        }}
        />

<TouchableOpacity  style={styles.submitButton}>
        
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        
   </View>


  
  )
}

}
const styles=StyleSheet.create({

  inputBox:{
    height:40,
    width:500,
    borderRadius:5,
    borderWidth:1,
    marginLeft:100,
    marginTop:20,
    backgroundColor:'white'
  },
  inputBox2:{
    height:40,
    width:500,
    borderRadius:5,
    borderWidth:1,
    marginLeft:100,
    marginTop:10,
    backgroundColor:'white'
  },
  inputBox3:{
    height:300,
    width:600,
    borderRadius:5,
    borderWidth:1,
    marginLeft:100,
    marginTop:10,
    backgroundColor:'white'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink'
  },
  submitButton:{
    height:50,
    width:100,
    backgroundColor:'aqua',
    marginTop:20,
    alignSelf:'center'
  },
  submitButtonText:{
    fontSize:20,
    fontWeight:'bold',
    padding:10,
    textAlign:'center',
    color:'purple',
    alignSelf:'center'
  }
})