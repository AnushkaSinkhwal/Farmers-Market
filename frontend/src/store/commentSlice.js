import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {
      const editedArr = [...state.comments].map((comment) =>
        comment.id === action.payload.commentId
          ? { ...comment, commentText: action.payload.commentText }
          : comment
      );
      state.comments = editedArr;
    },
    replyComment: (state, action) => {
      const editArr = [...state.comments].map((comment) =>
        comment.id === action.payload.commentId
          ? {
              ...comment,
              replies: [
                ...(comment?.replies || []),
                { commentText: action.payload.commentText },
              ],
            }
          : comment
      );
      state.comments = editArr;
    },
  },
});

export const { addComment, editComment, replyComment } = commentSlice.actions;
export default commentSlice.reducer;
