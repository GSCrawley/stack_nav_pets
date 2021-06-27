import * as React from 'react';
import { Text, View, Button } from 'react-native';
import FeatureView from './FeatureView'


export default function DetailScreen( { route, navigation }) {
    const { item } = route.params;
    const keys = Object.keys(item).filter(key => key != 'breed')


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
        <Text style= {{ fontSize: 32, margin: 10, color: 'darkblue' }}> { item.breed } </Text>

        {keys.map(key => <FeatureView name={key} value={item[key]} />)}

          <Button
            title ="Breeds List"
            onPress={() => navigation.navigate('Breeds')}
            />
 

        </View>
  );
}          
           
    
 