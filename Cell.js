import React from 'react' 
import { TouchableHighlight, Text } from 'react-native' 

function Cell({ title, showDetails  }) {

    return (
        <TouchableHighlight
            style={{ padding: 20 }}
            onPress={() => showDetails()}
            underlayColor="lightblue"
            >

        <Text
            style={{ fontSize: 20 }}>{ title }</Text>
        </TouchableHighlight>
    )
}

export default Cell
