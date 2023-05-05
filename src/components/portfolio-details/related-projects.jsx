import React from 'react';
import Link from 'next/link';
import { galleryData } from '../../data';

const RelatedProjects = () => {
  const relatedItems = galleryData.filter(item => item.portfolio_page).slice(0, 3)
  return (
    <section className="portfolio-section py-110 rpy-90">
      <div className="container">
        <div className="section-title mb-30">
          <h2>Related Projects</h2>
        </div>
        <div className="row">
          {relatedItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-sm-6">
              <div className="gallery-item style-three p-0 mt-20">
                <img src={item.img} alt="Gallery" />
                <div className="gallery-content">
                  <h5>
                    <Link href={`/portfolio-details/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;