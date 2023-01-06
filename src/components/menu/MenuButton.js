import "./MenuButton.scss";

const MenuButton = ({ onMenuToggle }) => {
  return (
    <div className="menu-btn" onClick={onMenuToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuButton;
