import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

import "./Breadcrumbs.scss";
const Breadcrumbs = ({ firstPath, secondPath }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/">
        <HomeIcon />
      </Link>
      <img className="breadcrumbs__arrow" src={arrowRightIcon} alt="arrow" />

      {secondPath ? (
        <>
          <Link to={`/${firstPath.toLowerCase()}`} className="breadcrumbs__link">
            {firstPath}
          </Link>
          <img className="breadcrumbs__arrow" src={arrowRightIcon} alt="arrow" />
        </>
      ) : (
        <span className="breadcrumbs__path">{firstPath}</span>
      )}
      {secondPath && <span className="breadcrumbs__path">{`${secondPath.slice(0, 40)}...`}</span>}
    </div>
  );
};

export default Breadcrumbs;
