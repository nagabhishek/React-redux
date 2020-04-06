import {FETCH_USER_LOADING,FETCH_USER_SUCCESS,FETCH_USER_ERROR} from './userTypes';

const intialState = {
    loading:false,
    users: [],
    error:null
}

const userReducer = (state = intialState, action) => {

    switch(action.type){
        case FETCH_USER_ERROR:{
            return {
                ...state,
                error:action.payload,
                loading:false,
                users: []
            }
        }
        case FETCH_USER_SUCCESS:{
            return {
                ...state,
                error:null,
                loading:false,
                users: action.payload,
            }
        }
        case FETCH_USER_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        default: return state;
    }
}

export default userReducer;