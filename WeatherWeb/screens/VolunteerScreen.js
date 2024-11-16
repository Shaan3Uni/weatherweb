import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VolunteerScreen = () => (
  <View style={styles.container}>
    <Text>Volunteer Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VolunteerScreen;
