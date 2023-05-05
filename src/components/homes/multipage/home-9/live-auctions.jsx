import React, { useRef } from 'react';
import Slider from 'react-slick';

import { liveAuctions } from '../../../../data';
import Time from '../../../../utility/time';

const auctions_contents = {
  subtitle:'Actions',
  title:'Live Auctions'
}

const {subtitle,title} = auctions_contents;

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  centerMode: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const LiveAuctions = () => {
  const sliderRef = useRef(null);
  const prevHandler = () => sliderRef.current.slickPrev();
  const nextHandler = () => sliderRef.current.slickNext();
  return (
    <>
      <section className="actions-section rel z-1 pt-115 rpt-95" id="action">
        <div className="container">
          <div className="row align-items-end mb-40">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-20">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="actions-arrow-btns text-lg-end mb-30">
                <button onClick={prevHandler} className="action-prev slick-arrow">
                  <i className="fas fa-arrow-left"></i></button>
                <button onClick={nextHandler} className="action-next slick-arrow">
                  <i className="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
          <div className="actions-active">
            <Slider {...settings} ref={sliderRef}>
              {liveAuctions.map((item, i) => (
                <div key={i} className="action-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={item.img} alt="Action" />
                    <ul className="count-down">
                      <li><span className="days">{Time(item.date).days}</span>days</li>
                      <li><span className="hours">{Time(item.date).hours}</span>{"Hr's"}</li>
                      <li><span className="minutes">{Time(item.date).minutes}</span>{"Min's"}</li>
                      <li><span className="seconds">{Time(item.date).seconds}</span>Sec</li>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="bid-dots">
                      <div className="bid">Bid : <b>{item.eth}ETH</b></div>
                      <div className="dots"><span></span><span></span><span></span></div>
                    </div>
                    <h4>{item.title}</h4>
                    <div className="author-wish">
                      <div className="author">
                        <img src={item.creatorImg} alt="Author" />
                        <div className="description">
                          <h6>{item.creatorName}</h6>
                          <span>Creator</span>
                        </div>
                      </div>
                      <a href="#" className="wish"><i className="far fa-heart"></i><span>2k</span></a>
                    </div>
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

export default LiveAuctions;