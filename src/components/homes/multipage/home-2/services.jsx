import Link from 'next/link';
import React from 'react';
import { services } from '../../../../data';

const services_content = {
  subtitle: 'It Support For Business',
  title: 'It Support For Business',
  btn_text: 'view all services'
}

const { subtitle, title, btn_text } = services_content;

const Services = () => {
  return (
    <React.Fragment>
      <section className="services-three bg-light-black text-white pt-115 rpt-95 pb-180 rpb-150" id="services">
        <div className="container">
          <div className="section-title-with-btn mb-55">
            <div className="section-title">
              <span className="sub-title">{subtitle}</span>
              <h2>{title}</h2>
            </div>
            <Link href="/services">
              <a className="theme-btn style-four mt-15">{btn_text}</a>
            </Link>
          </div>
          <div className="row">
            {services.slice(16, 20).map((ser, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="service-three-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className={ser.icon}></i>
                  </div>
                  <h4>
                    <Link href={`/service-details/${ser.id}`}>
                      <a>{ser.title}</a>
                    </Link>
                  </h4>
                  <p>{ser.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;