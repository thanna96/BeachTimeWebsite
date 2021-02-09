import React from 'react';

export default function CartColumns(){
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row font-bold">
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase"> </p>
                </div>
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase">Product Info</p>
                </div>
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="mx-auto col-10 col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>
        </div>
    )
}