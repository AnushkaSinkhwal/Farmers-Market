import { Category } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCard from "../Components/productCard";
import "../styles/viewAllcategory.css";
import Search from "../Components/Search";
import { Box } from "@mui/material";

const ViewAllProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const jsonResponse = await fetch("http://localhost:8000/api/products");
        const response = await jsonResponse.json();
        if (response?.data && category) {
          const filterdData = response?.data?.filter(
            (item) => item?.category === category
          );
          setProducts(filterdData || []);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchProducts();
  }, [dispatch, category]);

  return (
    <div className="view-all-container">
      <h1>All {category}s</h1>
      <div className="seperator" />
      <Search />
      <div className="product-grid">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </Box>
      </div>
    </div>
  );
};

export default ViewAllProducts;
