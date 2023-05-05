import { useState } from "react";
import Link from "next/link";
import { galleryData } from "../../../data";

const portfolioItems = galleryData.filter(item => item.portfolio_page)
const categories = ['Show All', ...new Set(portfolioItems.map(c => c.category))];
console.log(categories)

const PortfolioItems = () => {
  const [portfolios, setPortfolios] = useState(portfolioItems);
  const [isActive, setIsActive] = useState('Show All')
  // handleCategory
  const handleCategory = (category) => {
    setIsActive(category);
    if (category === 'Show All') {
      setPortfolios(portfolioItems)
    }
    else {
      const remainingItems = portfolioItems.filter(item => item.category === category);
      setPortfolios(remainingItems)
    }
  }

  return (
    <section className="portfolio-section pt-115 rpt-95 pb-90 rpb-70">
      <div className="container">
        <ul className="portfolio-filter mb-45">
          {categories.map((c, i) => <li key={i} onClick={() => handleCategory(c)}
            className={`${c === isActive ? 'current' : ''} text-capitalize`}>{c}</li>)}
        </ul>
        <div className="row portfolio-wrap">
          {portfolios.map((item) => (
            <div key={item.id} className="col-lg-4 col-sm-6 item">
              <div className="gallery-item style-three">
                <img src={item.img} alt="Gallery" />
                <div className="gallery-content">
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
  );
};

export default PortfolioItems;