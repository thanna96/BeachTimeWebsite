import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Styles/Button";
import img from "../../banner.JPG";
import {OverlayTrigger} from "react-bootstrap";
import Tooltip from "react-bootstrap/cjs/Tooltip";
import colorsData from "../../colorsData";
import img1 from "../../bumblebee-icon-20.jpg";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selSiz: 'XS',
            selCol: '',
            secColor: '',
            count: 1,
            stringColor: '',
            productName: '',
            id: 0,
            image: '',
            width: 0,
            height: 0,
            reversible: 'false',
            customString: 'false',
            validOptions: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateValid = this.updateValid.bind(this);
    }

    componentDidMount() {
        //console.log("id",this.props.match.params.title,this.props.match.params.id)
        this.setState({productName: this.props.match.params.title})
        this.setState({id: parseInt(this.props.match.params.id)})
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    handleChange(Event) {
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        });
    }

    updateValid() {
        if (this.state.selSiz !== '' && this.state.selCol !== '' && this.state.count !== 0) {
            if (this.state.reversible === 'true' && this.state.customString === 'true'
            && (this.state.secColor === '' || this.state.stringColor === '')) {
                return false;
            } else if (this.state.reversible === 'true' && this.state.secColor !== '') {
                return true;
            } else if (this.state.customString === 'true' && this.state.stringColor !== '') {
                return true;
            } else if (this.state.customString === 'false' && this.state.reversible === 'false') {
                return true;
            }
        } else {
           return false;
        }
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    if (value.getItem(this.state.id, this.state.productName)) {
                        value.detailProduct = value.getItem(this.state.id, this.state.productName);
                    }
                    const {id, title, info} = value.detailProduct;
                    if (value.getItem(this.state.id, this.state.productName && this.state.image === '')) {
                        this.setState({image: info.img[0]})
                    }
                    return (
                        <div>

                            <div className={this.state.width >= 768 ? "mx-auto w-75" : "mx-auto w-100"}>
                                {/* product info */}
                                <div className="m-3  underline" style={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    color: '#1a1b1f',
                                    fontSize: '16px'
                                }}>
                                    <Link
                                        to={info.gender === 'men' ? "/mens-product-list/" + info.gender : "/product-list/" + info.type}>
                                        &laquo; Back to Products
                                    </Link>
                                </div>
                                <div className="flex row">
                                    <div className="col-12 mx-auto   col-md-6 col-lg-6 col-xl-4 my-3   p-3 ">
                                        <img
                                            key={((this.state.image === '') ? info.img[0] : this.state.image)}
                                            className="center img-fluid "
                                            src={"https://s3.amazonaws.com/sew-honey-bucket/img/" + ((this.state.image === '') ? info.img[0] : this.state.image)}
                                            style={{height: "350px", minWidth: "350px"}}
                                            alt=""/>
                                        <div className="mx-auto text-center">
                                            <div style={{display: 'inline-block'}}>
                                                {info.img.map(image => (
                                                    <img onClick={() => (this.setState({image: image}))}
                                                         key={image}
                                                         className={(image === this.state.image) ? "m-1 clicked" : "m-1 "}
                                                         src={"https://s3.amazonaws.com/sew-honey-bucket/img/" + image}
                                                         style={{
                                                             width: '6rem',
                                                             height: '6rem',
                                                             display: 'inline-block',
                                                             cursor: 'pointer'
                                                         }}
                                                         alt=""/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* product text*/}
                                    <div className="col-10 mx-auto col-md-6 col-lg-6 my-3 text-capitalize">
                                        <p className="mx-auto" style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '30px',
                                            opacity: '60%'
                                        }}>
                                            {title}
                                        </p>
                                        <p style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '16px',
                                            opacity: '80%'
                                        }}>
                                            <strong>
                                                <span>$</span>{info.price}
                                            </strong>
                                        </p>

                                        <hr className="my-3"/>

                                        {/* Size */}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Size:<br/>
                                            <select name="selSiz" className="mt-2" style={{width: "100%"}}
                                                    onChange={this.handleChange}>
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
                                            {colorsData.map(color => (
                                                // <option value={color.color} key={color.color}>{color.color}</option>
                                                <OverlayTrigger key={color.id}
                                                                overlay={<Tooltip>{color.title}</Tooltip>}>
                                                    <input type="image" key={color.id} name="selCol"
                                                           value={color.title}
                                                           className={(color.title === this.state.selCol) ? "clicked m-1 inline-flex" : "m-1 inline-flex"}
                                                           onClick={this.handleChange}
                                                           style={{background: 'transparent'}} height="30px"
                                                           width="30px"
                                                           src={color.img}
                                                           alt="">
                                                    </input>
                                                </OverlayTrigger>
                                            ))}

                                            {/*</select>*/}
                                        </h4>

                                        {/* Reverse Option */}
                                        {info.reversible === true ?
                                            <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                                reversible:<br/>
                                                <select name="reversible" className="mt-2" style={{width: "100%"}}
                                                        onChange={this.handleChange}>
                                                    <option value='false' key="no">No</option>
                                                    <option value='true' key="yes">Yes (+$10)</option>
                                                </select>
                                            </h4> : ''}

                                        {this.state.reversible === 'true' ?
                                            <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                                Second Color: <br/>
                                                <div className="mb-2"/>
                                                {/*<select name="selCol" style={{width:"100%"}} onChange={this.handleChange}>*/}
                                                {colorsData.map(color => (
                                                    // <option value={color.color} key={color.color}>{color.color}</option>
                                                    <OverlayTrigger key={color.id}
                                                                    overlay={<Tooltip>{color.title}</Tooltip>}>
                                                        <input type="image" key={color.id} name="secColor"
                                                               value={color.title}
                                                               className={(color.title === this.state.secColor) ? "clicked m-1 inline-flex" : "m-1 inline-flex"}
                                                               onClick={this.handleChange}
                                                               style={{background: 'transparent'}} height="30px"
                                                               width="30px"
                                                               src={color.img}
                                                               alt="">
                                                        </input>
                                                    </OverlayTrigger>
                                                ))}

                                                {/*</select>*/}
                                            </h4> : ''}

                                        {/* string color Option */}
                                        {info.customString === true ?
                                            <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                                Custom String Color:<br/>
                                                <select name="customString" className="mt-2" style={{width: "100%"}}
                                                        onChange={this.handleChange}>
                                                    <option value='false' key="no">No</option>
                                                    <option value='true' key="yes">Yes</option>
                                                </select>
                                            </h4> : ''}

                                        {this.state.customString === 'true' ?
                                            <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                                String Color: <br/>
                                                <div className="mb-2"/>
                                                {/*<select name="selCol" style={{width:"100%"}} onChange={this.handleChange}>*/}
                                                {colorsData.map(color => (
                                                    // <option value={color.color} key={color.color}>{color.color}</option>
                                                    <OverlayTrigger key={color.id}
                                                                    overlay={<Tooltip>{color.title}</Tooltip>}>
                                                        <input type="image" key={color.id} name="stringColor"
                                                               value={color.title}
                                                               className={(color.title === this.state.stringColor) ? "clicked m-1 inline-flex" : "m-1 inline-flex"}
                                                               onClick={this.handleChange}
                                                               style={{background: 'transparent'}} height="30px"
                                                               width="30px"
                                                               src={color.img}
                                                               alt="">
                                                        </input>
                                                    </OverlayTrigger>
                                                ))}

                                                {/*</select>*/}
                                            </h4> : ''}


                                        {/*/!* Quantity *!/*/}
                                        <h4 className="text-title mx-auto text-uppercase text-muted mt-3 mb-2">
                                            Quantity:
                                            <div className="mt-2">
                                                <input type="number" className="form-control"
                                                       style={{width: "20%"}}
                                                       name="count" min="1" max="10"
                                                       placeholder="1"
                                                       onChange={this.handleChange}/>
                                            </div>
                                        </h4>

                                        <hr className="my-3"/>

                                        <div className="text-muted lead" style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '16px',
                                        }}>
                                            <div className="row">
                                                <div className="col col-6 text-left">
                                                    <img alt='' src={img1} height='18px' width="18px"
                                                         style={{display: 'inline-block', marginRight: '5px'}}/>
                                                    {this.state.count}x {title} - {this.state.selCol}
                                                </div>
                                                <div className="col col-6 text-right">
                                                    {'USD $' + parseInt(info.price) * this.state.count + '.00'}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col col-6 text-left">
                                                    <img alt='' src={img1} height='18px' width="18px"
                                                         style={{display: 'inline-block', marginRight: '5px'}}/>
                                                    Size - {this.state.selSiz}
                                                </div>
                                                <div className="col col-6 text-right">
                                                    -
                                                </div>
                                            </div>
                                            {this.state.reversible === 'true' ? <div className="row">
                                                <div className="col col-6 text-left">
                                                    <img alt='' src={img1} height='18px' width="18px"
                                                         style={{display: 'inline-block', marginRight: '5px'}}/>
                                                    Reversible - {this.state.secColor}
                                                </div>
                                                <div className="col col-6 text-right">
                                                    USD {10 * this.state.count + '.00'}
                                                </div>
                                            </div> : ''}
                                            {this.state.customString === 'true' ? <div className="row">
                                                <div className="col col-6 text-left">
                                                    <img alt='' src={img1} height='18px' width="18px"
                                                         style={{display: 'inline-block', marginRight: '5px'}}/>
                                                    Custom String Color - {this.state.stringColor}
                                                </div>
                                                <div className="col col-6 text-right">
                                                    -
                                                </div>
                                            </div> : ''}
                                        </div>

                                        <hr className="my-3"/>
                                        <p className="mt-3 mb-0 font-weight-bold" style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '16px',
                                            textAlign: 'right'
                                        }}>
                                            Subtotal: {this.state.reversible === 'true' ?
                                            ('$' + (parseInt(info.price) + 10) * this.state.count + '.00') :
                                            ('$' + parseInt(info.price) * this.state.count + '.00')}
                                        </p>
                                        <hr className="my-3"/>

                                        {/* buttons */}
                                        <div>
                                            <div className="m-1 text-center">
                                                {this.updateValid() === true ? <ButtonContainer
                                                        onClick={() => {
                                                            info.selSize = this.state.selSiz
                                                            info.selColor = this.state.selCol
                                                            info.secColor = this.state.secColor
                                                            info.stringColor = this.state.stringColor
                                                            info.count = this.state.count
                                                            if (info.selSize === '') info.selSize = info.sizes[0];
                                                            if (info.selColor === '') info.selColor = value.colors[0].color;
                                                            value.addToCart(value.detailProduct);
                                                            value.openModal(id, title)
                                                        }}>
                                                        Add to Cart
                                                    </ButtonContainer> :
                                                    <ButtonContainer className="disabled-button">
                                                        Add to Cart
                                                    </ButtonContainer>}
                                            </div>
                                            <div className="m-1 text-center underline">
                                                <Link to={"/sizing-page"}>
                                                    Size Guide
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="mt-3 mb-0 font-weight-bold" style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '16px'
                                        }}>
                                            Product info:
                                        </p>
                                        <p className="text-muted lead" style={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            color: '#1a1b1f',
                                            fontSize: '16px'
                                        }}>
                                            {info.description}
                                            <br/>
                                            {(info.style === 'Top') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Pair this top with your favorite bottom.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 20 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : ''}
                                            {(info.style === 'bottom') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Pair this bottom with your favorite top.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 14 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : ''}
                                            {(info.style === 'One-Piece') ? 'A beautiful & soft Nylon Spandex Swimsuit fabric, with a 4-way stretch, & a matte finish.\n' +
                                                'Handmade by Sew Honey.\n' +
                                                'Keep in mind that all Swimwear is hand sewn by Sew Honey. Please allow up to 14 days for your order to be cut and sewn. Thank-you!\n' +
                                                'We are happy to answer any questions you may have, we can be reached at sewhoney3@gmail.com.' : ''}
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