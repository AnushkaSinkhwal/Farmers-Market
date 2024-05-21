import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import FarmerRegister from "./Pages/FarmerRegister";
import FarmerLogin from "./Pages/FarmerLogin";
import AboutUs from "./Pages/AboutUs";
import LoginPg from "./Pages/LoginPg";
import Payment from "./Pages/Payment";
import RegisterPg from "./Pages/RegisterPg";
import FarmerDashbord from "./Pages/FarmerDashbord";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import Customer from "./Pages/Customer";
import ProductDetailedView from "./Pages/ProductDetailedView";
import Queries from "./Pages/Queries";
import ProductList from "./Pages/ProductList";
import CheckoutForm from "./Pages/CheckoutForm";
import ViewAllProducts from "./Pages/ViewAllProducts";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/FarmerRegister" element={<FarmerRegister />} />
            <Route exact path="/FarmerLogin" element={<FarmerLogin />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Login" element={<LoginPg />} />
            <Route exact path="/Payment" element={<Payment />} />
            <Route exact path="/RegisterPg" element={<RegisterPg />} />
            <Route exact path="/FarmerDashbord" element={<FarmerDashbord />} />
            <Route exact path="/AddProduct" element={<AddProduct />} />
            <Route exact path="/EditProduct" element={<EditProduct />} />
            <Route exact path="/Customer" element={<Customer />} />
            <Route exact path="/Queries" element={<Queries />} />
            <Route exact path="/CheckoutForm" element={<CheckoutForm />} />

            <Route
              exact
              path="/productDetailedView/:type/:id"
              element={<ProductDetailedView />}
            />

            <Route exact path="/ProductList" element={<ProductList />} />
            <Route
              exact
              path="viewall/:category"
              element={<ViewAllProducts />}
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
