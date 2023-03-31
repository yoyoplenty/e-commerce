import { useEffect, useState } from "react";
import { Products } from "./components";
import { commerce } from "./lib/commerce";
import { Cart, Navbar } from "./partials";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart]: any = useState([]);

  const fetchProducts = async () => {
    const { data }: any = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId: any, quantity: any) => {
    const item: any = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cartData={cart} />
    </>
  );
}

export default App;
