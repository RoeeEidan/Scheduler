import { combineReducers } from 'redux';
import calender from './calender.js';
import todaysValues from './todaysValues.js';
import { rtl } from './rtl.js';

const rootReducer = combineReducers({
    calender,
    todaysValues,
    rtl,
})

export default rootReducer