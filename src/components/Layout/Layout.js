import React from  'react';

import Aux from  '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
    <div>
        Here comes toolbar, sidedrawer and backdrop
        <Toolbar/>
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
);


export default layout;