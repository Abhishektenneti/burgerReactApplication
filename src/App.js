import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder/>
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