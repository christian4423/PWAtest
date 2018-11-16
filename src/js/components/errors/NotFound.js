
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message ||"404 Page Not Found!"
        }
    }
    getMessage() {
        if (this.state.message !== "") {
            return this.state.message;
        } else {
            return 
        }
    }
    getHeading(){
        if (this.state.message !== "") {
            return this.state.message;
        } else {
            return "404 Page Not Found!"
        }
    }
    render() {
        return (
            <div className="ErrorContainer">
                <div className="__message">
                    <h1 data-heading={this.state.message}>{this.state.message}</h1>
                </div>
                <div className="__btn">
                    <Link className="btn btn-primary" to={"/"}>Go Home</Link>
                </div>                
            </div>
        )
    }
}
export default NotFound;