const pricing_content = {
  subtitle: 'Pricing Packages',
  title: 'Choose Your Best Plan',
  pricing_data: [
    {
      title: 'Standard',
      price: 29.99,
      time: 'Per Month',
      icon: 'flaticon flaticon-computer',
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support'],
      btn_text: 'Choose Plan'
    },
    {
      title: 'BUSINESS',
      price: 59.99,
      time: 'Per Month',
      icon: "flaticon flaticon-web-traffic-1",
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support', 'Free 15 GB Linux Hosting'],
      btn_text: 'Choose Plan'
    },
    {
      title: 'PREMIUM',
      price: 79.99,
      time: 'Per Month',
      icon: "flaticon flaticon-design-process",
      lists: ['Limited install', 'Unlimited Download', 'Free One Year Support',
        'Free 15 GB Linux Hosting', 'IT Consultations'],
      btn_text: 'Choose Plan'
    },
  ]
}

const { subtitle, title, pricing_data } = pricing_content;

const PricingArea = ({pricing_p_3}) => {
  return (
    <>
      <section className={`${pricing_p_3 ? 'pricing-section-two text-center pt-115 rpt-95 pb-200 rpb-65' 
      :'pricing-section-three text-center pt-115 rpt-95 pb-95 rpb-65'} `} id="pricing">
        <div className="container rel">
          <div className="section-title mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {pricing_data.map((pricing, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="pricing-item-three">
                  <span className="pricing-type">popular</span>
                  <div className="pricing-header">
                    <h5 className="pricing-title">{pricing.title}</h5>
                    <div className="icon">
                      <i className="flaticon flaticon-computer"></i>
                    </div>
                    <span className="price">{pricing.price}</span>
                    <h5 className="pricing-time">{pricing.time}</h5>
                  </div>
                  <ul>
                    {pricing.lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <a className="theme-btn btn-circle" href="#">{pricing.btn_text}</a>
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