import ContactInfo from "../common/contact-info";


export default function PortfolioDetailsArea({item}) {
  return (
    <section className="portfolio-details pt-120 rpt-100 pb-90 rpb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="portfolio-details-content rmb-55">
              <div className="image mb-35">
                <img src={item.img} alt="Portfolio Details" />
              </div>
              <h2>{item.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </p>
              <div className="row mt-45">
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img src="/assets/images/gallery/portfolio-middle-1.jpg" alt="Portfolio" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="image mb-30">
                    <img src="/assets/images/gallery/portfolio-middle-2.jpg" alt="Portfolio" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio-sidebar">
              <div className="widget widget-portfolio-info bg-lighter p-45">
                <h3 className="widget-title">Project Details</h3>
                <ul>
                  <li>
                    <h4>Project Name:</h4>
                    <p>{item.title}</p>
                  </li>
                  <li>
                    <h4>Clients:</h4>
                    <p>Management</p>
                  </li>
                  <li>
                    <h4>Category:</h4>
                    <p>Template blocks</p>
                  </li>
                  <li>
                    <h4>Project Year:</h4>
                    <p>August 12, 2021</p>
                  </li>
                </ul>
              </div>
              <div className="widget contact-info-widget contact-image-number style-two bgs-cover overlay" 
              style={{backgroundImage:'url(/assets/images/contact/home-two.jpg)'}}>
                {/* contact info start */}
                <ContactInfo />
                {/* contact info end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
