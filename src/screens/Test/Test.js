import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default function Test() {
const [name,setName] = useState('Programming')

const clickMe = () => {
    setName('Knowledge');
}

    return (
        <View>
            <Text>{name}</Text>
            
            <View style = {styles.button}>
                <Button 
                title = "Change"
                onPress={clickMe}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : "center",
        justifyContent : 'center'
    },
    button : {
        backgroundColor : 'black',
        padding : 10,
        margin : 20,
        borderRadius : 5,

    }
}) 