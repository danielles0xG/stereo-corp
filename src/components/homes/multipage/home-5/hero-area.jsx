import Link from "next/link";
import { hero_data } from "../../../../data";

const { subtitle, title, lists, btn_text, btn_text_2, bg_img } = hero_data.home_5;

const HeroArea = () => {
  return (
    <>
      <section className="hero-section-five rel pt-125" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="hero-content-five mr-10 rmr-0 py-125 rpy-100">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <ul className="list-style-one py-10">
                  {lists.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <div className="hero-btns mt-35">
                  <Link href={'/contact'}>
                    <a className="theme-btn mr-15 mb-10">{btn_text}</a>
                  </Link>
                  <Link href={'/about'}>
                    <a className="theme-btn style-six mb-10">{btn_text_2}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-five-image bgs-cover"
          style={{ backgroundImage: `url(${bg_img})` }}></div>
      </section>
    </>
  );
};

export default HeroArea;