import React from 'react';
import classes from './Order.css';

const order = (props) => (
    <div className={classes.Order}>
         {Object.keys(props.ingredients).map((key,value)=>(
             <span style={{textTransform : 'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid #ccc',padding:'5px'}} 
             key={key}>{key} : {props.ingredients[key]}</span>
         ))}
        <p>Price : <strong>{props.price.toFixed(2)}</strong> </p>
    </div>
);

export default order;