import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactSection = () => {
  return (
    <section className="contact-page py-120 rpy-100">
      <div className="container">
        <div className="contact-info-area mb-80">
          <div className="contact-info-item">
            <i className="far fa-map"></i>
            <p>27 Division St, New York, NY 10002,USA</p>
          </div>
          <div className="contact-info-item">
            <i className="far fa-envelope"></i>
            <p><a href="mailto:support@gmail.com">support@gmail.com</a> <br /><a href="#">www.restly.net</a></p>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-phone-alt"></i>
            <p><a href="callto:+08(964)712365">+08 (964) 712365</a> <br /><a href="callto:+0234(456)9864">+0234 (456) 9864</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-form-left bgs-cover h-100" 
            style={{backgroundImage:`url(/assets/images/contact/contact-page.jpg)`}}>
              <h2>Leave A Message</h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form ml-40 rml-0 rmt-55">
              <h3 className="comment-title mb-35">Send A Message</h3>
              <p>Avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter</p>
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;