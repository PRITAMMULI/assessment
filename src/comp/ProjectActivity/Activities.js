import React from "react";
import Menubar from "./Menubar";
import ImageIcon from "@mui/icons-material/Image";
import LanguageIcon from "@mui/icons-material/Language";
import FolderIcon from "@mui/icons-material/Folder";
import ProjectFilesUploaded from './ProjectFilesUploaded';
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import calenderIcon from "../Images/caklender icon.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import profilephoto from "../Images/photo.png";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import video from "../Images/video.jpeg";
import flower from "../Images/flower.jpeg";
import image1 from "../Images/image1.jpeg";
function Activities() {
  return (
    <>
      <Menubar />

      <div class="card activity_card">
        <div class="card-body">
          <div className="row">
            <div className="col-lg-6">
              <img src={calenderIcon} className="calender_icon" alt="" />
              <b> July 28, 2022 - Activity </b>
            </div>

            <div className="col-lg-6 date">
              <button className="btn btn-primary date_buttons today_date">
                Today
              </button>
              <button className="btn other_dates">Month</button>
              <button className="btn other_dates">Year</button>
              <button className="btn other_dates">
                <KeyboardArrowLeftRoundedIcon /> 2022{" "}
                <ChevronRightRoundedIcon />
              </button>
            </div>
            <div className="horizontal_line"></div>
          </div>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1">
              <TextSnippetIcon className="icons" />
              <span className="status_line">
                <h1></h1>
              </span>
              <ImageIcon className="icons" />{" "}
              <span className="status_line">
                <h2></h2>
              </span>
              <LanguageIcon className="icons" />{" "}
              <span className="status_line">
                <h3></h3>
              </span>
              <FolderIcon className="icons" />
            </div>
            <div className="col-lg-11 col-md-11 col-sm-11 col-11">
              Added two new modules in finance mobile application devlopement{" "}
              <br />
              <p>Updated at 10:45 AM by Jennifer</p>
              <div class="card finance_card">
                <div class="card-body">
                  <input type="checkbox" /> Payment Method{" "}
                  <button className="btn btn-primary finance">Finance</button>
                  <img
                    src={profilephoto}
                    className="ProfilePhoto"
                    alt=""
                  />{" "}
                  <img
                    src={profilephoto}
                    className="ProfilePhoto ProfilePhoto1"
                    alt=""
                  />{" "}
                  <img
                    src={profilephoto}
                    className="ProfilePhoto ProfilePhoto2"
                    alt=""
                  />{" "}
                  <button className="btn inprogress_button">Inprogress</button>{" "}
                  <button className="btn btn-secondary today_date_button">
                    25-09-20222
                  </button>{" "}
                  <MoreVertIcon />
                </div>
              </div>
              <div class="card finance_card">
                <div class="card-body">
                  <input type="checkbox" /> Payment Method{" "}
                  <button className="btn finance">Finance</button>
                  <img
                    src={profilephoto}
                    className="ProfilePhoto"
                    alt=""
                  />{" "}
                  <button className="btn inprogress_button inprogress_button1">
                    Inprogress
                  </button>{" "}
                  <button className="btn today_date_button">25-09-20222</button>{" "}
                  <MoreVertIcon />
                </div>
              </div>
              <p className="files_upladed">
                2 Images files nad 1 Video Uploaded{" "}
              </p>
              <p className="text-decoration-color: #808080">
                {" "}
                Updated at 12:45 PM by <b>Alexantra</b>
              </p>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                  <div class="card">
                    <img
                      src={image1}
                      class="card-img-top uplaoded_images"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                  <div class="card">
                    <img
                      src={flower}
                      class="uplaoded_images card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                  <div class="card">
                    <img
                      src={video}
                      class="card-img-top uplaoded_images"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <p className="files_upladed">
                Pull Request URL <span>#831</span> and <span>#845</span> merged
                in Developement Branch
              </p>
              <p>
                {" "}
                Updated at 04:24 PM by <b>Elizabeth Julia</b>
              </p>
              <p className="files_upladed"># Projects Files Uploaded</p>
              <p>
                {" "}
                Updated at 06:46 PM by <b>Stephanie</b>
              </p>
              <ProjectFilesUploaded />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
