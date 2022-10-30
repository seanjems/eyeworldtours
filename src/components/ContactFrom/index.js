import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Destinations from "../../api/destination";

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showMessageStatus, setShowMessageStatus] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      console.log(forms);
      postForm();
    } else {
      validator.showMessages();
    }
  };

  const content = () => {
    const body = {
      replyToEmail: forms.email,
      subject: forms.subject,
      SenderName: forms.name,
      senderPhonenumber: forms.phone,
      body: forms.message,
    };
    console.log(
      "🚀 ~ file: index.js ~ line 49 ~ content ~ JSON.stringify(body)",
      btoa(JSON.stringify(body))
    );

    return btoa(JSON.stringify(body));
  };

  async function postForm() {
    setIsSending(true);
    setMessageSent(undefined);
    setShowMessageStatus(false);

    return fetch(
      `https://social.kampalacentraladventist.org/api/SmtpSender?content=${content()}`,
      // `${"https://localhost:7204/"}api/Posts?page=${1}&userProfileId=&userName=`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.status == 200) {
          setForms({
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: "",
          });
          setMessageSent(true);
        } else {
          setMessageSent(false);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(
        //   "🚀 ~ file: SocialMedia.jsx ~ line 30 ~ .then ~ data",
        //   data
        // );
        // if (!data) {
        //   console.log("error on api call", data);
        //   return;
        // }
        // // var shuffledList = _.shuffle(data).slice(0, 4);
        // // console.log(
        // //   "🚀 ~ file: SocialMedia.jsx ~ line 31 ~ .then ~ shuffledList",
        // //   shuffledList
        // // );
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsSending(false);
        setShowMessageStatus(true);
      });
  }
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="contact-validation-active"
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Email"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your phone"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.subject}
              type="text"
              name="subject"
            >
              <option>Choose a Service</option>
              <option>Booking</option>
              <option>General Inquiry</option>
              <option>Feedback</option>
              {Destinations.map((place, idx) => (
                <option key={idx}>{place.title}</option>
              ))}
            </select>
            {validator.message("subject", forms.subject, "required")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <textarea
            onBlur={(e) => changeHandler(e)}
            onChange={(e) => changeHandler(e)}
            value={forms.message}
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>
      <div className="submit-area">
        {showMessageStatus && (
          <span style={messageSent ? { color: "green" } : { color: "red" }}>
            {messageSent
              ? "Message Sent succefully!"
              : "Error! Failed to send message..."}
          </span>
        )}
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn" disabled={isSending}>
          {isSending ? "Sending ..." : "Submit Now"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
