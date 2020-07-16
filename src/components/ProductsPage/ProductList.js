import React, {Component} from 'react';
import Product from './Product'
//import Title from "../Header/Title";
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
import img from "../../2020Collection.jpg";
import img1 from "../../2020.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.sortList = this.sortList.bind(this);
        this.filterHandler = this.filterHandler.bind(this)
        this.state = {
            products: storeProducts,
            filterChoice: 'all',
            sortChoice: 'new'
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

    filterHandler(Event){
        let filtChoice = Event.target.value;
        let data = this.state.filterChoice;

        switch ( filtChoice ){
            default:
                data = 'all'
                break;
            case 'tops':
                data = 'Top'
                break;
            case 'bottoms':
                data = 'bottom'
                break;
            case 'onePiece':
                data = 'One-Piece'
                break;
        }

        this.setState({
            filterChoice: data
        })
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

    filterProducts = (data) =>{
        switch ( this.state.filterChoice ){
            default:
                break;
            case 'Top':
                data = data.filter(product => product.info.style === 'Top')
                break;
            case 'bottom':
                data = data.filter(product => product.info.style === 'bottom')
                break;
            case 'One-Piece':
                data = data.filter(product => product.info.style === 'One-Piece')
                break;
        }
        return data
    }

    render() {
        return (
            <React.Fragment>

                <div >
                    <div className="d-none d-sm-block" >
                        <div className="row col-10 mx-auto col-md-6">
                            <h6 className="text-muted ">Home/</h6><h6>Shop</h6>
                        </div>
                    </div>

                    <div className="d-block d-sm-none image" >
                        <img src={img1} alt="store"
                             className="img-fluid mb-3"
                             style={{"width":"100%"}}
                        />
                        <h2>
                            <span className='spacer'>
                            Summer 2020 Collection
                            </span>
                        </h2>
                    </div>


                    <div className="container">
                        <img src={img} alt="store"
                             className="img-fluid d-none d-sm-block mb-2"
                             style={{"width":"100%"}}
                        />
                        {/*<Title name="summer 2020" title="collection"/>*/}

                        <Row>
                            <Col>
                                <h5 className="text-title text-uppercase  mb-2 text-muted"  style={{"width":"100%"}}>
                                    <select id="sortList" onChange={this.sortList}  style={{"width":"100%"}}>
                                        <option value="new" disabled selected>Sort</option>
                                        <option value="new">Newest</option>
                                        <option value="priceLH">Price: (Low to High)</option>
                                        <option value="priceHL">Price: (High to Low)</option>
                                        <option value="AZ">Name: A-Z</option>
                                        <option value="ZA">Name: Z-A</option>
                                    </select>
                                </h5>
                            </Col>
                            <Col>
                                <h5  className="text-title text-uppercase text-muted"  style={{"width":"100%"}}>
                                    <select id="mylist" onChange={this.filterHandler}  style={{"width":"100%"}}>
                                        <option value="all" disabled selected>Filter</option>
                                        <option value="all">All</option>
                                        <option value="tops">Tops</option>
                                        <option value="bottoms">Bottoms</option>
                                        <option value="onePiece">One-Piece</option>
                                    </select>
                                </h5>
                            </Col>
                        </Row>

                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    this.sortProducts(value.products)
                                    let products = value.products;
                                    products = this.filterProducts(products)
                                    return products.map( product =>{
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