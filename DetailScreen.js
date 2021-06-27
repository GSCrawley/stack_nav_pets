import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function DetailScreen( { route, navigation }) {

    const { itemId, backgroundColor } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgreen' }}>
        <Text style= {{ fontSize: 30 }, { backgroundColor }}>Details Screen id: { itemId } </Text>

        <Button 
          title="More Details"
          onPress={() => navigation.push('Details', { 
            itemId: Math.floor(Math.random() * 100), 
          })
        }
          />

          <Button
            title ="Go Home"
            onPress={() => navigation.navigate('Home')}
            />

          <Button 
            title="Go Back" 
            onPress={() => navigation.goBack()} /> 

        </View>
  );
}          
           
    
 