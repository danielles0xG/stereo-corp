import Link from "next/link";
import { hero_data } from "../../../../data";

const { subtitle, title, btn_text } = hero_data.home_2;

const HeroArea = () => {
  return (
    <>
      <section className="hero-section bg-dark-blue pt-60" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content text-white pt-100 pb-200 rpt-40 rpb-100">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <div className="hero-btn mt-35">
                  <Link href={'/contact'}>
                    <a className="theme-btn">{btn_text}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-image">
                <img src="/assets/images/hero/hero-two.jpg" alt="Hero" />
                <div className="circle-one"></div>
                <div className="circle-two"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-circle"></div>
      </section>
    </>
  );
};

export default HeroArea;