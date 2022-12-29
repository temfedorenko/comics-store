import { ReactComponent as EmptyHeartIcon } from "../../assets/icons/favorites-empty.svg";
import { ReactComponent as FillHeartIcon } from "../../assets/icons/favorites-fill.svg";
import "./ComicCard.scss";

const ComicCard = ({ id, thumbnail, title, price, format, pageCount }) => {
  return (
    <li className="comics__card">
      <div className="comics__card-content">
        <a href={`/comics/${id}`}>
          <img src={thumbnail} alt={title} className="comics__card-image" />
        </a>

        <a href={`/comics/${id}`} className="comics__card-title">
          {title}
        </a>
      </div>

      <div className="comics__card-price">{price}</div>
      <div className="comics__card-features">
        <div className="comics__card-feature">
          <span className="comics__card-feature-label">Format</span>
          <span className="comics__card-feature-value">{format}</span>
        </div>
        <div className="comics__card-feature">
          <span className="comics__card-feature-label">Pages</span>
          <span className="comics__card-feature-value">{pageCount}</span>
        </div>
      </div>

      <div className="comics__card-actions">
        <button className="comics__card-button button add-button">Add to card</button>
        <div className="comics__card-favorite-btn">
          <EmptyHeartIcon />
        </div>
      </div>
    </li>
  );
};

export default ComicCard;
