import Link from "next/link";

const work_progress_data = {
  bg_img: '/assets/images/background/work-progress.jpg',
  subtitle: 'How We Do',
  title: <>Custom IT Solutions <br />for Your Business</>,
  btn_text: 'meet with us',
  progress_items: [
    { icon: 'flaticon flaticon-speech-bubble', step: 1, title: 'Advertising and Marketing' },
    { icon: 'flaticon flaticon-vector', step: 2, title: 'Web Development' },
    { icon: 'flaticon flaticon-like-1', step: 3, title: 'Mobile App Development' },
  ]
}

const { bg_img, subtitle, title, btn_text, progress_items } = work_progress_data;

const WorkProgress = () => {
  return (
    <>
      <section className="work-progress-area bgs-cover py-120 rpy-100"
        style={{ background: `url(${bg_img})` }} id="work-progress">
        <div className="container">
          <div className="work-progress-inner bg-blue text-white br-5 py-85 px-75">
            <div className="section-title-with-btn mb-10">
              <div className="section-title">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
              <Link href={'/contact'}>
                <a className="theme-btn style-two mt-15">{btn_text}</a>
              </Link>
            </div>
            <div className="row justify-content-between">
              {progress_items.map((item) => (
                <div key={item.step} className="col-lg-3 col-sm-6">
                  <div className="work-progress-item">
                    <div className="icon">
                      <i className={item.icon}></i>
                      <span className="progress-step">{item.step}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProgress;