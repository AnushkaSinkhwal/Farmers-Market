import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/List.css";

function CustomerList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.BACKEND_URL + '/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        setError(error);
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3002/api/users/delete/${userId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Could not delete the user");
      }
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      setError(error);
      console.error('Error deleting user:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td className="options">
                  <Link to={`/Editcustomer/${user._id}`} className="link-button">
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
                {/* Include other table cells if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
