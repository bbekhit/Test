import React, { Component } from "react";
import sanitizeHtml from "sanitize-html";
import marked from "marked";

export class commentForm extends Component {
  static countWords(message) {
    if (!message.trim()) {
      return 0;
    }
    return message
      .trim()
      .replace(/\s{2,}/g, " ")
      .split(" ").length;
  }

  static getClassNameCountWords(count) {
    if (count >= 60) {
      return CSS.danger;
    }
    if (count >= 40) {
      return CSS.warning;
    }
    return CSS.success;
  }

  static sanitize(html) {
    return sanitizeHtml(marked(html), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      allowedClasses: {
        div: ["imageCont"]
      }
    });
  }

  constructor(props) {
    super(props);
    this.tags = commentTags;
    this.state = {
      selected: this.props.selected,
      isFormValid: false,
      countWords: CommentForm.countWords(
        this.props.comment && this.props.comment.message
      )
    };
  }
  render() {
    return <div />;
  }
}

export default commentForm;
