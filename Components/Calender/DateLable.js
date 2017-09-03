import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {appStyle} from '../../appStyle.js'

const DateLable = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >
                {props.text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        paddingBottom: 6,
        height: 23,
    },
    text:{
        fontSize: 14,
        textAlign: 'center',
        color: appStyle.darkTextColor,
        fontWeight: 'bold'
    }   
})

export default DateLable
