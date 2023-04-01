import { createContext, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";

export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<any>([]);

  const fetchProducts = async () => {
    const { data }: any = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: any = { products, setProducts };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
