import Link from 'next/link';
import { hero_data } from '../../../../data';

const HeroArea = () => {
  const hero_1 = hero_data.home_1;
  return (
    <>
      <section className="hero-section overlay bgs-cover pt-200 pb-150"
        style={{ background: `url(${hero_1.bg_img})` }} id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9">
              <div className="hero-content text-center text-white">
                <span className="sub-title d-block wow fadeInUp delay-0-2s">{hero_1.subtitle}</span>
                <h1 className="wow fadeInUp delay-0-4s mt-20">{hero_1.title}</h1>
                <div className="hero-btn mt-35 wow fadeInUp delay-0-6s">
                  <Link href={'/contact'}>
                    <a className="theme-btn">{hero_1.btn_text}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;