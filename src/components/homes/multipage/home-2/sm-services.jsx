import React from 'react';
import Link from 'next/link';
import { services } from '../../../../data';

const SmServices = () => {
  return (
    <>
      <section className="services-section-two bg-blue pb-60">
        <div className="container">
          <div className="service-two-wrap">
            <div className="row justify-content-center">
              {services.slice(10, 16).map((item, i) => (
                <div key={i} className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <div className="service-style-two wow fadeInUp delay-0-7s">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <h6>
                      <Link href={`/service-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-title-with-btn">
            <div className="section-title text-white mb-10">
              <h2>Preparing for your success <br />trusted source in IT services.</h2>
            </div>
            <Link href="/services">
              <a className="theme-btn style-two mb-10">View All Services</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmServices;