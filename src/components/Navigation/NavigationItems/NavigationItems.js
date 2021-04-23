import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props)=>(
    <ul className={classes.NavigationItems}>
            {/* <li><a href="/">A Link</a></li> */}
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationitems;