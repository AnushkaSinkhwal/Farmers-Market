import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCustomer from "./Pages/AddCustomer";
import AddFarmer from "./Pages/AddFarmer";
import CustomerList from "./Pages/CustomerList";
import CustomerOrder from "./Pages/CustomerOrder";
import Dashboard from "./Pages/Dashboard";
import Editcustomer from "./Pages/Editcustomer";
import EditFarmer from "./Pages/EditFarmer";
import FarmerList from "./Pages/FarmerList";
import Sidenavbar from "./Components/Sidenavbar";

function App() {
  return (
    <div>
      <Router>
        <Sidenavbar />
        <Routes>
          <Route exact path="/" element={<CustomerList />} />
          <Route exact path="AddCustomer" element={<AddCustomer />} />
          <Route exact path="AddFarmer" element={<AddFarmer />} />
          <Route exact path="CustomerList" element={<CustomerList />} />
          <Route exact path="CustomerOrder" element={<CustomerOrder />} />
          <Route exact path="Editcustomer" element={<Editcustomer />} />
          <Route exact path="EditFarmer" element={<EditFarmer />} />
          <Route exact path="FarmerList" element={<FarmerList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
