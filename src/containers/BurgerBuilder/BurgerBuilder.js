import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxi/Auxi';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinnner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';

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
        ingredients : null,
        totalPrice : 10,
        purchasing : false,
        loading:false,
        error: false
    }

    componentDidMount(){
        axios.get('https://react-my-burger-fe06b-default-rtdb.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data});
        })
        .catch(error=>{
            this.setState({error:error});
        });
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

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    closeModal = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
        // alert('You continue');
        // this.setState({loading:true});
        // const order = {
        //     ingredients : this.state.ingredients,
        //     price : this.state.totalPrice,
        //     customer : {name:'abhi',address:{street:'test street',country:'india'}}
        // }
        // axios.post('/orders.json',order).then(response=>{
        //         this.setState({loading:false,purchasing:false});
        // }).catch(error=> {
        //         this.setState({loading:false,purchasing:false});
        //         });
        this.props.history.push('/checkout');
    }

    render (){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;

        let orderSummary = null;        
        let burger = <Spinner/>;

        if(this.state.ingredients){
            burger = (<Aux>                
                <Burger ingredients={this.state.ingredients}/>                
                <BuildControls price={this.state.totalPrice} 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler} 
                disabledInfo={disabledInfo} ordered={this.purchaseHandler}/>               
            </Aux>);
            orderSummary = <OrderSummary 
                            ingredients={this.state.ingredients} 
                            cancelOrder={this.closeModal}
                            continueOrder={this.purchaseContinueHandler} 
                            totalPrice={this.state.totalPrice}/>
        }
        if(this.state.loading)
        {
            orderSummary = <Spinner/>;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.closeModal}>
                    {orderSummary}
                </Modal>
                     {burger}
            </Aux>            
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);