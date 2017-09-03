import { TOGGLE_RTL } from '../constans.js'

const initialState = { isRtl: true };

export { initialState };

export function rtl(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_RTL:
            return { isRtl: !state.isRtl };
        default:
            return state;
    }
};

