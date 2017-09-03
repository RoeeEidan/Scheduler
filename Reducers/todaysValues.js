import { INCREACE_MONTH, DECREACE_MONTH, daysAndMonths } from '../constans.js'
import getInitialCalenderState from '../getInitialCalenderState.js'

const initialState = (function () {

    const date = new Date();
    const monthNumber = date.getMonth();
    const dayNumber = date.toString().split(' ')[2]; // Number is 0-6.
    const talkedMonth = monthNumber + 1;
    const year = date.getFullYear();
    const monthString = talkedMonth < 10 ? `0${talkedMonth}` : `${talkedMonth}`; // with the 0 befor is < 10
    const string = `${year}-${monthString}-${dayNumber}`;
    const { enMonthName, hbMonthName } = getMonthNames(monthNumber)
    return {
        string,
        dayNumber,
        year,
        monthNumber,
        enMonthName,
        hbMonthName
    }
})()

export default function todaysValues(state = initialState, action) {
    return state;
}


function getMonthNames(num) {
    return {
        enMonthName: daysAndMonths.enMonthNames[num],
        hbMonthName: daysAndMonths.hbMonthNames[num]
    }
}




