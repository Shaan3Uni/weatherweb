import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import ReportScreen from './screens/ReportScreen';
import VolunteerScreen from './screens/VolunteerScreen';
import InfrastructureDetailScreen from './screens/InfrastructureDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Map') iconName = 'map';
          else if (route.name === 'Profile') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="InfrastructureDetail" component={InfrastructureDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
