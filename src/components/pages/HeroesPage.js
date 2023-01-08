import { Helmet } from "react-helmet";

import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Spinner from "../spinner/Spinner";

const HeroesPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Heroes of Marvel comics store " />
        <title>Heroes - Comics Store</title>
      </Helmet>
      <section>
        <Breadcrumbs firstPath={"Heroes"} />
        <h1 className="section-title">Heroes</h1>
        <Spinner />
        <h2 className="section-info">The page is under development.</h2>
      </section>
    </>
  );
};

export default HeroesPage;
