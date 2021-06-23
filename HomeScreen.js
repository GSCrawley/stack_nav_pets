import * as React from 'react';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{ fontSize: 30 }}>Home Screen</Text>
      <Button 
              title="View Details"
              onPress={() => navigation.navigate('Details')}>
              </Button>
    </View>
  );
}

export default HomeScreen