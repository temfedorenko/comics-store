import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import "./GoBackButton.scss";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="go-back-btn" onClick={() => navigate(-1)}>
      <ArrowIcon />
      <span>Back</span>
    </button>
  );
};

export default GoBackButton;
