import Link from "next/link";
import { galleryData } from "../../../data"

const portfolioItems = galleryData.filter(item => item.portfolio_page_2);

export default function PortfolioTwoItems() {
  return (
    <>
      <section className="gallery-section overlay text-white pt-115 rpt-95 pb-100 rpb-80">
        <div className="container-fluid">
          <div className="section-title text-center mb-55">
            <span className="sub-title">Our Gallery</span>
            <h2>Some Of Our Work</h2>
          </div>
          <div className="row small-gap">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div className="gallery-item">
                  <img src={item.img} alt="Gallery" />
                  <div className="gallery-content">
                    <span className="category">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>Our Gallery</a>
                      </Link>
                    </span>
                    <h5>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
