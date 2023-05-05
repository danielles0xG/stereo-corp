import React from 'react';
import ServiceForm from '../../../forms/ser-contact';

const Contact = ({df,s_page,s_page_3}) => {
  return (
    <>
      <section className={`${df ? `contact-four ${s_page ?`${s_page_3 ?'pt-100' :'pt-70'} rpt-50 pb-120 rpb-100`
      :'py-120 rpy-100'}` :'contact-two'}`} id="contact">
        <div className="container">
          <div className={`${df ? 'contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white' 
          : 'contact-section-inner p-50 br-5 bg-white'} `}>
            <div className="row">
              <div className="col-lg-7">
                <div className="contact-section-form rmb-50">
                  <div className="section-title mb-20">
                    <h2>Get In Touch</h2>
                  </div>
                  {/* form start */}
                  <ServiceForm />
                  {/* form end */}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-image-number style-two bgs-cover overlay" 
                style={{backgroundImage: `url(/assets/images/contact/home-two.jpg)`}}>
                  <div className="contact-informations text-white">
                    <h3>{"Don't"} hesitate to contact us</h3>
                    <ul className="contact-info">
                      <li>
                        <i className="fas fa-phone-alt"></i>
                        <div className="content">
                          <span>Call Us</span>
                          <h5><a href="callto:+012-345-6789">+012-345-6789</a></h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <div className="content">
                          <span>Write to Us</span>
                          <h5><a href="mailto:info@example.com">info@example.com</a></h5>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-clock"></i>
                        <div className="content">
                          <span>Office hours</span>
                          <h5>Mon-Sat 9:00 - 7:00</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;