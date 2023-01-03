import { Link } from "react-router-dom";

import ComicInfo from "./ComicInfo";
import "./ComicCard.scss";

const ComicCard = (comic) => {
  const { id, thumbnail, title, price, format, pageCount, language, year } = comic;

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
        comic={comic}
        // price={price}
        // format={format}
        // pageCount={pageCount}
        // language={language}
        // year={year}
      />
    </li>
  );
};

export default ComicCard;
