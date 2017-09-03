import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { calenderTextColor, appColor } from '../../constans.js';
import CalenderRow from './CalenderRow.js';


const ClenderDays = (props) => {
    const fullDays = props.days;
    const chunckedArr = [];
    const chunckCount = 7;
    for (let i = 0; i < fullDays.length; i + chunckCount) {
        chunck = fullDays.splice(i, chunckCount);
        chunckedArr.push(chunck);
    }
    
    return (
        <View>
            {chunckedArr.map((item, i) => <CalenderRow navigate={props.navigate} isRtl={props.isRtl} thisMonth={props.thisMonth} data={item} key={i} i={i} /> )}
        </View>
    )
} 

export default ClenderDays;