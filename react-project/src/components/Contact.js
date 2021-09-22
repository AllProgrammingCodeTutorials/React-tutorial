import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact-form">
                <h2> Contact Me</h2>
                <form className ="ui form">
                    <label>username: </label>
                    <input type="text" name="username"/><br/>
                    <label>Email: </label>
                    <input type="text" name="email"/> <br/>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );

    }
}

export default Contact;