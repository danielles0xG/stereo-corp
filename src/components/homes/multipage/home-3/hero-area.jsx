import Link from "next/link";
import { hero_data } from "../../../../data";
import useModal from "../../../../hooks/use-modal";
import VideoModal from "../../../modals/modal-video";

const { bg_img, subtitle, title, btn_text } = hero_data.home_3;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section className="hero-section-two bgs-cover overlay pt-40 rpt-80"
        style={{ backgroundImage: `url(${bg_img})` }} id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-11">
              <div className="hero-content text-white py-220 rpy-120">
                <span className="sub-title d-block">{subtitle}</span>
                <h1 className="mt-20">{title}</h1>
                <div className="hero-btns mt-35 ">
                  <Link href={'/contact'}>
                    <a className="theme-btn mr-25">{btn_text}</a>
                  </Link>
                  <button onClick={() => setIsVideoOpen(true)}
                    className="mfp-iframe video-play"><i className="fas fa-play"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="9Y7ma241N8k" />
      {/* video modal end */}
    </>
  );
};

export default HeroArea;