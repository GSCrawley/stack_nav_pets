import React, { useState, useMemo } from 'react';
import { Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import DetailScreen from './DetailScreen'
import Cell from './Cell'

import { cats, dogs } from './breeds'

function HomeScreen({ navigation }) {
  const [ showCats, setshowCats ] = useState(false);

  return (
    <View style ={{ flex: 1, width:'100%', height: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor:'pink'
  }}>
      <SafeAreaView>
                <View style={{margin: 10, backgroundColor:'white'}}>
                  <Button
                    title="Switch Species"
                    onPress={() => {
                      setshowCats(!showCats);
                    }}
                  />
					  </View>
      <FlatList
        style={{ flex:1, padding: 110, paddingTop: 20, marginBottom:40, backgroundColor:'lightblue' }}
        data= {showCats ? cats : dogs}
        renderItem= {( {item, index} ) => {
          return (
            
          <Cell 
          // style={{color: 'darkblue'}}
          title={` ${item.breed} `} data={item} 
          showDetails={() => navigation.navigate('Details', { item })} 
          />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
     </SafeAreaView>
    </View>
  );
}

export default HomeScreen