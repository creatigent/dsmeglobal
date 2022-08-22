import axios from "axios";
import React, { useEffect } from "react";
import { contactBannerSvg, contactSvg, successSvg } from "../assets";

export default function QuoteJumbotron() {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "api/v1/set_quote", {
        username: name,
        company: company,
        email: email,
        phone: mobile,
        subject: subject,
        message: message,
      })
      .then(() => {
        setSuccess(true);
        setName("");
        setCompany("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
      });
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);
  return (
    <div className="contact">
      {success ? (
        <div className="contact__overlay">
          <img
            src={successSvg}
            alt="success"
            className="contact__overlay__img"
          />
          <div className="contact__overlay__heading">
            Submitted Successfully We will contact you soon
          </div>
        </div>
      ) : null}
      <div className="contact__content">
        <div className="contact__content__right" style={{ marginRight: 100 }}>
          <img
            src={contactBannerSvg}
            alt="contactImage"
            className="contact__content__right__img"
          />
        </div>
        <form className="contact__content__left" onSubmit={handleSubmit}>
          <div className="contact__content__left__row">
            <Input
              type="text"
              label="Name"
              title="Name"
              placeholder="Enter Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              label="Company Name (Optional)"
              title="Company"
              placeholder="Type your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="contact__content__left__row">
            <Input
              type="email"
              label="Email"
              title="Email"
              placeholder="Enter Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              label="Mobile (Optional)"
              title="Mobile"
              placeholder="Enter Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <Input
            type="text"
            label="Subject"
            title="Subject"
            placeholder="Enter Subject"
            required={true}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Input
            textarea
            label="How can we help you"
            title="Message"
            placeholder="Give us some details about your project"
            required={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            title="Let’s Start a Conversation"
            className="contact__content__left__button"
          >
            Let’s Start a Conversation
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ textarea, required, label, error, ...props }) {
  return (
    <div className="contact__content__left__input">
      <label
        htmlFor={props.id}
        className="contact__content__left__input__label"
      >
        {label}
        {required ? <span>*</span> : null}
      </label>
      {textarea ? (
        <textarea
          {...props}
          cols="30"
          rows="10"
          className="contact__content__left__input__field"
          required={required}
          style={{ padding: "1em" }}
        />
      ) : (
        <input
          {...props}
          className="contact__content__left__input__field"
          required={required}
        />
      )}
      {error !== "" ? (
        <div className="contact__content__left__input__error">{error}</div>
      ) : null}
    </div>
  );
}
