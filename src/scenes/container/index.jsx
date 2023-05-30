import React from "react";

// react-router
import { Route, Routes } from "react-router-dom";

import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import Dashboard from "../dashboard";
import Team from "../team";
import Contacts from "../contacts";
import Tabs from "../tabs";
import FAQ from "../fqa";
import Bar from "../bar";
import Line from "../line";
import Pie from "../pie";

const DashboardLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/line" element={<Line />} />
          <Route path="/pie" element={<Pie />} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
