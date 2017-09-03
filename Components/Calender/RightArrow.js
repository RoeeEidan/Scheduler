import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RightArrow = (props) => (
    <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    >
        <Svg
            height={props.size}
            width={props.size}
        >
            <Path
                fill="none"
                stroke={props.color}
                strokeWidth={props.strokeWidth}
                d={"M7 4l7.978 7.154-7.64 6.816"}
            />
        </Svg>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        padding: 10
    },
});

export default RightArrow;