import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/assets/images/logos/logo-footer-two.png';
import { SocialLinksOne } from '../social-links';
import FooterContactStyle from './footer-contact-style';

const footer_widgets = [
  {
    title: 'Product',
    lists: ['Landing page', 'Features', 'Documentation', 'Referral Program', 'Pricing']
  },
  {
    title: 'Services',
    lists: ['Documentation', 'License', 'Changelog', 'Developers']
  },
]

const FooterSix = () => {
  return (
    <>
      <footer className="main-footer footer-five bg-lighter pt-110">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-35">
                  <Link href="/">
                    <a>
                      <Image src={Logo} alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="text">
                  Build a modern and creative website with crealand
                </div>
                <div className="social-style-two mt-30">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="footer-widget link-widget ml-50 rml-0">
                  <h4 className="footer-title">{w.title}</h4>
                  <ul className="list-style-two">
                    {w.lists.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget contact-widget mr-30 rmr-0">
                <h4 className="footer-title">Informaion</h4>
                <ul className="list-style-two">
                  <FooterContactStyle style_six={true} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-50">
          <div className="container">
            <div className="copyright-inner justify-content-center">
              <p>@copyright {new Date().getFullYear()} Restly All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSix;