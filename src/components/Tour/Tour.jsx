import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour, FavouriteTour, removeFromFavourites, isFavouritePage } =
      this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img width={200} src={img} alt="picture1" />
          <span
            className="close-btn"
            onClick={() => {
              isFavouritePage ? removeFromFavourites(id) : removeTour(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
          {!isFavouritePage && (
            <span
              className="favo-btn"
              onClick={() => {
                FavouriteTour(this.props.tour);
              }}
            >
              <i className="fa-solid fa-heart"></i>
            </span>
          )}
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
