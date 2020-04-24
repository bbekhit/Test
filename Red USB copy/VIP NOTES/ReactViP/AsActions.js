import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "redux/actions/commentActions";
// import { saveComment } from "redux/actions/commentActions";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  const handleChange = e => {
    setComment(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    saveComment(comment);

    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments">Fetch Comments</button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
