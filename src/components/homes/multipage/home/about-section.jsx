import FactCounter from "../../../fact-counter";

const about_data = {
  title: 'It Support For Business',
  subtitle: 'Preparing for your success trusted source in IT services.',
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud",
  lists: ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security'],
}


const { title, subtitle, desc, lists } = about_data;

const AboutSection = ({ about_2 }) => {
  return (
    <>
      <section className={`about-section ${about_2 ? 'pt-120 pb-240 rpt-100'
        : 'bg-light-black pt-120 rpt-100'}`} id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image-shape rmb-70">
                <img src="/assets/images/about/about.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`about-content ${about_2 ? '' : 'text-white'} pr-70 rpr-0`}>
                <div className="section-title mb-35">
                  <span className="sub-title">{title}</span>
                  <h2>{subtitle}</h2>
                </div>
                <p>{desc}</p>
                <ul className="list-style-one mt-15">
                  {lists.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* fact counter start */}
          {!about_2 && <FactCounter />}
          {/* fact counter end */}
        </div>
      </section>
    </>
  );
};

export default AboutSection;