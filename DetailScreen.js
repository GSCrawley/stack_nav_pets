import * as React from 'react';
import { Text, View, ScrollView, Button, SafeAreaView } from 'react-native';
import FeatureView from './FeatureView'


export default function DetailScreen( { route, navigation }) {
    const { item } = route.params;
    const keys = Object.keys(item).filter(key => key != 'breed')

    
    return (
      <SafeAreaView>

      <View style={{ flexWrap: 2, margin: 80, padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
        <Text style= {{ fontSize: 32, margin:20,justifyContent: 'center',  color: 'darkblue' }}> { item.breed } </Text>
        <ScrollView>
        {keys.map(key => <FeatureView name={key} value={item[key]}  key={[key]}/>)}
        </ScrollView>
          <Button
            style={{marginBottom: 20}}
            title ="Breeds List"
            onPress={() => navigation.navigate('Breeds')}
            />
           
            </View>
            </SafeAreaView>

       
  );
}          
           
    
 