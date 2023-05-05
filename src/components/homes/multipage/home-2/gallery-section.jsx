import Link from 'next/link';
import { galleryData } from '../../../../data';

const galleryItems = galleryData.filter(i => i.home_2);

const gallery_content = {
  subtitle: 'Our Gallery',
  title: <>Offer The Latest Software And <br />Solutions To Our customers!</>
}

const { subtitle, title } = gallery_content;

const GallerySection = () => {
  return (
    <>
      <section className="gallery-section-two overlay pt-115 rpt-95 pb-85 rpb-65 px-60 rpx-0" id="gallery">
        <div className="container-fluid">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className="row text-white justify-content-center">
            {galleryItems.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <div className="gallery-content-inner">
                      <h5>
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h5>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a className="learn-more">
                          Read More <i className="fas fa-arrow-right"></i></a>
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