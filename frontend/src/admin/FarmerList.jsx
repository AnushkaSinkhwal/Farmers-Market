import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/List.css";

function FarmerList() {
  const [farmers, setFarmers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/api/farmers"
        );
        if (response.ok) {
          const json = await response.json();
          setFarmers(json);
        } else {
          throw new Error("Failed to fetch farmers");
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching farmers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFarmers();
  }, []);

  // Function to handle delete...
  const handleDelete = async (farmerId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/farmers/deletefarmer/${farmerId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the farmer");
      }
      setFarmers(farmers.filter((farmer) => farmer._id !== farmerId));
    } catch (error) {
      setError(error);
      console.error("Error deleting farmer:", error);
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
      <h2>Farmer List</h2>
      <div className="tableC">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Farmer Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer) => (
              <tr key={farmer._id}>
                <td>{farmer.fname}</td>
                <td className="options">
                  <Link
                    to={`/Editfarmer/${farmer._id}`}
                    className="link-button"
                  >
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(farmer._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FarmerList;
