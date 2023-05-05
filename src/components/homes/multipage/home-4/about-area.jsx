import Link from 'next/link';
import React from 'react';

const about_content = {
  subtitle: 'It Support For Business',
  title: 'Preparing for your success trusted source in IT services for global providing',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
  desc_2: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  btn_text: 'Learn About More',
  about_img: '/assets/images/about/about-four.jpg',
  about_img_2: '/assets/images/about/about-four-2.jpg',
}

const { subtitle, title, desc, desc_2, btn_text, about_img, about_img_2 } = about_content;

const AboutArea = ({ padd = true }) => {
  return (
    <>
      <section className="about-section style-four py-120 rpy-100" id="about">
        <div className={`container ${padd ? 'pb-120' : ''} rpb-95`}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content pr-90 rpr-0 rmb-55">
                <div className="section-title mb-35">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{desc}</p>
                <i>{desc_2}</i>
                <Link href="/about">
                  <a className="theme-btn mt-25">{btn_text}</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four-images text-center">
                <div className="row">
                  <div className="col-6">
                    <img src={about_img} alt="About" />
                    <img className="about-bg-circle d-block mx-auto"
                      src="assets/images/about/about-circle-dots.png" alt="About" />
                  </div>
                  <div className="col-6">
                    <img className="bg-circle-dtos mb-35 d-block mx-auto"
                      src="assets/images/logos/logo-circle.png" alt="Logo" />
                    <img src={about_img_2} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;