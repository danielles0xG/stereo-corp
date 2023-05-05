import Link from 'next/link';
import { galleryData } from '../../../../data';

const project_contents = {
  subtile: 'Our Project',
  title: 'Our Latest Digital Security Projects Solution'
}
const { subtile, title } = project_contents;

const ProjectSection = () => {
  const galleryItems = galleryData.filter(item => item.home_8)
  return (
    <>
      <section className="project-section pt-115 rpt-95 pb-90 rpb-70" id="project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-70">
                <span className="sub-title">{subtile}</span>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {galleryItems.map((item, i) => (
              <div key={i} className="col-xl-3 col-sm-6">
                <div className="project-item wow fadeInUp delay-0-2s">
                  <img src={item.img} alt="project" />
                  <div className="project-content">
                    <h3>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <span className="category">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.subtile}</a>
                      </Link>
                    </span>
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

export default ProjectSection;