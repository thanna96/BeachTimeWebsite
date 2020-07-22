import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(Event){
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        })
    }

    handleSubmit(Event) {
        Event.preventDefault()
        console.log(this.state.message,this.state.name,this.state.email)
        const templateId = 'template_rzk8CvIY';
        this.sendFeedback(templateId, {
            message: this.state.message,
            name: this.state.name,
            email: this.state.email
        })
    }

    sendFeedback (templateId, variables) {
        emailjs.send(
            'gmail',
            templateId,
            variables,
            process.env.REACT_APP_EMAILJS_KEY
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        return (
            <div>
                <div className="row col-10 mx-auto col-md-6 ">
                    <h6 className="text-muted ">Home/</h6><h6>Contact</h6>
                </div>
                <br/>
            <Form className="col-10 mx-auto col-md-6 " onSubmit={this.handleSubmit}>
                <Form.Label>
                    Name:
                </Form.Label>
                <Form.Control name='name' onChange={this.handleChange}/>
                <br/>
                <Form.Label>
                    Email:
                </Form.Label>
                <Form.Control name='email' onChange={this.handleChange}/>
                <br/>
                <Form.Label>
                    Message:
                </Form.Label>
                <Form.Control name='message' type="text" as="textarea" rows="3" onChange={this.handleChange}/>
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