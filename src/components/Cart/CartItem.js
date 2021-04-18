import React from 'react';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function CartItem({item,value}) {
    const{id,title,info} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-6 mx-auto col-lg-2">
                <img src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+info.img[0]} style={{width:'5rem',height:'6rem'}}
                     className="img-fluid img-thumbnail mx-auto" alt="product"/>
            </div>

            <div className="col-6 mx-auto col-lg-2">
                <p className="d-lg-none text-left">Product : </p>
                <p className="text-left">Name: {title}</p>
                <p className="text-left">Color: {info.selColor}</p>
                {info.secColor !== '' ? <p className="text-left">Color 2: {info.secColor}</p> : ''}
                {info.stringColor !== '' ? <p className="text-left">String Color: {info.stringColor}</p> : ''}
                <p className="text-left">Size: {info.selSize}</p>

            {/*    If the size and color are undefined go with array index 0    */}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>${info.price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn mx-0" onClick={()=>decrement(item)}>-</span>
                        <span className="btn btn-black mx-0">{info.count}</span>
                        <span className="btn mx-0" onClick={()=>increment(item)}>+</span>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(item)}>
                    <FontAwesomeIcon icon={ faTrash }/>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {info.total}</strong>
            </div>


        </div>
    );
}