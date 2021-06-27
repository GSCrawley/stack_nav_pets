import * as React from 'react';
import { Button, Text, View } from 'react-native';
import DetailScreen from './DetailScreen'

export default function HomeScreen({ navigation }) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{ fontSize: 30 }}>Home Screen</Text>
      <Button
        title = "Go to Details"
        onPress={ () => navigation.navigate('Details', {
          id: 0
        })}
      />
    </View>
  );
}