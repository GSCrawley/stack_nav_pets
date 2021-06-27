import React from 'react' 
import { View, Text } from 'react-native'

export default function FeatureView({ name, value }) {
    return (
        <View style={{ 
            justifyContent: 'space-between', 
            flexDirection: 'row',
            // backgroundColor: 'pink',
            width: '100%',
            marginRight: 20 ,
            marginLeft: 20,
            padding: 10,
            paddingRight:30,
            paddingLeft:30,
            
            }}>
            <Text style={{
                fontSize: 16,
                color: 'darkorange'
            }}>{name}</Text>

            <Text style={{
                fontSize: 18,
                color: 'darkorange'
            }}>{value}</Text>
        </View>
    )
}