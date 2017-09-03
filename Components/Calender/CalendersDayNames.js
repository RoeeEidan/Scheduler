import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { appStyle, windowWidth, } from '../../appStyle.js';

const CalendersDayNames = (props) =>{
    // Later check lenguage.
    const days = true ? props.days : props.days ;

    return(
        <View style={styles.container}>
            { days.map( (item, i) => <Text style={styles.item} key={i}> {item} </Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowWidth / 10,
    },
    item:{
        flex: 1,
        textAlign: 'center',
        color: appStyle.calenderDayNamesColor,
    }
});

export default CalendersDayNames