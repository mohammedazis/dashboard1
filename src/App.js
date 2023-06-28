import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./components/Sidebar";
import './App.css'
import Topbar from "./components/Topbar";
import Logouts from "./components/Logouts";
import Lastone from "./components/Lastone";
function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Logouts />
      <Lastone/>
    </div>
  );
}

export default App;
