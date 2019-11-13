import React, { Component } from "react";
import { Button } from "reactstrap";
import { FaStar } from "react-icons";

export default class Helpers extends Component {
  state = {
    isFavorite: false
  };
  componentDidUpdate(prevProps) {
    if (this.props.favoriteList !== prevProps.favoriteList) {
      this.procedFavorite();
    }
  }
  componentDidMount() {
    this.procedFavorite();
  }

  procedFavorite(flag) {
    const { report, favoriteList } = this.props;
    const isFavorite = R.isNil(flag) ? favoriteList.includes(report.id) : flag;
    report.favorite = isFavorite;
    this.setState({ isFavorite });
  }

  toggleFavorite(id) {
    const { favoriteAdd, favoriteDelete } = this.props;
    const { isFavorite } = this.state;
    if (isFavorite) {
      favoriteDelete(id);
    } else {
      favoriteAdd(id);
    }
    this.procedFavorite(!isFavorite);
  }
  render() {
    const { report } = this.props;
    return (
      <div>
        <Button onClick={() => this.toggleFavorite(report.id)}>
          {isFavorite ? <FaStar /> : <FaStarO />}
        </Button>
      </div>
    );
  }
}
