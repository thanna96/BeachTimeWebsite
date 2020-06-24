import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row col-10 mx-auto col-md-6 ">
                    <h6 className="text-muted ">Home/</h6><h6>Contact</h6>
                </div>
            <form className="center col-10 mx-auto col-md-6 ">
                <label>
                    Name: <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Email: <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Message: <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <input  type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Contact;