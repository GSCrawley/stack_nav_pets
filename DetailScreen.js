import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import FeatureView from './FeatureView'


export default function DetailScreen( { route, navigation }) {
    const { item } = route.params;
    const keys = Object.keys(item).filter(key => key != 'breed')

    
    return (
      <ScrollView>
      <View style={{ flexWrap: 2, margin: 40, paddingLeft: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
        <Text style= {{ fontSize: 32, margin:20, color: 'darkblue' }}> { item.breed } </Text>
      
        {keys.map(key => <FeatureView name={key} value={item[key]} />)}

          <Button
            title ="Breeds List"
            onPress={() => navigation.navigate('Breeds')}
            />
            </View>
            </ScrollView>
       
       
  );
}          
           
    
 