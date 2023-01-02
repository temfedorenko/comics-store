import "./ComicsSortingSelect.scss";

const ComicsSortingSelect = ({ filter, onFilterSelect }) => {
  return (
    <div className="comics__sorting">
      <label className="comics__sorting-label">
        Sort by
        <select
          className="comics__sorting-select"
          name="sortBy"
          value={filter}
          onChange={onFilterSelect}>
          <option value="rating">Rating</option>
          <option value="price-low">Price (low-high)</option>
          <option value="price-high">Price (high-low)</option>
          <option value="date">Newest</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </label>
    </div>
  );
};

export default ComicsSortingSelect;
