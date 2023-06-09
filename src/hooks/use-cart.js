import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartProducts } from "../redux/features/cart-slice";

const useCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector(cartProducts);

  useEffect(() => {
    const cart = cartItems.reduce((cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      if (price !== 'free') {
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal
      }
      cartTotal.quantity += quantity

      return cartTotal;
    }, {
      total: 0,
      quantity: 0,
    })
    setQuantity(cart.quantity);
    setTotal(cart.total);
  }, [cartItems])

  return {
    quantity,
    total,
    cartItems,
  }
}

export default useCart;