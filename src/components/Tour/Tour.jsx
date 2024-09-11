import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    const { city, img, name, info } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img
            width={200}
            src="https://images.pexels.com/photos/27810045/pexels-photo-27810045/free-photo-of-siyah-ve-beyaz-doga-bahce-fotografcilik.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="picture1"
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>City</h3>
          <h4>Name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            dignissimos.
          </p>
        </div>
      </article>
    );
  }
}
