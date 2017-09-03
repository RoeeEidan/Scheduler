import { SET_DAY } from '../constans.js'

const setDay = (day) => {
    return{
        type: SET_DAY,
        day
    }
}

export default setDay;