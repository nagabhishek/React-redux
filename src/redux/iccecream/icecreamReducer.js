import { BUY_ICECREAM } from "./icecreamType";

const initialState = {
    noOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream -action.payload
            }

            default: return state;
    }
} 

export default iceCreamReducer;