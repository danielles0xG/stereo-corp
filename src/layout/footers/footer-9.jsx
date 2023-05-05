import Link from 'next/link';
import Image from 'next/image';

import { SocialLinksOne } from '../social-links';
import logo from '../../../public/assets/images/logos/logo-white-three.png';

const footer_contents = {
  text: 'Integer gravida posuere lacus et suscipit. Pellentesque sed ipsum sollicitudin, fermentum nibh elementum, dignissim leo. In hac habitasse platea dictumst.',
  widgets: [
    {
      title: 'Marketplace',
      lists: ['All NFTs', 'Art', 'Collectibles', 'Photography', 'Sports', 'Trading Cards']
    },
    {
      title: 'Resources',
      lists: ['Help Center', 'Platform Status', 'Partners', 'Blog', 'Docs', 'Newsletter']
    },
  ]
}
const { text, widgets } = footer_contents;


const FooterNine = () => {
  return (
    <>
      <footer className="main-footer footer-nine pt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
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
              <div key={i} className="col-md-2 col-sm-6">
                <div className="footer-widget link-widget">
                  <h3 className="footer-title">{w.title}</h3>
                  <ul className="list-style-two">
                    {w.lists.map((list, i) => <li key={i}><a href="#">{list}</a></li>)}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-md-3 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h3 className="footer-title">Subscribe</h3>
                <p>Aenean volutpat in massa at euismod. Phasellus quis viverra lacus, ac interdum</p>
                <form action="#" method="post">
                  <input type="email" name="EMAIL" placeholder="Your Email Address" required="" />
                  <button value="submit"><i className="fa fa-location-arrow"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-50 py-15">
          <div className="container">
            <div className="copyright-inner">
              <p>© {new Date().getFullYear()}. Restly All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterNine;