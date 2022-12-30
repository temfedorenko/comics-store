import { ReactComponent as EmptyHeartIcon } from "../../assets/icons/favorites-empty.svg";
import { ReactComponent as FillHeartIcon } from "../../assets/icons/favorites-fill.svg";

import "./ComicInfo.scss";

const ComicInfo = ({ price, format, pageCount, language, year }) => {
  return (
    <div className="comic__info">
      <div className="comic__info-price">{price}</div>
      <div className="comic__info-features">
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Format</span>
          <span className="comic__info-feature-value">{format}</span>
        </div>
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Pages</span>
          <span className="comic__info-feature-value">{pageCount}</span>
        </div>
        <div className="comic__info-feature language">
          <span className="comic__info-feature-label">Language</span>
          <span className="comic__info-feature-value">{language}</span>
        </div>
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Year</span>
          <span className="comic__info-feature-value">{year}</span>
        </div>
      </div>

      <div className="comic__info-actions">
        <button className="comic__info-button button add-button">Add to card</button>
        <div className="comic__info-favorite-btn">
          <EmptyHeartIcon />
        </div>
      </div>
    </div>
  );
};

export default ComicInfo;
