import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="404 error page" />
        <title>404 error - Comics Store</title>
      </Helmet>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found_info">Sorry, this page doesn't exist</h2>
        <Link to="/" className="not-found__link">
          Home Page 🦸‍♀️
        </Link>
      </section>
    </>
  );
};

export default PageNotFound;
