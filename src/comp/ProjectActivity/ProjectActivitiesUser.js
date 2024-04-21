import React from 'react'
import Activities from './Activities'
import projecticon from "../Images/projecticon.png";
import profilephoto from "../Images/photo.png"
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProjectActivitiesUser() {
  return (
    <>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <h4>Project Activity</h4>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 add_new_projects col-6">
            <a href="">Add New Projects</a>
          </div>
          {/* <div className="col-lg-6"> */}

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div class="card">
              <div className="container">
                <img
                  src={projecticon}
                  class="card-img-top projecticon"
                  alt="..."
                />
                <div class="card-body finance_app_section">
                  <h5 class="card-title text-center">Finance App</h5>
                  <p class="card-text text-center">
                    It is a long established fact that a reader to seat
                  </p>

                  <div className="row">
                    <div className="col-12 col-xs-5 col-md-5 col-lg-5 col-sm-12">
                      <button class="btn add_user_button">Add User</button>
                    </div>

                    <div className="col-xs-4 col-10 col-sm-10 col-md-5 col-lg-5">
                      <button class="btn set_target_button">Set Target</button>
                    </div>

                    <div className="col-sm-2 col-xs-3 col-2 col-lg-2 col-md-1">
                      <button className="btn btn-secondary more_icon">
                        <MoreVertIcon />{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <p className="due_date"> Due Date </p>
                25-09-2022{" "}
                <span className="remaining_days">(60 days remaining)</span>
                <p className="due_date">Budget</p>
                $25,000.00 <span></span>
                <p className="due_date"> Client </p>
                <img src={profilephoto} className="phofilephoto" alt="" />{" "}
                Christopher JD
              </div>
            </div>

            <div class="card Assigned_users_section">
              <div class="card-body ">
                <h5 class="card-title assigned_users">Assigned Users</h5>
                <div className="row">
                  <div className="col-lg-1 col-md-1">
                    <img
                      src={profilephoto}
                      className="assigned_phofilephoto"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <h6> Alexantra </h6>{" "}
                    <p className="email"> alexantra@gmail.com</p>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>2 tasks</p>
                  </div>
                </div>{" "}
                <hr />
                <div className="row">
                  <div className="col-lg-1 col-md-1">
                    <img
                      src={profilephoto}
                      className="assigned_phofilephoto"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <h6>Christoper Alsop </h6>{" "}
                    <p className="email"> alsop@gmail.com</p>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>4 tasks</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-1 col-md-1">
                    <img
                      src={profilephoto}
                      className="assigned_phofilephoto"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <h6> Sebastian </h6>{" "}
                    <p className="email"> sebastian@gmail.com</p>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>2 tasks</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-1 col-md-1">
                    <img
                      src={profilephoto}
                      className="assigned_phofilephoto"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <h6> Madeleine Sophie </h6>{" "}
                    <p className="email"> Sophie@gmail.com</p>
                  </div>

                  <div className="col-lg-3 col-md-3">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "15%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>1 tasks</p>
                  </div>
                </div>{" "}
                <hr />
                <button class="btn view_all_users">View All Users</button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
           <Activities />
          </div>
        </div> 
    </>
  )
}

export default ProjectActivitiesUser
