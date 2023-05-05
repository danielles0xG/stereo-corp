import React from 'react';
import FactCounter from '../../../fact-counter';

const about_content_data = {
  subtitle: 'WHO WE ARE',
  title: <>We deal with the aspects of <br />professional IT Services</>,
  tabs: [
    { active: true, icon: 'flaticon flaticon-web-maintenance', title: 'Data Center' },
    { icon: 'flaticon flaticon-web-development-4', title: 'Cloud Services' },
    { icon: 'flaticon flaticon-web-programming', title: 'Web Development' },
    { icon: 'flaticon flaticon-coding-5', title: 'IT Management' },
  ],
  tab_content: [
    {
      active: true,
      img: "/assets/images/about/about-tab.png",
      subtitle: 'It Support For Business',
      title: 'Preparing for your success trusted source in IT services.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
      lists: ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security']
    },
    {
      img: "/assets/images/about/about.png",
      subtitle: 'It Support For Business',
      title: 'Preparing for your success trusted source in IT services.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
      lists: ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security']
    },
    {
      img: "/assets/images/about/about-tab.png",
      subtitle: 'It Support For Business',
      title: 'Preparing for your success trusted source in IT services.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
      lists: ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security']
    },
    {
      img: "/assets/images/about/about.png",
      subtitle: 'It Support For Business',
      title: 'Preparing for your success trusted source in IT services.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
      lists: ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security']
    }
  ]
}

const { subtitle, title, tabs, tab_content } = about_content_data;

const AboutTabSection = () => {
  return (
    <>
      <section className="about-tab-section bg-light-black text-white pb-120 rpb-100">
        <div className="container">
          {/* fact counter start */}
          <FactCounter />
          {/* fact counter end */}
          <div className="section-title text-center mb-55">
            <span className="sub-title">{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <ul className="nav about-tab">
            {tabs.map((tab, i) => (
              <li key={i}>
                <a className={`${tab.active ? 'active' : ''}`} data-bs-toggle="tab" href={`#tabContent${i + 1}`}>
                  <i className={tab.icon}></i>
                  <h3>{tab.title}</h3>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content about-tab-content">
            {tab_content.map((content, i) => (
              <div key={i} className={`tab-pane fade ${content.active ? 'show active' : ''}`} id={`tabContent${i + 1}`}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="about-image-shape rmb-70 wow fadeInLeft delay-0-2s">
                      <img src={content.img} alt="About" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-content pr-70 rpr-0 wow fadeInRight delay-0-2s">
                      <div className="section-title mb-35">
                        <span className="sub-title">{content.subtitle}</span>
                        <h2>{content.title}</h2>
                      </div>
                      <p>{content.desc}</p>
                      <ul className="list-style-one mt-15">
                        {content.lists.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTabSection;