import React, {Component} from 'react';
// import Product from './Product'
// import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Product from "../ProductsPage/Product";

class BYOB extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleChange(Event){
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mx-auto w-100  ">
                    <ProductConsumer >
                        {(value)=>{
                            let products = value.products;
                            //products = this.filterType(products)
                            return products.map( product =>{
                                return <Product key={product.title} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment>
        );
    }
}

export default BYOB;