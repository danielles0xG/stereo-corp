import Link from "next/link";

const data = {
  bg_img: '/assets/images/background/footer-call-action-bg.png',
  img: '/assets/images/footer/footer-call-action.png',
  title: 'Better data with a better Company',
  btn_text: 'Learn click here',
}

const { bg_img, img, title, btn_text } = data;

const CallToAction = () => {
  return (
    <>
      <section className="footer-call-action">
        <div className="container">
          <div className="footer-call-action-inner bgs-cover" style={{ backgroundImage: `url(${bg_img})` }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="footer-call-action-image rpt-60">
                  <img src={img} alt="Call to Action" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer-call-action-content py-70">
                  <h2>{title}</h2>
                  <Link href={'/about'}>
                    <a className="theme-btn style-eight mt-30">{btn_text} <i className="fas fa-long-arrow-alt-right"></i></a>
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

export default CallToAction;