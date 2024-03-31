import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import FarmerRegister from "./Pages/FarmerRegister";
import Help from "./Pages/Help";
import LoginPg from "./Pages/LoginPg";
import Payment from "./Pages/Payment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/Become a seller" element={<FarmerRegister />} />
          <Route exact path="/Help" element={<Help />} />
          <Route exact path="/Login&Signup" element={<LoginPg />} />
          <Route exact path="/Payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
