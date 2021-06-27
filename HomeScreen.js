import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import DetailScreen from './DetailScreen'
import Cell from './Cell'

import { cats } from './breeds'
// import { isNotEmittedStatement } from 'typescript';

function HomeScreen({ navigation }) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ flex:1, width:'100%'}}
        data= {cats}
        renderItem= {( {item, index} ) => {
          return (
          <Cell 
          title={ item.breed } 
          showDetails={() => navigation.navigate('Details', { id: 1 })} 
          />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </View>
  );
}

export default HomeScreen