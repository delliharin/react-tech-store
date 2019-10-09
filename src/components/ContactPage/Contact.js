import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/harin.vihari@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="From"
                className="form-control"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="Email"
                className="form-control"
                placeholder="JohnDoe@example.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Subject"
                className="form-control"
                placeholder="Subject..."
              />
            </div>
            <div className="form">
              <textarea
                name="Message"
                className="form-control"
                rows="10"
                placeholder="message here..."
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
