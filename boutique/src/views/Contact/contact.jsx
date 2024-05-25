import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import contact from '../../Image/json/contactus.json'

import Lottie from "lottie-react"

const Contact = () => {
  const [messageSuccess, setMessageSuccess] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [message, setMsg] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMsg({ ...message, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //await sendEmail(message); // Call your backend function to send the email
      setMessageSuccess("Message sent successfully!");
      setMsg({ name: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      setMessageError("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <h1 className="text-3xl font-bold mb-4">Have Some  Questions ?</h1>
          <hr style={{ Color :"#0000009b"}} className="w-20 mx-auto border border-primary" />
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center ">
          <Lottie animationData={contact}></Lottie>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" id="name" name="name" value={message.name} onChange={handleChange}
                  className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" id="email" name="email" value={message.email} onChange={handleChange}
                  className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" name="message" rows="5" value={message.message} onChange={handleChange}
                  className="form-control"></textarea>
              </div>
              <button type="submit" style={{backgroundColor : "#0000009b" , borderColor : "#0000009b"}} className="btn btn-primary">
                Send Message <i className="fa fa-paper-plane ms-2"></i>
              </button>
            </form>
            {messageSuccess && (
              <Alert variant="success" className="mt-2">{messageSuccess}</Alert>
            )}
            {messageError && (
              <Alert variant="danger" className="mt-2">{messageError}</Alert>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
