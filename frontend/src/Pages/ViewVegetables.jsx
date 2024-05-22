import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import "../styles/viewAllcategory.css";
import Search from "../Components/Search";

function ProductCardViewvegetable(props) {
  return (
    <div className="card" onClick={props.data.onClick}>
      <Box
        component="img"
        src={props.data.productImage}
        alt={props.data.productName}
        className="productimg"
      />
      <h1>{props.data.productName}</h1>
      <p className="price">Rs.{props.data.productPrice}</p>
      <p className="description">{props.data.productDescription}</p>
      <button onClick={props.data.onClick}>
        View Details <FavoriteBorderIcon />
      </button>
    </div>
  );
}

function ViewVegetables() {
  const vegetables = useSelector((state) => {
    console.log("state: ", state);
    return state.product.products.filter(
      (product) => product.category === "vegetable"
    );
  });
  const navigate = useNavigate();

  return (
    <div className="view-all-container">
      <h1>All Vegetables</h1>
      <div className="seperator" />
      <Search />
      <div className="product-grid">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {vegetables &&
            vegetables.map((vegetable) => (
              <ProductCardViewvegetable
                key={vegetable._id}
                data={{
                  ...vegetable,
                  onClick: () =>
                    navigate(
                      `/productDetailedView/vegetables/${vegetable._id}`
                    ),
                }}
              />
            ))}
        </Box>
      </div>
    </div>
  );
}

export default ViewVegetables;
