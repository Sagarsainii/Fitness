import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import "./Styles/LogActivity.css"

const LogActivity = () => {
  const [activeTab, setActiveTab] = useState("workout");

  const [activities, setActivities] = useState([]);
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [distance, setDistance] = useState("");

  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [mealCalories, setMealCalories] = useState("");

  const [waterLogs, setWaterLogs] = useState([]);
  const [waterAmount, setWaterAmount] = useState("");

  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [stepsWalked, setStepsWalked] = useState(0);
  const [workoutsDone, setWorkoutsDone] = useState(0);

  const handleLogWorkout = () => {
    if (!workoutType || !duration || !calories) {
      alert("Please complete required document form");
      return;
    }

    const newActivity = {
      type: workoutType,
      duration: Number(duration),
      calories: Number(calories),
      distance: Number(distance),
      date: new Date().toLocaleDateString(),
    };

    setActivities([...activities, newActivity]);
    setCaloriesBurned(prev => prev + newActivity.calories);
    setStepsWalked(prev => prev + Math.floor(newActivity.distance * 1300));
    setWorkoutsDone(prev => prev + 1);

    setWorkoutType("");
    setDuration("");
    setCalories("");
    setDistance("");
  };

  const handleLogMeal = () => {
    if (!mealName || !mealCalories) {
      alert("Fill up on food and calories");
      return;
    }

    const newMeal = {
      name: mealName,
      calories: Number(mealCalories),
      date: new Date().toLocaleDateString(),
    };

    setMeals([...meals, newMeal]);
    setMealName("");
    setMealCalories("");
  };

  const handleLogWater = () => {
    if (!waterAmount) {
      alert("Fill amount of water");
      return;
    }

    const newWater = {
      amount: Number(waterAmount),
      date: new Date().toLocaleDateString(),
    };

    setWaterLogs([...waterLogs, newWater]);
    setWaterAmount("");
  };

  const graphData = activities.reduce((acc, activity) => {
    const date = activity.date;
    const existing = acc.find(item => item.date === date);
    if (existing) {
      existing.calories += activity.calories;
    } else {
      acc.push({ date, calories: activity.calories });
    }
    return acc;
  }, []);

  const totalWater = waterLogs.reduce((acc, log) => acc + log.amount, 0);

  return (
    <div className="log-activity-wrapper">
      <h2>Log Activity</h2>
      <p>Today is a beautiful day anyway, consistently believing self.</p>

      <div className="activity-cards">
        <div className="card">Calories Burned<br /><strong>{caloriesBurned}</strong></div>
        <div className="card">Steps Walked<br /><strong>{stepsWalked}</strong></div>
        <div className="card">Workouts Done<br /><strong>{workoutsDone}</strong></div>
        <div className="card">Water Intake<br /><strong>{totalWater} ml</strong></div>
      </div>

      <div className="log-form">
        
        <div className="tabs">
          <button className={activeTab === "workout" ? "active-tab" : ""} onClick={() => setActiveTab("workout")}>WORKOUT</button>
          <button className={activeTab === "meal" ? "active-tab" : ""} onClick={() => setActiveTab("meal")}>MEAL</button>
          <button className={activeTab === "water" ? "active-tab" : ""} onClick={() => setActiveTab("water")}>WATER INTAKE</button>
        </div>

        {activeTab === "workout" && (
          <>
            <div className="form-group">
              <label>Workout Type</label>
              <select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
                <option value="">Select workout type</option>
                <option value="Running">Running</option>
                <option value="Cycling">Cycling</option>
                <option value="Yoga">Yoga</option>
              </select>
            </div>

            <div className="form-row">
              <div>
                <label>Duration (minutes)</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </div>
              <div>
                <label>Calories</label>
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Distance (km)</label>
              <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
            </div>

            <button className="log-button" onClick={handleLogWorkout}>LOG WORKOUT</button>
          </>
        )}

        {activeTab === "meal" && (
          <>
            <div className="form-group">
              <label>Meal Name</label>
              <input type="text" value={mealName} onChange={(e) => setMealName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Calories</label>
              <input type="number" value={mealCalories} onChange={(e) => setMealCalories(e.target.value)} />
            </div>
            <button className="log-button" onClick={handleLogMeal}>LOG MEAL</button>
          </>
        )}

        {activeTab === "water" && (
          <>
            <div className="form-group">
              <label>Water Intake (ml)</label>
              <input type="number" value={waterAmount} onChange={(e) => setWaterAmount(e.target.value)} />
            </div>
            <button className="log-button" onClick={handleLogWater}>LOG WATER</button>
          </>
        )}
      </div>
      
       <div className="graph-section">
        <h3>Workout Progress</h3>
        <LineChart width={500} height={250} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="calories" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default LogActivity;
