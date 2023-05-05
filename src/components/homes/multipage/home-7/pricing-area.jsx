
const PricingArea = ({pricing_p_6}) => {
  const pricing_contents = {
    bg_img: '/assets/images/background/pricing-seven-bg.png',
    subtitle: `${pricing_p_6 ?'':'06'} Pricing Plan`,
    title: 'The prices are best! it’s Unbelievable',
    pricing_data: [
      {
        id: 'yearly',
        pricing_items: [
          {
            title: 'Basic',
            subtitle: 'Enjoy Basic ammonites',
            price: 15,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
          {
            title: 'Standard',
            subtitle: 'Enjoy Basic ammonites',
            price: 29,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
          {
            title: 'Premium',
            subtitle: 'Enjoy Basic ammonites',
            price: 99,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
        ]
      },
      // monthly
      {
        id: 'monthely',
        show: 'active show',
        pricing_items: [
          {
            title: 'Basic',
            subtitle: 'Enjoy Basic ammonites',
            price: 5,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
          {
            title: 'Standard',
            subtitle: 'Enjoy Basic ammonites',
            price: 15,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
          {
            title: 'Premium',
            subtitle: 'Enjoy Basic ammonites',
            price: 45,
            lists: ['Unlimited Reports 100+ Data', 'Connectors', 'Yearly Premium Support'],
            btn_text: 'Start Free trial'
          },
        ]
      },
    ]
  }
  
  const { bg_img, subtitle, title, pricing_data } = pricing_contents;
  return (
    <>
      <section className="pricing-seven rel z-1 pt-130 pb-120 rpt-80 rpb-70" id="pricing" style={{backgroundImage:`url(${bg_img})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-title text-center mb-30">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="nav pricing-tab mb-80">
              <a href="#yearly" data-bs-toggle="tab">Yearly</a>
              <a href="#monthely" data-bs-toggle="tab" className="active show">Monthly</a>
            </div>
          </div>
          <div className="tab-content">
            {pricing_data.map((item, i) => (
              <div key={item.id} className={`tab-pane fade ${item.show ? item.show : ''}`} id={item.id}>
                <div className="row justify-content-center">
                  {item.pricing_items.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="pricing-item-seven">
                        <div className="pricing-top">
                          <div className="price-top-left">
                            <h4 className="pricing-title">{item.title}</h4>
                            <span>{item.subtitle}</span>
                          </div>
                          <span className="price">{item.price}</span>
                        </div>
                        <ul className="list-style-three">
                          {item.lists.map((list, i) => <li key={i}>{list}</li>)}
                        </ul>
                        <a className="theme-btn style-six" href="#">{item.btn_text}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="circle-drop"></div>
      </section>
    </>
  );
};

export default PricingArea;