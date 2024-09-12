import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };

  render() {
    const { addFavourite } = this.props;

    return (
      <section className="tourlist">
        {this.state.tours.map((tour) => (
          <Tour
            key={tour.id}
            tour={tour}
            removeTour={this.removeTour}
            FavouriteTour={addFavourite}
            isFavouritePage={false}
          />
        ))}
      </section>
    );
  }
}
