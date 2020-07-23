import React, {Component} from 'react';
import Product from './Product'
//import Title from "../Header/Title";
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
import img from "../../2020Collection.jpg";
import img1 from "../../croppedLogo.jpg";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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

                    {/*<div className="d-none d-sm-block" >*/}
                    {/*    <div className="row col-10 mx-auto col-md-6">*/}
                    {/*        <h6 className="text-muted ">Home/</h6><h6>Shop</h6>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="d-block d-sm-none image" >*/}
                    {/*    <img src={img1} alt="store"*/}
                    {/*         className="img-fluid mb-3"*/}
                    {/*         style={{"width":"100%"}}*/}
                    {/*    />*/}
                    {/*    <h2>*/}
                    {/*        <span className='spacer'>*/}
                    {/*        Summer 2020 Collection*/}
                    {/*        </span>*/}
                    {/*    </h2>*/}
                    {/*</div>*/}

                    <div className="d-none d-sm-block image mx-auto" >
                        <img src={img1} alt="store"
                             className="img-fluid mb-3 rounded center"
                             style={{"width":"40%"}}
                        />
                        {/*<h2>*/}
                        {/*        <span className='spacer'>*/}
                        {/*        Summer 2020 Collection*/}
                        {/*        </span>*/}
                        {/*</h2>*/}
                    </div>

                    <div className="container">
                        {/*<img src={img} alt="store"*/}
                        {/*     className="img-fluid d-none d-sm-block mb-2"*/}
                        {/*     style={{"width":"100%"}}*/}
                        {/*/>*/}
                        {/*<Title name="summer 2020" title="collection"/>*/}

                        {/*<div className="d-none d-sm-block image align-items-center justify-content-center" >*/}
                        {/*    <img src={img1} alt="store"*/}
                        {/*         className="img-fluid mb-3 rounded align-items-center justify-content-center"*/}
                        {/*         style={{"width":"50%"}}*/}
                        {/*    />*/}
                        {/*    /!*<h2>*!/*/}
                        {/*    /!*        <span className='spacer'>*!/*/}
                        {/*    /!*        Summer 2020 Collection*!/*/}
                        {/*    /!*        </span>*!/*/}
                        {/*    /!*</h2>*!/*/}
                        {/*</div>*/}

                        <Row>
                        <Col xs={12} md={3} >
                            <Accordion defaultActiveKey="0"  >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Filters:
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p className="text-muted">Sort:</p>
                                            <Col>
                                                <h5 className="text-title text-uppercase  mb-2 text-muted"  style={{"width":"100%"}}>
                                                    <select id="sortList" defaultValue="new" className="text-muted" onChange={this.sortList}  style={{"width":"100%"}}>
                                                        {/*<option value="new" disabled>Sort</option>*/}
                                                        <option value="new">Newest</option>
                                                        <option value="priceLH">Price: (Low to High)</option>
                                                        <option value="priceHL">Price: (High to Low)</option>
                                                        <option value="AZ">Name: A-Z</option>
                                                        <option value="ZA">Name: Z-A</option>
                                                    </select>
                                                </h5>
                                            </Col>
                                            {/*<Col>*/}
                                            {/*    <h5  className="text-title text-uppercase text-muted"  style={{"width":"100%"}}>*/}
                                            {/*        <select id="mylist" defaultValue="all" className="text-muted"  onChange={this.filterHandler}  style={{"width":"100%"}}>*/}
                                            {/*            <option value="all" disabled>Style</option>*/}
                                            {/*            <option value="all">All</option>*/}
                                            {/*            <option value="tops">Tops</option>*/}
                                            {/*            <option value="bottoms">Bottoms</option>*/}
                                            {/*            <option value="onePiece">One-Piece</option>*/}
                                            {/*        </select>*/}
                                            {/*    </h5>*/}
                                            {/*</Col>*/}
                                            <hr/>
                                            <p className="text-muted">Style:</p>
                                            <Row>
                                                <ButtonGroup  className="mx-auto w-100" >
                                                    <Button onClick={this.filterHandler} value="all" className=" w-50" variant="outline-secondary">All</Button>
                                                    <Button onClick={this.filterHandler} value="tops" className=" w-50" variant="outline-secondary">Top</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mx-auto w-100" >
                                                    <Button onClick={this.filterHandler} value="bottoms" className=" w-50" variant="outline-secondary">Bottom</Button>
                                                    <Button onClick={this.filterHandler} value="onePiece" className=" w-50" variant="outline-secondary">One-Piece</Button>
                                                </ButtonGroup>
                                            </Row>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                        <Col xs={12} md={8}>
                        <div className="row border ">
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
                        </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;