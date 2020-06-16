import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <form className="center">
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
        );
    }
}

export default Contact;