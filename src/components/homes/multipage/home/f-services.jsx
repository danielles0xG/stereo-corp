import Link from 'next/link';
import { services } from '../../../../data';

const FeatureServices = () => {
  return (
    <>
      <section className="services-section pt-120 rpt-100 pb-90 rpb-70" id="services">
        <div className="container">
          <div className="row">
            {services.slice(0, 4).map((ser, i) => (
              <div key={i} className="col-xl-3 col-sm-6">
                <div className="service-box wow fadeInUp delay-0-2s">
                  <div className="service-normal">
                    <div className="icon">
                      <i className={`${ser.icon}`}></i>
                    </div>
                    <h6>{ser.title}</h6>
                    <p>{ser.subtitle}</p>
                    <Link href={`/service-details/${ser.id}`}>
                      <a className="btn-circle">
                        <i className="fas fa-long-arrow-alt-right"></i></a>
                    </Link>
                  </div>
                  <div className="service-hover bg-blue text-white">
                    <h3>{ser.hover_title}</h3>
                    <p>{ser.hover_text}</p>
                    <Link href={`/service-details/${ser.id}`}>
                      <a className="theme-btn">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureServices;