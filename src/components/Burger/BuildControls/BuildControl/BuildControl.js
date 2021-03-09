import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button classes={classes.Less}>Less</button>
        <button classes={classes.More}>More</button>
    </div>
);

export default buildControl;