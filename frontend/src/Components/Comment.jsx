import React, { useState } from "react";
import "../styles/comment.css";
import userProfile from "../assets/tomato.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentForm from "./CommentForm";

const Comment = ({ comment }) => {
  const isFarmer = true;
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  console.log(comment.replies);
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

          {!isFarmer && (
            <span
              onClick={() => {
                setIsEdit(!isEdit);
                setIsReply(false);
              }}
            >
              Edit
            </span>
          )}
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

        {comment?.replies?.length > 0 &&
          comment.replies.map((reply) => (
            <div>
              <div className="userDetails">
                <AccountCircleIcon height={40} width={40} />
                <span>{comment.storeName}</span>
              </div>
              <div className="comment">
                <span>{reply.commentText}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;
