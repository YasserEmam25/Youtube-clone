import React, { useState } from "react";
import "../css/App.css";
import Header from "./Header";
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Headder <Header />*/}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="app-page">
                {/* sidebar <Sidebar /> */}
                <Sidebar />
                {/* Recommended videos  */}
                <RecommendedVideos />
              </div>
            }
          />

          <Route
            path="/search"
            element={
              <div className="app-page">
                {/* sidebar <Sidebar /> */}
                <Sidebar />
                {/* search results  */}
                <SearchPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
