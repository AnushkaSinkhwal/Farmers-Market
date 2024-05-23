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
import Dashboard from "./admin/Dashboard";
import CustomerList from "./admin/CustomerList";
import AddCustomer from "./admin/AddCustomer";
import AddFarmer from "./admin/AddFarmer";
import CustomerOrder from "./admin/CustomerOrder";
import EditCustomer from "./admin/Editcustomer";
import EditFarmer from "./admin/EditFarmer";
import FarmerList from "./admin/FarmerList";
import NavLayout from "./Components/NavLayout";

function App() {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route>
            <Route
              exact
              path="/"
              element={
                <NavLayout>
                  <Home />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <NavLayout>
                  <Cart />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/FarmerRegister"
              element={
                <NavLayout>
                  <FarmerRegister />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/FarmerLogin"
              element={
                <NavLayout>
                  <FarmerLogin />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/AboutUs"
              element={
                <NavLayout>
                  <AboutUs />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/Login"
              element={
                <NavLayout>
                  <LoginPg />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/Payment"
              element={
                <NavLayout>
                  <Payment />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/RegisterPg"
              element={
                <NavLayout>
                  <RegisterPg />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/FarmerDashboard"
              element={
                <NavLayout>
                  <FarmerDashbord />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/AddProduct"
              element={
                <NavLayout>
                  <AddProduct />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/EditProduct/:id"
              element={
                <NavLayout>
                  <EditProduct />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/Customer"
              element={
                <NavLayout>
                  <Customer />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/Queries"
              element={
                <NavLayout>
                  <Queries />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/CheckoutForm"
              element={
                <NavLayout>
                  <CheckoutForm />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/productDetailedView/:type/:id"
              element={
                <NavLayout>
                  <ProductDetailedView />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/ProductList"
              element={
                <NavLayout>
                  <ProductList />
                </NavLayout>
              }
            />
            <Route
              exact
              path="viewall/:category"
              element={
                <NavLayout>
                  <ViewAllProducts />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/adminHome"
              element={
                <NavLayout>
                  <CustomerList />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/AddCustomer"
              element={
                <NavLayout>
                  <AddCustomer />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/AddFarmer"
              element={
                <NavLayout>
                  <AddFarmer />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/CustomerList"
              element={
                <NavLayout>
                  <CustomerList />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/CustomerOrder"
              element={
                <NavLayout>
                  <CustomerOrder />
                </NavLayout>
              }
            />
            <Route
              exact
              path="/Editcustomer/:id"
              element={
                <NavLayout>
                  <EditCustomer />
                </NavLayout>
              }
            />{" "}
            {/* Route with parameter */}
            <Route
              exact
              path="/EditFarmer/:id"
              element={
                <NavLayout>
                  <EditFarmer />
                </NavLayout>
              }
            />{" "}
            {/* Fixed route for EditFarmer */}
            <Route
              exact
              path="/FarmerList"
              element={
                <NavLayout>
                  <FarmerList />
                </NavLayout>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
