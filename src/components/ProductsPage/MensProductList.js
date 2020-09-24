import React, {Component} from 'react';
import Product from './Product'
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
// import img from "../../2020Collection.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MensProductList extends Component {
    constructor(props) {
        super(props);
        this.sortList = this.sortList.bind(this);
        this.filterHandler = this.filterHandler.bind(this)
        this.state = {
            products: storeProducts,
            filterChoice: 'all',
            sortChoice: 'new',
            typeChoice:'swimwear',
            gender:'men',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({typeChoice: this.props.match.params.style})
    }

    handleChange(Event){
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        })
    }

    filterType = (data) =>{
        // switch ( this.state.typeChoice ){
        //     default:
        //         break;
        //     case 'swimwear':
        //         data = data.filter(product => product.info.type === 'swimwear')
        //         break;
        //     case 'handmade':
        //         data = data.filter(product => product.info.type === 'handmade')
        //         break;
        // }
        // return data;
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
        // let filtChoice = Event.target.value;
        // let data = this.state.filterChoice;
        //
        // switch ( filtChoice ){
        //     default:
        //         data = 'all'
        //         break;
        //     case 'tops':
        //         data = 'Top'
        //         break;
        //     case 'bottoms':
        //         data = 'bottom'
        //         break;
        //     case 'onePiece':
        //         data = 'One-Piece'
        //         break;
        // }
        //
        // this.setState({
        //     filterChoice: data
        // })
    }

    sortProducts = (data) =>{
        switch ( this.state.sortChoice ){
            default:
                data = data.sort((a,b)=> a.id < b.id ? 1 : -1);
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

        data = data.filter(product => product.info.gender === 'men')
        switch ( this.state.typeChoice ){
            default:
                break;
            case 'swimwear':
                data = data.filter(product => product.info.type === 'swimwear')
                break;
            case 'apparel':
                data = data.filter(product => product.info.type === 'apparel')
                break;
        }
        return data
    }

    render() {
        return (
            <React.Fragment>

                <div >
                    {/*<img src={img} alt="store"*/}
                    {/*     className="img-fluid d-none d-sm-block mb-2"*/}
                    {/*     style={{"width":"100%"}}*/}
                    {/*/>*/}

                    <div className="container h-100" >



                        <Row>
                            <Col xs={12} md={3}  >
                                <div className=" border d-none d-md-block mt-2 p-2 " style={{background:"#f8f8f8",  top:"130px", position:"sticky"}}>
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
                                    <hr/>
                                    <p className="text-muted">Style:</p>
                                    <Row className="w-100 mx-auto">
                                        <ButtonGroup  className="mx-auto w-100" >
                                            <Button onClick={this.filterHandler} value="all" className=" w-50" variant="outline-secondary">All</Button>
                                            <Button onClick={this.filterHandler} value="shirt" className=" w-50" variant="outline-secondary">Shirts</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="mx-auto w-100" >
                                            <Button onClick={this.filterHandler} value="sweatshirt" className=" w-50" variant="outline-secondary">Sweatshirts</Button>
                                            <Button onClick={this.filterHandler} value="swimwear" className=" w-50" variant="outline-secondary">Swimwear</Button>
                                        </ButtonGroup>
                                    </Row>
                                </div>
                                <Navbar expand="lg" className="d-block d-md-none border" style={{ width: "100%" }} >

                                    <Navbar.Toggle aria-controls="basic-navbar-nav"  > Filters</Navbar.Toggle>


                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto text-center">
                                            <p className="text-muted">Sort:</p>
                                            <Col>
                                                <h5 className="text-title text-uppercase  mb-2 text-muted"  style={{"width":"100%"}}>
                                                    <select id="sortList" defaultValue="new" className="text-muted" onChange={this.sortList}  style={{"width":"100%"}}>
                                                        <option value="new">Newest</option>
                                                        <option value="priceLH">Price: (Low to High)</option>
                                                        <option value="priceHL">Price: (High to Low)</option>
                                                        <option value="AZ">Name: A-Z</option>
                                                        <option value="ZA">Name: Z-A</option>
                                                    </select>
                                                </h5>
                                            </Col>
                                            <hr/>
                                            <p className="text-muted">Product Type:</p>
                                            <Col>
                                                <h5 className="text-title text-uppercase  mb-2 text-muted"  style={{"width":"100%"}}>
                                                    <select id="sortList" name="typeChoice" defaultValue="all" onChange={this.handleChange} className="text-muted" style={{"width":"100%"}}>
                                                        {/*<option value="new" disabled>Sort</option>*/}
                                                        <option value="all">All</option>
                                                        <option value="handmade">Hand-Made</option>
                                                        <option value="manufactured">Manufactured</option>
                                                    </select>
                                                </h5>
                                            </Col>
                                            <hr/>
                                            <p className="text-muted">Style:</p>
                                            <Row>
                                                <ButtonGroup  className="mx-auto w-100" >
                                                    <Button onClick={this.filterHandler} value="all" className=" w-50" variant="outline-secondary">All</Button>
                                                    <Button onClick={this.filterHandler} value="Shirts" className=" w-50" variant="outline-secondary">Shirts</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mx-auto w-100" >
                                                    <Button onClick={this.filterHandler} value="Hoodies" className=" w-50" variant="outline-secondary">Hoodies</Button>
                                                    <Button onClick={this.filterHandler} value="Swimwear" className=" w-50" variant="outline-secondary">Swimwear</Button>
                                                </ButtonGroup>
                                            </Row>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                                <br/>
                            </Col>
                            <Col xs={12} md={9}>
                                <div className="row mx-auto w-100">
                                    <ProductConsumer >
                                        {(value)=>{
                                            this.sortProducts(value.products)
                                            let products = value.products;
                                            products = this.filterProducts(products)
                                            //products = this.filterType(products)
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

export default MensProductList;