import { useState } from 'react';
import { View, Text , Image, StyleSheet, ImageBackground} from 'react-native';
// import Logo from '../../../assets/images/Logo_1.png';
import Bg from '../../../assets/images/Background.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();


    const onRegisterPressed = () => {
        console.warn("Register Pressed");
        navigation.navigate('SignIn');
    }

  return (
    <View style = {styles.root} >
        <ImageBackground source={Bg} style = {styles.image}>

        <Text style = {styles.title}>Create an Account!</Text>
        <Text style = {styles.title}> Register Here </Text>

        <CustomInput 
        style= {styles.input}
        placeholder = "Username" 
        value = {username} 
        setValue = {setUsername}
        />
        <CustomInput 
        style= {styles.input}
        placeholder = "Email" 
        value = {email} 
        setValue = {setEmail}
        />
        <CustomInput 
        placeholder = "Password" 
        value = {password} 
        setValue = {setPassword}
        secureTextEntry = {true}
        />
        <CustomInput 
        placeholder = "Repeat Password" 
        value = {passwordRepeat} 
        setValue = {setPasswordRepeat}
        secureTextEntry = {true}
        />
       
        <CustomButton  text = "Register" onPress = {onRegisterPressed}/>
        </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
   root : {
    alignItems : 'center',
    padding : 20,
   },
    logo: {
    //    marginLeft : 100, 
       width : 200,
       height : 200,
       
   },
   image: {
    height : '100%',
    width : '100%',
    // justifyContent : 'center',
    alignItems : 'center',
  },
  title : {
    fontSize : 24,
    fontWeight : 'bold',
    color : '#051C60',
    margin : 10,
  }
})

export default SignUpScreen;