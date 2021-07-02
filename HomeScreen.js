import React, { useState } from 'react';
import { Text, View, FlatList, Button, SafeAreaView } from 'react-native';
import DetailScreen from './DetailScreen'
import Cell from './Cell'

import { cats, dogs } from './breeds'

function HomeScreen({ navigation }) {
  const [ showCats, setshowCats ] = useState(false);

  return (
    <View style ={{ flex: 1, width:'100%', height: '90%', alignItems: 'center', justifyContent: 'center'
  }}>
      {/* <SafeAreaView> */}
                <View style={{margin: 10}}>
                  <Button
                    title="Switch Species"
                    // color="#841584"
                    onPress={() => {
                      setshowCats(!showCats);
                    }}
                  />
					  </View>
      <FlatList
        style={{ flex:1, backgroundColor:'lightblue' }}
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
     {/* </SafeAreaView> */}
    </View>
  );
}

export default HomeScreen