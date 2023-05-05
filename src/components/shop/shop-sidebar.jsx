import Link from 'next/link';
import Rating from 'react-rating';
import useProducts from '../../hooks/use-products';


export default function ShopSidebar({ handleSearchChange }) {
  const { products } = useProducts();
  // recentProducts
  const recentProducts = products.filter(p => p.latest).slice(0, 3);
  return (
    <div className="shop-sidebar mt-120 rmt-0 rmb-100">
      <div className="widget widget-search wow fadeInUp delay-0-2s">
        <h3 className="widget-title">Product Search</h3>
        <form onSubmit={e => e.preventDefault()}>
          <input onChange={handleSearchChange} type="text" placeholder="Search Products.."
            className="searchbox" required />
          <button type="submit" className="searchbutton fa fa-search"></button>
        </form>
      </div>
      <div className="widget widget-products wow fadeInUp delay-0-4s">
        <h3 className="widget-title">Recent Product</h3>
        <div className="widget-products-wrap">
          {recentProducts.map((product) => (
            <div key={product.id} className="widget-product-item">
              <Link href={`/shop-details/${product.id}`}>
                <a>
                  <img src={product.img} alt="Product" />
                </a>
              </Link>
              <div className="widget-product-content">
                <h6>
                  <Link href={`/shop-details/${product.id}`}>
                    <a>{product.title}</a>
                  </Link>
                </h6>
                <div className="rating">
                  <Rating
                    fullSymbol="fas fa-star"
                    emptySymbol="far fa-star"
                    initialRating={product.rating}
                    readonly
                  />
                </div>
                <span className="shop-price">
                  <span className="price">{product.price}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="widget widget-call-action wow fadeInUp delay-0-2s">
        <div className="call-action-widget">
          <h2>Work Together</h2>
          <p>Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore</p>
          <Link href="/contact">
            <a className="theme-btn style-five btn-circle">
              Contact Now <i className="fas fa-angle-double-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
