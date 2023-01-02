import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { filterChanged, filterSelector } from "./comicsSlice";
import "./ComicsFilters.scss";

const ComicsFilter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const buttonData = [
    { name: "All", label: "All" },
    { name: "Comic", label: "Comic" },
    { name: "Trade Paperback", label: "Paperback" },
    { name: "Hardcover", label: "Hardcover" },
    { name: "Infinite Comic", label: "Infinite Comic" },
  ];
  const buttons = buttonData.map(({ name, label }) => {
    const classes = {
      "comics__filters-btn": true,
      active: filter === name,
    };

    return (
      <button key={name} className={cn(classes)} onClick={() => dispatch(filterChanged(name))}>
        {label}
      </button>
    );
  });
  return (
    <div className="comics__filters">
      <h3 className="comics__filters-label">Choose a format</h3>
      <div className="comics__filters-btns">{buttons}</div>
    </div>
  );
};

export default ComicsFilter;
