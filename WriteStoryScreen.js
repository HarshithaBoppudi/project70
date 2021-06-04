import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,KeyboardAvoidingView ,Alert} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config'
import firebase from 'firebase'
import * as  Permissions from 'expo-permissions'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
     
      title:'',
      author:'',
      story:''
    }
  }
  submitStory=()=>{
     db.collection('stories').add({
        title:this.state.title,
        author:this.state.author,
        story:this.state.story
      })
      alert('story is submited')
      
  }
  
render(){
  return(
    <View style ={styles.container}>
      <AppHeader/>
      <KeyboardAvoidingView  style={styles.container} behavior='padding' enabled>
      
          
    <TextInput style={styles.inputBox}
        placeholder='Title Of The Story'
         onChangeText={(text)=>{
            this.setState({
         title:text
            })
        }}
        />


      <TextInput style={styles.inputBox2}
        placeholder='Author Of The Story'
         onChangeText={(text)=>{
            this.setState({
         author:text
            })
        }}
        />

<TextInput style={styles.inputBox3}
        placeholder='Write Your Story'
        multiline
        numberOfLines={8}
         onChangeText={(text)=>{
            this.setState({
         story:text
            })
        }}
        />

<TouchableOpacity  style={styles.submitButton}  onPress={this.submitStory}>
       
          <Text style={styles.submitButtonText}>Submit</Text>
          
    
         
        </TouchableOpacity>
         
     
</KeyboardAvoidingView>

        
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