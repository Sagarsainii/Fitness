import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import "./Styles/Dashboard.css"

const data = [
  { name: "Mon", value: 580 },
  { name: "Tue", value: 270 },
  { name: "Wed", value: 430 },
  { name: "Thu", value: 550 },
  { name: "Fri", value: 900 },
  { name: "Sat", value: 720 },
  { name: "Sun", value: 780 }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="stats-cards">
        <div className="card">
          <h4>Calories Burned</h4>
          <p>0</p>
        </div>
        <div className="card">
          <h4>Steps Walked</h4>
          <p>0</p>
        </div>
        <div className="card">
          <h4>Workouts Done</h4>
          <p>0</p>
        </div>
      </div>

      <div className="quote-box">
        <em>"Your only limit is the effort you're willing to put in."</em>
      </div>

      <div className="chart-section">
        <h3>Weekly Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
