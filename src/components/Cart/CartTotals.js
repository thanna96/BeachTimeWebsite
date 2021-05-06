import React from 'react';
import PayPalButton from "./PayPalButton";

export default function CartTotals({value,history}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;

    return (
        <React.Fragment>
                <div className="row">
                    <div className="col-lg-11 mt-2 ml-sm-5 ml-m-auto col-sm-8   text-right">

                            <button className=" text-uppercase mb-3 py-2 px-5"
                                    style={{ fontFamily:'"Montserrat", sans-serif', color:'white', fontSize:'16px',backgroundColor:'red'}}
                                    type="button"
                            onClick={()=>clearCart()}>
                                clear cart
                            </button>

                        <h5>
                            <span   style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'20px'  }}>
                                subtotal :
                            </span>
                            <strong> $ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'20px'  }}>
                                tax :
                            </span>
                            <strong> $ {cartTax}</strong>
                        </h5>
                        <h5 className="mb-2">
                            <span style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'20px' }}>
                                total :
                            </span>
                            <strong> $ {cartTotal}</strong>
                        </h5>
                        <PayPalButton className="m-2"
                                      value={value}
                            total={cartTotal}
                            clearCart={clearCart}
                            history={history}
                        />
                    </div>
                </div>
        </React.Fragment>
    );
}