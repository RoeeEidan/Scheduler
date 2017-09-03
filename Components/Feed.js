import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {appStyle} from '../appStyle.js';

const Feed = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: appStyle.lightBackground,
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    text:{
        textAlign: 'center',
        fontSize: 16,
        color: appStyle.calenderTextColor

    }
})

export default Feed