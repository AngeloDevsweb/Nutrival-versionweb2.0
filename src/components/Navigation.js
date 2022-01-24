import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              NUTRIVAL
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Proteinas
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Carbohidratos">
                    Carbohidratos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Grasas">
                    Grasas
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Fibras">
                    Fibras
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navigation
