import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header/Header";
import ComicsList from "./features/comics/ComicsList";
// import SelectedComic from "./features/selectedComic/SelectedComic";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/pages/AboutPage";
import ContactsPage from "./components/pages/ContactsPage";
import HeroesPage from "./components/pages/HeroesPage";

const SelectedComic = lazy(() => import("./features/selectedComic/SelectedComic"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Suspense fallback={<h1>"...loading"</h1>}>
            <Routes>
              {/* <Route path="/comics"> */}
              <Route path="/comics" element={<ComicsList />} />
              {/* <Suspense fallback={<h1>"...loading"</h1>}> */}
              <Route path="/comics/:comicId" element={<SelectedComic />} />
              {/* </Suspense> */}
              {/* </Route> */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/heroes" element={<HeroesPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
