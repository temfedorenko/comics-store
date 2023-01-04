import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import ComicsList from "./features/comics/ComicsList";
import SelectedComic from "./features/selectedComic/SelectedComic";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/pages/AboutPage";
import ContactsPage from "./components/pages/ContactsPage";
import HeroesPage from "./components/pages/HeroesPage";
import HomePage from "./components/pages/HomePage";
import SelectedComicPage from "./features/selectedComic/SelectedComicPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics">
              <Route index element={<ComicsList />} />
              <Route path=":comicId" element={<SelectedComicPage />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/heroes" element={<HeroesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
