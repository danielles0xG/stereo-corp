import Counter from "../../../counter";
import ServiceForm from "../../../forms/ser-contact";

const counter_data = [
  { number: 520, title: 'Projects Done' },
  { number: 24, title: 'Awards Won', text: '+' },
  { number: 12, title: 'Years Experience', text: '+' },
  { number: 352, title: 'Happy Clients', text: '+' },
]

const ServicesContact = () => {
  return (
    <>
      <section className="contact-section bg-lighter pb-60 rpb-40" id="contact">
        <div className="container">
          <div className="contact-section-inner p-50 br-5 bg-white">
            <div className="row">
              <div className="col-lg-7">
                <div className="contact-section-form rmb-50 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-20">
                    <h2>Get In Touch</h2>
                  </div>
                  {/* form start */}
                  <ServiceForm/>
                  {/* form end */}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-image-number bgs-cover"
                  style={{ backgroundImage: `url(/assets/images/contact/home-two.jpg)` }}>
                  <div className="contact-number">
                    <i className="fas fa-phone-alt"></i>
                    <a href="callto:+012-345-6789">+012-345-6789</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fact-counter-color text-center">
            <div className="row">
              {counter_data.map((item, i) => (
                <div key={i} className="col-lg-3 col-sm-6">
                  <div className="success-item">
                    <span className="count-text">
                      <Counter number={item.number} text={item.text} />
                    </span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContact;