import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart, Navbar, Products } from "./partials";
import { CartContextProvider, ProductContextProvider } from "./context";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
