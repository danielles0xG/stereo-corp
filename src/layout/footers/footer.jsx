import Link from 'next/link';
import Image from 'next/image';

import { socialLinks } from '../../data';
import logo from '../../../public/assets/images/logos/logo.png';

const footer_content = {
  bg_img: '/assets/images/footer/footer-bg-dots.png',
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  widget_lists:['Home','services','portfolio','blog','page']
}

const { bg_img,text,widget_lists } = footer_content;

const Footer = () => {
  return (
    <>
      <footer className="main-footer footer-one text-white">
        <div className="footer-widget-area bgs-cover pt-100 pb-50"
          style={{ backgroundImage: `url(${bg_img})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget about-widget">
                  <div className="footer-logo mb-35">
                    <Link href="/">
                      <a>
                        <Image src={logo} alt="logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                   {text}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer-widget link-widget ml-20 rml-0">
                  <h4 className="footer-title">Page Links</h4>
                  <ul className="list-style-two">
                    {widget_lists.map((l,i) => <li key={i}><a href="#">{l}</a></li>)}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget contact-widget mr-30 rmr-0">
                  <h4 className="footer-title">Contacts</h4>
                  <ul className="list-style-two">
                    <li><i className="fas fa-map-marker-alt"></i> 1791 Yorkshire Circle Kitty Hawk, NC 27949</li>
                    <li><i className="fas fa-clock"></i> Mon-Sat 9:00 - 7:00</li>
                    <li><i className="fas fa-phone-alt"></i> <a href="callto:+012-345-6789">+012-345-6789</a></li>
                    <li><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
                  </ul>
                </div>
              </div>
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
        <div className="copyright-area bg-blue">
          <div className="container">
            <div className="copyright-inner pt-15">
              <div className="social-style-one mb-10">
                {socialLinks.style_one.map((social, i) => (
                  <a key={i} href={social.link} target={social.target ? social.target : ''}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <p>copyright {new Date().getFullYear()} Restly All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;