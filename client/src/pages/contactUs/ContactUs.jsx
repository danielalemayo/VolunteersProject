import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './contactUs.css';

const Textarea = styled.textarea`width: 100%; height: 150px`;
function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (e) => {
        // e.preventDefault();
        // console.log({ email, message });
        // const response = await fetch("/access", {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ email, message })
        // });
        // const resData = await response.json();
        // if (resData.status === 'success') {
        //     alert("Message Sent.");
        //     this.resetForm()
        // } else if (resData.status === 'fail') {
        //     alert("Message failed to send.")
        // }

    };
    return (
        <div className='contactUsBody'>
            <div action="voluenteer20@gmail.com" className="container contact-form">
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" ref={register({ required: true })} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" ref={register({ required: true })} />
                            </div>
                            <div className="form-group">
                                <button type="submit" name="btnSubmit" className="btnContact" >Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <Textarea name="txtMsg" className="form-control" placeholder="Your Message *" ref={register({ required: true })}></Textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ContactUs;