import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {appStyle} from '../appStyle.js';



const DateLabel = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.date.split('-').reverse().join('-')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    text:{
        textAlign: 'center',
        fontSize: 16,
        color: appStyle.calenderDayNamesColor,
    }
})

export default DateLabel