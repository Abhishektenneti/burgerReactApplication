
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
                        value : '',
                        validation : {
                            required:true
                        },
                        valid:false,
                        touched: false
                    },                    
                    street:{
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your Street'
                        },
                         value : '',
                         validation : {
                             required:true
                         },
                         valid:false,
                         touched: false
                    },
                    zipCode : {
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your ZipCode'
                        },
                        value : '',
                        validation : {
                            required:true
                        },
                        valid:false,
                        touched: false
                    },
                    country:{
                        elementType:'input',
                        elementConfig : {
                        type : 'text',placeholder : 'Your Country'
                        },
                         value : '',
                         validation : {
                             required:true
                         },
                         valid:false,
                         touched: false
                    },
                    email : {
                        elementType:'input',
                        elementConfig : {
                        type : 'email',placeholder : 'Your E-Mail'
                        },
                         value : '',
                         validation : {
                             required:true
                         },
                         valid:false,
                         touched: false
                    },
                    deliveryMethod :  {
                        elementType:'select',
                        elementConfig : {
                        options:[{value:'fastest',displayValue:'Fastest'},
                                {value:'slower',displayValue:'Slower'}]
                        },
                         value : '',
                         validation: {},
                         valid: true
                    }
            },
            name : '',
            email : '',
            address : {
                street : '',
                postalCode : ''
            },
            formIsValid: false,
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




        checkValidity(value, rules) {
            let isValid = true;
            if (!rules) {
                return true;
            }
            
            if (rules.required) {
                isValid = value.trim() !== '' && isValid;
            }
    
            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid
            }
    
            if (rules.maxLength) {
                isValid = value.length <= rules.maxLength && isValid
            }
    
            if (rules.isEmail) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = pattern.test(value) && isValid
            }
    
            if (rules.isNumeric) {
                const pattern = /^\d+$/;
                isValid = pattern.test(value) && isValid
            }
    
            return isValid;
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
            updatedOrderForm[inputIdentifier].valid = this.checkValidity(event.target.value,updatedOrderForm[inputIdentifier].validation);
            updatedOrderForm[inputIdentifier].touched = true;

            let formIsValid = true;
            for (let inputIdentifier in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
            }
            this.setState({orderForm : updatedOrderForm,formIsValid:formIsValid});
        }

        render(){
            let form = (
                <form onSubmit={this.orderHandler}>
                    {Object.keys(this.state.orderForm).map((key,value)=>(
                        <Input key={key} 
                                elementType={this.state.orderForm[key].elementType} 
                                elementConfig={this.state.orderForm[key].elementConfig} 
                                value={this.state.orderForm[key].value}
                                invalid={!this.state.orderForm[key].valid}
                                shouldValidate={this.state.orderForm[key].validation}
                                touched={this.state.orderForm[key].touched}
                                changed={(event)=>this.inputChangedHandler(event,key)}/>
                    ))} 
                    {/* <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
                    <Input inputtype="input" type="text" name="street" placeholder="Street"/>
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/> */}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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