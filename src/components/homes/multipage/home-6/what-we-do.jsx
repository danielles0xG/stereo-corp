import Link from 'next/link';
import { services } from '../../../../data';

const WhatWeDo = () => {
  const servicesItems = services.filter(ser => ser.home_6);
  return (
    <>
      <section className="what-we-do-two text-center pt-115 rpt-95 pb-90 rpb-70" id="services">
        <div className="container">
          <div className="section-title mb-55">
            <span className="sub-title">What We Do</span>
            <h2>Highlights that Help you <br />construct better</h2>
          </div>
          <div className="row justify-content-center">
            {servicesItems.map((ser, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className={`feature-item-two ${ser.color}`}>
                  <div className="icon">
                    <i className={ser.icon}></i>
                  </div>
                  <div className="feature-line">
                    <span className="animate-bar"></span>
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
    </>
  );
};

export default WhatWeDo;