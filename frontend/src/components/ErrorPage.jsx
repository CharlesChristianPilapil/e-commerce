import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>We apologize for the inconvenience. The error message is:</p>
      <p>{error}</p>
      <Link to="/"> Click here to go back </Link>
    </div>
  );
};

export default ErrorPage;
