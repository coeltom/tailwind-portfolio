import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .send(
        'service_avok2x9',
        'template_1y8t2no',
        formData,
        'QGZOQc62poaC7GXTx'
      )
      .then(
        result => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        error => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 ">
      <div className="mb-4">
        <label
          className="block text-[#f2f2f2] text-sm font-bold mb-2"
          htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#f2f2f2] text-sm font-bold mb-2"
          htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#f2f2f2] text-sm font-bold mb-2"
          htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#f2f2f2] text-sm font-bold mb-2"
          htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
        </button>
      </div>
      <p className="my-6 text-center">
        or contact me at{' '}
        <a href="mailto:work@tomascoe.dev">work@tomascoe.dev</a>
      </p>
    </form>
  );
};

export default ContactForm;
