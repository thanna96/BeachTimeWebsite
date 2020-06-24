import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Styles/Button";
import { Carousel } from 'react-responsive-carousel';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,title,info} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row col-10 mx-auto col-md-6 my-3">
                                <h6 className="text-muted ">Home/Shop/</h6><h6>{title}</h6>
                            </div>
                            {/* end title */}

                            {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <Carousel>
                                            <div>
                                                <img
                                                    className="d-block "
                                                    src={info.img}
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    className="d-block"
                                                    src={info.img}
                                                    alt="Third slide"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    className="d-block"
                                                    src={info.img}
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </Carousel>
                                        {/*<img src={img} className="img-fluid" alt="product"/>*/}
                                    </div>
                                    {/* product text*/}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h1>{title}</h1>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">
                                            {info.company}
                                        </span>
                                        </h4>

                                        {/* Size */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Size:
                                            <button className="btn btn-outline-dark dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                Select
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="https://thomashanna.me/">Action</a>
                                                <a className="dropdown-item" href="https://thomashanna.me/">Another action</a>
                                                <a className="dropdown-item" href="https://thomashanna.me/">Something else here</a>
                                            </div>
                                        </h4>

                                        {/* Color */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Color:
                                            <button className="btn btn-outline-dark dropdown-toggle" type="button"
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                Select
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="https://thomashanna.me/">Action</a>
                                                <a className="dropdown-item" href="https://thomashanna.me/">Another action</a>
                                                <a className="dropdown-item" href="https://thomashanna.me/">Something else here</a>
                                            </div>
                                        </h4>

                                        {/* Quantity */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            <form>
                                                <div className="form-group ">
                                                    <label htmlFor="exampleDropdownFormEmail1">Quantity:</label>
                                                    <input type="number" className="form-control  btn-outline-dark"
                                                           style={{width: "20%"}}
                                                           id="quantity"
                                                           placeholder="1"/>
                                                </div>
                                            </form>
                                        </h4>

                                        <h4>
                                            <strong>
                                                price : <span>$</span>{info.price}
                                            </strong>
                                        </h4>

                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Product info:
                                        </p>
                                        <p className="text-muted lead">
                                            {info.description}
                                        </p>
                                        {/* buttons */}
                                        <div>
                                            <Link to="/ProductList">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                disabled={info.inCart}
                                                onClick={()=>{
                                                    value.addToCart(id);
                                                    value.openModal(id);}}>
                                                {info.inCart?'inCart':'Add to Cart'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            {/* end product info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;