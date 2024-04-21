import React from "react";
import Sidebar from "../Sidebar";

import Menubar from "./Menubar";
import ProjectActivitiesUser from "./ProjectActivitiesUser";

function ProjectActivity() {
  return (
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-2 col-2">
        <Sidebar />
      </div>
      <div className="col-lg-11 col-md-11 col-sm-10 col-10">
        <ProjectActivitiesUser />
      </div>
   </div>

    // </div>
  );
}

export default ProjectActivity;
