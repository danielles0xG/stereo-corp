import Link from 'next/link';
import Counter from '../../../counter';

const fact_counter_contents = {
  bg_img: '/assets/images/counter/counter-bg-section.jpg',
  subtitle: "Company Statistics",
  title: "We've achieved many world wide awards",
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
  btn_text: 'Learn More',
  counter_data: [
    { number: 520, title: 'Projects Done' },
    { number: 24, title: 'Awards Won', text: '+' },
    { number: 12, title: 'Years Experience', text: '+' },
    { number: 352, title: 'Happy Clients', text: '+' },
  ]
}

const { bg_img, subtitle, title, desc, btn_text, counter_data } = fact_counter_contents;

export default function FactCounter({ counter_4 }) {
  return (
    <>
      <section className={`fact-counter-section rel z-1 ${counter_4 ? 'pt-120 rpt-100 pb-120 rpb-70' : ''}`}>
        <div className="container">
          <div className="fact-counter-inner br-5 text-white" style={{ backgroundImage: `url(${bg_img})` }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="counter-left-content px-100 py-70">
                  <div className="section-title mb-30">
                    <span className="sub-title">{subtitle}</span>
                    <h2>{title}</h2>
                  </div>
                  <p>{desc}</p>
                  <Link href={'/about'}>
                    <a className="theme-btn style-five">{btn_text}</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="counter-right">
                  <div className="row text-center">
                    {counter_data.map((c, i) => (
                      <div key={i} className="col-sm-6">
                        <div className="success-item style-three">
                          <span className="count-text">
                            <Counter number={c.number} text={c.text} />
                          </span>
                          <p>{c.title}</p>
                        </div>
                      </div>
                    ))}
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
