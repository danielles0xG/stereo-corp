import Link from 'next/link';
import React from 'react'
import { services } from '../../../../data';

const services_contents = {
  subtitle: 'WHO WE ARE',
  title: <>We deal with the aspects of <br />professional IT pros</>
}

const { subtitle, title } = services_contents;

export default function WhatWeAre() {
  const servicesItems = services.filter(s => s.home_5);
  return (
    <>
      <section className="who-we-are overlay text-white text-center pt-115 rpt-95 pb-90 rpb-70" id="services">
        <div className="container">
          <div className="section-title mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row">
            {servicesItems.map((ser, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="service-item-five wow fadeInUp delay-0-2s">
                  <img src={ser.img} alt="Service" />
                  <div className="service-content-five">
                    <div className="icon">
                      <i className={ser.icon}></i>
                    </div>
                    <h3>{ser.title}</h3>
                    <p>{ser.desc}</p>
                    <Link href={`/service-details/${ser.id}`}>
                      <a className="theme-btn">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
