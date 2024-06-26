import React, {Component} from 'react';
import Tab from "react-bootstrap/cjs/Tab";
import {Row, Col, Accordion, Card} from "react-bootstrap"
import ListGroup from "react-bootstrap/cjs/ListGroup";
import img1 from "../../bumblebee-icon-20.jpg";

const style = {
    color: '#000000',
    outline: 0,
    border: 'none',
    fontSize: '20px',
    background: '#ffffff',
    cursor: 'pointer',
};

const headerStyle = {
    fontWeight: 'bold',
    fontSize: '17px',
    outline: 0,
    border: 'none',
    background: '#ffffff',
    cursor: 'pointer',
    textAlign: 'center'
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
                            <Row>
                                <Col>
                                    <ListGroup.Item href="#FAQ" style={style}>
                                        FAQ
                                    </ListGroup.Item>
                                    <ListGroup.Item href="#Shipping" style={style}>
                                        Shipping
                                    </ListGroup.Item>
                                </Col>
                                <Col>
                                    <ListGroup.Item href="#Returns" style={style}>
                                        Returns
                                    </ListGroup.Item>
                                    <ListGroup.Item href="#Policies" style={style}>
                                        Policies
                                    </ListGroup.Item>
                                </Col>
                            </Row>
                        </ListGroup>
                        <hr/>
                    </div>
                    <Row>
                        <Col sm={3} className="d-none d-md-block">
                            <ListGroup className="font-bold">
                                <ListGroup.Item href="#FAQ" style={style}>
                                    FAQ
                                </ListGroup.Item>
                                <ListGroup.Item href="#Shipping" style={style}>
                                    Shipping
                                </ListGroup.Item>
                                <ListGroup.Item href="#Returns" style={style}>
                                    Returns
                                </ListGroup.Item>
                                <ListGroup.Item href="#Policies" style={style}>
                                    Policies
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>

                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#Shipping">
                                    <h1><b>SHIPPING</b></h1>
                                    <p className="py-2">
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
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Returns">
                                    <h1><b>RETURNS</b></h1>
                                    <p className="py-2">
                                        Please understand that Beach Time does not accept returns as all items are produced on
                                        a made-to-order service. Returns for an even exchange will only be accepted if the item
                                        is deemed faulty and must be returned within 14 days. Beach Time reserves the right to deny
                                        returns for reasons such as ‘change of mind’ or ‘wrong fit’ as it is your sole responsibility
                                        to check our description, sizing charts and email us with accurate measurements so we
                                        can assist with sizing prior to checkout.
                                    </p>
                                    <p className="pb-2">
                                        Colors/lighting may show differently on each computer or mobile, therefore there may be
                                        slight variations in color. Please email
                                        <a className="text-blue-400 underline" href="mailto: "> beachtime@gmail.com</a>
                                         or visit our Instagram <a className="text-blue-400 underline" href="https://www.instagram.com">@BeachTime</a>
                                        if you are unsure about the color  you are purchasing and would like to see more photos.
                                    </p>
                                    <p>
                                        Please also note that although all of our swimwear is double layered, some lighter
                                        colors  may still go slightly  see through when wet. If you are concerned about this please
                                        select a darker color or email <a className="text-blue-400 underline" href="mailto:"> beachtime@gmail.com</a> for color recommendations, sizing, fit or
                                        any other questions you may have.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#FAQ">
                                    <Accordion defaultActiveKey="0">
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="0" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                What fabric are your swimsuits made from?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p className="pb-2">
                                                        Most of our women's swimwear is made from high quality 4-way
                                                    stretch nylon or polyester spandex blends. Any questions about a specific
                                                    fabric can be sent to <a className="text-blue-400 underline" href="mailto:"> beachtime@gmail.com</a>.
                                                    </p>
                                                    <p>
                                                    All of our fabrics have a buttery soft feel and plenty of stretch, designed
                                                    to fit snug to the body and accentuate all curves without digging in!
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="1" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                How long do orders typically take to fulfill?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body> Once your order is placed we begin the production process!
                                                    Processing time can take up to 3 weeks as all of our products are made to order.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="2" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                After I’ve placed my order, can I cancel or change it?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>All orders are final. Once your order is placed, we can not accept any changes as
                                                    it goes into production immediately. Please choose carefully or email us with any questions
                                                    prior to making your selections.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="3" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                How does sizing work?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>The women's size chart we provide is based on standard US sizing. As every order is handmade
                                                    from scratch it is important that you check our size guide before placing your order and double checking
                                                    you are ordering the correct size before checkout. Any questions about sizing can be sent to
                                                     <a className="text-blue-400 underline" href="mailto: "> beachtime@gmail.com</a>. </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="4" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                Can I return or exchange my order?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="4">
                                                <Card.Body> Please understand that Beach Time does not accept returns as all items are produced
                                                    on a made-to-order service. Returns for an even exchange will only be accepted if the item
                                                    is deemed faulty and must be returned within 14 days. Beach Time reserves the right to deny
                                                    returns for reasons such as ‘change of mind’ or ‘wrong fit’ as it is your sole responsibility
                                                    to check our description, sizing charts and email us with accurate measurements so we can
                                                    assist with sizing prior to checkout.</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle eventKey="5" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                What are the customer service hours?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="5">
                                                <Card.Body> Our customer service hours are Monday-Friday 24/7.
                                                    We will get back to you within a 24 hour period of receiving your email. </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="6" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                How do I take care of my swimwear?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="6">
                                                <Card.Body>

                                                    To ensure the longevity of your swimwear, follow these steps:
                                                    <p className="pt-2">
                                                        -Hand wash separately in cold soapy water after contact with chlorine and salt water.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Lay flat out to dry (do not leave in direct sunlight.)
                                                    </p>
                                                    <p className="pt-2">
                                                        -Avoid prolonged contact with sunscreens,  oils & chlorine- overexposure without washing properly after wearing can cause damage to your swimwear.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Avoid contact with rough surfaces.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Not reccomended machine wash or tumble dry.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Do not wring, soak or bleach.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Do not iron or dry clean.
                                                    </p>
                                                    <p className="pt-2">
                                                        -Do not wash with other clothing. Brighter and darker colors may bleed and may transfer when wet.
                                                    </p>
                                                    <p className="pt-2">
                                                        -High amounts of chlorine and salt water may damage your swimwear if not rinsed out thoroughly.
                                                    </p>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="7" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                How do I know when my order will arrive?/Can I track my order?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="7">
                                                <Card.Body>  Once your order has been shipped you will receive an email including your tracking number.
                                                    If you have any issues finding your order feel free to
                                                    email <a className="text-blue-400 underline" href="mailto:"> beachtime@gmail.com</a> and
                                                    we will assist you!</Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="w-100">
                                            <Accordion.Toggle  eventKey="8" style={headerStyle}>
                                                <img alt='' src={img1} height='18px' width="18px" style={{display: 'inline-block',marginRight:'5px'}}/>
                                                Who can I ask any questions I may have to?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="8">
                                                <Card.Body>We are more than happy to answer any questions you may have!
                                                    You can email us at <a className="text-blue-400 underline" href="mailto: "> beachtime@gmail.com </a>
                                                     or direct message <a className="text-blue-400 underline" href="https://www.instagram.com/">@BeachTime </a>
                                                    on Instagram for any help! Please allow up to 48 hours response time.

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </div>
                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#Policies">
                                    <b>DISCLAIMER:</b> It is agreed by the user that by using this online boutique, they agree to the below policies.
                                    <br/><br/>
                                    <h1><b>PRIVACY</b></h1>
                                    <p className="pt-3">
                                        Beach Time  is committed to providing a safe and secure online boutique and shopping
                                        environment. All essential precautions are taken to ensure your personal privacy.
                                        Any personal information gathered by Beach Time  will be used to process your order,
                                        to contact you regarding transactions and if you approve, to contact you with regards
                                        to product updates.  Beach Time  guarantees that all information collected through
                                        www.beachtime.com will be handled with the strictest confidence, stored securely and
                                        will not be distributed or sold to any third party.  Your details will be kept on a
                                        private database for use by the Beach Time house only.
                                    </p>
                                    <br/><br/>
                                    <h1><b>Security</b></h1>
                                    <p className="pt-3">
                                        Beach Time takes every  precaution necessary to ensure our online boutique is as secure
                                        as possible. To ensure the highest level of security when making purchases, all Beach Time
                                        orders are processed using the safest payment method available, PayPal.  You will need to
                                        set up a PayPal account to purchase items from the Beach Time  Online Boutique or you may
                                        checkout as a guest on PayPal.
                                    </p>
                                    <br/><br/>
                                    <h1><b>E-NEWSLETTER</b></h1>
                                    <p className="pt-3">
                                        If you sign up for the newsletter, Beach Time  may contact you via email with our
                                        frequent e-mailed newsletter. The newsletters will feature information about new
                                        products, features or special promotions. If you do not wish to receive this kind
                                        of e-mail, please follow the opt-out prompts at the footer of the e-mail.
                                        you do not wish to receive this kind of e-mail, please follow the opt-out prompts at the footer of the e-mail.
                                    </p>
                                    <br/><br/>
                                    <h1><b>COPYRIGHT</b></h1>
                                    <p className="pt-3">
                                        All content contained on this website including-but not limited to, images, information
                                        and text, and product designs are copyrighted material of Beach Time.  These materials
                                        may not be used without prior approval through the form of legal written consent of Beach Time.
                                    </p>

                                    <br/><br/>
                                    <h1><b>PRODUCT AND SERVICES</b></h1>
                                    <p className="pt-3">
                                        We have made every effort to display as accurately as possible the colors and images
                                        of our products that appear at the store. We can not guarantee that your computer monitor's
                                        display of any color will be accurate. We reserve the right to limit the quantities of
                                        any products or services that we offer. All descriptions of products or product pricing
                                        are subject to change at any time without notice, at the sole discretion of us. We reserve
                                        the right to discontinue any product at any time.
                                    </p>

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