import { useState } from "react";

const PricingSection = () => {
  const [isChecked, setIsChecked] = useState('monthly');

  const pricing_data = {
    bg_img: '/assets/images/background/price-five-bg.png',
    subtitle: 'Pricing Packages',
    title: 'Choose Best Plan',
    text: 'Epsum dolor sit amet consectetur adipisicing seddo eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam',
    text_2: 'Amet consectetur adipisicing seddo eiusmod tempor incididunt labore dolore',
    pricing_content: [
      {
        type: 'popular',
        title: 'BUSINESS',
        icon: 'flaticon flaticon-web-traffic-1',
        price: isChecked === 'monthly' ? 48.99 : 75.99,
        time: 'Per Month',
        lists: ['Free 15 GB Linux Hosting', 'Unlimited Download', 'Free One Year Support', 'Limited install'],
        btn_text: 'Choose Plan'
      },
      {
        type: 'STANDARD',
        title: 'STANDARD',
        icon: 'flaticon flaticon-design-process',
        price: isChecked === 'monthly' ? 29.99 : 59.99,
        time: 'Per Month',
        lists: ['Free 15 GB Linux Hosting', 'Unlimited Download', 'Free One Year Support'],
        btn_text: 'Choose Plan'
      }
    ]
  }
  const { bg_img, subtitle, title, text, text_2, pricing_content } = pricing_data;

  const handleChecked = (name) => {
    setIsChecked(name)
  }

  return (
    <>
      <section className="pricing-section-five bgs-cover bg-blue pt-120 rpt-95 pb-90 rpb-70"
        style={{ backgroundImage: `url(${bg_img})` }} id="pricing">
        <div className="container rel">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-8">
              <div className="price-five-content text-white rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
                <div className="monthly-yearly mt-15 mb-30">
                  <div className="custom-control custom-radio mr-15">
                    <input onChange={() => handleChecked('monthly')} type="radio" id="monthly" name="month-year" className="custom-control-input" checked={isChecked === 'monthly'} />
                    <label className="custom-control-label" htmlFor="monthly">monthly</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input onChange={() => handleChecked('yearly')} checked={isChecked === 'yearly'} type="radio" id="yearly" name="month-year" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="yearly">yearly</label>
                  </div>
                </div>
                <p>{text_2}</p>
                <a className="theme-btn style-two mt-10" href="#">learn more</a>
              </div>
            </div>
            {pricing_content.map((item, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="pricing-item-three wow fadeInUp delay-0-4s">
                  <span className="pricing-type">{item.type}</span>
                  <div className="pricing-header">
                    <h5 className="pricing-title">{item.title}</h5>
                    <div className="icon">
                      <i className="flaticon flaticon-web-traffic-1"></i>
                    </div>
                    <span className="price">{item.price}</span>
                    <h5 className="pricing-time">{item.time}</h5>
                  </div>
                  <ul>
                    {item.lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <a className="theme-btn" href="#">{item.btn_text}</a>
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