const pricing_content = {
  subtitle: 'Pricing Packages',
  title: 'Choose Your Best Plan',
  pricing_data: [
    {
      title: 'Standard',
      price: 29.99,
      time: 'Per Month',
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support', 'Free 15 GB Linux Hosting'],
      btn_text: 'Choose Plan'
    },
    {
      title: 'BUSINESS',
      price: 59.99,
      time: 'Per Month',
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support', 'Free 15 GB Linux Hosting'],
      btn_text: 'Choose Plan'
    },
    {
      title: 'PREMIUM',
      price: 79.99,
      time: 'Per Month',
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support', 'Free 15 GB Linux Hosting'],
      btn_text: 'Choose Plan'
    },
  ]
}

const { subtitle, title, pricing_data } = pricing_content;

const PricingArea = ({pricing_p_2}) => {
  return (
    <>
      <section className={`pricing-section-two pt-115 rpt-95 ${pricing_p_2 ? 'pb-200 rpb-50':'pb-70 rpb-50'}`}>
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {pricing_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="pricing-item style-two wow fadeInUp delay-0-2s">
                  <div className="pricing-header">
                    <h5 className="pricing-title">{item.title}</h5>
                    <span className="price">{item.price}</span>
                    <h5 className="pricing-time">{item.time}</h5>
                  </div>
                  <ul>
                    {item.lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <a className="theme-btn btn-circle" href="#">{item.btn_text}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;