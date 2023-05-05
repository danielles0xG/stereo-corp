import Slider from "react-slick";

const testimonial_contents = {
  bg_img: '/assets/images/testimonials/testimonial-five-bg.jpg',
  testimonial_items: [
    {
      desc: 'Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum, magna ante congue arcu, nec sodales purus ante sed sapien. Cras eleifend ex vitae odio ultrices volutpat. Quisque sodales aliquam accumsan.',
      author: '/assets/images/testimonials/testi-five-author.jpg',
      name: 'Naim Ahmed',
      title: 'Web Developer',
    },
    {
      desc: 'Magna ante congue arcu, nec sodales purus ante sed sapien. Cras eleifend ex vitae odio ultrices volutpat. Quisque sodales aliquam accumsan. Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum,',
      author: '/assets/images/testimonials/testi-five-author.jpg',
      name: 'John Smith',
      title: 'UI UX Designer',
    },
  ]
}

const { bg_img, testimonial_items } = testimonial_contents;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="next slick-arrow">
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="prev slick-arrow">
      <i className="fas fa-chevron-left"></i>
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

export default function TestimonialArea() {
  return (
    <>
      <section className="testimonial-five pt-120 rpt-100 mb-55"
        style={{ backgroundImage: `url(${bg_img})` }} id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="testimonial-five-wrap p-70 bg-white wow fadeInRight delay-0-2s">
                <Slider {...settings}>
                  {testimonial_items.map((item, i) => (
                    <div key={i} className="testimonial-five-item">
                      <p>{item.desc}</p>
                      <div className="author-description">
                        <img src={item.author} alt="Author" />
                        <div className="name-designation">
                          <h3>{item.name}</h3>
                          <span>{item.title}</span>
                        </div>
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
  )
}
