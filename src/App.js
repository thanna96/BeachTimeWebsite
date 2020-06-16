import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './views/ProductList'
import Details from './views/Details'
import Cart from './views/Cart'
import Default from './views/Default'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import StorePolicy from './views/StorePolicy'
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/ProductList" component={ProductList}/>
              <Route path="/About" component={About}/>
              <Route path="/Details" component={Details}/>
              <Route path="/Cart" component={Cart}/>
              <Route path="/StorePolicy" component={StorePolicy}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Contact" component={Contact}/>
              <Route component={Default}/>
          </Switch>
          <Modal/>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
