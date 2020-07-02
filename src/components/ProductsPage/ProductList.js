import React, {Component} from 'react';
import Product from './Product'
//import Title from "../Header/Title";
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
import img from "../../2020.JPG";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.sortList = this.sortList.bind(this);
        this.state = {
            products: storeProducts,
            sortChoice: 'new'
        }
    }

    sortProducts = (data) =>{
        switch ( this.state.sortChoice ){
            default:
                data = data.sort((a,b)=> a.id > b.id ? 1 : -1);
                break;
            case 'priceLH':
                data = data.sort((a,b)=> a.info.price > b.info.price ? 1 : -1);
                break;
            case 'priceHL':
                data = data.sort((a,b)=> a.info.price < b.info.price ? 1 : -1)
                break;
            case 'AZ':
                data = data.sort((a,b)=> a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                break;
            case 'ZA':
                data = data.sort((a,b)=> a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1)
                break;
        }
    }

    sortList(Event){
        let sortChoice = Event.target.value;
        let data = this.state.sortChoice;

        switch ( sortChoice ){
            default:
                data = 'new'
                break;
            case 'priceLH':
                data = 'priceLH'
                break;
            case 'priceHL':
                data = 'priceHL'
                break;
            case 'AZ':
                data = 'AZ'
                break;
            case 'ZA':
                data = 'ZA'
                break;
        }

        this.setState({
            sortChoice: data
        })
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
                        <select id="sortList" onChange={this.sortList}>
                            <option value="new">Newest</option>
                            <option value="priceLH">Price: (Low to High)</option>
                            <option value="priceHL">Price: (High to Low)</option>
                            <option value="AZ">Name: A-Z</option>
                            <option value="ZA">Name: Z-A</option>
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
                                    this.sortProducts(value.products)
                                    return value.products.map( product =>{
                                        return <Product key={product.title} product={product}/>
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