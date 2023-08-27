import { Route, Routes } from "react-router-dom";
import ProductListingPage from "./pages/product-listing/ProductListingPage";
import ProductDetails from "./pages/product-details/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
