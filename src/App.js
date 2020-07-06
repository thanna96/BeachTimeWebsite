import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Header/Navbar'
import ProductList from './components/ProductsPage/ProductList'
import Details from './components/ProductsPage/Details'
import Cart from './components/Cart'
import Default from './components/DefaultPage/Default'
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About'
import Login from './components/LoginPage/Login'
import StorePolicy from './components/PolicyPage/StorePolicy'
import Contact from "./components/ContactPage/Contact";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import TopBar from "./components/Header/TopBar";
import TestDb from "./DBTests/TestDB";
import SizingPage from "./components/SizingPage/SizingPage";
import AdminPage from "./components/AdminPage/AdminPage";


function App() {
  return (
      <React.Fragment>
          <TestDb/>
          <TopBar/>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ProductList/:id/:title" component={Details}/>
              <Route path="/ProductList" component={ProductList}/>
              <Route path="/About" component={About}/>
              {/*<Route path="/Details" component={Details}/>*/}
              <Route path="/Cart" component={Cart}/>
              <Route path="/SizingPage" component={SizingPage}/>
              <Route path="/StorePolicy" component={StorePolicy}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Contact" component={Contact}/>
              <Route path="/AdminPage" component={AdminPage}/>
              <Route component={Default}/>
          </Switch>
          <Modal/>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
