import { Dimensions } from 'react-native';

const DECREACE_MONTH = 'DECREACE_MONTH';
const INCREACE_MONTH = 'INCREACE_MONTH';
const TOGGLE_RTL = 'TOGGLE_RTL';
const SET_OPACITY = 'SET_OPACITY';
const SET_DAY = 'SET_DAY';


const daysAndMonths = {
    enMonthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hbMonthNames: ['ינואר', 'פבואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
    hbDayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    enDayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    enShortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

const text = {
    home: {
        hbTitle: 'ברוך הבא!',
        enTitle: 'Next Up',
        hbFeed: 'לא קבעת שום תור',
        enFeed: 'You have no cuts booked',
        hbMiniTitle: 'תקבע את התור הבא...',
        enMiniTitle: 'Book your next cut!'
    },
}

let isPro = false;
const monthsAhead = 1;

export {
    DECREACE_MONTH,
    INCREACE_MONTH,
    SET_OPACITY,
    SET_DAY,
    daysAndMonths,
    monthsAhead,
    text,
    isPro
}