import { createContext, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any>([]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: any = { cart, setCart };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
