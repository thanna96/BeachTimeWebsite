import React, {Component} from 'react';
import Title from "../../components/Title";
import CartColumns from './CartColumns';

class Cart extends Component {
    render() {
        return (
            <div>
                <Title name="Your" title="cart"/>
                <CartColumns/>
            </div>
        );
    }
}

export default Cart;