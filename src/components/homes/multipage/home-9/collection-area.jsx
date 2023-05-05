import React, { useState } from 'react';
import { collection_data } from '../../../../data';

const CollectionArea = () => {
  const categories = ['All NFT', ...new Set(collection_data.map(c => c.category))];
  const [isActive, setIsActive] = useState('All NFT');
  const [collectionItems, setCategoryItems] = useState(collection_data);

  // handleCategory
  const handleCategory = (category) => {
    setIsActive(category);
    if (category === 'All NFT') {
      setCategoryItems(collection_data)
    }
    else {
      const remainingItems = collection_data.filter(i => i.category === category);
      setCategoryItems(remainingItems)
    }
  }

  return (
    <>
      <section className="collection-section rel z-1 pt-115 pb-90 rpt-95 rpb-70" id="collection">
        <div className="container">
          <div className="collection-filter-area mb-60">
            <div className="section-title mb-45">
              <span className="sub-title">Our Collection’s</span>
              <h2>Explore Collection’s</h2>
            </div>
            <ul className="collection-filter">
              {categories.map((c, i) => (
                <li key={i} onClick={() => handleCategory(c)}
                  className={`${isActive === c ? 'current' : ''} text-capitalize`}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="row collection-active">
            {collectionItems.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-sm-6 item">
                <div className="action-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={item.img} alt="Collection" />
                  </div>
                  <div className="content">
                    <div className="bid-dots">
                      <div className="bid">Bid : <b>{item.eth}ETH</b></div>
                      <div className="dots"><span></span><span></span><span></span></div>
                    </div>
                    <h4>{item.title}</h4>
                    <div className="author-wish">
                      <div className="author">
                        <img src={item.authorImg} alt="Author" />
                        <div className="description">
                          <h6>{item.authorName}</h6>
                          <span>Creator</span>
                        </div>
                      </div>
                      <a href="#" className="wish">
                        <i className="far fa-heart"></i><span>{item.wishlist}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionArea;