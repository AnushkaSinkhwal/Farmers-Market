import React, { useEffect, useState } from "react";
import "../styles/commentForm.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment, replyComment } from "../store/commentSlice";
import { v4 as uuidv4 } from "uuid";

const CommentForm = ({
  isEdit,
  isReply,
  productId,
  setIsEdit,
  setIsReply,
  isFarmer,
  commentToEdit,
  commentId,
}) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const id = uuidv4();

  useEffect(() => {
    if (isEdit) setCommentText(commentToEdit);
  }, [isEdit]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      dispatch(editComment({ commentText, commentId }));
      setIsEdit(false);
    } else if (isReply) {
      dispatch(replyComment({ commentText, commentId }));
      setIsReply(false);
    } else {
      axios
        .post(process.env.REACT_APP_BACKEND_URL, {
          prodID: productId,
          username: "ABC",
          comment: commentText,
          replies: [],
        })
        .then((resp) => {
          if (resp) {
            dispatch(
              addComment({
                commentText,
                productId,
                userId: 1,
                userName: "Meme Famrme",
                id,
                storeId: 121,
                storeName: "Chamin Vegetables",
              })
            );
          }
        });
    }

    setCommentText("");
  };

  const btnName = isEdit ? "Edit" : isReply ? "Reply" : "Add";

  return (
    <form className="comment-section" onSubmit={handleCommentSubmit}>
      {!(isReply || isEdit) && <span>Write a comment</span>}
      <textarea
        rows={5}
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
        placeholder={`write your ${isReply ? "reply" : "comment"} here :)`}
        style={{
          width: isReply || isEdit ? "300px" : "500px",
        }}
      />
      <button type="submit">{btnName}</button>
    </form>
  );
};

export default CommentForm;
