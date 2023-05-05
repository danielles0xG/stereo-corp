import { services } from '../../../data';

export default function ServicesItems() {
  const services_items = services.filter(ser => ser.home_7);
  return (
    <section className="services-seven rel text-center py-100 rpy-100"
      style={{ backgroundImage: `url(/assets/images/background/services.png)` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title mb-75">
              <span className="sub-title"> Our Services</span>
              <h2>Our proposition Data Science and Analytics Services</h2>
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
  )
}
