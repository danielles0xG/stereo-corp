import Link from 'next/link';
import { galleryData } from '../../../../data';

const gallery_content = {
  subtitle: 'Our Gallery',
  title: 'Some Of Our Work'
}
const { subtile, title } = gallery_content;
const GalleryArea = () => {
  const galleryItems = galleryData.filter(item => item.home_1);
  return (
    <>
      <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80 fix" id="gallery">
        <div className="container-fluid px-0 g-0">
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtile}</span>
            <h2>{title}</h2>
          </div>
          <div className="row small-gap g-0">
            {galleryItems.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="gallery-item wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <span className="category">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.subtile}</a>
                      </Link>
                    </span>
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
    </>
  );
};

export default GalleryArea;