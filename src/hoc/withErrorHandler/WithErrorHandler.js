import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxi/Auxi';

const withErrorHandler = (WrappedComponent, axios) =>{
    return class extends Component {
        state={error :null }
        componentWillMount(){
            this.reqIntercep =  axios.interceptors.response.use(req=>{
                this.setState({error:null});
                return req;
            });
            this.resIntercep = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
            });
        }
        componentWillMount(){
            axios.interceptors.request.eject(this.reqIntercep);
            axios.interceptors.response.eject(this.resIntercep);
        }
        errorConfirmedHandler(){
            this.setState({error:null});
        }
        render(){
            return (
            <Aux>
                <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                    {this.state.error?this.state.error.message:null}
                </Modal>
            <WrappedComponent {...this.props}/>
            </Aux>
            )
        }
    } 
}

export default withErrorHandler;