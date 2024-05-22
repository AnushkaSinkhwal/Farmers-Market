import React from "react";
import "../styles/queries.css";
import Comment from "../Components/Comment";
import { useSelector } from "react-redux";

function Queries() {
  const comments = useSelector((state) => state.commentData.comments);
  console.log('comments: ', comments);
  const filteredComment = comments.filter((comment) => comment.storeId === 121);
  console.log(filteredComment);
  return (
    <div className="query-container">
      <div className="query-section">
        <span className="title">Customer Queries</span>

        <div className="customer-query">
          {filteredComment.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queries;
