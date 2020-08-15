import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

export function showAlert(alert) {
    return (dispatch) => {
        dispatch(showAnAlert(alert))
    }
}

export function hideAlert(){
    return (dispatch) => {
        dispatch(hideAnAlert())
    }
}

const showAnAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

const hideAnAlert = () => ({
    type: HIDE_ALERT
})