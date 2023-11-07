import React from 'react';
import './Join.css';
import { useRef } from 'react';
import emailJs from '@emailjs/browser';
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        'service_r15g18f',
        'template_fchfnuv',
        form.current,
        'rV1X8EmR1hz5apK1q'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="Join_us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text"> READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email_container" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter your Email Address "
            name="user_email"
          />
          <button className="btn btn-j">Jon Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
