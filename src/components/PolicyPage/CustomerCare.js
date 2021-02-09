import React, {Component} from 'react';
import Tab from "react-bootstrap/cjs/Tab";
import {Row, Col} from "react-bootstrap"
import ListGroup from "react-bootstrap/cjs/ListGroup";

const style = {
    color: '#000000',
    border: 'none',
    background: '#ffffff',
    cursor: 'pointer',
};

class CustomerCare extends Component {

    render() {
        return (
            <div className="w-75 mx-auto">
                <div className="col-12 mx-auto m-5 text-center text-title mt-3">
                    <p className="mx-auto   font-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'40px'}}>
                        Customer Care
                    </p>
                </div>

                <Tab.Container defaultActiveKey="#Shipping" >
                    <Row>
                        <Col sm={3}>
                            <ListGroup>
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
                                    Frequently asked questions
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