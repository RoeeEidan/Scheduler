import { INCREACE_MONTH, DECREACE_MONTH, SET_DAY } from '../constans.js'
import getInitialCalenderState from '../getInitialCalenderState.js'

const initialState = getInitialCalenderState();

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DAY:
            const { dateStr } = action.day;
            return getInitialCalenderState(dateStr)
        default:
            return state
    }
}