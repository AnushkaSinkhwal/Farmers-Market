import React from "react";
import "../Style/List.css";
import { Link } from "react-router-dom";

function CustomerList() {
  const customers = [
    { id: 1, name: "someone" },
    { id: 2, name: "someone" },
    { id: 3, name: "someone" },
  ];

  return (
    <div className="list-container">
      <h2>Customer List</h2>
      <div className="tableC">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Customer Name</th>
              <th>Options</th>
              <th>Customer Order</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td className="options">
                  <Link to="/Editcustomer" className="link-button">
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                </td>
                <td>
                  <Link to="/CustomerOrder" className="link-button">
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
