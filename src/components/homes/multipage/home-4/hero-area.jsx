import Link from 'next/link';
import { hero_data } from '../../../../data';
import HomeFourHeroForm from '../../../forms/h4-hero-form';

const { bg_img, subtitle, title, btn_text, btn_text_2, form_title, form_text } = hero_data.home_4;

const HeroArea = () => {
  return (
    <>
      <section className="hero-section-three bgs-cover overlay pt-160 rpt-140 pb-80 rpb-100"
        style={{ backgroundImage: `url(${bg_img})` }} id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content text-white rmb-65">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <div className="hero-btns mt-35">
                  <Link href={'/contact'}>
                    <a className="theme-btn mr-15 mb-10">{btn_text}</a>
                  </Link>
                  <Link href={'/about'}>
                    <a className="theme-btn style-five mb-10">{btn_text_2}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-section-form bg-white p-50">
                <div className="section-title">
                  <h2 className="mb-0">{form_title}</h2>
                </div>
                <p>{form_text}</p>
                {/* form start */}
                <HomeFourHeroForm />
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-line-shape">
          <img src="/assets/images/hero/hero-four-shape.png" alt="Hero line shape" />
        </div>
      </section>
    </>
  );
};

export default HeroArea;