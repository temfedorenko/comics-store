import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Spinner from "../spinner/Spinner";
const HeroesPage = () => {
  return (
    <>
      <Breadcrumbs firstPath={"Heroes"} />
      <h1 style={{ marginTop: "40px" }}>Heroes</h1>
      <Spinner />
      <h2 style={{ margin: "20px auto", maxWidth: "370px" }}>The page is under development.</h2>
    </>
  );
};

export default HeroesPage;
