import React from 'react';
import {Redirect,Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Header/Navbar'
import ProductList from './components/ProductsPage/ProductList'
import Details from './components/ProductsPage/Details'
import Cart from './components/Cart'
import Default from './components/DefaultPage/Default'
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About'
import MensProductList from './components/ProductsPage/MensProductList'
import StorePolicy from './components/PolicyPage/StorePolicy'
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
//import TopBar from "./components/Header/TopBar";
import TestDb from "./DBTests/TestDB";
import SizingPage from "./components/SizingPage/SizingPage";
// import AdminPage from "./components/AdminPage/AdminPage";
//import Shop from "./components/ProductsPage/Shop"
import CustomerCare from "./components/PolicyPage/CustomerCare";
import BYOB from "./components/BYOBPage/BYOB";
import LoginPage from "./components/AdminPage/LoginPage";

const check  = () =>{
    return localStorage.getItem('login');
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        check () ? (
            <Component {...props} />
        ) : (
            <Redirect to='/Login' />
        )
    )} />
)

function App() {
  return (
      <React.Fragment>
          <TestDb/>
          {/*<TopBar/>*/}
          <Navbar/>
          <Switch>
              <AuthRoute exact path="/" component={Home}/>
              <AuthRoute exact path="/byob" component={BYOB}/>
              <AuthRoute exact path="/product-list/:style/:id/:title" component={Details}/>
              <AuthRoute exact path="/mens-product-list/:style/:id/:title" component={Details}/>
              <AuthRoute exact path="/product-list/:style" component={ProductList}/>
              <AuthRoute exact path="/mens-product-list/:style" component={MensProductList}/>
              <AuthRoute path="/about" component={About}/>
              <AuthRoute path="/customer-care" component={CustomerCare}/>
              {/*<Route path="/Shop" component={Shop}/>*/}
              <AuthRoute path="/cart" component={Cart}/>
              <AuthRoute path="/sizing-page" component={SizingPage}/>
              <AuthRoute path="/store-policy" component={StorePolicy}/>
              {/*<Route path="/Login" component={Login}/>*/}
              <AuthRoute path="/contact" component={Contact}/>
              {/*< Route path="/admin-page" component={AdminPage}/>*/}
              <AuthRoute component={Default}/>
              {/*<Route path="/Login" component={LoginPage} />*/}
          </Switch>
          <Route path="/Login" component={LoginPage} />
          <Modal/>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
