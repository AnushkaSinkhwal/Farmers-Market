import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form 
      onSubmit={handleSubmit} 
      action="/checkoutForm" method="post">
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select 
            name="paymentMethod" 
            value={formData.paymentMethod} 
            onChange={handleChange} 
            required 
          >
            <option value="">Select Payment Method</option>
            <option value="Fone pay">Fone pay</option>
            <option value="Cash on delivery">Cash on delivery</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

