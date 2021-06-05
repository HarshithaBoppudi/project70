import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,FlatList } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import db from '../config'

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[],
     search:''
     
    }
  }
  componentDidMount=async()=>{
    const transactions=await db.collection('bedTimeStories').limit(10).get()
    transactions.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          
        })
    })
  }
  searchFilter=async(text)=>{
          var enteredText=text.split('')
        
  }
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

<View style={styles.searchBar}>
        <TextInput style={styles.bar}
        placeholder='enter story name'
        onChangeText={(text)=>{
           this.setState({
             search:text
           })
        }}
        
        />
        <TouchableOpacity style={styles.searchButton} onPress={()=>{
          this.searchFilter(this.state.search)
        }}>
               <Text>Search</Text>
        </TouchableOpacity>

      </View>



<FlatList
       data={this.state.allStories}
       renderItem={({item})=>(
           <View style={{borderBottomWidth:2,marginTop:30,backgroundColor:'pink'}}>
                 <Text>
                   {'StoryName:  '+item.storyName}
                 </Text>
                 <Text>
                   {'Author:  '+item.author}
                 </Text>
                 <Text>
                   {'Story:  '+item.story}
                 </Text>
                
           </View>
       )}
       keyExtractor={(item,index)=>index.toString()}
      
       />
    </View>
  )
}

}
const styles=StyleSheet.create({
  searchBar:{
      flexDirection:'row',
      height:40,
      borderWidth:0.5,
      alignItems:'center',
      
  },
 
  searchButton:{
    borderWidth:1,
    height:30,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'violet'

  }
})