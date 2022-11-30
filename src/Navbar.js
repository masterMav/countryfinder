import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nothing">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark m-0 p-0">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h2 className="m-0 p-0 pt-1">countryfinder</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link to="/" className="nav-link">
                  Find by language
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/region" className="nav-link">
                  Find by region
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
