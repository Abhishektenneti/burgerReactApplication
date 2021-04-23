import React from 'react';
import classes from './Order.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients : Salad </p>
        <p>Price : <strong>10 rupees</strong> </p>
    </div>
);

export default order;