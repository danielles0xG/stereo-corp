import Link from "next/link";
import Image from "next/image";

import { SocialLinksOne } from "../social-links";
import logo from '../../../public/assets/images/logos/logo.png';

const footer_content = {
  bg_img: '/assets/images/footer/footer-bg-map.png',
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  contact_info: [
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      link: 'callto:+012-345-6789',
      text: '+012-345-6789'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Write to Us',
      link: 'mailto:info@example.com',
      text: 'info@example.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Office hours',
      text: 'Mon-Sat 9:00 - 7:00'
    },
  ],
  footer_style_two: [
    {
      col: '2',
      title: 'Page Links',
      lists: ['Home', 'services', 'portfolio', 'blog', 'page']
    },
    {
      col: '3',
      title: 'Explore',
      lists: ['Our Scientists', 'Our Services', 'Testimonials', 'SaaS Solutions', 'Case Studies']
    },
  ]
}

const { bg_img,text, contact_info, footer_style_two } = footer_content;

const FooterTwo = () => {
  return (
    <>
      <footer className="main-footer footer-two bgs-cover text-white"
        style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="footer-top pt-75">
            <ul className="contact-info">
              {contact_info.map((info, i) => (
                <li key={i}>
                  <i className={info.icon}></i>
                  <div className="content">
                    <span>{info.title}</span>
                    {info.link && <h5><a href={`${info.link}`}>{info.text}</a></h5>}
                    {!info.link && <h5>{info.text}</h5>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-widget-area pt-85 pb-20">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="footer-logo mb-35">
                    <Link href={'/'}>
                      <a>
                        <Image src={logo} alt="Logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                    {text}
                  </div>
                  <ul className="contact-info mt-20">
                    <li><i className="fas fa-map-marker-alt"></i><span>1791 Yorkshire Circle <br />Kitty Hawk, NC 279499</span></li>
                  </ul>
                </div>
              </div>
              {footer_style_two.map((widget, i) => (
                <div key={i} className={`col-lg-${widget.col} col-6`}>
                  <div className="footer-widget link-widget ml-20 rml-0">
                    <h4 className="footer-title">{widget.title}</h4>
                    <ul className="list-style-two">
                      {widget.lists.map((list, i) => (
                        <li key={i}><a href="#">{list}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing</p>
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="email" name="EMAIL" placeholder="Your Email Address" required />
                    <button type="submit"><i className="fa fa-location-arrow"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-inner pt-15">
              <div className="social-style-one mb-10">
                <SocialLinksOne />
              </div>
              <p>copyright {new Date().getFullYear()} Restly All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;