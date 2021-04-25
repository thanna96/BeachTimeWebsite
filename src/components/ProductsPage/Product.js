import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../../context";
import PropTypes from 'prop-types';

const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: '',
        }
    }

    render() {
        const {id, title, info} = this.props.product;
        return (
            <ProductWrapper className="col col-6 col-md-3 p-0" style={{height:"auto",objectFit:'cover',maxWidth:"340px",}}>

                <div className="my-6" style={{maxHeight:'100%'}}>
                    <ProductConsumer>
                        {value=>(
                    <div onClick={()=>value.handleDetail(id,title)} >
                        <Link to={info.type+'/'+id+'/'+title} >
                            <img src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+info.img[0]}
                                 onMouseEnter={e => {if (info.img[1]) e.currentTarget.src = "https://s3.amazonaws.com/sew-honey-bucket/img/" + info.img[1]}}
                                 onMouseLeave={e => (e.currentTarget.src = "https://s3.amazonaws.com/sew-honey-bucket/img/"+info.img[0])}
                                 id="imgTest" alt="product" style={{display:'block',  margin:0}}/>
                        </Link>
                    </div>)}
                    </ProductConsumer>

                    {/* Card Footer */}
                    <div className=" justify-content-center" >
                        <Link to={info.type+'/'+id+'/'+title} className="footer-link">
                        <p className="mb-0 align-self-center font-bold responsive-font" style={{"textAlign": "center",letterSpacing:'1px',
                            fontFamily:'"Montserrat", sans-serif' , opacity:'60%' }} >
                            {title}
                        </p>
                        </Link>
                        <p className="align-self-center responsive-font" style={{"textAlign": "center",opacity:'60%'}}>
                        <span>${info.price}</span>
                        </p>

                    </div>

                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        info: PropTypes.shape(
            {
                img:PropTypes.array,
                price:PropTypes.number,
                inCart:PropTypes.bool
            }
        ),
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        padding: 0 3;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        width: 100%; 
        height: 300px;
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all .25s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1);
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right:0;
        padding: 0.2rem 0.4rem;
        background: transparent;
        border:none;
        color:var(--mainWhite);
        font-size:1.4rem;
        border-radius:0.5 0 0 0;
        transform: translate(100%,100%);
        transition: all .25s linear;
    }
    .img-container: hover .cart-btn{
        transform: translate(0,0);
    }
    .cart-btn hover{
        cursor: pointer;
    }
`;

export default Product;