import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from './../redux/iccecream/icecreamAction'

const IceCreamContainer = (props) => {

    const [number, setNumber] = useState(1);

    return(
        <div>
            <p><b>No of Ice Creams: {props.iceCream}</b></p>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => {props.buyIceCream(number)}}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        iceCream: state.icecream.noOfIceCream
    }
}

const mapReducerToProps = dispatch => {
    return {
        buyIceCream: (number) => { dispatch(buyIceCream(number)) }
    }
}

export default connect(mapStateToProps,mapReducerToProps)(IceCreamContainer);