import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ title, onPress }) => {
    return (
        // View no tiene la propiedad de touch para ser seleccionada
        // <View style={styles.container  }>
        //     <Text style={styles.text}>{title}</Text>
        // </View>
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        height: 60,
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderBottomColor: '#31495b'
    },
    text: {
        fontSize: 16
    }
})

