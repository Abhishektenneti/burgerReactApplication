
import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinnner/Spinner';

class ContactData extends Component{
        state={
            name : '',
            email : '',
            address : {
                street : '',
                postalCode : ''
            },
            loading:false
        }

        orderHandler = () => {
                // event.preventDefault();//without this it will send out a request   
                console.log(this.props.ingredeients);      
                // alert('You continue');
                this.setState({loading:true});
                const order = {
                    ingredients : this.props.ingredients,
                    price : this.props.price,
                    customer : {name:'abhi',address:{street:'test street',country:'india'}}
                }
                axios.post('/orders.json',order).then(response=>{
                        console.log(response);
                        this.setState({loading:false});
                }).catch(error=> {
                        console.log(error);
                        this.setState({loading:false});
                        });
                this.props.history.push('/checkout');       
        }

        render(){
            let form = (
                <form>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="email" name="email" placeholder="Your Email"/>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="postal" placeholder="Postal Code"/>
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