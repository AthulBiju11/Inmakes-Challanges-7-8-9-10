import { useState } from 'react';
import { View, Text , Image, StyleSheet, ImageBackground} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import Bg from '../../../assets/images/Background.jpg'
import React from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const SignInScreen = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Sign in");
        // validate user

        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        console.warn('OnForgotPasswordPressed')
        navigation.navigate("SignUp")
    }

  return (
    <View style = {styles.root} >
        <ImageBackground source={Bg} style = {styles.image}>

        <Image source = {Logo} style = {styles.logo} resizeMode="contain" />
        <Text style = {styles.text}> Welcome to Not Just Development! </Text>
        <Text style = {styles.text}> Login Here. </Text>

        <CustomInput 
        style= {styles.input}
        placeholder = "Username" 
        value = {username} 
        setValue = {setUsername}
        />
        <CustomInput 
        placeholder = "Password" 
        value = {password} 
        setValue = {setPassword}
        secureTextEntry = {true}
        />
        <CustomButton  text = "Sign in" onPress = {onSignInPressed}/>
        <CustomButton
          text="Create Account"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
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
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    // justifyContent : 'center',
  },
})

export default SignInScreen;