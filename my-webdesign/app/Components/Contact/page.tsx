"use client"
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>
      <p>{`We would love to hear from you! Whether you're interested in working together or have a question, feel free to get in touch with us.`}</p>

      <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold p-4 rounded-lg hover:bg-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
