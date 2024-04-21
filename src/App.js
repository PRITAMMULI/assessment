import logo from "./logo.svg";
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./comp/Navbar";
import BreakDrums from "./comp/BreakDrums";
 import ProjectActivity from "./comp/ProjectActivity/ProjectActivity";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <BreakDrums />
         <ProjectActivity />
      </div>
    </>
  );
}

export default App;
