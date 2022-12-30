import { Link } from "react-router-dom";

import "./ComicCard.scss";
import ComicInfo from "./ComicInfo";

const ComicCard = ({ id, thumbnail, title, price, format, pageCount, language, year }) => {
  return (
    <li className="comics__card comic">
      <div className="comics__card-content ">
        <Link to={`/comics/${id}`}>
          <img src={thumbnail} alt={title} className="comics__card-image" />
        </Link>

        <Link to={`/comics/${id}`} className="comics__card-title">
          {title}
        </Link>
      </div>

      <ComicInfo
        price={price}
        format={format}
        pageCount={pageCount}
        language={language}
        year={year}
      />
    </li>
  );
};

export default ComicCard;
