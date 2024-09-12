import React from "react";
import Tour from "../Tour/Tour";

const Favourites = ({ favourites = [], removeFromFavourites }) => {
  return (
    <div className="favourites">
      <h2>Your Favourites</h2>
      {favourites.length > 0 ? (
        <div className="tourlist">
          {favourites.map((tour) => (
            <Tour
              key={tour.id}
              tour={tour}
              removeFromFavourites={removeFromFavourites}
              isFavouritePage={true}
            />
          ))}
        </div>
      ) : (
        <p>No favourites yet.</p>
      )}
    </div>
  );
};

export default Favourites;
