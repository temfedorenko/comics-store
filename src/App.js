import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import ComicsList from "./features/comics/ComicsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/comics" element={<ComicsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
