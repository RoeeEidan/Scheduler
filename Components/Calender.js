import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { daysAndMonths } from '../constans.js';
import CalenderTopBar from './Calender/CalenderTopBar.js';
import ClenderDays from './Calender/ClenderDays.js';
import CalendersDayNames from './Calender/CalendersDayNames.js';
import { increace, decreace } from '../Actions/index.js'
import {appStyle} from '../appStyle.js';



const Calender = (props) => {
    const {isRtl} = props.rtl;
    const { calender } = props;
    let { hbDayNames, enDayNames } = daysAndMonths;
    hbDayNames = [...hbDayNames];
    // console.log(props)

    // Later on check for launguege.
    const dayNames = isRtl ? hbDayNames.reverse() : daysAndMonths.enShortDayNames;
    const title = isRtl ? `${calender.hbMonthName} ${calender.year}` : `${calender.enMonthName} ${calender.year}`;

    return (
        <View style={styles.container}>
            <CalenderTopBar isRtl={isRtl} increace={props.increace} decreace={props.decreace} title={title} />
            <CalendersDayNames days={dayNames} />
            <ClenderDays navigate={props.navigate} isRtl={isRtl} thisMonth={calender.monthNumber} days={calender.calenderDays} />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',//appStyle.lightBackground,
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 8,
        padding: 8,
    },
});



function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        increace: () => dispatch(increace()),
        decreace: () => dispatch(decreace()),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calender);
