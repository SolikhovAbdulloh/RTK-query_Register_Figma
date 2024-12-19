import React from "react";
import Sidebar from "./Sidebar";
import OverWiev from "./Overview";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
