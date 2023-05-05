import React, { useState } from 'react';
import Slider from 'react-slick';

const testimonial_contents = {
  subtitle: 'Testimonials',
  title: <>2356+ client say <br />about us</>,
  testimonial_items: [
    {
      desc: 'Proin imperdiet commodo diam ac tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tristique, augue et blandit consequat,',
      name: 'Michael M. Yates',
      title: 'Senior Manager'
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur perspiciatis, animi facilis eius, aut atque porro sint quos quas quibusdam fugiat laudantium.',
      name: 'Michele Morrone',
      title: 'Design Lead'
    },
    {
      desc: 'Asperiores pariatur perspiciatis, animi facilis eius, aut atque porro sint quos quas quibusdam fugiat laudantium. augue et blandit consequat,',
      name: 'Rodney J. Sabo',
      title: 'Design Lead'
    },
  ],
  testimonial_thumbs: [
    {
      img: '/assets/images/testimonials/testi-author-1.jpg',
    },
    {
      img: '/assets/images/testimonials/testi-author-4.jpg',
    },
    {
      img: '/assets/images/testimonials/testi-author-2.jpg',
    }
  ]
}

const { subtitle, title, testimonial_items, testimonial_thumbs } = testimonial_contents;

const settings = {
  dots: false,
  infinite: false,
  autoplay: false,
  fade: true,
  autoplaySpeed: 3000,
  arrows: false,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settingTwo = {
  dots: false,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
};

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <section className="testimonial-section-three py-120 rpy-100" id="testimonial">
        <div className="container">
          <div className="testimonial-three-wrap bg-lighter">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="testimonial-three-content text-center p-55 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title">{subtitle}</span>
                    <h2>{title}</h2>
                  </div>
                  <div className="testimonial-three-active">
                    <Slider {...settings} asNavFor={nav2} ref={(slider) => setNav1(slider)} >
                      {testimonial_items.map((item, i) => (
                        <div key={i} className="testimonial-three-item">
                          <p>{item.desc}</p>
                          <div className="designation">
                            <h5>{item.name}</h5>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="testimonial-three-thumbs">
                    <Slider {...settingTwo} asNavFor={nav1} ref={(slider) => setNav2(slider)}>
                      {testimonial_thumbs.map((img, i) => (
                        <img key={i} src={img.img} alt="Authro" />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-left-image wow fadeInRight delay-0-2s">
                  <img className="w-100" src="/assets/images/testimonials/testimonial-three.jpg" alt="Testimonial" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;