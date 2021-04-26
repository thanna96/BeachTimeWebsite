import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
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
        //console.log(this.state.message,this.state.name,this.state.email)
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
            <div className="pb-5">
            <Form className="w-3/5 d-none mx-auto d-lg-block" onSubmit={this.handleSubmit}>
                <Form.Label className=" " style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                    Name:
                </Form.Label>
                <Form.Control name='name' onChange={this.handleChange}/>
                <br/>
                <Form.Label className=" "  style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                    Email:
                </Form.Label>
                <Form.Control name='email' onChange={this.handleChange}/>
                <br/>
                <Form.Label className=" "  style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                    Message:
                </Form.Label>
                <Form.Control name='message' type="text" as="textarea" rows="3" onChange={this.handleChange}/>
                <br/>
                <button type="submit" className="py-2 px-3" style={{ fontFamily:'"Montserrat", sans-serif', color:'white', fontSize:'12px',backgroundColor:'black'}}>
                    Send
                </button>
            </Form>
                <Form className="w-100 d-block d-lg-none " onSubmit={this.handleSubmit}>
                    <Form.Label className=" " style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                        Name:
                    </Form.Label>
                    <Form.Control name='name' onChange={this.handleChange}/>
                    <br/>
                    <Form.Label className=" "  style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                        Email:
                    </Form.Label>
                    <Form.Control name='email' onChange={this.handleChange}/>
                    <br/>
                    <Form.Label className=" "  style={{spacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'12px'}}>
                        Message:
                    </Form.Label>
                    <Form.Control name='message' type="text" as="textarea" rows="3" onChange={this.handleChange}/>
                    <br/>
                    <button type="submit" className="py-2 px-3" style={{ fontFamily:'"Montserrat", sans-serif', color:'white', fontSize:'12px',backgroundColor:'black'}}>
                        Send
                    </button>
                </Form>
            </div>
        );
    }
}

export default Contact;