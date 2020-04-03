import React from'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const HooksReact = () => {

    let count = useSelector((state) => state.noOfCakes);
    const dispatch = useDispatch();

    return(
        <div>
            <p>Using Hooks Methods:</p>
            <h3>No of cakes: {count}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default  HooksReact;