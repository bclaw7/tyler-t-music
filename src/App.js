import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './components/Home';
import ProductList from './components/merch-store/ProductList';
import Details from './components/merch-store/Details';
import Cart from './components/merch-store/Cart';
import Default from './components/Default';
import Modal from './components/merch-store/Modal';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productlist' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;
