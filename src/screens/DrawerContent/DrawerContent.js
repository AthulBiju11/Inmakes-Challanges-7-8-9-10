import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Bg from '../../../assets/images/Crown.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/AntDesign'

export function DrawerContent(props){
    return(
        <View style = {{flex : 1}}>
            <DrawerContentScrollView {...props}>
                <View style= {styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style = {{flexDirection : 'row', marginTop : 15}}>
                            <Avatar.Image
                                source = {Bg} 
                                size={80}                         
                            />
                            <View style = {{marginLeft : 100, flexDirection :'column'}}>
                                <Title style={styles.title}>Favaz</Title>
                                <Caption style={styles.caption}>Gold</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style = {styles.drawerSection}>
                        
                        <DrawerItem
                        label="Home"
                        icon={({color,size}) => (
                            <Icon
                                name="home-outline"
                                color = {color}
                                size = {size}
                            />
                        )}
                        onPress = {()=> {props.navigation.navigate('Home')}}
                        />
                    
                        <DrawerItem
                        label="Wallet Balance"
                        icon={({color,size}) => (
                            <Icon
                                name="wallet"
                                color = {color}
                                size = {size}
                            />
                        )}
                        onPress = {()=> {props.navigation.navigate('Screen2')}}
                        />
                
                        <DrawerItem
                        label="Settings"
                        icon={({color,size}) => (
                            <Icon
                                name="account-settings"
                                
                                color = {color}
                                size = {size}
                            />
                        )}
                        onPress = {()=> {props.navigation.navigate('Settings')}}
                        />
                    
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    icon={({color,size}) => (
                        <Icon
                            name="exit-to-app"
                            color = {color}
                            size = {size}
                        />
                    )}
                    onPress = {()=> {}}
                    />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      borderWidth : 1,
      borderColor : 'black',
      height : 115,
      backgroundColor : 'black',

    },
    title: {
      fontSize: 22,
      marginTop: 20,
      fontWeight: 'bold',
      color : 'white',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color : 'white',
      borderColor : 'white',
      backgroundColor : 'grey',
      borderRadius : 5,
      textAlign : 'center',
      paddingTop : 3,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });