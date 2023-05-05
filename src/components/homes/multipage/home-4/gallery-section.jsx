import Link from 'next/link';
import React from 'react';
import { galleryData } from '../../../../data';

const gallery_content = {
  subtitle: 'Our Gallery',
  title: 'Some Of Our Work'
}

const { subtitle, title } = gallery_content;

const GallerySection = () => {
  const galleryItems = galleryData.filter(g => g.home_4)
  return (
    <>
      <section className="gallery-section px-55 rpx-0 pt-115 rpt-95 pb-85 rpb-65" id="gallery">
        <div className="container-fluid">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row text-white justify-content-center">
            {galleryItems.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="gallery-item style-four wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <div className="gallery-content-inner">
                      <span className="category">Our Gallery</span>
                      <h5>{item.title}</h5>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a><i className="fas fa-arrow-right"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;