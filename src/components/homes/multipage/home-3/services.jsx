import Link from 'next/link';
import { services } from '../../../../data';

const services_content = {
  subtitle: 'It Support For Business',
  title: 'Preparing for your success trusted source in IT services.',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
}

const { subtitle, title, desc } = services_content;

const Services = ({ s_page_4 }) => {
  return (
    <>
      <section className={`services-four pt-115 rpt-95 ${s_page_4 ? 'pb-100' : 'pb-210'} rpb-150`} id="services">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-40">
            <div className="col-lg-6">
              <div className="section-title mb-35">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <p>{desc}</p>
            </div>
          </div>
          <div className="row">
            {services.slice(23, 26).map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="service-item-four wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={item.img} alt="Service" />
                  </div>
                  <div className="service-four-content">
                    <div className="service-title-area">
                      <span className="category">{item.category}</span>
                      <h3>
                        <Link href={`/service-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                    </div>
                    <i className={item.icon}></i>
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

export default Services;