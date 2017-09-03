import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const LeftArrow = (props) => (
    <TouchableHighlight
        onPress={props.onPress}
        style={styles.container}
    >
        <Svg
            height={20}
            width={20}
        >
            <Path
                fill="none"
                stroke={props.color}
                strokeWidth={props.strokeWidth}
                d={"M13.978 3L6 10.154l7.64 6.816"}
            />
        </Svg>
    </TouchableHighlight >
);

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        padding: 10
    },
});


export default LeftArrow;