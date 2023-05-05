import Link from 'next/link';
import React from 'react';

const about_contents = {
  subtitle: 'It Support For Business',
  title: 'Preparing for your IT business success',
  about_img: '/assets/images/about/about-five.jpg',
  feature_items: [
    {
      icon: 'flaticon flaticon-3d-printing', title: 'IT Management',
      subtitle: 'Lorem ipsum dolor sitmet consectetur adipiscing elit sed do eiusmod'
    },
    {
      icon: 'flaticon flaticon-repair', title: 'Machine Learning',
      subtitle: 'Lorem ipsum dolor sitmet consectetur adipiscing elit sed do eiusmod'
    },
  ],
  btn_text: 'learn about more',
}

const { subtitle, title, about_img, feature_items, btn_text } = about_contents;

const AboutSection = () => {
  return (
    <>
      <section className="about-section style-five py-120 rpy-100" id="about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-fiver-image rel rmb-60 wow fadeInLeft delay-0-2s">
                <img src={about_img} alt="About" />
                <img className="about-bg-circle" src="/assets/images/about/about-circle-dots.png" alt="About" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                {feature_items.map((item, i) => (
                  <div key={i} className="feature-item">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h5>{item.title}</h5>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                ))}
                <Link href={'/about'}>
                  <a className="theme-btn mt-10">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;