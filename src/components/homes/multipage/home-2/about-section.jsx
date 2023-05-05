import Link from "next/link";

const about_data = {
  img: "/assets/images/about/about-two.jpg",
  subtitle: 'It Support For Business',
  title: 'Preparing for your success trusted source in IT services.',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
  lists: ['which means as the company ramps', 'Available in 14.1-in. and 16-in. versions.',
    'The potential loss of the Touch Bar.', 'High-speed USB 4.0.']
}

const { img, subtitle, title, desc, lists } = about_data;

const AboutSection = ({ padd }) => {
  return (
    <>
      <section className={`about-two pt-100 rpt-80 pb-195 rpb-100 ${padd ? padd : ''}`} id="about">
        <div className="container">
          <div className="about-wrap pt-20">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s">
                  <img src={img} alt="About" />
                </div>
              </div>
              <div className="col-lg-6 align-self-end">
                <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s">
                  <div className="section-title mb-35">
                    <span className="sub-title">{subtitle}</span>
                    <h2>{title}</h2>
                  </div>
                  <p>{desc}</p>
                  <ul className="list-style-three mt-15">
                    {lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <Link href={'/about'}>
                    <a className="theme-btn style-three mt-25">View details</a>
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

export default AboutSection;