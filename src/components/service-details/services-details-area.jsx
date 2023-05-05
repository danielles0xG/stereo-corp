import Link from 'next/link';
import ContactInfo from '../common/contact-info';

const service_contents = {
  widget_services: [
    { link: '/service-details', title: 'Data Center' },
    { link: '/service-details', title: 'IT Management', active: true },
    { link: '/service-details', title: 'Software Development' },
    { link: '/service-details', title: 'Web Development' },
    { link: '/service-details', title: 'Cloud Services' },
  ],
  normal_services: [
    {
      icon: 'flaticon flaticon-computer',
      title: 'Software Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
      icon: 'flaticon flaticon-analysis',
      title: 'Machine Learning',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
      icon: 'flaticon flaticon-design-process',
      title: 'Software Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
  ]
}

const { widget_services, normal_services } = service_contents;


export default function ServicesDetailsArea({ item }) {
  return (
    <>
      <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-sidebar rmb-55 wow fadeInLeft delay-0-2s">
                <div className="widget widget-services">
                  <ul>
                    {widget_services.map((w, i) => <li key={i} className={`${w.active ? 'active' : ''}`}>
                      <Link href={`${w.link}`}><a>{w.title}</a></Link>
                    </li>)}
                  </ul>
                </div>
                <div className="widget contact-info-widget contact-image-number style-two bgs-cover overlay"
                  style={{ backgroundImage: `url(/assets/images/contact/home-two.jpg)` }}>
                  {/* contact info start */}
                  <ContactInfo />
                  {/* contact info end */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-details-content wow fadeInRight delay-0-2s">
                <div className="image mb-40">
                  <img src="/assets/images/services/service-details.jpg" alt="Service Details" />
                </div>
                <h2>{item?.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate </p>
                <ul className="list-style-three pt-15 pb-30">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum dolor</li>
                </ul>
                <h3>Explore our audit & assurance services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate </p>
                <div className="row pt-25">
                  {normal_services.map((ser, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div className="service-normal style-two">
                        <div className="icon">
                          <i className={`${ser.icon}`}></i>
                        </div>
                        <h6>{ser.title}</h6>
                        <p>{ser.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
