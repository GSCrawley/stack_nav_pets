import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function DetailScreen( { route, navigation }) {
    const { item } = route.params;
    const keys = Object.keys(item).filter(key => key != 'breed')


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgreen' }}>
        <Text style= {{ fontSize: 30 }}>Breed: { item.breed } </Text>

        {keys.map(key => <Text style= {{ fontSize: 20  }}>{key} : {item[key]}</Text>)}
        

          <Button
            title ="Go Home"
            onPress={() => navigation.navigate('Home')}
            />
 

        </View>
  );
}          
           
    
 