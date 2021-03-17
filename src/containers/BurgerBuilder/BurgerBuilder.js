import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxi';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const  INGREDIENT_PRICES = {
    salad : 1,
    cheese : 1,
    meat : 1,
    bacon : 1
} 


class BurgerBuilder extends Component{
    // constructor(){
    //     super(props);
    //     this.state={

    //     }
    // }
    state={
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese :0,
            meat : 0
        },
        totalPrice : 10
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice+INGREDIENT_PRICES[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice-INGREDIENT_PRICES[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    }

    render (){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>                
                <BuildControls price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} 
                disabledInfo={disabledInfo}/>               
            </Aux>
        );
    }
}

export default BurgerBuilder;