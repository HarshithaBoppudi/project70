import * as React from 'react';

import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import * as firebase from 'firebase'
export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }
    login=async (email,password)=>{ 
       if(email&&password){
           try{
               const response=await firebase.auth().signInWithEmailAndPassword(email,password)
               if(response){
                   this.props.navigation.navigate('WriteStory')
               }
           }
           catch(error){
               switch(error.code){
                   case 'auth/user-not-found':
                       alert('user doesnot exist')
                       break;
                     case 'auth/invalid-email':
                         alert('Incorrect email or password')
                         break;
                     default:alert('In correct password')
                     break;
               }
           }
       }
       else{
           alert('enter email id and password')
       }
    }
    render(){
        return(
            <View style={{backgroundColor:'#89CFF0'}}>
                <Image
                source={require('../assets/bedTime2.jpg')}
                style={{width:500,height:200,alignSelf:'center'}}
                />


                
                <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>
                    Bed Time Stories
                </Text>
             <TextInput
             style={styles.loginBox}
             placeholder='enter email id'
             keyboardType='email-address'
             onChangeText={(text)=>{
                 this.setState({
                     emailId:text
                 })
             }}
            />

<TextInput
             style={styles.loginBox}
             placeholder='enter password'
            secureTextEntry={true}
             onChangeText={(text)=>{
                 this.setState({
                  password:text
                 })
             }}
            />
            <TouchableOpacity style={styles.loginButton} 
             onPress={()=>{
                 this.login(this.state.emailId,this.state.password)
             }}
             >
                <Text>login</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/bedTime.jpg')}
                style={{width:300,height:300,alignSelf:'center',}}
                />

            </View>
        )
    }
}
const styles=StyleSheet.create({
    loginBox:{
        width:250,
        height:50,
        borderWidth:2,
        textAlign:'center',
        fontSize:20,
        margin:10,
        alignSelf:'center'
    },
    loginButton:{
      width:100,
      height:35,
      borderWidth:1,
      marginTop:10,
      borderRadius:5 ,
      alignSelf:'center' 
    }
})