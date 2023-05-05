import { services } from '../../../../data';

const services_contents = {
  bg_img:'/assets/images/background/services.png',
  subtitle:'03 Our Services',
  title:'Our proposition Data Science and Analytics Services',
}
const {bg_img,subtitle,title} = services_contents;

export default function Services() {
  const services_items = services.filter(ser => ser.home_7);
  return (
    <>
      <section className="services-seven rel text-center py-150 rpy-100"
        style={{backgroundImage:`url(${bg_img})`}} id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-75">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {services_items.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="service-item-seven">
                  <img src={item.icon} alt="Service" />
                  <h3>{item.title}</h3>
                  <a href="#" className="read-more">Click here <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            ))}
          </div>
          <div className="more-about-services mt-50">
            <span>Want to learn More about Our Services?  <a href="#" className="read-more">Click here <i className="fas fa-long-arrow-alt-right"></i></a></span>
          </div>
        </div>
        <div className="circle-drop-one"></div>
        <div className="circle-drop-two"></div>
        <div className="service-triangle">
          <img src="/assets/images/shapes/service-triangle.png" alt="Triangle" />
        </div>
        <div className="service-line">
          <img src="/assets/images/shapes/service-line.png" alt="Triangle" />
        </div>
      </section>
    </>
  )
}
