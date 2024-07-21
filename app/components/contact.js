'use client';

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your User ID (Public Key)
    emailjs.init('I-qvmkalWBcxK0wOi');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_oodjo39', 'template_1449qbt', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send email.');
      });

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="container mx-auto p-6 mt-10 max-w-3xl shadow-lg rounded-lg bg-white">

      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-center text-base-content mb-6">Feel free to contact me using this form!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-base-content">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="input input-bordered w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-base-content">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input input-bordered w-full" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-base-content">Message</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="textarea textarea-bordered w-full" 
            rows="5" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-full">
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}
