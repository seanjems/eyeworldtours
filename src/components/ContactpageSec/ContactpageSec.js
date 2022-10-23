import React from "react";
import ContactForm from "../ContactFrom";

const ContactpageSec = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-maps-and-flags"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>
                        P.O BOX 25956-KAMPALA <br /> Ambassador House, 2nd Floor
                        Suit #07
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>info@eyeworldtours.com</p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Call Now</h2>
                      <p>+256 750 070 309</p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>Questions or Bookings?</h2>
              <p>
                Fill the form below and add your message and we will contact you
                as soon as possible
              </p>
            </div>
            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573126468883!2d32.57353411473364!3d0.31685016411147454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbccd96f875d%3A0xf22297c293caef9e!2sAmbassador%20House!5e0!3m2!1sen!2sug!4v1666538441237!5m2!1sen!2sug"></iframe>
        </div>
      </section>
    </section>
  );
};

export default ContactpageSec;
