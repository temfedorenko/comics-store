import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import { ReactComponent as Fav } from "./assets/icons/favorites-empty.svg";
import { ReactComponent as Home } from "./assets/icons/home.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
