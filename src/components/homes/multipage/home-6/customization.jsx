import Link from "next/link";

const customization_contents = {
  img: '/assets/images/about/customization-1.png',
  img_2: '/assets/images/about/customization2.png',
  subtitle: 'Use & Customization',
  title: 'Planned in view of the candidate',
  text: 'Praesent non viverra elit. Suspendisse sed nulla cursus, gravida diam id, consectetur nisl. Sed fermentum ipsum mollis velit eleifend,',
  lists: ['top audience', 'Web & app development', 'software analysis', 'Application design'],
  btn_text: 'Discover More',
}

const { img, img_2, subtitle, title, text, lists, btn_text } = customization_contents;

export default function Customization() {
  return (
    <>
      <section className="customization-section py-75 rpy-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="customization-images wow fadeInLeft delay-0-2s">
                <img src={img} alt="customization" />
                <img src={img_2} alt="customization" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="customization-content mr-100 rmr-0 pb-35 rpb-40 rpt-50 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title">{subtitle}</span>
                  <h2>{title}</h2>
                </div>
                <p>{text}</p>
                <ul className="list-style-three mt-25 pb-10">
                  {lists.map((list, i) => (<li key={i}>{list}</li>))}
                </ul>
                <Link href={'/about'}>
                  <a className="theme-btn mt-15">{btn_text} <i className="fas fa-arrow-right"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
