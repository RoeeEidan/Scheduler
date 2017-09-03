import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {appStyle} from '../appStyle.js'

const MyLable = (props) => {
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
        paddingTop: 22,
        paddingBottom: 15,
        height: 23,
    },
    text:{
        fontSize: 14,
        textAlign: 'center',
        color: appStyle.darkTextColor,
        fontWeight: 'bold'
    }   
})

export default MyLable
