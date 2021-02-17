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

                <Tab.Container defaultActiveKey="#Policies" >
                    <div className="d-block d-md-none mb-5 mx-auto text-center">
                        <ListGroup className="font-bold">
                            <ListGroup.Item href="#Policies" style={style}>
                                Policies
                            </ListGroup.Item>
                            <ListGroup.Item href="#Shipping" style={style}>
                                Shipping
                            </ListGroup.Item>
                            <ListGroup.Item href="#Returns" style={style}>
                                Returns
                            </ListGroup.Item>
                            <ListGroup.Item href="#FAQ" style={style}>
                                FAQ
                            </ListGroup.Item>

                        </ListGroup>
                        <hr/>
                    </div>
                    <Row>
                        <Col sm={3} className="d-none d-md-block">
                            <ListGroup className="font-bold">
                                <ListGroup.Item href="#Policies" style={style}>
                                    Policies
                                </ListGroup.Item>
                                <ListGroup.Item href="#Shipping" style={style}>
                                    Shipping
                                </ListGroup.Item>
                                <ListGroup.Item href="#Returns" style={style}>
                                    Returns
                                </ListGroup.Item>
                                <ListGroup.Item href="#FAQ" style={style}>
                                    FAQ
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>

                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Shipping">
                                    <h1><b>SHIPPING</b></h1>
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
                                    <h1><b>RETURNS</b></h1>
                                    Unfortunately, Sew Honey does not accept returns as we work on a made to order service.
                                    Returns will only be accepted if you have received a damaged item. However, all returns
                                    must be made within a 10 day period of receiving the product. Sew Honey will not accept
                                    returns for any other reason. Reasons including “it doesn’t fit.” You are responsible for
                                    providing us with the correct size based on our size chart. Any questions regarding sizing or
                                    any other matter can be sent to sewhoney3@gmail.com. Thank-you & we appreciate your business!

                                </Tab.Pane>
                                <Tab.Pane eventKey="#FAQ">
                                    <Accordion defaultActiveKey="0">
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="0" style={headerStyle}>
                                                &#9706; What fabric are your swimsuits made from?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>All womens swimwear is made from a beautiful nylon lycra fabric.
                                                    All mens swimwear is made from soft polyester.</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="1" style={headerStyle}>
                                                &#9706; How long do orders typically take to fulfill?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>Once your order is placed we begin the cutting process of the
                                                    fabric right away. However, given the volume of suits we have to sew,
                                                    suits can take up to two weeks to complete.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="2" style={headerStyle}>
                                                &#9706; After I’ve placed my order, can I cancel or change it?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>After you’ve placed your order we typically start the cutting
                                                    process ASAP. You have about an hour to contact us to change or cancel an order.</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="3" style={headerStyle}>
                                                &#9706; How does sizing work?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>The women's size chart we provide is based off of your bra and jean size.
                                                    The mens size chart is based on your waist size.</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="4" style={headerStyle}>
                                                &#9706; Can I return or exchange my order?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body> All of our swimwear is produced  on a made-to-order service.
                                                    We do not accept returns or exchanges. We will only make an exception
                                                    on one condition, if an item is delivered to you and is damaged you have
                                                    10 business days to contact Sew Honey.  You must provide a detailed description
                                                    of what is wrong with your item and/or pictures. On this condition we will provide
                                                    you with a new item. Your happiness is important to us!</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="5" style={headerStyle}>
                                                &#9706; What are the customer service hours?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body> Our customer service hours are Monday-Friday 24/7.
                                                    We will get back to you within a 24 hour period of receiving your email. </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="6" style={headerStyle}>
                                                &#9706;  How do I take care of my swimwear?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>For best results we recommend hand washing and line-drying your
                                                    swimsuit. If you choose to machine wash your suit be sure to wash it on delicate!</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="7" style={headerStyle}>
                                                &#9706; How do I know when my order will arrive?/Can I track my order?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body> Once your order has been shipped out we will email you with
                                                    a tracking number. If you have any issues finding your order feel
                                                    free to send us an email and we will assist you!</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="8" style={headerStyle}>
                                                &#9706; Who can I ask any questions I may have to?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="8">
                                                <Card.Body>We are more than happy to answer any questions you may have! You can
                                                    email us at sewhoney3@gmail.com. You may also direct message @genamiele on instagram for any help as well!
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Policies">
                                    <b>DISCLAIMER:</b> It is agreed by the user that by using this online boutique, they agree to the below policies.
                                    <br/><br/>
                                    <h1><b>PRIVACY</b></h1>
                                    Sew Honey  is committed to providing a safe and secure online boutique and shopping
                                    environment. All essential precautions are taken to ensure your personal privacy.
                                    Any personal information gathered by Sew Honey  will be used to process your order,
                                    to contact you regarding transactions and if you approve, to contact you with regards
                                    to product updates.  Sew Honey  guarantees that all information collected through
                                    www.sewhoney.com will be handled with the strictest confidence, stored securely and
                                    will not be distributed or sold to any third party.  Your details will be kept on a
                                    private database for use by the Sew Honey house only.
                                    <br/><br/>
                                    <h1><b>Security</b></h1>
                                    Sew Honey takes every  precaution necessary to ensure our online boutique is as secure
                                    as possible. To ensure the highest level of security when making purchases, all Sew Honey
                                    orders are processed using the safest payment method available, PayPal.  You will need to
                                    set up a PayPal account to purchase items from the Sew Honey  Online Boutique or you may
                                    checkout as a guest on PayPal.
                                    <br/><br/>
                                    <h1><b>E-NEWSLETTER</b></h1>
                                    If you sign up for the newsletter, Sew Honey  may contact you via email with our
                                    frequent e-mailed newsletter. The newsletters will feature information about new
                                    products, features or special promotions. If you do not wish to receive this kind
                                    of e-mail, please follow the opt-out prompts at the footer of the e-mail.
                                    you do not wish to receive this kind of e-mail, please follow the opt-out prompts at the footer of the e-mail.
                                    <br/><br/>
                                    <h1><b>COPYRIGHT</b></h1>
                                    All content contained on this website including-but not limited to, images, information
                                    and text, and product designs are copyrighted material of Sew Honey.  These materials
                                    may not be used without prior approval through the form of legal written consent of Sew Honey.
                                    <br/><br/>
                                    <h1><b>PRODUCT AND SERVICES</b></h1>
                                    We have made every effort to display as accurately as possible the colors and images
                                    of our products that appear at the store. We can not guarantee that your computer monitor's
                                    display of any color will be accurate. We reserve the right to limit the quantities of
                                    any products or services that we offer. All descriptions of products or product pricing
                                    are subject to change at any time without notice, at the sole discretion of us. We reserve
                                    the right to discontinue any product at any time.

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