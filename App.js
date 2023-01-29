import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Settings from './src/screens/Settings';
import Navigation from './src/navigation';
import Test from './src/screens/Test/Test';

export default function App() {
  return (
    <SafeAreaView style = {styles.root}>
      <Navigation/>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  root : {
    flex : 1,
    backgroundColor : '#F9FBFC',
  }
});
