import classes from './Toolbar.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolBar = (props)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>       
        <nav className={classes.DesktopOnly}>
           <NavigationItems/>
        </nav>
    </header>
);

export default toolBar;