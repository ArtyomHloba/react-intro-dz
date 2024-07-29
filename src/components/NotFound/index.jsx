import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>404 this page is not exist yet</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFound;
