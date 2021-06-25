import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{ fontSize: 30 }}>Home Screen</Text>
      </View>
                                                                                                        );
      
    function Button(navigation) {
      <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      const { onPress, title = 'Details' } = navigation.push;
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
}
}
export default {HomeScreen, Button}