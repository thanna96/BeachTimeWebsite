import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form className="center">
                <label>
                    Email: <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Password: <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <input  type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;