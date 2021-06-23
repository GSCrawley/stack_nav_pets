import * as React from 'react';
import { Button, Text, View } from 'react-native';

function DetailScreen( { navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style= {{ fontSize: 30 }}>Details Screen</Text>
        <Button
            title="View More Details"
            onPress={() => navigation.push('Details')}
            />
      </View>
    );
  }

export default DetailScreen