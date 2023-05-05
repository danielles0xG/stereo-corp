import Image from 'next/image';
import Link from 'next/link';

import { SocialLinksOne } from '../social-links';
import logo from '../../../public/assets/images/logos/logo-footer-three.png';

const footer_contents = {
  bg_img: '/assets/images/background/footer-bg.png',
  text: 'Sed perspiciatis unde omnis natus error voluptatem accusan',
  footer_widgets: [
    {
      title: 'Links',
      lists: ['Home', 'Pricing', 'About us', 'Service']
    },
    {
      col: 'col-md-3',
      title: 'Our Services',
      lists: ['Technology', 'Healthcare', 'Data Science', 'Applied math']
    },
  ]
}

const { bg_img, footer_widgets } = footer_contents;

const FooterSeven = () => {
  return (
    <>
      <footer className="main-footer footer-six bgs-cover pt-110"
        style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link href="/">
                    <a>
                      <Image src={logo} alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="text">
                  Sed perspiciatis unde omnis natus error voluptatem accusan
                </div>
                <div className="social-style-two mt-30">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => (
              <div key={i} className={`col-md-2 col-sm-6 ${w.col ? w.col : ''}`}>
                <div className="footer-widget link-widget">
                  <h4 className="footer-title">{w.title}</h4>
                  <ul className="list-style-two">
                    {w.lists.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-md-4 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h4 className="footer-title">Address</h4>
                <p>Pellentesque aliquam sem in tellus fringilla interdum.</p>
                <form action="#" method="post">
                  <input type="email" name="EMAIL" placeholder="Your Email Address" required="" />
                  <button value="submit"><i className="fa fa-location-arrow"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-65 mb-35">
          <div className="container">
            <div className="copyright-inner">
              <p>Copyright@ {new Date().getFullYear()} All Rights Reserved.</p>
              <ul className="footer-menu">
                <li><a href="#">Privacy & Terms.</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSeven;