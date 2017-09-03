import { SET_DAY } from '../constans.js'

const initialState = { monthsAhead: 3 }

const datesAndOpacitys = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPACITY:
            return action.data;
        default:
            return state;
    }
}

export default datesAndOpacitys;

