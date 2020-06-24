import React, {Component} from 'react';
import Product from './Product'
//import Title from "../Header/Title";
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
import img from "../../2020.JPG";

class ProductList extends Component {
    state={
        products:storeProducts
    }

    render() {
        return (
            <React.Fragment>

                <div className="">
                    <div className="row col-10 mx-auto col-md-6">
                        <h6 className="text-muted ">Home/</h6><h6>Shop</h6>
                    </div>
                    <div className="container">
                        <img src={img} alt="store"
                             className="img-fluid  d-none d-lg-block"
                             style={{"width":"100%"}}
                        />
                        {/*<Title name="summer 2020" title="collection"/>*/}

                        <h5 className="text-title text-uppercase mt-3 mb-2 text-muted" >Sort:
                        <select id="mylist"  >
                            <option>Newest</option>
                            <option>Price: (Low to High)</option>
                            <option>Price: (High to Low)</option>
                            <option>Name: A-Z</option>
                            <option>Name: Z-A</option>
                        </select>
                        </h5>
                        <h5  className="text-title text-uppercase mt-3 text-muted">
                            Filter:
                            <select id="mylist"  >
                                <option>All</option>
                                <option>Tops</option>
                                <option>Bottoms</option>
                                <option>One-Piece</option>
                            </select>
                        </h5>

                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;