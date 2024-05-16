import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import Search from "../Components/Search";
import "../styles/viewAllcategory.css";

function ProductCardViewdairy(props) {
  return (
    <div className="card" onClick={props.data.onClick}>
      <Box
        component="img"
        src={props.data.photo_url}
        alt={props.data.name}
        className="productimg"
      />
      <h1>{props.data.name}</h1>
      <p className="price">Rs.{props.data.price}</p>
      <p className="description">{props.data.description}</p>
      <button onClick={props.data.onClick}>
        View Details <FavoriteBorderIcon />
      </button>
    </div>
  );
}

function ViewDairy() {
  const dairy = useSelector((state) => state.product.products.dairy);
  const navigate = useNavigate();

  return (
    <div className="view-all-container">
      <h1>All Dairy Products</h1>
      <div className="seperator" />
      <Search />
      <div className="product-grid">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {dairy.map((dairyProduct) => (
            <ProductCardViewdairy
              key={dairyProduct.id}
              data={{
                ...dairyProduct,
                onClick: () =>
                  navigate(`/productDetailedView/dairy/${dairyProduct.id}`),
              }}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default ViewDairy;
