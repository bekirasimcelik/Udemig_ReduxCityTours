import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    const isAlreadyFavourite = favourites.some(
      (favouriteTour) => favouriteTour.id === tour.id
    );

    if (!isAlreadyFavourite) {
      setFavourites((prevFavourites) => [...prevFavourites, tour]);
      toast.success("Tour added to favourites!");
    } else {
      toast.error("This tour is already in your favourites!");
    }
  };

  const removeFavourite = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((tour) => tour.id !== id)
    );
    toast.info("Tour removed from favourites.");
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />{" "}
    </Router>
  );
}

export default App;
