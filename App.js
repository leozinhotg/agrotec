import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './src/components/Login/index';
import { AppLoading } from "expo-app-loading";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={{width: '100%', height: '100%', alignItems: 'center', position: 'absolute'}}> 
        <Login/>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});