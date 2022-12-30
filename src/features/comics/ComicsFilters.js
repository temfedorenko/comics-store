import { useDispatch } from "react-redux";

import { filterChanged } from "./comicsSlice";
import "./ComicsFilters.scss";

const ComicsFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="comics__filters">
      <h3 className="comics__filters-label">Choose a format</h3>
      <div className="comics__filters-btns">
        <button className="comics__filters-btn" onClick={() => dispatch(filterChanged("All"))}>
          All
        </button>
        <button className="comics__filters-btn" onClick={() => dispatch(filterChanged("Comic"))}>
          Comic
        </button>
        <button
          className="comics__filters-btn"
          onClick={() => dispatch(filterChanged("Trade Paperback"))}>
          Trade Paperback
        </button>
        <button
          className="comics__filters-btn"
          onClick={() => dispatch(filterChanged("Hardcover"))}>
          Hardcover
        </button>
        <button
          className="comics__filters-btn"
          onClick={() => dispatch(filterChanged("Infinite Comic"))}>
          Infinite Comic
        </button>
      </div>
    </div>
  );
};

export default ComicsFilter;
