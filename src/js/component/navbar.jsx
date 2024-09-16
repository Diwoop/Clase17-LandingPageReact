import React from "react";
export function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg bg-warning bg-opacity-75 border-bottom border-body">
      <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link text-secondary" href="#">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled text-secondary" aria-disabled="true">Services</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

  );
}