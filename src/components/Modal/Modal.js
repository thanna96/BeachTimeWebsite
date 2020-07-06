import React, {Component} from 'react';
import styled from "styled-components";
import {ProductConsumer} from "../../context";
import {ButtonContainer} from "../Styles/Button";
import {Link} from "react-router-dom";

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            selSiz: '',
            selCol: ''
        }
        this.handleChange = this.handleChange.bind(this);
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
                {(value) =>{
                    const {modalOpen,closeModal} = value;
                    const{ id, title, info} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else {
                       return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>{title}</h5>
                                        <img src={"https://s3.amazonaws.com/sew-honey-bucket/img/"+info.img[0]} className="img-fluid" alt="product"/>
                                        {/* Size */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Size:
                                            <select name="selSize" onChange={this.handleChange} >
                                                {info.sizes.map(size => (
                                                    <option key={size} >{size}</option>
                                                ))}
                                            </select>
                                        </h4>

                                        {/* Color */}
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Color:
                                            <select name="selCol" onChange={this.handleChange} >
                                                {info.color.map(color => (
                                                    <option key={color} >{color}</option>
                                                ))}
                                            </select>
                                        </h4>
                                        <h5 className="text-muted">price : ${info.price}</h5>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            Close
                                        </ButtonContainer>
                                        <Link to='/ProductList'>
                                            <ButtonContainer onClick={()=>{
                                                info.selSize = this.state.selSiz
                                                info.selColor = this.state.selCol
                                                if (info.selSize === '') info.selSize = info.sizes[0];
                                                if (info.selColor === '') info.selColor = info.color[0];
                                                closeModal();
                                                value.addToCart(id,title);
                                            }}>
                                                Add to Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>);
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background:rgba(255, 255, 255, 0.9);
    }
`;

export default Modal;