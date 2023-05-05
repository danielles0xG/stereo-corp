import Link from "next/link";
import { hero_data } from "../../../../data";
import useModal from "../../../../hooks/use-modal";
import VideoModal from "../../../modals/modal-video";

const { subtitle, title, text, btn_text, img, img_2, img_3 } = hero_data.home_6;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="hero-section-six bg-lighter z-1 rel pt-80 rpt-65" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-six mr-10 rmr-0 py-100 rpy-80">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <p>{text}</p>
                <div className="hero-btns mt-35">
                  <Link href={'/about'}>
                    <a className="theme-btn mr-25 mb-10">{btn_text}
                      <i className="fas fa-arrow-right"></i></a>
                  </Link>
                  <button onClick={() => setIsVideoOpen(true)} className="mfp-iframe video-play mb-10">
                    <i className="fas fa-play"></i> <span>Watch Video</span></button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-six-images wow fadeInRight delay-0-8s" >
                <img src={img} alt="Hero" />
                <img src={img_2} alt="Hero" />
                <img src={img_3} alt="Hero" />
                <img src="/assets/images/hero/hero-six-ellipse.png" alt="Ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img src="/assets/images/shapes/lines.png" alt="Shape" />
          <img src="/assets/images/shapes/w-shape.png" alt="Shape" />
          <img src="/assets/images/shapes/close.png" alt="Shape" />
          <img src="/assets/images/shapes/triangle.png" alt="Shape" />
          <img src="/assets/images/shapes/circle.png" alt="Shape" />
        </div>
      </section>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="bOB-kMdd2aw" />
      {/* video modal end */}
    </>
  );
};

export default HeroArea;