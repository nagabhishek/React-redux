import {FETCH_USER_LOADING,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userTypes';
import axios from 'axios';

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(userloadingAction());
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            dispatch(userSuccessAction(response.data));
        }).catch(error => {
            dispatch(userErrorAction(error.message));
        });
    }
}

const userloadingAction = () => {
    return {
        type:FETCH_USER_LOADING
    }
}

const userSuccessAction = (users) => {
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

const userErrorAction = (error) => {
    return {
        type:FETCH_USER_ERROR,
        payload: error
    }
}