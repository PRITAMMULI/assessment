import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar_back">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <form class="d-flex" role="search">
          <SearchIcon className="search_icon" />

          <input
            class="form-control me-2 search_bar"
            type="search"
            placeholder="Search user event and more.."
            aria-label="Search"
          />
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu_items">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <SettingsIcon />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <NotificationsIcon />
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <PersonPinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
