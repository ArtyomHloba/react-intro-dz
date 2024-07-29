import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 2000);
    return () => clearTimeout(id);
  });
  return (
    <>
      <div>404 this page is not exist yet</div>
    </>
  );
}

export default NotFound;
