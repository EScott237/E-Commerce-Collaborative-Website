import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Start of NavBar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Website Name
            </a>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Home Button on Navbar */}
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Home
                  </a>
                </li>

                {/* About Us Option on Navbar - Can be changed  */}
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;


// for the push Aleska, feel free to delete this comment