import Slider from "react-slick";



const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
}

const Testimonial = ({test_p_4}) => {
  const testimonial_contents = {
    subtitle: `${test_p_4 ? '':'07'} Testimonial`,
    title: 'Really take a look at What Say our clients',
    testimonial_items: [
      {
        desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet',
        img: '/assets/images/testimonials/testi-four-author-1.png',
        name: 'Al Mahmud',
        title: 'UI Designer'
      },
      {
        desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet',
        img: '/assets/images/testimonials/testi-four-author-2.png',
        name: 'Michelle Ley',
        title: 'UX Designer'
      },
      {
        desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet',
        img: '/assets/images/testimonials/testi-four-author-3.png',
        name: 'Naim Ahmed',
        title: 'Web Developer'
      },
      {
        desc: 'Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet',
        img: '/assets/images/testimonials/testi-four-author-2.png',
        name: 'Michelle Ley',
        title: 'Developer'
      },
    ]
  }
  
  const { subtitle, title, testimonial_items } = testimonial_contents;

  return (
    <>
      <section className="testimonial-four pt-150 rpt-100" id="testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-60">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-four-active slick-gap">
            <Slider {...settings}>
              {testimonial_items.map((item, i) => (
                <div key={i} className="testimonial-four-item">
                  <div className="testimonial-four-content">
                    <p>{item.desc}</p>
                  </div>
                  <div className="testimonial-four-author">
                    <img src={item.img} alt="Testimonial Author" />
                    <div className="testimonial-four-author-designation">
                      <h4>{item.name}</h4>
                      <span>{item.title}</span>
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

export default Testimonial;