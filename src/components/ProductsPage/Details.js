import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Styles/Button";
import { Carousel } from 'react-responsive-carousel';

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            selSiz: '',
            selCol: '',
            productName: '',
            id: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        //console.log("id",this.props.match.params.title,this.props.match.params.id)
        this.setState({productName:this.props.match.params.title})
        this.setState({id:parseInt(this.props.match.params.id)})
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
            <ProductConsumer>
                {(value) => {
                    if ( value.getItem(this.state.id,this.state.productName )){
                        value.detailProduct = value.getItem(this.state.id,this.state.productName);
                    }
                    const {id,title,info} = value.detailProduct;
                    //console.log("value",value.getItem(this.state.id,this.state.productName))

                    return (
                        <div>
                            {/* title */}
                            {/*<div className="d-none d-sm-block" >*/}
                            {/*    <div className="row col-10 mx-auto col-md-6  ">*/}
                            {/*        <h6 className="text-muted ">Home/Shop/</h6><h6>{title}</h6>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/* end title */}
                        <div className="container ">


                            {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto center col-md-6 my-3">
                                        <Carousel showThumbs={false}>
                                                {info.img.map(image => (
                                                    <div key=''>
                                                    <img
                                                        key={image+9}
                                                        className="d-none d-md-block center img-fluid"
                                                        src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+image}
                                                        style={{height:"550px", width:"auto"}}
                                                        alt=""
                                                    />
                                                    <img
                                                            key={image}
                                                            className="d-block d-md-none center"
                                                            src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+image}
                                                            alt=""
                                                    />
                                                    </div>
                                                ))}
                                        </Carousel>
                                    </div>
                                    {/* product text*/}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h1 className="text-center text-3xl">{title}</h1>

                                        <h4 className="text-center text-muted">
                                            <strong>
                                                <span>$</span>{info.price}
                                            </strong>
                                        </h4>

                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Product info:
                                        </p>
                                        <p className="text-muted lead">
                                            {info.description}
                                        </p>

                                        <div className="row">
                                        {/* Size */}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Size:<br/>
                                            <select name="selSiz" style={{width:"100%"}} onChange={this.handleChange} >
                                                {info.sizes.map(size => (
                                                    <option value={size} key={size}>{size}</option>
                                                ))}
                                            </select>
                                        </h4>

                                        {/* Color */}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Color:<br/>
                                            <select name="selCol" style={{width:"100%"}} onChange={this.handleChange}>
                                                {value.colors.map(color => (
                                                    <option value={color.color} key={color.color}>{color.color}</option>
                                                ))}
                                            </select>
                                        </h4>
                                        </div>
                                        <br/>
                                        {/*/!* Quantity *!/*/}
                                        {/*<h4 className="text-title text-uppercase text-muted mt-3 mb-2">*/}
                                        {/*    <form>*/}
                                        {/*        <div className="form-group ">*/}
                                        {/*            <label htmlFor="exampleDropdownFormEmail1">Quantity:</label>*/}
                                        {/*            <input type="number" className="form-control  btn-outline-dark"*/}
                                        {/*                   style={{width: "20%"}}*/}
                                        {/*                   id="quantity"*/}
                                        {/*                   placeholder="1"/>*/}
                                        {/*        </div>*/}
                                        {/*    </form>*/}
                                        {/*</h4>*/}


                                        {/* buttons */}
                                        <div>
                                            <Link to={"/ProductList/" + info.gender}>
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                // disabled={info.inCart}
                                                onClick={()=>{
                                                    if(info.inCart) {
                                                        window.location.href = "/cart";
                                                        return
                                                    }
                                                    info.selSize = this.state.selSiz
                                                    info.selColor = this.state.selCol
                                                    if (info.selSize === '') info.selSize = info.sizes[0];
                                                    if (info.selColor === '') info.selColor = value.colors[0].color;
                                                    value.addToCart(id,title);
                                                    }}>
                                                {info.inCart?'View Cart':'Add to Cart'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            {/* end product info */}
                        </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;