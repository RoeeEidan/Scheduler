import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../../appStyle.js';
import RightArrow from './RightArrow.js';
import LeftArrow from './LeftArrow.js';

const CalenderTopBar = (props) => {
    const {isRtl} = props;
    const rightArrowAction = isRtl ? props.decreace :props.increace;
    const leftArrowAction = isRtl ? props.increace :props.decreace;
    return(
        <View style={styles.container}>
            <LeftArrow onPress={leftArrowAction} color={appStyle.appColor} size={40} strokeWidth={2} />
            <Text style={styles.title}> {props.title} </Text>
            <RightArrow onPress={rightArrowAction} color={appStyle.appColor} size={40} strokeWidth={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 18,
        color: appStyle.calenderTextColor,
        paddingTop: 10
    },
});

export default CalenderTopBar;