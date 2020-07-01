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
                                                {info.img.map(image => (
                                                    <div>
                                                    <img
                                                        key={image}
                                                        className="d-block "
                                                        src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+image}
                                                        alt=""
                                                    />
                                                    </div>
                                                ))}
                                        </Carousel>
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
                                            <select id="mylist"  >
                                                {info.sizes.map(size => (
                                                    <option key={size} >{size}</option>
                                                ))}
                                            </select>
                                        </h4>

                                        {/* Color */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Color:
                                            <select id="mylist"  >
                                                {info.color.map(color => (
                                                    <option key={color} >{color}</option>
                                                ))}
                                            </select>
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
                                                    value.addToCart(id,title);
                                                    value.openModal(id,title);}}>
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