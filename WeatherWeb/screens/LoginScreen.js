import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapComponent from '../components/MapComponent.js';

const LoginScreen = () => (
  <View style={styles.container}>
    <MapComponent />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
