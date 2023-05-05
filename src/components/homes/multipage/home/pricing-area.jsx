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

const PricingArea = ({s_page,s_page_3,pricing_p}) => {
  return (
    <>
      <section className={`pricing-section pt-115 rpt-95 ${s_page ? '':pricing_p ? 'pb-200 rpb-70':'pb-90 rpb-70'} 
      ${s_page_3 ? 'pb-80' : ''}`} id="pricing">
        <div className="container">
          <div className="section-title text-center mb-35">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row justify-content-center">
            {pricing_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className={`pricing-item ${s_page || s_page_3 ?'style-two':''}`}>
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