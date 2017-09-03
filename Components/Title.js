import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {appStyle} from '../appStyle.js';

const Title = (props) => {
    return (
        <View >
            <Text style={styles.text}>{ props.children }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 50
    },
    text:{
        textAlign: 'center',
        fontSize: appStyle.titleSize,
        color: appStyle.darkTextColor,
        fontWeight: 'bold'
    }
})

export default Title