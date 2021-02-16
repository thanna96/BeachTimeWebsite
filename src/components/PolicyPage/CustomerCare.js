import React, {Component} from 'react';
import Tab from "react-bootstrap/cjs/Tab";
import {Row, Col, Accordion, Card} from "react-bootstrap"
import ListGroup from "react-bootstrap/cjs/ListGroup";

const style = {
    color: '#000000',
    outline: 0,
    border: 'none',
    fontSize: '20px',
    background: '#ffffff',
    cursor: 'pointer',
};

const headerStyle = {
    'font-weight': 'bold',
    fontSize: '17px',
    outline: 0,
    border: 'none',
    background: '#ffffff',
    cursor: 'pointer',
    'text-align': 'center'
};

class CustomerCare extends Component {

    render() {
        return (
            <div className="w-75 mx-auto">
                <div className="col-12 mx-auto m-5 text-center text-title mt-3">
                    <p className="mx-auto font-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'40px'}}>
                        Customer Care
                    </p>
                </div>

                <Tab.Container defaultActiveKey="#FAQ" >
                    <div className="d-block d-md-none mb-5 mx-auto text-center">
                        <ListGroup className="font-bold">
                            <ListGroup.Item href="#Shipping" style={style}>
                                Shipping
                            </ListGroup.Item>
                            <ListGroup.Item href="#Returns" style={style}>
                                Returns
                            </ListGroup.Item>
                            <ListGroup.Item href="#FAQ" style={style}>
                                FAQ
                            </ListGroup.Item>
                            <ListGroup.Item href="#Policies" style={style}>
                                Policies
                            </ListGroup.Item>
                        </ListGroup>
                        <hr/>
                    </div>
                    <Row>
                        <Col sm={3} className="d-none d-md-block">
                            <ListGroup className="font-bold">
                                <ListGroup.Item href="#Shipping" style={style}>
                                    Shipping
                                </ListGroup.Item>
                                <ListGroup.Item href="#Returns" style={style}>
                                    Returns
                                </ListGroup.Item>
                                <ListGroup.Item href="#FAQ" style={style}>
                                    FAQ
                                </ListGroup.Item>
                                <ListGroup.Item href="#Policies" style={style}>
                                    Policies
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Shipping">
                                    All domestic parcels are sent via
                                    the Australia Post Express post service
                                    as it ensures guaranteed next business
                                    day delivery within the express post network
                                    (80% of Australian addresses are covered within the network,
                                    allow an additional day or two for areas outside the network).
                                    (PLEASE ALLOW AN ADDITIONAL 2-3 BUSINESS DAYS DURING COVID-19)
                                    This method of shipping also provides free full tracking on all parcels upon request.
                                    $11 FLATRATE AUSTRALIA WIDE
                                    *Orders are processed, sewn and shipped within 7 business days of payment (weekends and public holidays excluded).
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Returns">
                                    Please understand we do not accept returns, as all items are produced on a
                                    made-to-order service as your order is handmade from scratch in the size, colour
                                    and style that you request. Returns for an exchange will only be accepted if the item
                                    is deemed faulty and must be returned within 14 days. Vincija reserves the right to
                                    deny returns for reasons such as ‘change of mind’ or ‘wrong fit’ as it is your sole
                                    responsibility to check our description, sizing charts and email us with accurate
                                    measurements so we can assist with sizing prior to checkout.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#FAQ">
                                    <Accordion defaultActiveKey="0">
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="0" style={headerStyle}>
                                                &#9706; Question One
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="1" style={headerStyle}>
                                                &#9706; Question Two
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="2" style={headerStyle}>
                                                &#9706; Question Three
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="3" style={headerStyle}>
                                                &#9706; Question Four
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Policies">
                                    Unfortunately, sew honey does not accept returns as we work
                                    on a made to order service. Returns will only be accepted if
                                    you have received a damaged item. However, all returns must be
                                    made within 10 days of receiving the product. Sew Honey will not
                                    accept returns for any other reason. including
                                    "it doesn't fit." You are responsible for providing us with
                                    the correct size based on our size chart. Any questions regarding
                                    sizing or any other matter can be sent to sewhoney3@gmail.com.
                                    we appreciate your business.
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default CustomerCare;