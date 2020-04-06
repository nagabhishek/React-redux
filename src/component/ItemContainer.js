import React from 'react';
import {connect} from 'react-redux';
import { buyIceCream } from '../redux/iccecream/icecreamAction';
import { buyCake } from '../redux/cake/cakeAction';

const ItemContainer = (props) => {
    return(
        <React.Fragment>
            <div>Item:{props.item}</div>
            <button onClick={props.buyItem}>Buy Item</button>
        </React.Fragment>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {
        item: ownProps.cake ? state.cake.noOfCakes : state.icecream.noOfIceCream
    }
}

const mapReducerToProps = (dispatch, ownProps) => {
    return {
        buyItem: () => { ownProps.cake ? dispatch(buyCake(1)) : dispatch(buyIceCream(1))}
    }
}

export default connect(mapStateToProps, mapReducerToProps)(ItemContainer);