import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
            <div className="row col-10 mx-auto col-md-6 ">
                <h6 className="text-muted ">Home/</h6><h6>Login</h6>
            </div>
            <form className="center col-10 mx-auto col-md-6 ">
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
                <Link to='/AdminPage' className="nav-link-mobile">
                    <span className="mr-3">Login</span>
                </Link>
            </div>
        );
    }
}

export default Login;