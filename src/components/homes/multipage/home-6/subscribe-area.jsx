const subscribe_contents = {
  bg_img:'/assets/images/background/subscribe-bg.png',
  subtitle:'Subscribe Now',
  title:'Get more updates to buy in our bulletins',
}
const {bg_img,subtitle,title} = subscribe_contents;

export default function SubscribeArea() {
  return (
    <>
      <div className="subscribe-two bgs-cover rel z-1 py-100" style={{backgroundImage:`url(${bg_img})`}}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="section-title text-white mb-25 rmb-35">
                <span className="sub-title">{subtitle}</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="subscribe-form-two mb-15 mr-50">
                <input type="email" placeholder="Email Address" required/>
                  <button className="theme-btn" type="submit">Subscribe Now <i className="fas fa-arrow-right"></i>
                  </button>
              </form>
            </div>
          </div>
        </div>
        <div className="shape-stones">
          <img src="/assets/images/shapes/stones.png" alt="Stones"/>
        </div>
        <div className="shape-dots">
          <img src="/assets/images/shapes/dots.png" alt="Dots"/>
        </div>
      </div>
    </>
  )
}
