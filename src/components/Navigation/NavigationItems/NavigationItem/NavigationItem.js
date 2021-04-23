import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';;

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* <a 
        href={props.link}
        className={props.active?classes.active:null}>{props.children}</a> */}
        <NavLink to={props.link}  exact
        activeClassName={classes.active}> {/*way to use styles for a navlink*/} 
            {props.children}</NavLink>
    </li>
);


export default navigationItem;