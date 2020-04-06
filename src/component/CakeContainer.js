import React, { useState } from 'react';
import { buyCake } from '../redux/cake/cakeAction';
import { connect } from 'react-redux';

function CakeContainer(props){

    const [number, setNumber] = useState(1);

    return(
        <div>
            <p><b>No of Cake : {props.noOfCakes}</b></p>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => { props.buyCake(number)}}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes : state.cake.noOfCakes
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);