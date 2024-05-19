import React, {Component} from 'react';
import Product from './Product'
import {storeProducts} from '../../data';
import {ProductConsumer} from "../../context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../../bumblebee-icon-20.jpg";
import {MDBIcon} from "mdbreact";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.sortList = this.sortList.bind(this);
        this.filterHandler = this.filterHandler.bind(this)
        this.state = {
            productsTops: storeProducts,
            productsBottoms: storeProducts,
            productsOther: storeProducts,
            productsOnePieces: storeProducts,
            filterChoice: 'all',
            sortChoice: 'new',
            typeChoice: 'handmade',
            gender: 'women',
            start: 0,
            end: 8,
            numPages: 0,
            curPage: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.topsRef = React.createRef();
        this.bottomsRef = React.createRef();
        this.onePRef = React.createRef();
        this.othersRef = React.createRef();

    }

    componentDidMount() {
        this.setState({typeChoice: this.props.match.params.style})
    }

    handleChange(Event) {
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        })
    }

    nextPage = () => {
        this.setState({
            end: this.state.end + 8,
            start: this.state.start + 8,
            curPage: this.state.curPage + 1
        });
    }

    prevPage = () => {
        if (this.state.start >0 ) {
            this.setState({
                end: this.state.end - 8,
                start: this.state.start - 8,
                curPage: this.state.curPage - 1
            });
        }
    }
    filterType = (data) => {
        switch (this.state.typeChoice) {
            default:
                break;
            case 'ready-made':
                data = data.filter(product => product.info.type === 'ready-made')
                break;
            case 'handmade':
                data = data.filter(product => product.info.type === 'handmade')
                break;
            case 'apparel':
                data = data.filter(product => product.info.type === 'apparel')
                break;
            case 'instagram-styles':
                data = data.filter(product => product.info.type === 'instagram')
                break;
        }
        return data;
    }

    sortList(Event) {
        let sortChoice = Event.target.value;
        let data = this.state.sortChoice;

        switch (sortChoice) {
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

    filterHandler(filtChoice) {
        // let filtChoice = Event.target.value;
        let data = this.state.filterChoice;

        switch (filtChoice) {
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

    sortProducts = (data) => {
        switch (this.state.sortChoice) {
            default:
                data = data.sort((a, b) => a.id < b.id ? 1 : -1);
                break;
            case 'priceLH':
                data = data.sort((a, b) => a.info.price > b.info.price ? 1 : -1);
                break;
            case 'priceHL':
                data = data.sort((a, b) => a.info.price < b.info.price ? 1 : -1)
                break;
            case 'AZ':
                data = data.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                break;
            case 'ZA':
                data = data.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1)
                break;
        }
    }

    scrollLeft = (scrollContainer) => {
        if(scrollContainer === 'topsRef'){
            this.topsRef.current.scrollLeft -= 340
        } else if (scrollContainer === 'bottomsRef'){
            this.bottomsRef.current.scrollLeft -= 340
        } else if (scrollContainer === 'onePRef'){
            this.onePRef.current.scrollLeft -= 340
        } else if (scrollContainer === 'othersRef'){
            this.othersRef.current.scrollLeft -= 340
        }
    }
    scrollRight = (scrollContainer) => {
        if(scrollContainer === 'topsRef'){
            this.topsRef.current.scrollLeft += 340
        } else if (scrollContainer === 'bottomsRef'){
            this.bottomsRef.current.scrollLeft += 340
        } else if (scrollContainer === 'onePRef'){
            this.onePRef.current.scrollLeft += 340
        } else if (scrollContainer === 'othersRef'){
            this.othersRef.current.scrollLeft += 340
        }
    }

    filterProducts = (data, filterChoice) => {

        data = data.filter(product => product.info.gender !== 'men')
        switch (filterChoice) {
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
                <div className="container h-100 w-100">
                    <Row>

                        <Col xs={12}>
                            <div className="col-12 mx-auto text-title center-small mt-5">
                                <img alt='' src={img1} height="40px" width="40px" style={{display: 'inline-block',marginRight:'5px',verticalAlign:'text-bottom'}}/>
                                <p className="mx-auto inline-block font-bold"
                                   style={{fontFamily: '"Montserrat", sans-serif', color: '#1a1b1f', fontSize: '40px'}}>
                                    Swim
                                </p>
                            </div>

                            {this.state.typeChoice === 'apparel' ? '' :<Col xs={12} md={6} className="mb-4 p-2 style-buttons responsive-font">
                                <p className=" inline-block mr-2 p-1 size-button responsive-font"
                                   style={this.state.filterChoice === 'all' ? {fontWeight:'bold', textDecoration:'underline'} : {}}
                                   onClick={()=>{this.filterHandler('all')}}>
                                    All
                                </p>
                                <p className=" inline-block mr-2 p-1 size-button responsive-font"
                                   style={this.state.filterChoice === 'Top' ? {fontWeight:'bold', textDecoration:'underline'} : {}}
                                   onClick={()=>{this.filterHandler('tops')}}>
                                    Tops
                                </p>
                                <p className=" inline-block mr-2 p-1 size-button responsive-font"
                                   style={this.state.filterChoice === 'bottom' ? {fontWeight:'bold', textDecoration:'underline'} : {}}
                                   onClick={()=>{this.filterHandler('bottoms')}}>
                                    Bottoms
                                </p>
                                <p className=" inline-block mr-2 p-1 size-button responsive-font"
                                   style={this.state.filterChoice === 'One-Piece' ? {fontWeight:'bold', textDecoration:'underline'} : {}}
                                   onClick={()=>{this.filterHandler('onePiece')}}>
                                    One-Pieces
                                </p>
                            </Col>}

                            <Col xs={12} md={3} className="mb-4" style={{float: 'right' }}>
                                <div className=" border  p-0  shadow-md" style={{background: "#f8f8f8"}}>
                                    <Col style={{padding:0}}>
                                        <h5 className="   text-uppercase text-muted" style={{
                                            "width": "100%",
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f'
                                        }}>
                                            <MDBIcon icon="angle-down" size="sm" className="text-black-50 absolute" style={{top:'10px', right: '10px'}}/>
                                            <select id="sortList" defaultValue="new" className="text-muted p-2 remove-ios-dropdown"
                                                    onChange={this.sortList} style={{"width": "100%"}}>
                                                <option value="new" disabled>Sort</option>
                                                <option value="new">Newest</option>
                                                <option value="priceLH">Price: (Low to High)</option>
                                                <option value="priceHL">Price: (High to Low)</option>
                                                <option value="AZ">Name: A-Z</option>
                                                <option value="ZA">Name: Z-A</option>
                                            </select>
                                        </h5>
                                    </Col>
                                </div>
                            </Col>
                            <div className="row w-100 mx-auto" style={{boxSizing:'border-box'}}>
                                <ProductConsumer>
                                    {(value) => {
                                        this.sortProducts(value.products)
                                        let products = value.products;
                                        products = this.filterProducts(products, this.state.filterChoice)
                                        products = this.filterType(products);
                                        return (products.map(product => {
                                            return <Product key={product.title} product={product}/>
                                        }))
                                    }}
                                </ProductConsumer>
                            </div>
                            {/*<div className="mx-auto text-center">*/}
                            {/*    <div className="mr-4" style={{display:'inline-block', fontSize:'25px'}} onClick={()=>this.prevPage()}>*/}
                            {/*        <i className="list-arrow fa fa-angle-left color-filter"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="font-responsive " style={{display:'inline-block', fontSize:'20px',verticalAlign: 'top'}}>*/}
                            {/*        {this.state.curPage}/{Math.ceil(storeProducts.length/8)}*/}
                            {/*    </div>*/}
                            {/*    <div className="ml-4" style={{display:'inline-block', fontSize:'25px'}} onClick={()=>this.nextPage()}>*/}
                            {/*        <i className="list-arrow fa fa-angle-right color-filter" />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div id="menu">*/}
                            {/*    <div className="row mx-auto scrollbar-hide shadow-scroll container" ref={this.topsRef}*/}
                            {/*         style={{overflowX: "auto", overflowY: "hidden"}}>*/}
                            {/*        <div className="product-container" >*/}
                            {/*            <ProductConsumer>*/}
                            {/*                {(value) => {*/}
                            {/*                    this.sortProducts(value.products)*/}
                            {/*                    let products = value.products;*/}
                            {/*                    products = this.filterProducts(products, 'Top')*/}
                            {/*                    products = this.filterType(products)*/}
                            {/*                    return (products.map(product => {*/}
                            {/*                        return <Product key={product.title} product={product}/>*/}
                            {/*                    }))*/}
                            {/*                }}*/}
                            {/*            </ProductConsumer>*/}
                            {/*        </div>*/}
                            {/*        <div id="nav" className="d-none d-md-block">*/}
                            {/*            <div id="prev" onClick={()=>this.scrollLeft('topsRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*            <div id="next" onClick={()=>this.scrollRight('topsRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*    <div className="d-block d-md-none -my-10" style={{textAlign:'center'}}>*/}
                            {/*        <div className="mr-5" style={{display:'inline-block'}} onClick={()=>this.scrollLeft('topsRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-5" style={{display:'inline-block'}} onClick={()=>this.scrollRight('topsRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <hr className="w-75 mx-auto my-10 d-none d-md-block"/>

                            {/*<Col xs={12} md={6} className="mb-4 p-2 " style={{float: 'left'}}>*/}
                            {/*    <p*/}
                            {/*        style={{*/}
                            {/*            letterSpacing: '1px',*/}
                            {/*            fontFamily: '"Montserrat", sans-serif',*/}
                            {/*            color: 'BLACK',*/}
                            {/*            fontSize: '15px',*/}
                            {/*            opacity: "60%"*/}
                            {/*        }}>*/}
                            {/*        Bottoms*/}
                            {/*    </p>*/}
                            {/*</Col>*/}

                            {/*<Col xs={12} md={3} className="mb-4" style={{float: 'right', zIndex: 10}}>*/}
                            {/*    <div className=" border   p-2 shadow-md" style={{background: "#f8f8f8"}}>*/}
                            {/*        <Col>*/}
                            {/*            <h5 className="text-uppercase text-muted" style={{*/}
                            {/*                "width": "100%",*/}
                            {/*                fontFamily: '"Montserrat", sans-serif',*/}
                            {/*                color: '#1a1b1f'*/}
                            {/*            }}>*/}
                            {/*                <select id="sortList" defaultValue="new" className="text-muted"*/}
                            {/*                        onChange={this.sortList} style={{"width": "100%"}}>*/}
                            {/*                    <option value="new" disabled>Sort</option>*/}
                            {/*                    <option value="new">Newest</option>*/}
                            {/*                    <option value="priceLH">Price: (Low to High)</option>*/}
                            {/*                    <option value="priceHL">Price: (High to Low)</option>*/}
                            {/*                    <option value="AZ">Name: A-Z</option>*/}
                            {/*                    <option value="ZA">Name: Z-A</option>*/}
                            {/*                </select>*/}
                            {/*            </h5>*/}
                            {/*        </Col>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}

                            {/*<div id="menu">*/}
                            {/*    <div className="row mx-auto scrollbar-hide container shadow-scroll" ref={this.bottomsRef}*/}
                            {/*         style={{overflowX: "auto", overflowY: "hidden"}}>*/}
                            {/*        <div className="product-container">*/}
                            {/*            <ProductConsumer>*/}
                            {/*                {(value) => {*/}
                            {/*                    this.sortProducts(value.products)*/}
                            {/*                    let products = value.products;*/}
                            {/*                    products = this.filterProducts(products, 'bottom')*/}
                            {/*                    products = this.filterType(products)*/}
                            {/*                    return (products.map(product => {*/}
                            {/*                        return <Product key={product.title} product={product}/>*/}
                            {/*                    }))*/}
                            {/*                }}*/}
                            {/*            </ProductConsumer>*/}
                            {/*        </div>*/}
                            {/*        <div id="nav" className="d-none d-md-block">*/}
                            {/*            <div id="prev" onClick={()=>this.scrollLeft('bottomsRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*            <div id="next" onClick={()=>this.scrollRight('bottomsRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="d-block d-md-none -my-10" style={{textAlign:'center'}}>*/}
                            {/*        <div className="mr-5" style={{display:'inline-block'}} onClick={()=>this.scrollLeft('bottomsRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-5" style={{display:'inline-block'}} onClick={()=>this.scrollRight('bottomsRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<hr className="w-75 mx-auto my-10"/>*/}

                            {/*<Col xs={12} md={6} className="mb-4 p-2 " style={{float: 'left'}}>*/}
                            {/*    <p*/}
                            {/*        style={{*/}
                            {/*            letterSpacing: '1px',*/}
                            {/*            fontFamily: '"Montserrat", sans-serif',*/}
                            {/*            color: 'BLACK',*/}
                            {/*            fontSize: '15px',*/}
                            {/*            opacity: "60%"*/}
                            {/*        }}>*/}
                            {/*        One-Pieces*/}
                            {/*    </p>*/}
                            {/*</Col>*/}

                            {/*<Col xs={12} md={3} className="mb-4" style={{float: 'right', zIndex: 10}}>*/}
                            {/*    <div className=" border   p-2 shadow-md" style={{background: "#f8f8f8"}}>*/}
                            {/*        <Col>*/}
                            {/*            <h5 className="text-uppercase text-muted" style={{*/}
                            {/*                "width": "100%",*/}
                            {/*                fontFamily: '"Montserrat", sans-serif',*/}
                            {/*                color: '#1a1b1f'*/}
                            {/*            }}>*/}
                            {/*                <select id="sortList" defaultValue="new" className="text-muted"*/}
                            {/*                        onChange={this.sortList} style={{"width": "100%"}}>*/}
                            {/*                    <option value="new" disabled>Sort</option>*/}
                            {/*                    <option value="new">Newest</option>*/}
                            {/*                    <option value="priceLH">Price: (Low to High)</option>*/}
                            {/*                    <option value="priceHL">Price: (High to Low)</option>*/}
                            {/*                    <option value="AZ">Name: A-Z</option>*/}
                            {/*                    <option value="ZA">Name: Z-A</option>*/}
                            {/*                </select>*/}
                            {/*            </h5>*/}
                            {/*        </Col>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}

                            {/*<div id="menu">*/}
                            {/*    <div className="row mx-auto scrollbar-hide container shadow-scroll" ref={this.onePRef}*/}
                            {/*         style={{overflowX: "auto", overflowY: "hidden"}}>*/}
                            {/*        <div className="product-container">*/}
                            {/*            <ProductConsumer>*/}
                            {/*                {(value) => {*/}
                            {/*                    this.sortProducts(value.products)*/}
                            {/*                    let products = value.products;*/}
                            {/*                    products = this.filterProducts(products, 'One-Piece')*/}
                            {/*                    products = this.filterType(products)*/}
                            {/*                    return (products.map(product => {*/}
                            {/*                        return <Product key={product.title} product={product}/>*/}
                            {/*                    }))*/}
                            {/*                }}*/}
                            {/*            </ProductConsumer>*/}
                            {/*        </div>*/}
                            {/*        <div id="nav" className="d-none d-md-block">*/}
                            {/*            <div id="prev" onClick={()=>this.scrollLeft('onePRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*            <div id="next" onClick={()=>this.scrollRight('onePRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="d-block d-md-none -my-10" style={{textAlign:'center'}}>*/}
                            {/*        <div className="mr-5" style={{display:'inline-block'}} onClick={()=>this.scrollLeft('onePRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-5" style={{display:'inline-block'}} onClick={()=>this.scrollRight('onePRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<hr className="w-75 mx-auto my-10"/>*/}

                            {/*<Col xs={12} md={6} className="mb-4 p-2 " style={{float: 'left'}}>*/}
                            {/*    <p*/}
                            {/*        style={{*/}
                            {/*            letterSpacing: '1px',*/}
                            {/*            fontFamily: '"Montserrat", sans-serif',*/}
                            {/*            color: 'BLACK',*/}
                            {/*            fontSize: '15px',*/}
                            {/*            opacity: "60%"*/}
                            {/*        }}>*/}
                            {/*        Misc.*/}
                            {/*    </p>*/}
                            {/*</Col>*/}

                            {/*<Col xs={12} md={3} className="mb-4" style={{float: 'right', zIndex: 10}}>*/}
                            {/*    <div className=" border   p-2 shadow-md" style={{background: "#f8f8f8"}}>*/}
                            {/*        <Col>*/}
                            {/*            <h5 className="text-uppercase text-muted" style={{*/}
                            {/*                "width": "100%",*/}
                            {/*                fontFamily: '"Montserrat", sans-serif',*/}
                            {/*                color: '#1a1b1f'*/}
                            {/*            }}>*/}
                            {/*                <select id="sortList" defaultValue="new" className="text-muted"*/}
                            {/*                        onChange={this.sortList} style={{"width": "100%"}}>*/}
                            {/*                    <option value="new" disabled>Sort</option>*/}
                            {/*                    <option value="new">Newest</option>*/}
                            {/*                    <option value="priceLH">Price: (Low to High)</option>*/}
                            {/*                    <option value="priceHL">Price: (High to Low)</option>*/}
                            {/*                    <option value="AZ">Name: A-Z</option>*/}
                            {/*                    <option value="ZA">Name: Z-A</option>*/}
                            {/*                </select>*/}
                            {/*            </h5>*/}
                            {/*        </Col>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}

                            {/*<div id="menu">*/}
                            {/*    <div className="row mx-auto scrollbar-hide container shadow-scroll" ref={this.othersRef}*/}
                            {/*         style={{overflowX: "auto", overflowY: "hidden"}}>*/}
                            {/*        <div className="product-container">*/}
                            {/*            <ProductConsumer>*/}
                            {/*                {(value) => {*/}
                            {/*                    this.sortProducts(value.products)*/}
                            {/*                    let products = value.products;*/}
                            {/*                    products = this.filterProducts(products, 'Other')*/}
                            {/*                    products = this.filterType(products)*/}
                            {/*                    return (products.map(product => {*/}
                            {/*                        return <Product key={product.title} product={product}/>*/}
                            {/*                    }))*/}
                            {/*                }}*/}
                            {/*            </ProductConsumer>*/}
                            {/*        </div>*/}
                            {/*        <div id="nav" className="d-none d-md-block">*/}
                            {/*            <div id="prev" onClick={()=>this.scrollLeft('othersRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*            <div id="next" onClick={()=>this.scrollRight('othersRef')}>*/}
                            {/*                <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="d-block d-md-none -my-10" style={{textAlign:'center'}}>*/}
                            {/*        <div className="mr-5" style={{display:'inline-block'}} onClick={()=>this.scrollLeft('othersRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-left fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-5" style={{display:'inline-block'}} onClick={()=>this.scrollRight('othersRef')}>*/}
                            {/*            <i className="list-arrow fa fa-angle-right fa-5x color-filter"/>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                        </Col>

                    </Row>
                </div>

            </React.Fragment>
        );
    }
}

export default ProductList;