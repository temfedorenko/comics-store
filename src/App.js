import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import ComicsList from "./features/comics/ComicsList";
import SelectedComic from "./features/selectedComic/SelectedComic";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/comics">
              <Route index element={<ComicsList />} />
              <Route path=":comicId" element={<SelectedComic />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
