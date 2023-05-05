import Link from "next/link";

const about_contents = {
  subtitle: 'It Support For Business',
  title: 'Preparing for your success trusted source in IT pros for global providing',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud',
  lists: ['Best IT Solutions', 'Professional Web Solutions', 'Products Engineering'],
  btn_text: 'Learn About More',
  about_img: '/assets/images/about/about-four.jpg',
  about_img_2: '/assets/images/about/about-five-two.jpg',
  about_img_3: '/assets/images/about/about-four-2.jpg',
}

const { subtitle, title, desc, lists, btn_text, about_img, about_img_2, about_img_3 } = about_contents;

export default function AboutTwo() {
  return (
    <>
      <section className="about-section style-fiver py-120 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content-six pr-90 rpr-0 rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{desc}</p>
                <ul className="list-style-one mt-25 pb-10">
                  {lists.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <Link href={'/about'}>
                  <a className="theme-btn mt-25">{btn_text}</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four-images text-center wow fadeInRight delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={about_img} alt="About" />
                    <img className="about-bg-circle d-block mx-auto" src="/assets/images/about/about-circle-dots.png" alt="About" />
                  </div>
                  <div className="col-6">
                    <img className="mb-35 d-block mx-auto" src={about_img_2} alt="Logo" />
                    <img src={about_img_3} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
