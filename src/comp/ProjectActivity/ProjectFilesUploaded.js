import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import word from "../Images/word.png";
import pdf from "../Images/pdf.jpeg";
import designmaking from "../Images/designmaking.jpeg";
function ProjectFilesUploaded() {
  return (
    <>
      <div class="card files_uploaded_card">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-2 col-3">
            <img src={pdf} class="card-img-top files_uploaded_icon" alt="..." />
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-9">
               <p class="card-title">User Invoice</p>
           </div>

          <div className="col-lg-1 col-md-1 col-sm-2 col-3">
            <img src={word} class="files_uploaded_icon card-img-top" alt="..." />
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-9">
               <p class="card-title">Project Management & flow</p>
           </div>
          <div className="col-lg-1 col-md-1 col-sm-2 col-3">
            <img src={designmaking} class="card-img-top files_uploaded_icon" alt="..." />
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-9">
               <p class="card-title">Design making files</p>
           </div>

        </div>
      </div>
    </>
  );
}

export default ProjectFilesUploaded;
