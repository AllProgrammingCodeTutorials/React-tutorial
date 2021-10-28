import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    constructor(){
        super();
        this.state ={
            username:null,
            email:null
        }
    }

    formSubmit(){
        console.log(this.state);
    }
    render() {
        return(
            <div className="contact-form">
                <h2> Contact Me</h2>
                <form className ="ui form">
                    <label>username: </label>
                    <input type="text" name="username" onChange={(e)=>this.setState({username:e.target.value})} /><br/>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={(e)=>this.setState({email:e.target.value})}/> <br/>
                    <button className="btn" onClick={()=>this.formSubmit()}>Submit</button>
                </form>
            </div>
        );

    }
}

export default Contact;