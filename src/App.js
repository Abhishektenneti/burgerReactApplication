import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         {/* <BurgerBuilder/>
         <Checkout/> */}
          <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/" component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;



// Toolbar at top of the screen

// Images cannot go directly into src attribute, instead we have to import the image with an alias and then use it. This is because as webpack bundles all the files it cannot
// find the image if we give image path in src attribute

// Sidedrawer feature