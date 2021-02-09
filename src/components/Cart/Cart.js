import React, {Component} from 'react';
// import Title from "../Header/Title";
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <div className="col-10 mx-auto m-4 text-center text-title mt-3">
                                        <p className="mx-auto  font-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'40px'}}>
                                           Cart
                                        </p>
                                    </div>
                                    <div className="w-75 mx-auto border border-black p-2">
                                        <CartColumns/>
                                        <hr className="my-4"/>

                                        <CartList value={value}/>
                                        <hr className="my-4"/>
                                        <CartTotals value={value} history={this.props.history}/>
                                    </div>

                                </React.Fragment>
                            )
                        }else{
                           return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;