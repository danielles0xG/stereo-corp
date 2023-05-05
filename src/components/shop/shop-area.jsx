import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import useProducts from '../../hooks/use-products';
import ShopItems from './shop-items';
import { selectProducts } from '../../redux/features/product-slice';
import ShopSidebar from './shop-sidebar';

export default function ShopArea() {
  const { products, setProducts } = useProducts();
  const [showing, setShowing] = useState(0);
  // all products 
  const allProducts = useSelector(selectProducts);
  // handleChange
  const handleChange = (e) => {
    switch (e.target.value) {
      case 'Default Sorting':
        return setProducts(allProducts)
      case 'Short by Latest':
        return setProducts(allProducts.filter(p => p.latest))
      case 'Oldest Product':
        return setProducts(allProducts.filter(p => p.older_product))
      case 'High To Low':
        const highToLowProducts = allProducts.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        return setProducts(highToLowProducts)
      case 'Low To High':
        const LowToHighProducts = allProducts.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        return setProducts(LowToHighProducts)
      default:
        return setProducts(allProducts)
    }
  }

  // handleSearchChange
  const handleSearchChange = e => {
    const searchingProducts = allProducts.filter(p => p.title.toLowerCase()
      .includes(e.target.value.toLowerCase()))
    setProducts(searchingProducts)
  }
  return (
    <>
      <section className="shop-page-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shop-grid-content pt-120 rpt-100 rpb-70">

                <div className="shop-shorter mb-40">
                  <div className="sort-text">
                    <span>Showing 1-{showing} of {allProducts.length} Result</span>
                  </div>
                  <div className="products-dropdown">
                    <select onChange={handleChange}>
                      <option defaultValue="default">Default Sorting</option>
                      <option defaultValue="new">Short by Latest</option>
                      <option defaultValue="old">Oldest Product</option>
                      <option defaultValue="hight-to-low">High To Low</option>
                      <option defaultValue="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <ShopItems itemsPerPage={6} items={products} setShowing={setShowing} />
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              <ShopSidebar handleSearchChange={handleSearchChange} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
