import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/images/logos/logo-footer.png';
import { blogData } from '../../data';
import { SocialLinksOne } from '../social-links';
import FooterContactStyle from './footer-contact-style';

const footer_contents = {
  text:"Sed ut perspiciatis unde omnis natus evoluptat emaccu santium doloremque laudantium totam rem aperiam eaquepsa",
  widget_list:['About Us','Latest Events','How It Work','News & Articles','contact us']
}
const {text,widget_list} = footer_contents;

const FooterFour = () => {
  return (
    <>
      <footer className="main-footer footer-three bg-light-black text-white pt-90">
        <div className="container">
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
                <div className="social-style-two mt-30">
                  <SocialLinksOne />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget link-widget ml-20 rml-0">
                <h4 className="footer-title">Page Links</h4>
                <ul className="list-style-three">
                  {widget_list.map((l,i) => <li key={i}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget mr-30 rmr-0">
                <h4 className="footer-title">Contacts</h4>
                <ul className="list-style-two">
                  <FooterContactStyle />
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">Recent News</h4>
                <div className="widget-news-wrap">
                  {blogData.slice(0, 2).map((item, i) => (
                    <div key={i} className="widget-news-item">
                      <img src={item.img} alt="News" />
                      <div className="widget-news-content">
                        <h6>
                          <Link href={`/blog-details/${item.id}`}>
                            <a>{item.title.substring(0, 35)}...</a>
                          </Link>
                        </h6>
                        <span className="date"><i className="far fa-calendar-alt"></i>
                          <Link href={`/blog-details/${item.id}`}>
                            <a>{' '}{item.date}</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area bg-blue mt-30">
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

export default FooterFour;