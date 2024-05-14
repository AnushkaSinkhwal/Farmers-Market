import React, { useEffect, useState } from "react";
import cabbage from "../assets/cabbage2.jpg";
import "../styles/productview.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import CommentForm from "../Components/CommentForm";
import Comment from "../Components/Comment";

function QuantityBox({ handleIncrease, handleDecrease, quantity }) {
  return (
    <div className="quantity-card">
      <button onClick={handleDecrease} className="quantity-btn">
        {" "}
        -{" "}
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="quantity-input"
      />
      <button onClick={handleIncrease} className="quantity-btn">
        {" "}
        +{" "}
      </button>
    </div>
  );
}

function ProductDetailedView() {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const product = useSelector((state) =>
    state?.product?.products[type]?.find(
      (vegetable) => vegetable.id === Number(id)
    )
  );

  const comments = useSelector((state) => state.commentData.comments);
  const filteredComments = comments.filter(
    (comment) => comment.productId === id && comment.userId === 1
  );

  const itemExistOnCart = useSelector((state) =>
    state?.cart?.items?.find?.((item) => item?.id === Number(id))
  );

  useEffect(() => {
    if (itemExistOnCart) setQuantity(itemExistOnCart?.cartQuantity);
  }, [itemExistOnCart]);

  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCardHandler = () => {
    setShowModal(true);
    dispatch(
      addToCart({
        ...product,
        cartQuantity: quantity,
        totalPrice: quantity * product?.price,
      })
    );
  };

  console.log(id, "hello");

  return (
    <div>
      <div className="detail-container">
        <div className="productdetail-conntainer">
          <div className="img-pri-card">
            <div className="img-container">
              <Box
                component="img"
                src={product?.photo_url}
                alt="cabbaGE"
                className="productimg"
              />
            </div>
            <div className="text-side">
              <h1>{product?.name}</h1>
              <div className="seperator"></div>
              <p>Seller- cha min vegetables</p>
              <p>Price: Rs.{product?.price}/kg </p>
              <div className="seperator"></div>

              <h3>Quantity</h3>

              <QuantityBox
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                quantity={quantity}
              />
              <button className="addtocartbtn" onClick={addToCardHandler}>
                Add to cart
              </button>
            </div>
          </div>

          <div className="description-card">
            <h1>Description</h1>
            <p>{product?.description}</p>
          </div>
        </div>

        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          className={"successModal"}
        >
          <Box className={"modalBox"}>
            <div className="modal-header">
              <div className="title">
                <CheckCircleIcon />
                <span>Confirmation</span>
              </div>
              <CloseIcon
                className="closeIcon"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="description">
              <span>Item has been successfully added to the cart!!</span>
            </div>
            <div className="buttonContainer">
              <button onClick={() => navigate("/cart")}>Go to cart</button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="commentBlock">
        <div className="commentWrapper">
          <CommentForm productId={id} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {filteredComments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailedView;
