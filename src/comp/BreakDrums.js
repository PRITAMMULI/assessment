import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import impimage from "../comp/Images/import.jpeg"
function BreakDrums() {
  return (
    <>
      <div className="row break_drums">
        <div className="col-lg-1 col-md-1 col-sm-2 col-2">
          <span className="mt-3 d-flex">
            <ChevronLeftIcon /> Back
          </span>
        </div>

        <div className="col-lg-5 col-md-5 col-sm-8 col-8">
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>

            <li>Activity</li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="row">
            <div className="col-lg-1 "></div>
            <div className="col-lg-10 col-md-10 col-sm-7 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2"></div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <button className="btn btn-primary import">import</button>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <button className="btn btn-primary export">Export</button>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <button className="btn btn-secondary category">
                    Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreakDrums;
