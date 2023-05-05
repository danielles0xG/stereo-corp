import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import { useDispatch } from 'react-redux';

import Pagination from '../../ui/pagination';
import { cart_product } from '../../redux/features/cart-slice';
import Link from 'next/link';

export default function ShopItems({ items, itemsPerPage, setShowing }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (currentItems) {
      setShowing(currentItems.length)
    }
  }, [currentItems, setShowing])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && currentItems.map((item, i) => (
        <div key={i} className="col-md-4 col-6 col-small">
          <div className="product-item">
            <div className="image">
              <img src={item.img} alt="Product" />
              <button onClick={() => dispatch(cart_product(item))} className="theme-btn style-six">
                Add to cart</button>
            </div>
            <div className="title-price">
              <h5>
                <Link href={`/shop-details/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h5>
              <span className="shop-price">
                <b className="price">{item.price}</b>
                {' '}
                {item.old_price && <del><span className="price">{item.old_price}</span></del>}
              </span>
            </div>
            <div className="rating">
              <Rating
                fullSymbol="fas fa-star"
                emptySymbol="far fa-star"
                initialRating={item.rating}
                readonly
              />
            </div>
          </div>
        </div>
      ))}

      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />

    </>
  )
}
