import React, { useState } from 'react';
import Rating from 'react-rating';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';

import { selectProducts } from '../../redux/features/product-slice';
import ShopSidebar from '../shop/shop-sidebar';
import { cartProducts, cart_product } from '../../redux/features/cart-slice';
import ShopDetailsForm from '../forms/shop-details-form';
import Link from 'next/link';

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settingTwo = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

// handleCountChange
const handleCountChange = e => {
  console.log(Number(e.target.value))
}

const ShopDetailsArea = ({ product }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const allProducts = useSelector(selectProducts);
  const cartItems = useSelector(cartProducts);
  const selectedItems = cartItems.find(item => item.title === product.title);
  const dispatch = useDispatch();
  return (
    <>
      <section className="shop-details-area py-120 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shop-details-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-gallery">
                      <Slider {...settings} asNavFor={nav2} ref={(slider) => setNav1(slider)} >
                        {product?.related_images?.map((item, i) => (
                          <a key={i} href="#" className="product-image-preview">
                            <img src={item} alt="Preview" className='w-100' />
                          </a>
                        ))}
                      </Slider>
                    </div>
                    <div className="product-thumb py-10 mb-40">
                      <Slider {...settingTwo} asNavFor={nav1} ref={(slider) => setNav2(slider)}>
                        {product?.related_images?.map((img, i) => (
                          <div key={i} className="product-thumb-item">
                            <img src={img} alt="Thumb" />
                          </div>
                        ))}
                      </Slider>

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="descriptions mb-50">
                      <h2>{product.title}</h2>
                      <div className="rating-review d-flex align-items-center mb-10">
                        <div className="rating mr-5">
                          <Rating
                            fullSymbol="fas fa-star"
                            emptySymbol="far fa-star"
                            initialRating={product.rating}
                            readonly
                          />
                        </div>
                        <a href="#">({product.review} customer review)</a>
                      </div>
                      <span className="shop-price">
                        <b className="price">{product.price}</b>
                        {' '}
                        {product.old_price && <del><span className="price">{product.old_price}</span></del>}
                      </span>
                      <p>{product.desc}</p>
                      <form onSubmit={e => e.preventDefault()} className="add-to-cart mr-10 mb-25">
                        <input onChange={handleCountChange} type="text"
                          value={selectedItems?.quantity ? selectedItems?.quantity : 0} required />
                        <button onClick={() => dispatch(cart_product(product))} type="submit"
                          className="theme-btn">Add to Cart</button>
                      </form>
                      <ul className="product-meta">
                        <li>Category: <a href="#">Cooler</a></li>
                        <li>Tags: <a href="#">cooler</a> <a href="#">smart</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="nav product-information-tab mb-30">
                  <li><a href="#details" data-bs-toggle="tab" className="active show">Description</a></li>
                  <li><a href="#review" data-bs-toggle="tab">Review (1)</a></li>
                </ul>
                <div className="tab-content mb-85">
                  <div className="tab-pane active fade show" id="details">
                    <h2>Description</h2>
                    <p>{product.desc}</p>
                    <p>{product.desc_2}</p>
                  </div>
                  <div className="tab-pane fade" id="review">
                    <h2>1 review for Cooler</h2>
                    <div className="review-item mb-55 pt-10">
                      <div className="reviewer-img">
                        <img src="/assets/images/shop/reviewer-1.png" alt="Reviewer Image" />
                      </div>
                      <div className="reviewer-review">
                        <div className="reviewer-header">
                          <h6>Robert Down</h6>
                          <span className="date">7 Jan, 2022</span>
                          <div className="ratings">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor purus. Sed vel lacus.</p>
                        <a href="#" className="reply">Reply</a>
                      </div>
                    </div>
                    {/* form start */}
                    <ShopDetailsForm />
                    {/* form end */}
                  </div>
                </div>
                <div className="section-title mb-45">
                  <h2>Related products</h2>
                </div>
                <div className="row">
                  {allProducts.slice(0, 3).map((item, i) => (
                    <div key={i} className="col-md-4 col-6 col-small">
                      <div className="product-item">
                        <div className="image">
                          <img src={item.img} alt="Product" />
                          <button onClick={() => dispatch(cart_product(item))}
                            className="theme-btn style-six">Add to cart</button>
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
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              <ShopSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsArea;