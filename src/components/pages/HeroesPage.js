import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Spinner from "../spinner/Spinner";
const HeroesPage = () => {
  return (
    <section>
      <Breadcrumbs firstPath={"Heroes"} />
      <h1 className="section-title">Heroes</h1>
      <Spinner />
      <h2 className="section-info">The page is under development.</h2>
    </section>
  );
};

export default HeroesPage;
