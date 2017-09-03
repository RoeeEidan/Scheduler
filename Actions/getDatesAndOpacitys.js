import { SET_OPACITY } from '../constans.js';

const setOpacity = (data) => {
    return {
        type: SET_OPACITY,
        data,
    }
}

const getDatesAndOpacitys = (dispatch) => {
    // console.log('mee')
    // fetch('https://localhost:4433', {
    //     method: 'GET',
    //     ca: 'roee'
    // })
    //     .then((response) => { console.log(response); return response.json() })
    //     .then((responseJson) => {
    //         dispatch(setOpacity(responseJson));
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
}

export default getDatesAndOpacitys;