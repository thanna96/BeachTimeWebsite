import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Styles/Button";
import Mimg2 from "../../mBanner1.JPG";
import img from "../../banner.JPG";
 import {OverlayTrigger} from "react-bootstrap";
import  Tooltip  from "react-bootstrap/cjs/Tooltip";

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            selSiz: '',
            selCol: '',
            productName: '',
            id: 0,
            image: ''
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
                    if(value.getItem(this.state.id,this.state.productName && this.state.image === '')){
                        this.setState({image:info.img[0]})
                    }
                    return (
                        <div>

                        <div className="mx-auto w-75">
                            {/* product info */}
                            <div className="m-3  underline" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px' }}>
                                <Link  to={info.gender === 'men' ? "/mens-product-list/" + info.gender : "/product-list/" + info.type } >
                                    &laquo; Back to Products
                                </Link>
                            </div>
                            <div className="flex row">
                                    <div className="col-10 mx-auto   col-md-6 col-lg-6 col-xl-4 my-3   p-3 ">
                                        <img
                                            key={((this.state.image === '') ? info.img[0] : this.state.image)}
                                            className="center img-fluid "
                                            src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+((this.state.image === '') ? info.img[0] : this.state.image)}
                                            style={{height:"450px", width:"350px"}}
                                            alt=""/>
                                        <div className="mx-auto text-center">
                                            <div style={{display:'inline-block' }}>
                                            {info.img.map(image => (
                                                <img onClick={()=>(this.setState({image:image}))}
                                                    key={image}
                                                    className={(image === this.state.image) ? "m-1 clicked" : "m-1 "}
                                                    src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+image}
                                                    style={{width:'5rem',height:'6rem',display:'inline-block',cursor:'pointer'}}
                                                    alt=""/>
                                        ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* product text*/}
                                    <div className="col-10 mx-auto col-md-6 col-lg-6 my-3 text-capitalize">
                                        <p className="mx-auto" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'30px', opacity: '60%'}}>
                                            {title}
                                        </p>
                                        <p style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px', opacity: '80%' }}>
                                            <strong>
                                                <span>$</span>{info.price}
                                            </strong>
                                        </p>

                                        <hr className="my-3"/>

                                        {/* Size */}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Size:<br/>
                                            <select name="selSiz" className="mt-2" style={{width:"100%"}} onChange={this.handleChange} >
                                                {info.sizes.map(size => (
                                                    <option value={size} key={size}>{size}</option>
                                                ))}
                                            </select>
                                        </h4>

                                        {/* Color */}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Color: <br/>
                                            <div className="mb-2"/>
                                            {/*<select name="selCol" style={{width:"100%"}} onChange={this.handleChange}>*/}
                                                {value.colors.map(color => (
                                                    // <option value={color.color} key={color.color}>{color.color}</option>
                                                    <OverlayTrigger key={color.color} className="inline-flex " overlay={<Tooltip className="p-0">{color.color}</Tooltip>}>
                                                    <input type="image" key={color.color} name="selCol" value={color.color}
                                                           className={(color.color === this.state.selCol) ? "clicked m-1 inline-flex" : "m-1 inline-flex"}
                                                            onClick={this.handleChange} style={{ background: 'transparent' }} height="30px" width="30px"
                                                           src={Mimg2}
                                                           alt="">
                                                    </input>
                                                    </OverlayTrigger>
                                                ))}

                                            {/*</select>*/}
                                        </h4>

                                        {/*/!* Quantity *!/*/}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Quantity:
                                            <div className="mt-2">
                                                <input type="number" className="form-control"
                                                       style={{width: "20%"}}
                                                       id="quantity"
                                                       placeholder="1"/>
                                                </div>

                                        </h4>

                                        <hr className="my-3"/>

                                        {/* buttons */}
                                        <div>
                                            <div className="m-1 text-center">
                                                <ButtonContainer
                                                    onClick={()=>{
                                                        info.selSize = this.state.selSiz
                                                        info.selColor = this.state.selCol
                                                        if (info.selSize === '') info.selSize = info.sizes[0];
                                                        if (info.selColor === '') info.selColor = value.colors[0].color;
                                                        value.addToCart(value.detailProduct);
                                                        value.openModal(id,title)
                                                    }}>
                                                   Add to Cart
                                                </ButtonContainer>
                                            </div>
                                            <div className="m-1 text-center underline">
                                                <Link  to={"/sizing-page"}>
                                                    Size Guide
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 font-weight-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px' }}>
                                            Product info:
                                        </p>
                                        <p className="text-muted lead" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px' }}>
                                            {info.description}
                                            <br/>
                                            {(info.style === 'Top') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Pair this top with your favorite bottom.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 14 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : '' }
                                            {(info.style === 'bottom') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Pair this bottom with your favorite top.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 14 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : '' }
                                            {(info.style === 'One-Piece') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 14 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : '' }
                                        </p>
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