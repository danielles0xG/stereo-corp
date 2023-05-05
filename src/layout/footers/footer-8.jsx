import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/images/logos/logo-white.png';
import { SocialLinksOne } from '../social-links';
import FooterContactStyle from './footer-contact-style';

const footer_contents = {
  text: 'Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum,',
  widgets: [
    {
      title: 'Explore Links',
      lists: [
        { link: '/', title: 'Home' },
        { link: '/about', title: 'About Us' },
        { link: '/services', title: 'Services' },
        { link: '/testimonial', title: 'Testimonial' },
        { link: '/blog', title: 'Blog & News' },
      ]
    },
    {
      title: 'Services',
      lists: [
        { link: '/service-details', title: 'Threat Hunter' },
        { link: '/service-details', title: 'Incident Responder' },
        { link: '/service-details', title: 'Secure Managed IT' },
        { link: '/service-details', title: 'Compliance' },
        { link: '/service-details', title: 'Cyber Security' },
      ]
    },
  ]
}

const { text, widgets } = footer_contents;

const FooterEight = () => {
  return (
    <>
      <footer className="main-footer footer-seven bg-black text-white pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <a>
                      <Image src={logo} alt="Logo" />
                    </a>
                  </Link>
                </div>
                <div className="text">
                  {text}
                </div>
                <div className="social-style-two mt-30">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
            {widgets.map((w, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="footer-widget link-widget ml-30 rml-0">
                  <h3 className="footer-title">{w.title}</h3>
                  <ul className="list-style-three">
                    {w.lists.map((list, i) => <li key={i}><Link href={`${list.link}`}><a>{list.title}</a></Link></li>)}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h3 className="footer-title">Information</h3>
                <ul className="list-style-two">
                  <FooterContactStyle home_8={true} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-30">
          <div className="container">
            <div className="copyright-inner pt-15">
              <p>© {new Date().getFullYear()}.  Restly All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterEight;