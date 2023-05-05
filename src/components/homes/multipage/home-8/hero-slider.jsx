import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import { hero_data } from '../../../../data';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="next slick-arrow">
      <i className="fas fa-angle-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="prev slick-arrow">
      <i className="fas fa-angle-left"></i>
    </button>
  );
}

const settings = {
  arrows: true,
  autoplaySpeed: 1000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
}

const HeroSlider = () => {
  return (
    <>
      <section className="main-slider bg-black text-white" id="home">
        <div className="main-slider-wrap">
          <Slider {...settings}>
            {hero_data.home_8.map((item, i) => (
              <div key={i} className="main-slider-item">
                <div className="image">
                  <img src={item.bg_img} alt="Slider" />
                </div>
                <div className="slider-caption">
                  <div className="container">
                    <div className="main-slider-content">
                      <span className="sub-title">{item.subtitle}</span>
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className="slider-btns">
                        <Link href={'/about'}>
                          <a className="theme-btn style-ten">{item.btn_text}
                            <i className="far fa-paper-plane"></i>
                          </a>
                        </Link>
                        <Link href={'/about'}>
                          <a className="theme-btn style-eleven">{item.btn_text_2}
                            <i className="far fa-paper-plane"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;