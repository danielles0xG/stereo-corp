import Link from 'next/link';
import React from 'react';
import { hero_data } from '../../../../data';

const { subtitle, title, desc, btn_text, btn_text_2, img } = hero_data.home_9;

const HeroArea = () => {
  return (
    <>
      <section className="hero-section-eight z-1 rel" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content-eight mr-10 rmr-0 py-160 rpy-100">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mb-30">{title}</h1>
                <p>{desc}</p>
                <div className="hero-btns mt-30">
                  <Link href={'/about'}>
                    <a className="theme-btn gradient-btn-one mt-10">{btn_text}</a>
                  </Link>
                  <Link href={'/about'}>
                    <a className="theme-btn gradient-btn-two mt-10">{btn_text_2}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="hero-eight-image">
                <img src={img} alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;