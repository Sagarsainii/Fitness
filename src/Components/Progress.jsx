import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import "./Styles/Progress.css"

const initialWeightData = [
  { date: "Dec 17", weight: 72.5 },
  { date: "Dec 18", weight: 72.4 },
  { date: "Dec 19", weight: 72.2 },
  { date: "Dec 20", weight: 72.0 },
];

const initialProgressData = {
  daily: [
    { name: "Mon", value: 70 },
    { name: "Tue", value: 90 },
    { name: "Wed", value: 75 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 65 },
    { name: "Sun", value: 40 },
  ],
  weekly: [
    { name: "Week 1", value: 450 },
    { name: "Week 2", value: 490 },
    { name: "Week 3", value: 420 },
  ],
  monthly: [
    { name: "Jan", value: 1800 },
    { name: "Feb", value: 1900 },
    { name: "Mar", value: 2100 },
  ],
};

const Progress = () => {
  const [weightData, setWeightData] = useState(initialWeightData);
  const [newWeight, setNewWeight] = useState("");
  const [activeTab, setActiveTab] = useState("Workout");
  const [activePeriod, setActivePeriod] = useState("daily");

  const handleLogWeight = () => {
    if (newWeight) {
      const today = new Date().toDateString().slice(4, 10);
      const updated = [...weightData, { date: today, weight: parseFloat(newWeight) }];
      setWeightData(updated);
      setNewWeight("");
    }
  };

  return (
    <div className="progress-container">
      <h2>Progress</h2>

      <div className="weight-chart-section">
        <h3>Weight Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#007bff" />
          </LineChart>
        </ResponsiveContainer>

        <div className="weight-input-row">
          <input
            type="number"
            placeholder="Log Today’s Weight (kg)"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
          />
          <button onClick={handleLogWeight}>Log Weight</button>
        </div>
      </div>

      <div className="progress-tracking">
        <h3>Progress Tracking</h3>

        <div className="tabs">
          {["Workout", "Nutrition", "Steps"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="period-tabs">
          {["daily", "weekly", "monthly"].map((period) => (
            <button
              key={period}
              className={activePeriod === period ? "active" : ""}
              onClick={() => setActivePeriod(period)}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={initialProgressData[activePeriod]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00c49f" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Progress;
