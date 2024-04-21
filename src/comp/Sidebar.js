import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <HomeIcon className="sidebar_icon" /> <DomainAddIcon className="sidebar_icon"  /> <DescriptionIcon className="sidebar_icon" /> <EmailIcon className="sidebar_icon" />
        <CalendarMonthIcon className="sidebar_icon"  />
        <WhatsAppIcon className="sidebar_icon" />
        <SettingsIcon className="sidebar_icon" />
        <PersonIcon className="sidebar_icon" />
      </div>
    </>
  );
}

export default Sidebar;
