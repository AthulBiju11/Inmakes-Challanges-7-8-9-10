import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../screens/DrawerContent/DrawerContent';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Screen1 from '../screens/Screen1';
// import Screen2 from '../screens/Screen2'
import Videos from '../screens/Videos';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent{...props}/> }>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Screen2" component={MyTabs} />
      <Drawer.Screen name="Settings" component={Settings} />

    </Drawer.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name = "SignIn" component={SignInScreen}/>
        <Stack.Screen name = "SignUp" component={SignUpScreen}/>
        <Stack.Screen name = "Home" component={DrawerRoutes}/>
        {/* <Stack.Screen name = "Settings" component={Settings}/>
        <Stack.Screen name = "Screen1" component={Screen1}/>
        <Stack.Screen name = "Screen2" component={Screen2}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      tabBarOptions = {{
        activeTintColor : '#e91e63',
        labelStyle : {fontSize: 10},
        style : { backgroundColor :'white'},
      }}
    >
      <Tab.Screen 
        name="Videos" 
        component={Videos} 
        options = {{tabBarLabel : 'Videos'}}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options = {{tabBarLabel : 'Chapter'}}
      />
      <Tab.Screen 
        name="Screen1" 
        component={Screen1} 
        options = {{tabBarLabel : 'Resources'}}
      />
    </Tab.Navigator>
  );
}


export default Navigation;