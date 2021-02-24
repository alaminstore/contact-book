import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="#" className="navbar-brand">
          Contact Book
        </a>
        <div className="ml-auto">
          <a href="#" className="btn btn-info">
            Create Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
