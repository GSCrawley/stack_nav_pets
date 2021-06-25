import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';


function DetailScreen( { route, navigation }) {

    const { itemId, backgroundColor } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
        <Text style= {{ fontSize: 30 }, { backgroundColor }}>Details Screen id: { itemId } </Text>
        <Text>{JSON.stringify()}</Text> 
        </View>
    );
        function Button(navigation) {
          <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          const { onPress, title = 'Details' } =  navigation.push('Details', {
                    itemId = Math.floor(Math.random() * 100),
                    backgroundColor = 'red'
          });
            return (
              <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
              </Pressable>
            
              </View>
                  
         const styles = StyleSheet.create({
                    button: {
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 32,
                      borderRadius: 4,
                      elevation: 3,
                      backgroundColor: 'red',
                    },
                    text: {
                      fontSize: 16,
                      lineHeight: 21,
                      fontWeight: 'bold',
                      letterSpacing: 0.25,
                      color: 'white',
                    },
                  
                });         
    //     <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    //     <Button title="Go Back" onPress={() => navigation.goBack()} /> 
    //   </View>
    // );
  }
}
export default { Button, DetailScreen }
 