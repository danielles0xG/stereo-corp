import Slider from "react-slick";

const testimonial_data = {
  img: '/assets/images/testimonials/testimonial-two.jpg',
  subtitle: 'Our Testimonials',
  title: 'What our client’s say about us',
  testimonial_items: [
    {
      text: 'Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusant doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et',
      text_2: 'Consectetur adipisicing elit, sed do eiusmod  incididunt labore et dolore magna.',
      author: '/assets/images/testimonials/testi-author-3.jpg',
      authorName: 'Michael M. Yates',
      authorTitle: 'Senior Manager'
    },
    {
      text: 'Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusant doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et',
      text_2: 'Consectetur adipisicing elit, sed do eiusmod  incididunt labore et dolore magna.',
      author: '/assets/images/testimonials/testi-author-1.jpg',
      authorName: 'Rodney J. Sabo',
      authorTitle: 'Design Lead'
    },
    {
      text: 'Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusant doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et',
      text_2: 'Consectetur adipisicing elit, sed do eiusmod  incididunt labore et dolore magna.',
      author: '/assets/images/testimonials/testi-author-2.jpg',
      authorName: 'Rodney J. Sabo',
      authorTitle: 'Design Lead'
    },
  ]
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const { img, subtitle, title, testimonial_items } = testimonial_data;

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section-two py-120 rpy-100">
        <div className="container">
          <div className="testimonial-two-wrap">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="testimonial-left-image">
                  <img src={img} alt="Testimonial" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-two-content p-55">
                  <div className="section-title mb-20">
                    <span className="sub-title">{subtitle}</span>
                    <h2>{title}</h2>
                  </div>
                  <div className="testimonial-two-active">
                    <Slider {...settings}>
                      {testimonial_items.map((item, i) => (
                        <div key={i} className="testimonial-two-item">
                          <p>{item.text}</p>
                          <i>{item.text_2}</i>
                          <div className="author-description">
                            <img src={item.author} alt="Author" />
                            <div className="designation">
                              <h5>{item.authorName}</h5>
                              <span>{item.authorTitle}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
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

export default Testimonial;