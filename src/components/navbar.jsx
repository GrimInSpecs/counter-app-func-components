import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span>No. of Elements </span>
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
