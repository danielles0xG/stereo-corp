import Link from "next/link";
import useModal from "../../../../hooks/use-modal";
import VideoModal from "../../../modals/modal-video";

const protect_ready_contents = {
  protect_img: '/assets/images/protects/left-image.png',
  videoId: 'K0D4uPmKkqY',
  protect_subtitle: 'Advance Protect',
  protect_title: 'Protecting your privacy Is our priority',
  protect_items: [
    {
      icon: '/assets/images/protects/icon1.png',
      title: 'Product Consultation',
      subtitle: 'Penatibus et magnis dis parturient montes, nascetur ridiculus'
    },
    {
      icon: '/assets/images/protects/icon2.png',
      title: 'Security Consultation',
      subtitle: 'Penatibus et magnis dis parturient montes, nascetur ridiculus'
    },
    {
      icon: '/assets/images/protects/icon3.png',
      title: 'Operational Security',
      subtitle: 'Penatibus et magnis dis parturient montes, nascetur ridiculus'
    },
  ],
  ready_subtitle: 'We’re ready',
  ready_title: 'Protecting your privacy is Our priority',
  ready_desc: 'Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum',
  ready_list: ['Use strong passwords', 'Use security software', 'Monitor for intrusion', 'Raise awareness'],
  ready_btn_text: 'Discover More',
  ready_img: '/assets/images/protects/ready.jpg'
}

const { protect_img, videoId, protect_subtitle, protect_title, protect_items, ready_subtitle, ready_title, ready_desc, ready_list, ready_img, ready_btn_text } = protect_ready_contents;

const ProtectReadyArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="protect-ready-bg rel" id="protect">

        {/* <!-- Protect Section Start --> */}
        <section className="protect-section pt-115 rpt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="protect-left-part rmb-55 wow fadeInRight delay-0-2s">
                  <img src={protect_img} alt="Protect" />
                  <button onClick={() => setIsVideoOpen(true)} className="mfp-iframe video-play">
                    <i className="fas fa-play"></i></button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="protect-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title">{protect_subtitle}</span>
                    <h2>{protect_title}</h2>
                  </div>
                  {protect_items.map((item, i) => (
                    <div key={i} className="protect-item">
                      <div className="icon">
                        <img src={item.icon} alt="Icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Protect Section End --> */}


        {/* <!-- Ready Section Start --> */}
        <section className="ready-section pt-110 rpt-100 rel z-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="ready-content">
                  <div className="section-title mb-30">
                    <span className="sub-title">{ready_subtitle}</span>
                    <h2>{ready_title}</h2>
                  </div>
                  <p>{ready_desc}</p>
                  <ul className="list-style-three pt-15 pb-30">
                    {ready_list.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                  <Link href={'/about'}>
                    <a className="theme-btn style-ten hover-two">{ready_btn_text}
                      <i className="far fa-paper-plane"></i></a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ready-image">
                  <img src={ready_img} alt="Ready" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Ready Section End --> */}
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={videoId} />
      {/* video modal end */}
    </>
  );
};

export default ProtectReadyArea;