import Link from "next/link";

const data = {
  bg_img: 'assets/images/background/call-action-three-bg.jpg',
  title: 'We guarantee 100% protection',
  btn_text: 'Discover More'
}

const { bg_img, title, btn_text } = data;

const CallToAction = () => {
  return (
    <>
      <section className="call-action-three bgs-cover pt-55 pb-35 rpb-40" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-title text-white mb-15">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href={'/about'}>
                <a className="theme-btn style-nine hover-two mb-20">{btn_text}
                  <i className="far fa-paper-plane"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;