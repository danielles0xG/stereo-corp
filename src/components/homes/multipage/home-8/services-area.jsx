import Slider from "react-slick";
import Link from 'next/link';

import { services } from "../../../../data";

const services_contents = {
  subtitle: 'Our Services',
  title: 'We Provide All Kind Advanced Security Services',
}

const { subtitle, title } = services_contents;

const servicesItems = services.filter(s => s.home_8_s);

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const ServicesArea = () => {
  return (
    <>
      <section className="services-eight rel z-1 pt-115 rpt-95 pb-120 rpb-100" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="service-slider-wrap slick-gap">
            <Slider {...settings}>
              {
                servicesItems.map((s, i) => (
                  <div key={i} className="service-item-eight wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <img src={s.icon} alt="Icon" />
                    </div>
                    <h3>
                      <Link href={`/service-details/${s.id}`}>
                        <a>{s.title}</a>
                      </Link>
                    </h3>
                    <p>{s.desc}</p>
                    <Link href={`/service-details/${s.id}`}>
                      <a className="learn-more">Read More <i className="fas fa-angle-double-right"></i></a>
                    </Link>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;