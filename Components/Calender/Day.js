import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../../appStyle.js';
import { setDay } from '../../Actions/index.js';
import store from '../../store.js';


const { isRtl } = store.getState().rtl;

const Day = (props) => {

    const { day } = props;
    const name = isRtl ? day.hbDayName : day.shortEnName;
    const { focusedDay, todaysValue } = props;

    let numberStyle;
    let focusedTextWrapperStyle;

    let setDay = () => props.setDay(day);

    if (day.dateStr === focusedDay) {
        numberStyle = styles.focusedTextStyle;
        focusedTextWrapperStyle = styles.focusedTextWrapperStyle;
    } else if (day.dateStr < todaysValue) {
        setDay = () => { };
        numberStyle = styles.passedDay
    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity
                style={[styles.numberWrapper, focusedTextWrapperStyle]}
                onPress={setDay}
            >
                <Text style={[styles.number, numberStyle]}>{Number.parseInt(day.dayNumber)}</Text>
            </TouchableOpacity>
        </View>
    )
}

const width = (Dimensions.get('window').width - 20) / ( isRtl ? 7.65 : 7.34 );

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'column',
        width: width, 
        justifyContent: 'center'
    },
    name: {
        width: 32,
        textAlign: 'center',
        color: appStyle.mediumDarkTextColor,
        fontSize: 12,
        display: 'flex'
    },
    number: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 13,
        color: appStyle.mediumDarkTextColor,
        fontWeight: 'bold'
    },
    numberWrapper: {
        marginTop: 20,
        height: 32,
        width: 32,
        display: 'flex',
    },
    focusedTextWrapperStyle: {
        borderRadius: 16,
        backgroundColor: appStyle.appColor,
    },
    focusedTextStyle: {
        color: '#fff',
        paddingTop: 0,
        marginTop: 8,
        width: 20,
        marginLeft: 6,
        marginRight: 6
    },
    passedDay: {
        color: appStyle.lightTextColor
    }
})

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDay: (day) => { dispatch(setDay(day)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);