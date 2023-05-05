import Link from 'next/link';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { galleryData } from '../../../../data';


const GallerySection = () => {
  const galleryItems = galleryData.filter(i => i.home_3)
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const prevHandler = () => sliderRef.current.slickPrev();
  const nextHandler = () => sliderRef.current.slickNext();

  return (
    <>
      <section className="gallery-section-three overlay pt-120 rpt-95 pb-105 rpb-85" id="gallery">
        <div className="container">
          <div className="section-title gellery-section-title mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title">Our Gallery</span>
            <h2>Explore our recent projects</h2>
            <div className="gallery-carousel-arrow mt-25">
              <button onClick={prevHandler} type="button"
                className="gallery-prev slick-arrow">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button onClick={nextHandler} type="button"
                className="gallery-next slick-arrow" >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="gallery-three-wrap">
            <Slider ref={sliderRef} {...settings}>
              {galleryItems.map((item, i) => (
                <div key={i} className="gallery-item style-three">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <h5>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;