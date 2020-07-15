import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row col-10 mx-auto col-md-6 ">
                    <h6 className="text-muted ">Home/</h6><h6>Contact</h6>
                </div>
                <br/>
            <Form className="col-10 mx-auto col-md-6 ">
                <Form.Label>
                    Name:
                </Form.Label>
                <Form.Control name='name'/>
                <br/>
                <Form.Label>
                    Email:
                </Form.Label>
                <Form.Control name='email'/>
                <br/>
                <Form.Label>
                    Message:
                </Form.Label>
                <Form.Control name='message' type="text" as="textarea" rows="3"/>
                <br/>
                <Button variant="primary" type="submit" >
                    Send
                </Button>
            </Form>
            </div>
        );
    }
}

export default Contact;