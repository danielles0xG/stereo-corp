import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/features/product-slice";

const useProducts = () => {
  const [products,setProducts] = useState(useSelector(selectProducts))
  return {
    products,
    setProducts
  }
}

export default useProducts;