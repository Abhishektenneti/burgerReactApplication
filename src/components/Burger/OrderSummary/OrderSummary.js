import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}><span>{igKey}</span> : {props.ingredients[igKey]}</li>
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            <Button buttonClicked={props.cancelOrder} btnType="Danger"> Cancel</Button>
            <Button buttonClicked={props.continueOrder} btnType="Success"> Continue</Button>
            {/* <button onClick={}>CANCEL</button>
            <button>CONTINUE</button> */}
        </Aux>
    );
};

export default orderSummary;