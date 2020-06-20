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
                    <div className="container">
                        <img src={img} alt="store"
                             className="img-fluid"
                             style={{"width":"100%"}}
                        />
                        {/*<Title name="summer 2020" title="collection"/>*/}

                        <h4 className="text-title text-uppercase mt-3 mb-2 col-10 ml-0 col-md-6 my-3" >Sort By:
                        <select id="mylist"  >
                            <option>Newest</option>
                            <option>Price: (Low to High)</option>
                            <option>Price: (High to Low)</option>
                            <option>Name: A-Z</option>
                            <option>Name: Z-A</option>
                        </select>
                        </h4>

                        <hr style={{"background":"#FFFF00"}}/>
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