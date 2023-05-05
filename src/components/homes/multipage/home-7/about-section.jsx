import Link from "next/link";

const about_contents = {
  about_img: '/assets/images/about/about-seven.png',
  subtitle: '02 What We Do',
  title: 'Relational Database Is What We Do',
  text: 'Maecenas tincidunt ex quis arcu ultrices, et commodo diam volutpat. Fusce ligula mauris, sodales efficitur justo et, molestie tincidunt ex.',
  lists: ['Access any data flexible and easily', 'In-database optimized algorithms'],
  btn_text: 'Start Free Trail'
}

const { about_img, subtitle, title, text, lists, btn_text } = about_contents;

const AboutSection = ({ padd }) => {
  return (
    <>
      <section className={`about-seven rel z-1 pt-150 rpt-30 ${padd ? padd : ''}`} id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-seven-image rmb-60">
                <img src={about_img} alt="About" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-seven-content">
                <div className="section-title mb-30">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
                <ul className="list-style-three mt-35 mb-50">
                  {lists.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
                <Link href={'/about'}>
                  <a className="theme-btn style-eight">{btn_text}
                    <i className="fas fa-long-arrow-alt-right"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="circle-drop"></div>
      </section>
    </>
  );
};

export default AboutSection;