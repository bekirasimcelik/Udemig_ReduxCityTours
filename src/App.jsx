import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import Favourites from "./components/Favourites/Favourites";

function App() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (tour) => {
    setFavourites((prevFavourites) => [...prevFavourites, tour]);
  };

  const removeFavourite = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((tour) => tour.id !== id)
    );
  };

  return (
    <Router>
      <Navbar favourites={favourites} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TourList addFavourite={addFavourite} favourites={favourites} />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              removeFromFavourites={removeFavourite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
