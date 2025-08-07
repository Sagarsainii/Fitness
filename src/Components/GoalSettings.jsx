import React, { useState } from "react";
import "./Styles/GoalSettings.css"

const GoalSettings = () => {
  const [goal, setGoal] = useState({
    weight: "",
    name: "",
    target: "",
    stepTarget: "",
    workoutFreq: "",
    calorieTarget: ""
  });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Goal Settings:", goal);
    alert("Goal settings saved successfully!");
  };

  const exportCSV = () => {
    const csvData = `Weight,Name,Target,Step Target,Workout Freq,Calories\n${goal.weight},${goal.name},${goal.target},${goal.stepTarget},${goal.workoutFreq},${goal.calorieTarget}`;
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "goal_settings.csv";
    a.click();
  };

  const exportPDF = () => {
    window.print();
  };

  return (
    <div className="goal-settings-container">
      <div className="goal-settings-header">
        <h2>Goal Settings</h2>
        <div className="export-buttons">
          <button onClick={exportCSV}>CSV</button>
          <button onClick={exportPDF}>PDF</button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="goal-settings-form">
        <div className="input-group">
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={goal.weight}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Goal name"
            value={goal.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="target"
            placeholder="Target value"
            value={goal.target}
            onChange={handleChange}
          />
        </div>

        <label>Daily Step Target</label>
        <select name="stepTarget" value={goal.stepTarget} onChange={handleChange}>
          <option value="">Select daily step target</option>
          <option value="5000">5000 steps</option>
          <option value="8000">8000 steps</option>
          <option value="10000">10000 steps</option>
        </select>

        <label>Workout Frequency</label>
        <select name="workoutFreq" value={goal.workoutFreq} onChange={handleChange}>
          <option value="">Select workout frequency per week</option>
          <option value="3">3 days/week</option>
          <option value="5">5 days/week</option>
          <option value="7">Daily</option>
        </select>

        <label>Calorie Target</label>
        <input
          type="number"
          name="calorieTarget"
          placeholder="e.g. 2000"
          value={goal.calorieTarget}
          onChange={handleChange}
        />

        <button type="submit" className="save-btn">Save Goal Settings</button>
      </form>
    </div>
  );
};

export default GoalSettings;
