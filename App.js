// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="Breeds"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30, 
              color: 'darkblue'
            },
          }}
        >
      <Stack.Screen 
        name="Breeds" 
        component={ HomeScreen }   
        />
      <Stack.Screen 
      name="Details" 
      component={ DetailScreen } />
    </Stack.Navigator>
  </NavigationContainer>
);
}




export default App;