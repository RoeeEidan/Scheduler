import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { daysAndMonths } from '../constans.js';
import CalenderTopBar from './Calender/CalenderTopBar.js';
import ClenderDays from './Calender/ClenderDays.js';
import CalenderScroll from './Calender/CalenderScroll.js';
import DateLable from './Calender/DateLable.js';
import CalendersDayNames from './Calender/CalendersDayNames.js';
import { increace, decreace } from '../Actions/index.js'
import { appStyle } from '../appStyle.js';



const ScrollCallender = (props) => {
    const { isRtl, calender } = props;
    let { hbDayNames, enShortDayNames } = daysAndMonths;
    const dayNames = isRtl ? [...hbDayNames].reverse() : enShortDayNames ;
    const title = isRtl ? `${calender.hbMonthName} ${calender.year}` : `${calender.enMonthName} ${calender.year}`;
    const { focusedDay } = props;
    const dayNumber = Number.parseInt(focusedDay.split('-')[2])
    const dateLableText = isRtl ? `יום ${calender.hbDayName}, ${dayNumber} ל${calender.hbMonthName}`: `${calender.enDayName}, ${calender.enMonthName} ${dayNumber}`;
    return (
        <View style={styles.container}>
            <DateLable text={dateLableText} />
            <CalenderScroll {...props} />
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop: 0,
    },
    line:{
        borderBottomWidth: 1,
        borderBottomColor: appStyle.lightestTextColor,
        marginRight: 13,
        marginLeft: 13,
    }
});



export default ScrollCallender
