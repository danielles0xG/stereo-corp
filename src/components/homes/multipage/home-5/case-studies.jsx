import Link from 'next/link';
import { galleryData } from '../../../../data';

const gallery_contents = {
  subtitle: 'Our Case Studies',
  title: <>Let’s know Somthing About <br /> Our Recent Work</>,
}

const { subtile, title } = gallery_contents;

const CaseStudies = () => {
  const galleryItems = galleryData.filter(item => item.home_5);
  return (
    <>
      <section className="gallery-section-five overlay pt-115 rpt-95 pb-90 rpb-70 px-60 rpx-0" id="portfolio">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title">{subtile}</span>
            <h2>{title}</h2>
          </div>
          <div className="row text-white">
            {galleryItems.map((item, i) => (
              <div key={i} className="col-xl-3 col-sm-6">
                <div className="gallery-item-five wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <div className="gallery-content-inner">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a className="gallery-btn">
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </Link>
                      <h3>
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <p>{item.subtitle}</p>
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

export default CaseStudies;