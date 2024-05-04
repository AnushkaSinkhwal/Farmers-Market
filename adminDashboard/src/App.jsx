import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashbord from "./Pages/Dashbord";
import FarmerList from "./Pages/FarmerList";
import CustomerList from "./Pages/CustomerList";
import AddFarmer from "./Pages/AddFarmer";
import AddCustomer from "./Pages/AddCustomer";
import EditFarmer from "./Pages/EditFarmer";
import EditCustomer from "./Pages/EditCustomer";
import CustomerOrder from "./Pages/CustomerOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashbord />}></Route>
          <Route exact path="FarmerList" element={<FarmerList />}></Route>
          <Route exact path="CustomerList" element={<CustomerList />}></Route>
          <Route exact path="AddFarmer" element={<AddFarmer />}></Route>
          <Route exact path="AddCustomer" element={<AddCustomer />}></Route>
          <Route exact path="EditFarmer" element={<EditFarmer />}></Route>
          <Route exact path="EditCustomer" element={<EditCustomer />}></Route>
          <Route exact path="CustomerOrder" element={<CustomerOrder />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
