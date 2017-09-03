import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { windowWidth, appStyle } from '../../appStyle.js';
import { connect } from 'react-redux';


const CalenderRow = (props) => {
    // Later check lenguage.
    const data = props.isRtl ? props.data.reverse() : props.data;
    
    return (
        <View style={styles.container} key={props.i}>
            {props.data.map((item, i) => {
                const style = {};
                style.color = props.thisMonth === item.monthNumber ? appStyle.calenderTextColor : appStyle.lightTextColor;
                if(item.dateStr === props.todaysValues.string){
                    style.color = appStyle.appColor;
                    style.fontWeight = 'bold';
                    style.fontSize = 16
                } 
                return (
                    <TouchableHighlight
                        style={styles.item}
                        key={i}
                        onPress={() => {
                            props.navigate('Day', item);
                        }}
                    >
                        <Text style={style}> {Number.parseInt(item.dayNumber)}</Text>
                    </TouchableHighlight>
                )
            })}
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        height: appStyle.rowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function mapStateToProps(state) {
    return { todaysValues: state.todaysValues }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalenderRow);


