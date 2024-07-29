import { NavLink } from "react-router-dom";

function HeaderPage() {
  const linkStyle = ({ isActive }) =>
    isActive ? { border: "1px  solid blue" } : {};

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderPage;
