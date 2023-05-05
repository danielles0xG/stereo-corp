const pricing_contents = {
  subtitle: 'Pricing Plan',
  title: <>We give a great assessing plan <br />to the application</>,
  pricing_data: [
    {
      pricing_title: 'Basic Plan',
      price: 19.23,
      save_up: 'Save Up to 60%',
      text: <>For people and little <br />activities</>
    },
    {
      pricing_title: 'Basic Plan',
      price: 29.23,
      save_up: 'Save Up to 60%',
      text: <>For people and little <br />activities</>,
      order: 'order-lg-3'
    },
    {
      pricing_title: 'Basic Plan',
      price: 25.23,
      save_up: 'Save Up to 60%',
      text: <>For people and little <br />activities</>,
      popular_plan: 'popular-plan rmt-0'
    },
  ]
}

const { subtitle, title, pricing_data } = pricing_contents;

const PricingSection = () => {
  return (
    <>
      <section className="pricing-section-six text-center pt-115 rpt-95 pb-90 rpb-70" id="pricing">
        <div className="container">
          <div className="section-title mb-100 rmb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {pricing_data.map((p, i) => (
              <div key={i} className={`col-lg-4 col-sm-6 ${p.order ? p.order : ''}`}>
                <div className={`pricing-item-six ${p.popular_plan ? p.popular_plan : ''}`}>
                  <h5 className="pricing-title">{p.pricing_title}</h5>
                  <span className="price">{p.price}</span>
                  <span className="save-up">{p.save_up}</span>
                  <p>{p.text}</p>
                  <a className="theme-btn" href="#">Choose Now <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;