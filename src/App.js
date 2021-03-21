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



// customBackdrop

// custom button component and giving styles in array(for cancel and continue on modal)

// () component will return without writing return, {} component should have a return statement explicitly
