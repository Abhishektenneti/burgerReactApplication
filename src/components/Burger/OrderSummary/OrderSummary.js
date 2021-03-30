import React,{Component} from 'react';
import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{ 
    // componentWillUpdate(){
    //     console.log('Order summary will update');
    // }
    // componentDidUpdate(){
    //     console.log('Order summary did update');
    // }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
            return <li key={igKey}><span>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        });
        return( <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
            <Button buttonClicked={this.props.cancelOrder} btnType="Danger"> Cancel</Button>
            <Button buttonClicked={this.props.continueOrder} btnType="Success"> Continue</Button>
            <h4>Total Price {this.props.totalPrice}</h4>
            {/* <button onClick={}>CANCEL</button>
            <button>CONTINUE</button> */}
        </Aux>);   
    }
} 


export default OrderSummary;