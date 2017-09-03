import { Dimensions } from 'react-native';

const appStyle = {
    calenderTextColor: '#677580',
    calenderDayNamesColor: '#c9cbcd',
    appColor: '#3b5998',
    backgroundColor: '#fff',
    rowHeight: 40,
    titleSize: 16,
    miniTitleSize: 24,
    darkTextColor: '#545454',
    mediumDarkTextColor: '#808080',
    lightTextColor: '#C9C9C9',
    lightestTextColor: '#f6f6f6'
}
 
const windowWidth = Dimensions.get('window').width;
 
export {windowWidth, appStyle}