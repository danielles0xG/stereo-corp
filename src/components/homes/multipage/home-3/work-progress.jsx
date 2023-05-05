import Link from 'next/link';
import React from 'react';
import { services } from '../../../../data';
import Brands from '../../../brands/brands';

const progress_data = {
  bg_img: '/assets/images/background/progress.png'
}

const { bg_img } = progress_data;

const WorkProgress = () => {
  return (
    <>
      <section className="work-progress-three bg-blue text-white pb-85 rpb-65"
        style={{ backgroundImage: `url(${bg_img})` }} id="work-progress">
        <div className="container">
          <div className="logo-carousel-wrap style-two bg-white py-100 px-25 br-5">
            {/* brands start */}
            <Brands />
            {/* brands end */}
          </div>
          <div className="work-progress-inner-three">
            <div className="row justify-content-center">
              {services.slice(26, 29).map((ser, i) => (
                <ServiceItem key={i} ser={ser} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProgress;

export const ServiceItem = ({ ser, index }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="progress-item-two style-two wow fadeInUp delay-0-2s">
        <span className="progress-step">0{index + 1}</span>
        <div className="icon">
          <i className={ser.icon}></i>
        </div>
        <h3>{ser.title}</h3>
        <p>{ser.desc}</p>
        <Link href={`/service-details/${ser.id}`}>
          <a className="learn-more">
            Read More <i className="fas fa-arrow-right"></i>
          </a>
        </Link>
      </div>
    </div>
  )
}


