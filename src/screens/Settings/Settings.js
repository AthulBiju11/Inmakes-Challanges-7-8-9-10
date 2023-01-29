import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React,{Component} from 'react'
import { getDrawerStatusFromState } from '@react-navigation/drawer'
import axios from 'axios';
export default class Settings extends Component
{
  constructor(){
    super();
    this.state = {
      loader : false,
      DATA: []
    }
  }
  
  getData(){
    this.setState({loader:true})
    fetch('https://api.sampleapis.com/coffee/hot')
    .then((response) => response.json())
    .then((response) => {
      if(response.length>0){
        this.setState({DATA : response})
      }
      this.setState({loader : false})
      // console.log('Your response is : ', response)
    })
    .catch((error) => {
      this.setState({loader : false})
      console.log('ERROR IS " ', error)
    })
  }
  
  getAxiosData(){
    this.setState({loader : true})
    axios.get('https://api.sampleapis.com/coffee/hot')
    .then((response) => {
      this.setState({loader:false})
      console.log("Axios : Response" , response)
    })
    .catch((error) => {
      this.setSatate({loader:false})
      console.log('Axios error : ', error)
    })
  }

  componentDidMount(){
    this.getData()
  }

  render() {
      const renderItem = ({item}) => (
        <View style = {styles.itemContainer}>
          <Text style = {styles.itemText}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ) 
      return(
        <View style={styles.container}>
            <ActivityIndicator size={50} color= 'blue' animating = {this.state.loader}/>
            <Text style={styles.text}
            onPress = {()=>this.getAxiosData()}>This is Chapter Page</Text>
            <FlatList style = {{width : '95%',marginTop : 10}}
                data = {this.state.DATA}
                renderItem = {renderItem}
            />
        </View>
      )
    }
  
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,
        borderColor : 'black',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#eeeeee',
    },
    text : {
        fontWeight : 'bold',
        fontSize : 25,
        // paddingTop : 250,
    },
    itemContainer : {
      width : '100%',
      padding : 10,
      backgroundColor : '#ffffff',
      // elevation : 5,
      marginBottom : 10,
    },
    itemText : {
      fontSize : 16,
      fontWeight : 'bold',
    },
    itemDescription : {
      fontSize : 14,
      color : '#369',
      fontWeight : 'bold ',
      marginTop  : 5,
    }
})

