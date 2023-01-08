import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactsPage from "./components/pages/ContactsPage";
import HeroesPage from "./components/pages/HeroesPage";
import HomePage from "./components/pages/HomePage";
import SelectedComicPage from "./features/selectedComic/SelectedComicPage";
import FavoritesPage from "./features/favorites/FavoritesPage";
import CartPage from "./features/cart/CartPage";
import PageNotFound from "./components/pages/PageNotFound";
import ComicsPage from "./features/comics/ComicsPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics">
              <Route index element={<ComicsPage />} />
              <Route path=":comicId" element={<SelectedComicPage />} />
            </Route>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/heroes" element={<HeroesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
