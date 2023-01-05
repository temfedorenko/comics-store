import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CleareIcon } from "../../assets/icons/close.svg";
import { searchQueryChanged } from "../../features/comics/comicsSlice";
import "./SeacrhPanel.scss";
import { useState } from "react";

const SearchPanel = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onClearBtnClick = () => {
    setQuery("");
    dispatch(searchQueryChanged(""));
  };

  const onInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(searchQueryChanged(e.target.value));
  };

  const location = useLocation();
  const panelVisibility = location.pathname === "/comics" || location.pathname === "/heroes";

  return (
    panelVisibility && (
      <div className="header__search">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="header__search-input"
            placeholder={`Search in ${location.pathname.slice(1)}...`}
            value={query}
            onChange={(e) => onInputChange(e)}
          />
        </form>
        <div className="header__search-bg"></div>
        <div className="header__search-icon">
          {query ? <CleareIcon onClick={onClearBtnClick} /> : <SearchIcon />}
        </div>
      </div>
    )
  );
};

export default SearchPanel;
