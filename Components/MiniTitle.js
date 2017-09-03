import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {appStyle} from '../appStyle.js';



const MiniTitle = (props) => {

    const textDirection = {
        textAlign: props.isRtl ? 'right' : 'left'
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.text, textDirection]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    text:{
        marginRight: 30,
        marginLeft: 30,
        fontSize: appStyle.miniTitleSize,
        color: "#4f5b64",
    }
})

export default MiniTitle