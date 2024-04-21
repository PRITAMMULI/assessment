import React from "react";

function Menubar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary menubar_menues">
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
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" aria-current="page" href="#">
                  Overview
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Client
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Update
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Budget
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Users
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Activity
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Settings
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link menubar_menues_items" href="#">
                  Logs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menubar;
