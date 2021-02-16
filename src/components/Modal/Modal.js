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
                    const{ title} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else {
                       return (<ModalContainer>
                            <div className="m-auto" style={{
                                position:"fixed",
                                top:'50%',
                                left:'50%',
                                transform: 'translate(-50%, -50%)'
                            }} >
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize">
                                        <h5 className="p-3">{title} Has Been Added To Your Cart!</h5>
                                        <Link to={"/cart"}>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                View Cart
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer className="mt-2" onClick={()=>closeModal()}>
                                            Close
                                        </ButtonContainer>
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
        background:rgba(255, 255, 255,1);
      padding: 20px;
    }
`;

export default Modal;