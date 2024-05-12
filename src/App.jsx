import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CheckoutForm from "./Pages/CheckoutForm";
import FarmerRegister from "./Pages/FarmerRegister";
import FarmerLogin from "./Pages/FarmerLogin";
import AboutUs from "./Pages/AboutUs";
import LoginPg from "./Pages/LoginPg";
import Payment from "./Pages/Payment";
import RegisterPg from "./Pages/RegisterPg";
import FarmerDashbord from "./Pages/FarmerDashbord";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import DeleteProduct from "./Pages/DeleteProduct";
import Customer from "./Pages/Customer";
import ProductDetailedView from "./Pages/ProductDetailedView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/CheckoutForm" element={<CheckoutForm />} />
          <Route exact path="/FarmerRegister" element={<FarmerRegister />} />
          <Route exact path="/FarmerLogin" element={<FarmerLogin />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Login" element={<LoginPg />} />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/RegisterPg" element={<RegisterPg />} />
          <Route exact path="/FarmerDashbord" element={<FarmerDashbord />} />
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/EditProduct" element={<EditProduct />} />
          <Route exact path="/DeleteProduct" element={<DeleteProduct />} />
          <Route exact path="/Customer" element={<Customer />} />
          <Route exact path="/productDetailedView/:type/:id" element={<ProductDetailedView />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
