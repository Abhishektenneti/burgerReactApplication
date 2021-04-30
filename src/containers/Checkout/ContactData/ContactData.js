
import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinnner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
        state={
            orderForm : {                
                    name:{
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your Name'
                        },
                        value : ''
                    },                    
                    street:{
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your Street'
                        },
                         value : ''
                    },
                    zipCode : {
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your ZipCode'
                        },
                        value : ''
                    },
                    country:{
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your Country'
                        },
                         value : ''
                    },
                    email : {
                        elementType:'input',
                        elementConfig : {
                        type : 'email',placeholder : 'Your E-Mail'
                        },
                         value : ''
                    },
                    deliveryMethod :  {
                        elementType:'select',
                        elementConfig : {
                        options:[{value:'fastest',displayValue:'Fastest'},
                                {value:'slower',displayValue:'Slower'}]
                        },
                         value : ''
                    }
            },
            name : '',
            email : '',
            address : {
                street : '',
                postalCode : ''
            },
            loading:false
        }

        orderHandler = (event) => {
                event.preventDefault();//without this it will send out a request   
                // console.log(this.props.ingredeients);      
                // alert('You continue');
                const reqestOrderForm = {};
                Object.keys(this.state.orderForm).map((key,value)=>{
                    reqestOrderForm[key] = this.state.orderForm[key].value;
                });
                this.setState({loading:true});
                const order = {
                    ingredients : this.props.ingredients,
                    price : this.props.price ,
                    orderForm : reqestOrderForm                   
                }
                axios.post('/orders.json',order).then(response=>{
                        console.log(response);
                        this.setState({loading:false});
                }).catch(error=> {
                        console.log(error);
                        this.setState({loading:false});
                        });
                // this.props.history.push('/checkout');       
        }

        inputChangedHandler = (event,inputIdentifier)=>{
            // console.log(event.target.value);
            const updatedOrderForm ={
                ...this.state.orderForm
            }
            updatedOrderForm[inputIdentifier].value = event.target.value;
            // const updatedElement = {
            //     ...updatedOrderForm[inputIdentifier]
            // }
            // updatedElement.value = event.target.value;
            // updatedOrderForm[inputIdentifier] = updatedElement; 
            this.setState({orderForm : updatedOrderForm});
        }

        render(){
            let form = (
                <form onSubmit={this.orderHandler}>
                    {Object.keys(this.state.orderForm).map((key,value)=>(
                        <Input key={key} elementType={this.state.orderForm[key].elementType} 
                                elementConfig={this.state.orderForm[key].elementConfig} 
                                value={this.state.orderForm[key].value}
                                changed={(event)=>this.inputChangedHandler(event,key)}/>
                    ))} 
                    {/* <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
                    <Input inputtype="input" type="text" name="street" placeholder="Street"/>
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/> */}
                    <Button btnType="Success" buttonClicked={this.orderHandler}>ORDER</Button>
                </form>
            );
            if(this.state.loading){
                form = <Spinner/>;
            }
            return (
                <div className={classes.ContactData}>
                    <h4>Enter your contact data</h4>
                   {form}
                </div>
            );
        }
}

export default ContactData;