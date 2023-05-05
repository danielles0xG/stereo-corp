import Link from "next/link";

const about_content = {
  img: '/assets/images/about/about-three-1.jpg',
  img_2: '/assets/images/about/about-three-2.jpg',
  subtitle: 'It Support For Business',
  title: 'Preparing for your success trusted source in IT services.',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
  lists: ['which means as the company ramps', 'Available in 14.1-in. and 16-in. versions.',
    'The potential loss of the Touch Bar.', 'High-speed USB 4.0.'],
  btn_text: 'View details'
}

const { img, img_2, subtitle, title, desc, lists, btn_text } = about_content;

const AboutArea = ({ padd }) => {
  return (
    <>
      <section className={`about-three ${padd ? padd : 'py-120 rpy-100'}`} id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-image rmb-60 mr-10 rmr-0 wow fadeInLeft delay-0-2s">
                <img src={img} alt="About" />
                <img src={img_2} alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content pl-70 rpl-0 wow fadeInRight delay-0-2s">
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
                  <a className="theme-btn style-three mt-25">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;