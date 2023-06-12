import React from 'react';
import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inputError, setInputError] = useState('');

  const emailValidation = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const contactSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setInputError('All fields are required for submission!');
      return;
    }

    if (!emailValidation(email)) {
        setInputError('Please enter a valid email address!')
        return;
    }

    // Clears and resets fields as well as the error message.
    setName('');
    setEmail('');
    setMessage('');
    setInputError('');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact</h1>
      <form className="contact-form" onSubmit={contactSubmit}>
        <label style={{ paddingLeft: '10px' }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '23px', paddingBottom: '50px' }}
          />
        </label>
        <label style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: '25px' }}
          />
        </label>
        <label style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: '250px', width: '600px' }}
          />
        </label>
        <button className="btn btn-info" type="submit">Submit</button>
        {inputError && <p className="error-message">{inputError}</p>}
      </form>
    </div>
  );
}

export default Contact;
