/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/navigation/helper';


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})
