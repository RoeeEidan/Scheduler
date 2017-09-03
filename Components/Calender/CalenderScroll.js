import React from 'react';
import { Text, View, StyleSheet, ScrollView, Title } from 'react-native';
import Day from './Day.js';

class CalenderScroll extends React.Component {
    componentDidMount() {
        this.isRtl && setTimeout((() => { this.refs.scrollView.scrollToEnd({ animated: false }) }).bind(this), 80);
    }

    render() {
        this.isRtl = this.props.isRtl;
        const calenderDays = this.isRtl ? [...(this.props.calender.calenderDays)].reverse() : this.props.calender.calenderDays;
        const { focusedDay, todaysValues } = this.props;
        // console.log(this.props.calender)
        return (
            <View>
                <ScrollView ref="scrollView" style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        calenderDays.map((day, i) => <Day todaysValue={todaysValues.string} focusedDay={focusedDay} isRtl={this.isRtl} day={day} key={i} />)
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 35
    },
})

export default CalenderScroll
