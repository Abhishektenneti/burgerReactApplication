import React from 'react';
import classes from './Button.css';


//two ways of writing a stateless component

const button = (props) =>(
    <button className={[classes.Button,classes[props.btnType]].join(' ')}//since className takes only string,we are joining the array to string at the end by using join() 
    disabled={props.disabled}
    onClick={props.buttonClicked}>{props.children}
    </button>
);

// const button = (props) =>{
//     return(<button className={[classes.Button,classes[props.btnType]].join(' ')}//since className takes only string,we are joining the array to string at the end by using join() 
//     onClick={props.buttonClicked}>{props.children}
//     </button>);
// };
    

    


export default button;