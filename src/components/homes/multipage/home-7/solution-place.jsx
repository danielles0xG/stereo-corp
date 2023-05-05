import Link from "next/link";
import Counter from "../../../counter";

const solution_place_contents = {
  bg_img: '/assets/images/background/counter-bg.png',
  counters: [
    { number: 12, title: 'Successful work', text: '+' },
    { number: 18, title: 'upgrade conversion', text: '%' },
    { number: 18, title: 'upgrade conversion', text: '%' },
  ],
  subtitle: '04 Solution Place',
  title: 'A one place solution for All your problems',
  text: 'Pellentesque purus neque, pretium non purus vitae, commodo cursus libero. Praesent eget tempor est. Aliquam molestie erat vitae faucibus volutpat.',
  btn_text: 'Learn click here',
  solution_img: '/assets/images/about/solution-place.png'
}


const { bg_img, counters, subtitle, title, text, btn_text, solution_img } = solution_place_contents;

const SolutionPlace = () => {
  return (
    <>
      <section className="solution-place bgs-cover rel z-1 pb-150 rpb-100" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="counter-four-inner mb-150 rmb-100">
            <div className="row justify-content-center">
              {counters.map((c, i) => (
                <div key={i} className="col-lg-4 col-sm-6">
                  <div className="success-item style-four">
                    <i className="fas fa-check"></i>
                    <div className="success-content">
                      <span className="count-text">
                        <Counter number={c.number} text={c.text} />
                      </span>
                      <span className="normal-text">{c.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solution-place-content rmb-60">
                <div className="section-title mb-30">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
                <Link href={'/about'}>
                  <a className="theme-btn style-eight mt-35">{btn_text} <i className="fas fa-long-arrow-alt-right"></i></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="solution-place-image">
                <img src={solution_img} alt="About" />
              </div>
            </div>
          </div>
        </div>
        <div className="circle-drop"></div>
      </section>
    </>
  );
};

export default SolutionPlace;