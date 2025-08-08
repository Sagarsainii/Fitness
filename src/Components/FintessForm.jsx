import React, { useState, useEffect } from 'react';

const FitnessForm = () => {
  const [goal, setGoal] = useState({
    weight: '',
    running: '',
    calories: '',
  });

  // Load data from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('fitnessData'));
    if (saved) setGoal(saved);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('fitnessData', JSON.stringify(goal));
  }, [goal]);

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data saved locally!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="weight"
        value={goal.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <input
        type="text"
        name="running"
        value={goal.running}
        onChange={handleChange}
        placeholder="Running (km)"
      />
      <input
        type="text"
        name="calories"
        value={goal.calories}
        onChange={handleChange}
        placeholder="Calories"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default FitnessForm;
