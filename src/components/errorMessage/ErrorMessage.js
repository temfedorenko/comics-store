import error from "./error.gif";
import "./ErrorMessage.scss";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <h1>Something went wrong... Please, try later</h1>
      <img src={error} alt="error" />
    </div>
  );
};

export default ErrorMessage;
