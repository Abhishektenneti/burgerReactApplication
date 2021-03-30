import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props)=>(
    <ul className={classes.NavigationItems}>
            {/* <li><a href="/">A Link</a></li> */}
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationitems;