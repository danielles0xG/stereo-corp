const about_contents = {
  subtitle: 'Management',
  title: "The just investigation apparatus you'll at any point need",
  services_items: [
    {
      icon: 'flaticon flaticon-3d-printing',
      title: 'Fully Responsive',
      text: 'Integer molestie magna in augue euismod, sit amet pulvinar arcu dapibus.'
    },
    {
      icon: 'flaticon flaticon-bars',
      title: 'Reporting & Analysis',
      text: 'Integer molestie magna in augue euismod, sit amet pulvinar arcu dapibus.'
    },
  ],
  img: '/assets/images/about/about-six.png',
  img_2: '/assets/images/about/about-graph.png'
}

const { subtitle, title, services_items, img, img_2 } = about_contents;

export default function AboutSection({padd}) {
  return (
    <>
      <section className={`about-section-six ${padd ? padd : 'pb-120 rpb-100'}`} id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-six-content mr-65 rmr-0">
                <div className="section-title mb-35">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                {services_items.map((ser, i) => (
                  <div key={i} className="service-item-six">
                    <div className="icon">
                      <i className={ser.icon}></i>
                    </div>
                    <div className="service-content">
                      <h5>{ser.title}</h5>
                      <p>{ser.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-shape-six ml-50 rml-0 pr-3">
                <img src={img} alt="About" />
                <img className="about-graph" src={img_2} alt="Graph" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
