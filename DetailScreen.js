import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function DetailScreen( { route, navigation }) {

    const { id, value, name } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgreen' }}>
        <Text style= {{ fontSize: 30 }}>Details Screen id: { id } </Text>

        <Button 
          title="More Details"
          onPress={() => navigation.push('Details', { 
            id: id + 1, 
          })}
        
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
           
    
 