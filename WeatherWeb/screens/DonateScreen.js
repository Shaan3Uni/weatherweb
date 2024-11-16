import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonateScreen = () => (
  <View style={styles.container}>
    <Text>Donate Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DonateScreen;
