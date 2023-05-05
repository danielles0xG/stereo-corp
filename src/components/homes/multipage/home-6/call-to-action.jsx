import Link from 'next/link';
import React from 'react';

const data = {
  bg_img: '/assets/images/background/call-action-bg.png',
  title: 'The only one layout you want.',
  btn_text: 'Get started Now'
}
const { bg_img, title, btn_text } = data;

const CallToAction = () => {
  return (
    <>
      <section className="call-to-action-two bgs-cover pt-90 pb-65" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div className="section-title text-white mb-25">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-xl-3">
              <Link href={'/contact'}>
                <a className="theme-btn style-three mb-25">{btn_text}</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;