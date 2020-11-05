import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import PostItem from "./PostItem.js";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";
import { setTextFilter } from "../../actions/filtersActions";
import selector from "../../select/select";
import classes from "../../styles/Posts.css";

class Posts extends Component {


  
  componentDidMount() {
    this.props.getPosts();
  }

  onSearchTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    const { posts, loading } = this.props.post;
    const { postsFiltered } = this.props;
// ****************************************************************************************************
    let postContent;
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = postsFiltered.map(post => (
        <PostItem key={post._id} post={post} />
      ));
    }
    return (
      <div className={`${classes.feed} mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <PostForm />
              <div className="my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-search m-2" />
                    </span>{" "}
                  </div>{" "}
                  <input
                    type="text"
                    className=""
                    placeholder=" Search authors"
                    value={this.props.filters.text}
                    onChange={this.onSearchTextChange}
                    // ***********************************************************************************
                    // if i want to add an argument
                    // onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  />{" "}
                </div>{" "}
              </div>{" "}
              {postContent}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  postsFiltered: selector(state.post, state.filters),
  post: state.post,
  filters: state.filters
});

export default connect(
  mapStateToProps,
  {
    getPosts,
    setTextFilter
  }
)(Posts);

// ******************************************************************************************
// Another Example
// *******************************************************************************************

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";
import classes from "../../styles/Post.css";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className={`${classes.post} mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link
                to="/feed"
                className="btn btn-lg btn-outline-warning text-uppercase mt-5 mb-3"
              >
                <i className="fa fa-arrow-left mr-2" />
                Back
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);


// ******************************************************************************************
// 
// *******************************************************************************************






