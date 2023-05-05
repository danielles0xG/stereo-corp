import React from 'react';

const progress_data = {
  subtitle: 'How We Do',
  title: <>Custom IT Solutions <br />for Your Business</>,
  progress_items: [
    { icon: 'flaticon flaticon-speech-bubble', title: "Advertising and Marketing" },
    { icon: 'flaticon flaticon-vector', title: "Web Development" },
    { icon: 'flaticon flaticon-like-1', title: "Mobile App Development" },
  ]
}

const { subtitle, title, progress_items } = progress_data;

const WorkProgress = () => {
  return (
    <>
      <section className="work-progress-area-four rel z-2">
        <div className="container">
          <div className="work-progress-inner progress-bg-line bg-blue text-white br-5 py-85 px-75">
            <div className="section-title text-center">
              <span className="sub-title">{subtitle}</span>
              <h2>{title}</h2>
            </div>
            <div className="row justify-content-center">
              {progress_items.map((item, i) => (
                <div key={i} className="col-lg-4 col-sm-6">
                  <div className="work-progress-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className={item.icon}></i>
                      <span className="progress-step">{i + 1}</span>
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