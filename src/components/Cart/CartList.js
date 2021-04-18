import React from 'react';
import CartItem from "./CartItem";

export default function CartList({value}) {
    const {cart} = value;

    return (
        <div className="container-fluid">
            {cart.map(item =>{
                return <CartItem key={item.title+item.info.selSize+item.info.selColor+item.info.secColor+item.info.stringColor} item={item} value={value}/>;
            })}
        </div>
    );
}