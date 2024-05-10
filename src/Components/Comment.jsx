import React, { useState } from "react";
import "../styles/comment.css";
import userProfile from "../assets/tomato.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentForm from "./CommentForm";

const Comment = ({ comment }) => {
  const isFarmer = false;
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  return (
    <div className="commentCard">
      <div className="userDetails">
        <AccountCircleIcon height={40} width={40} />
        <span>{comment.userName}</span>
      </div>
      <div className="comment">
        <span>{comment.commentText}</span>
        <div className="action-container">
          {isFarmer && (
            <span
              onClick={() => {
                setIsReply(!isReply);
                setIsEdit(false);
              }}
            >
              Reply
            </span>
          )}

          <span
            onClick={() => {
              setIsEdit(!isEdit);
              setIsReply(false);
            }}
          >
            Edit
          </span>
        </div>
        {(isEdit || isReply) && (
          <div className="replysection">
            <CommentForm
              isEdit={isEdit}
              isReply={isReply}
              commentToEdit={comment.commentText}
              setIsEdit={setIsEdit}
              setIsReply={setIsReply}
              productId={comment.productId}
              commentId={comment.id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
