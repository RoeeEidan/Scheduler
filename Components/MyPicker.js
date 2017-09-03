import React from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import { appStyle } from '../appStyle.js';

class MyPicker extends React.Component {
    state = {
        shift: '8:00'
    }
    render() {
        return (
            <View style={styles.container}>
                <Picker style={styles.picker} itemStyle={styles.pickerItem}
                    selectedValue={this.state.shift}
                    onValueChange={(itemValue, itemIndex) => this.setState({ shift: itemValue })}>
                    <Picker.Item label="8:00" value="8:00" />
                    <Picker.Item label="8:20" value="8:20" />
                    <Picker.Item label="8:40" value="8:40" />
                    <Picker.Item label="9:00" value="9:00" />
                    <Picker.Item label="9:20" value="9:20" />
                    <Picker.Item label="9:40" value="9:40" />
                    <Picker.Item label="10:00" value="10:00" />
                </Picker>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingRight: 100,
        paddingLeft: 100,
        height: 100,
    },
    picker: {
        height: 50 ,
    },
    pickerItem: {
        fontSize: 18,
        color: appStyle.darkTextColor,
        height: 120,
        fontWeight: 'bold'
    }
})

export default MyPicker
