import React from "react";
import {Routes, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Dashboard from "./Components/Dashboard";
import LogActivity from "./Components/LogActivity";
import Layout from "./Components/Layout";
import Progress from "./Components/Progress";
import GoalSettings from "./Components/GoalSettings";
function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/" element={ <Layout />} >
        <Route path="/Dashboard" element={ <Dashboard />} />
        <Route path="/log" element={ <LogActivity /> } />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Goals" element={<GoalSettings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
