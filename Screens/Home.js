import React from 'react';
import { ScrollView, View, Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../appStyle';
import { isPro } from '../constans.js';
import Title from '../Components/Title.js';
import Feed from '../Components/Feed.js';
import MiniTitle from '../Components/MiniTitle.js';
import ScrollCallender from '../Components/ScrollCallender.js';
import { getDatesAndOpacitys } from '../Actions/index.js';
import MyLable from '../Components/MyLable.js';
import MyPicker from '../Components/MyPicker.js';


class Home extends React.Component {
    render() {
        const { calender, todaysValues } = this.props;
        const { isRtl } = this.props.rtl;
        const title = isRtl ? 'תקבע את התור הבא' : "Book Your Next Appointment";
        const pickerTitle = isRtl ? 'מתי נוח לך?' : "What Time Would You Like?";
        return (
            <View style={styles.container}>
                <Title>{title}</Title>
                <ScrollCallender
                    isRtl={isRtl}
                    calender={calender}
                    focusedDay={this.props.calender.focusedDateSrt}
                    todaysValues={todaysValues}
                />
                <MyLable text={pickerTitle} />
                <MyPicker/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appStyle.backgroundColor,
        paddingTop: 74,
        paddingRight: 10,
        paddingLeft: 10,
    }
})

function mapStateToProps(state) {
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        // getDatesAndOpacitys: () => { getDatesAndOpacitys(dispatch) }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);