import Link from "next/link";

const testimonial_contents = {
  subtitle: 'Testimonial',
  title: 'Awesome Clients Feedback',
  author_images: ['/assets/images/testimonials/tai1.png', 'assets/images/testimonials/tai2.png',
    'assets/images/testimonials/tai3.png', 'assets/images/testimonials/tai4.png', 'assets/images/testimonials/tai5.png'],
  testi_items: [
    {
      desc: 'Aenean volutpat in massa at euismod. Phasellus quis viverra lacus, ac interdum dui. Quisque pretium metus id molestie aliquet. In nec neque in metus placerat commodo. Sed in bibendum lorem.',
      name: 'David Beckham',
      title: 'UI-Designer',
      img: '/assets/images/testimonials/testi-six-author-1.png'
    },
    {
      desc: 'Aenean volutpat in massa at euismod. Phasellus quis viverra lacus, ac interdum dui. Quisque pretium metus id molestie aliquet. In nec neque in metus placerat commodo. Sed in bibendum lorem.',
      name: 'David Beckham',
      title: 'UX-Designer',
      img: '/assets/images/testimonials/testi-six-author-2.png'
    },
  ]
}

const { subtitle, title, author_images, testi_items } = testimonial_contents;

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-six pt-120 rpt-100 pb-90 rpb-70" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="testimonial-six-content">
                <div className="section-title mb-30">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <div className="testi-author-images mb-45">
                  {author_images.map((img, i) => <img key={i} src={img} alt="Tesimonial" />)}
                  <span className="plus"><i className="fas fa-plus"></i></span>
                </div>
                <Link href="/testimonial">
                  <a className="theme-btn gradient-btn-one mb-30 rmb-55">View Testimonial</a>
                </Link>
              </div>
            </div>
            {testi_items.map((item, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="testimonial-six-item">
                  <p>{item.desc}</p>
                  <div className="author-description">
                    <div className="designation">
                      <h3>{item.name}</h3>
                      <span>{item.title}</span>
                    </div>
                    <img src={item.img} alt="Author" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;