import Link from 'next/link';
import React from 'react';
import { hero_data } from '../../../../data';

const HeroSection = () => {
  const { bg_img, subtitle, title, text, btn_text, hero_img, data_items } = hero_data.home_7;
  return (
    <>
      <section className="hero-section-seven z-1 rel pt-200 pb-100" style={{ backgroundImage: `url(${bg_img})` }} id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-content-seven pt-100 pb-50">
                <span className="sub-title mb-5">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <p>{text}</p>
                <Link href={'/about'}>
                  <a className="theme-btn style-eight mt-30">{btn_text}
                    <i className="fas fa-long-arrow-alt-right"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-part">
          <img src={hero_img} alt="Hero" />
          {data_items.map((item, i) => (
            <div key={i} className={`data-item ${item.item_no}`}>
              <img src={item.icon} alt="Icon" />
              <div className="data-item-content">
                <h4>{item.title}</h4>
                {item.number && <span>{item.number}</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="hero-shape-one">
          <img src="/assets/images/shapes/hero-shape1.png" alt="Shape" />
        </div>
        <div className="hero-shape-two">
          <img src="/assets/images/shapes/hero-shape2.png" alt="Shape" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;