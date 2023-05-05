import Link from 'next/link';
import { services } from '../../../../data';

const about_contents = {
  img: '/assets/images/about/about-eight1.jpg',
  img_2: '/assets/images/about/about-eight2.jpg',
  left_content_bg: '/assets/images/about/about-eight-content-bg.jpg',
  left_content_title: '1,400+ Trusted Clients',
  left_content_subtitle: 'Pulvinar ornare in a sem. Quisque vulputate convallis nulla. In efficitur',
  right_subtitle: 'Know About Company',
  right_title: 'Security is our number One priority',
  desc: 'Pulvinar ornare in a sem. Quisque vulputate convallis nulla. In efficitur scelerisque odio sed tincidunt. Integer maximus eu tellus eleifend feugiat. Aliquam hendrerit pulvinar augue vitae rutrum. In sit amet neque odio',
  lists: ['Essential Features of Cybersecurity', 'Coverage of your biggest external threats.', 'Threat detection prevention and response'],
  btn_text: 'Discover More'
}

const { img, img_2, left_content_bg, left_content_title, left_content_subtitle, right_title, right_subtitle, desc, lists, btn_text } = about_contents;

const FeatureAbout = () => {
  const servicesItems = services.filter(ser => ser.home_8_feature_s);
  return (
    <>
      <div className="feature-about-bg" id="about">

        {/* <!-- Feature Section Start --> */}
        <section className="feature-section-three pt-120 rpt-100">
          <div className="container">
            <div className="row justify-content-center">
              {servicesItems.map((ser) => (
                <div key={ser.id} className="col-xl-4 col-md-6">
                  <div className="feature-item-three wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <img src={ser.icon} alt="Icon" />
                    </div>
                    <div className="feature-content">
                      <h3>
                        <Link href={`/service-details/${ser.id}`}>
                          <a>{ser.title}</a>
                        </Link>
                      </h3>
                      <p>{ser.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Feature Section End --> */}

        {/* <!-- About Section Start --> */}
        <section className="about-section-eight pt-70 rpt-35 pb-120 rpb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-eight-images rmb-55 wow fadeInLeft delay-0-2s">
                  <img src={img} alt="About" />
                  <img src={img_2} alt="About" />
                  <div className="left-content text-white p-40" style={{ backgroundImage: `url(${left_content_bg})` }}>
                    <h5>{left_content_title}</h5>
                    <p>{left_content_subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-eight-content wow fadeInRight delay-0-2s">
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="section-title mb-30">
                        <span className="sub-title">{right_subtitle}</span>
                        <h2>{right_title}</h2>
                      </div>
                    </div>
                  </div>
                  <p>{desc}</p>
                  <ul className="list-style-one mt-35 pb-45">
                    {lists.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                  <Link href={'/about'}>
                    <a className="theme-btn style-ten hover-two">{btn_text}
                      <i className="far fa-paper-plane"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Section End --> */}

      </div>
    </>
  );
};

export default FeatureAbout;