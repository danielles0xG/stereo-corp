import React, { useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { blogData } from '../../../../data';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const BlogSection = () => {
  const blogItems = blogData.filter(b => b.home_7);
  const sliderRef = useRef(null);
  const prevHandler = () => sliderRef.current.slickPrev();
  const nextHandler = () => sliderRef.current.slickNext();

  return (
    <>
      <section className="blog-four py-135 rpy-85" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-four-left rmb-55">
                <div className="section-title mt-15 mb-30">
                  <span className="sub-title">08 Blog & News</span>
                  <h2>Get Update for Data Science</h2>
                </div>
                <h3>68,000 client truted Restly</h3>
                <div className="blog-next-prev mt-45">
                  <button onClick={prevHandler} className="blog-prev">
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </button>
                  <button onClick={nextHandler} className="blog-next">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-carousel slick-gap">
                <Slider {...settings} ref={sliderRef}>
                  {blogItems.map((b, i) => (
                    <div key={i} className="blog-style-four">
                      <div className="image">
                        <img src={b.img} alt="Blog" />
                      </div>
                      <div className="blog-four-content">
                        <span className="date"><i className="far fa-calendar-alt"></i> {b.date}</span>
                        <h3>
                          <Link href={`/blog-details/${b.id}`}>
                            <a>{b.title}</a>
                          </Link>
                        </h3>
                        <Link href={`/blog-details/${b.id}`}>
                          <a className="read-more">Click here <i className="fas fa-long-arrow-alt-right"></i></a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;