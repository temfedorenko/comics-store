import { useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CleareIcon } from "../../assets/icons/close.svg";
import "./SeacrhPanel.scss";

const SearchPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onClearBtnClick = () => {
    setSearchQuery("");
  };

  return (
    <div className="header__search">
      <input
        type="text"
        className="header__search-input"
        placeholder="Search in comics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="header__search-bg"></div>
      <div className="header__search-icon">
        {searchQuery ? <CleareIcon onClick={onClearBtnClick} /> : <SearchIcon />}
      </div>
    </div>
  );
};

export default SearchPanel;
