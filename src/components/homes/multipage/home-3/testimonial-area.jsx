import Slider from "react-slick";
import Counter from "../../../counter";

const testimonial_content = {
  subtitle: 'It Support For Business',
  title: <>Preparing for your success <br />trusted source in IT services.</>,
  counter_data: [
    {
      count: 24,
      title: 'Awards Won',
      text: '+'
    },
    {
      count: 12,
      title: 'Years Experience',
      text: '+'
    },
    {
      count: 352,
      title: 'Happy Clients',
      text: '+'
    },
  ],
  testimonial_data: [
    {
      author: '/assets/images/testimonials/testi-author-1.jpg',
      name: 'Rodney J. Sabo',
      title: 'Design Lead',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
      author: '/assets/images/testimonials/testi-author-2.jpg',
      name: 'Rodney J. Sabo',
      title: 'Design Lead',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
    {
      author: '/assets/images/testimonials/testi-author-2.jpg',
      name: 'Rodney J. Sabo',
      title: 'Design Lead',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
    },
  ]
}


const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  rtl: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const { title, subtitle, counter_data, testimonial_data } = testimonial_content;

const TestimonialArea = () => {
  return (
    <>
      <section className="testimonial-section bg-lighter pt-115 rpt-95 pb-120 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="fact-counter-color text-center mb-30">
            <div className="row justify-content-center">
              {counter_data.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="success-item wow fadeInUp delay-0-2s">
                    <span className="count-text">
                      <Counter number={item.count} text={item.text} />
                    </span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-wrap slick-gap">
            <Slider {...settings}>
              {testimonial_data.map((item, i) => (
                <div key={i} className="testimonial-item">
                  <div className="author-description">
                    <img src={item.author} alt="Author" />
                    <div className="designation">
                      <h5>{item.name}</h5>
                      <span>{item.title}</span>
                    </div>
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section>
    </>
  );
};

export default TestimonialArea;