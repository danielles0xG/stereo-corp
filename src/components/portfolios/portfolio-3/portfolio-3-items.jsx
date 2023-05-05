import Link from "next/link";
import { galleryData } from "../../../data";

const portfolioItems = galleryData.filter(item => item.portfolio_page_3);

export default function PortfolioThreeItems() {
  return (
    <section className="gallery-section-two overlay pt-115 rpt-95 pb-85 rpb-65 px-60 rpx-0">
      <div className="container-fluid">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Our Gallery</span>
          <h2>Offer The Latest Software And <br />Solutions To Our customers!</h2>
        </div>
        <div className="row text-white justify-content-center">
          {portfolioItems.map((item) => {
            const { img, title } = item
            return <div key={item.id} className="col-xl-4 col-md-6">
              <div className="gallery-item style-two">
                <img src={img} alt="Gallery" />
                <div className="gallery-content">
                  <div className="gallery-content-inner">
                    <h5>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{title}</a>
                      </Link>
                    </h5>
                    <Link href={`/portfolio-details/${item.id}`}>
                      <a className="learn-more">Read More
                        <i className="fas fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
