import Link from 'next/link';
import { services } from "../../../../data";

const services_content = {
  bg_img: '/assets/images/feature/feature-bg.jpg',
  subtitle: 'WHO WE ARE',
  title: 'We deal with the aspects of professional IT Services',
}

const { bg_img, subtitle, title } = services_content;

const Services = ({ s_padd }) => {
  return (
    <>
      <section className={`featured-section bgs-cover ${s_padd ? s_padd : 'pt-240 rpt-150'} pb-120 rpb-100`}
        style={{ background: `url(${bg_img})` }} id="featured">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title text-center mb-35">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {services.slice(4, 10).map((ser) => (
              <div key={ser.id} className="col-xl-4 col-md-6">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <i className={ser.icon}></i>
                  </div>
                  <div className="feature-content">
                    <h5>{ser.title}</h5>
                    <p>{ser.desc}</p>
                    <Link href={`/service-details/${ser.id}`}>
                      <a className="learn-more">Read More
                        <i className="fas fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="feature-btn text-center mt-20">
            <Link href={'/services'}>
              <a className="theme-btn">view all services</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;