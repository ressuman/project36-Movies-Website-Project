import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import { useTrendingMovies } from "../Hooks/Movies";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
